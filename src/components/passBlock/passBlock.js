import React, {useRef} from "react";

import "./passBlock.scss";

const PassBlock = ({info, setter, errors, setErrors}) => {
    const passRef = useRef();
    const confirmRef = useRef();

    const validateLength = (value) => {
        if(value.trim().length < 5) setErrors({...errors, pass: true});
        else setErrors({...errors, pass: false});
    }
    const isSame = (pass, confirm) => {
        if(pass !== confirm) setErrors({...errors, confirm: true});
        else setErrors({...errors, confirm: false});
    }
    const onPassError = () => {
        if(passRef.current) {
            if (!passRef.current.value && errors.pass) return "Укажите пароль";
            else if (passRef.current.value && errors.pass) return "Используйте не менее 5 символов";
            else return "";
        }
    }
    const onConfirmError = () => {
        if(confirmRef.current) {
            if (!confirmRef.current.value && errors.confirm) return "Укажите пароль";
            else if (confirmRef.current.value && errors.confirm) return "Пароли не совпадают";
            else return "";
        }
    }

    return (
        <div className="user-form__block">
            <div className="user-form__field">
                <label className="user-form__label" htmlFor="password">Пароль</label>
                <div className="form-input__wrapper">
                    <input
                        onInput={() => {
                            setter({...info, pass: passRef.current.value});
                            validateLength(passRef.current.value);
                        }}
                        ref={passRef}
                        type="password"
                        className={`form-input__input${errors.pass? " alert" : ""}`} id="password"/>
                    <span className="form-input__alert">{onPassError()}</span>
                </div>
                <span className="user-form__info">Ваш новый пароль должен содержать не менее 5 символов.</span>
            </div>
            <div className="user-form__field">
                <label className="user-form__label" htmlFor="confirm">Пароль еще раз</label>
                <div className="form-input__wrapper">
                    <input
                        onInput={() => {
                            setter({...info, confirm: confirmRef.current.value})
                            isSame(passRef.current.value, confirmRef.current.value);
                        }}
                        ref={confirmRef}
                        type="password"
                        className={`form-input__input${errors.confirm? " alert" : ""}`} id="confirm"/>
                    <span className="form-input__alert">{onConfirmError()}</span>
                </div>
                <span className="user-form__info">Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки.</span>
            </div>
        </div>
    )
};

export default PassBlock;