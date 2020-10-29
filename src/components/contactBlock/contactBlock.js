import React, {useRef, useState} from "react";
import InputField from "../inputField/inputField";

import "./contactBlock.scss";

const ContactBlock = ({info, setter, errors, setErrors, sendData}) => {
    const emailRef = useRef();
    const [load, setLoad] = useState({loading: false, success: false, error: false});

    const checkEmail = (value) => {
        const reg = new RegExp(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/gi);
        const res = reg.test(value)
        if(!res) setErrors({...errors, email: true});
        else setErrors({...errors, email: false});
    };
    const onEmailError = () => {
        if(emailRef.current){
            if(!emailRef.current.value && errors.email) return "Укажите E-mail";
            else if(errors.email) return "Неверный E-mail";
            else return "";
        }
    }
    const onEmailChange = () => {
        checkEmail(emailRef.current.value)
        setter({...info, email: emailRef.current.value})
    }


    const showLoader = () => {
        if(load.loading) return <div className="loader load"/>;
        else if(!load.loading && load.success) return <div className="loader ok"/>;
        else if(!load.loading && load.error) return <div className="loader fail"/>;
        else return "";
    }

    return (
        <div className="user-form__block">
            <div className="user-form__field">
                <label className="user-form__label" htmlFor="email">Электронная почта</label>
                <InputField
                    type="email"
                    inputId="email"
                    inputRef={emailRef}
                    error={errors.email}
                    showError={onEmailError}
                    onChange={onEmailChange}/>
                <span className="user-form__info">Можно изменить адрес, указанный при регистрации.</span>
            </div>
            <div className="user-form__field">
                <span className="user-form__label" >Электронная почта</span>
                <div className="form-input__wrapper">
                    <span
                        onClick={() => setter({...info, subscribe: !info.subscribe})}
                        tabIndex="0"
                        className={`user-form__subscribe${info.subscribe? " checked": ""}`}
                    >принимать актуальную информацию на емейл</span>
                </div>
            </div>
            <div className="user-form__submit">
                {showLoader()}
                <button
                    onClick={() => {
                        setLoad({...load, loading: true});
                        if (sendData()) setLoad({loading: false, success: true, error: false});
                        else setLoad({loading: false, success: false, error: true});
                    }}
                    className="user-form__submit-btn">Изменить</button>
                <span className="user-form__info">последние изменения 15 мая 2012 в 14:55:17</span>
            </div>
        </div>
    )
};

export default ContactBlock;