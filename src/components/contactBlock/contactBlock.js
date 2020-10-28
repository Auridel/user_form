import React, {useState, useRef} from "react";

import "./contactBlock.scss";

const ContactBlock = ({info, setter}) => {
    const [error, setError] = useState(false);
    const emailRef = useRef();

    const checkEmail = (value) => {
        const reg = new RegExp(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/gi);
        const res = reg.test(value)
        if(!res) setError(true);
        else setError(false);
    };
    const onEmailChange = () => {
        if(emailRef.current){
            console.log(!emailRef.current.value && error)
            if(!emailRef.current.value && error) return "Укажите E-mail";
            else if(error) return "Неверный E-mail";
            else return "";
        }
    }

    return (
        <div className="user-form__block">
            <div className="user-form__field">
                <label className="user-form__label" htmlFor="email">Электронная почта</label>
                <div className="form-input__wrapper">
                    <input
                        onChange={() => {
                            checkEmail(emailRef.current.value)
                            setter({...info, email: emailRef.current.value})
                        }}
                        ref={emailRef}
                        type="email"
                        className="form-input__input" id="email"/>
                    <span className="form-input__alert">{onEmailChange()}</span>
                </div>
                <span className="user-form__info">Можно изменить адрес, указанный при регистрации.</span>
            </div>
            <div className="user-form__field">
                <span className="user-form__label" >Электронная почта</span>
                <div className="form-input__wrapper">
                    <input type="checkbox" className="form-input__input" hidden id="subscribe" defaultChecked/>
                    <label tabIndex="0" htmlFor="subscribe" className="user-form__subscribe">принимать актуальную информацию на емейл</label>
                </div>
            </div>
            <div className="user-form__submit">
                <button className="user-form__submit-btn">Изменить</button>
                <span className="user-form__info">последние изменения 15 мая 2012 в 14:55:17</span>
            </div>
        </div>
    )
};

export default ContactBlock;