import React from "react";

import "./app.scss";

const App = ({userName="Человек №3596941"}) => {
    return (
        <section className="user-form">
            <div className="user-form__block">
                <div className="hello__wrapper">
                    <span className="hello__text">Здравствуйте, <span className="hello__user">{userName}
                            <div className="hello__status">
                                <span className="hello__status-text">Прежде чем действовать, надо понять</span>
                            </div>
                        </span>
                    </span>
                    <button className="hello__change-btn">Сменить статус</button>
                </div>
                <div className="user-form__field">
                    <label className="user-form__label" htmlFor="city">Ваш город</label>
                    <div className="form-input__wrapper">
                        <input type="text" className="form-input__input" id="city"/>
                        <button className="form-input__expand-btn"/>
                    </div>
                </div>
            </div>
            <div className="user-form__block">
                <div className="user-form__field">
                    <label className="user-form__label" htmlFor="password">Пароль</label>
                    <div className="form-input__wrapper">
                        <input type="password" className="form-input__input" id="password"/>
                        <span className="form-input__alert"> </span>
                    </div>
                    <span className="user-form__info">Ваш новый пароль должен содержать не менее 5 символов.</span>
                </div>
                <div className="user-form__field">
                    <label className="user-form__label" htmlFor="confirm">Пароль еще раз</label>
                    <div className="form-input__wrapper">
                        <input type="password" className="form-input__input" id="confirm"/>
                        <span className="form-input__alert"> </span>
                    </div>
                    <span className="user-form__info">Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки.</span>
                </div>
            </div>
            <div className="user-form__block">
                <div className="user-form__field">
                    <label className="user-form__label" htmlFor="email">Электронная почта</label>
                    <div className="form-input__wrapper">
                        <input type="email" className="form-input__input" id="email"/>
                        <span className="form-input__alert"> </span>
                    </div>
                    <span className="user-form__info">Можно изменить адрес, указанный при регистрации.</span>
                </div>
                <div className="user-form__field">
                    <span className="user-form__label" >Электронная почта</span>
                    <div className="form-input__wrapper">
                        <input type="checkbox" className="form-input__input" hidden id="subscribe" defaultChecked/>
                        <label htmlFor="subscribe" className="user-form__subscribe">принимать актуальную информацию на емейл</label>
                    </div>
                </div>
                <div className="user-form__submit">
                    <button className="user-form__submit-btn">Изменить</button>
                    <span className="user-form__info">последние изменения 15 мая 2012 в 14:55:17</span>
                </div>
            </div>
        </section>
    )
};

export default App;