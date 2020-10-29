import React, {useRef} from "react";
import InputField from "../inputField/inputField";

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
    const onPassChange = () => {
                   setter({...info, pass: passRef.current.value});
                   validateLength(passRef.current.value);
    }

    const onConfirmError = () => {
        if(confirmRef.current) {
            if (!confirmRef.current.value && errors.confirm) return "Укажите пароль";
            else if (confirmRef.current.value && errors.confirm) return "Пароли не совпадают";
            else return "";
        }
    }
    const onConfirmChange = () => {
        setter({...info, confirm: confirmRef.current.value});
        isSame(passRef.current.value, confirmRef.current.value);
    }

    return (
        <div className="user-form__block">
            <div className="user-form__field">
                <label className="user-form__label" htmlFor="password">Пароль</label>
                <InputField
                    type="password"
                    inputId="password"
                    inputRef={passRef}
                    error={errors.pass}
                    showError={onPassError}
                    onChange={onPassChange}/>
                <span className="user-form__info">Ваш новый пароль должен содержать не менее 5 символов.</span>
            </div>
            <div className="user-form__field">
                <label className="user-form__label" htmlFor="confirm">Пароль еще раз</label>
                <InputField
                    inputId="confirm"
                    error={errors.confirm}
                    showError={onConfirmError}
                    inputRef={confirmRef}
                    onChange={onConfirmChange}
                    type="password"/>
                <span className="user-form__info">Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки.</span>
            </div>
        </div>
    )
};

export default PassBlock;