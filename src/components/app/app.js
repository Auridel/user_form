import React, {useState} from "react";
import UserStatus from "../userStatus/userStatus";
import CitySelect from "../citySelect/citySelect";
import PassBlock from "../passBlock/passBlock";
import ContactBlock from "../contactBlock/contactBlock";

import "./app.scss";

const App = () => {
    const [info, setInfo] = useState({
        status: "Прежде чем действовать, надо понять", email: "", pass: "", confirm: "", city: "Красноярск", subscribe: ""
    })
    const [errors, setErrors] = useState({
        email: false, pass: false, confirm: false, city: false
    })

    return (
        <section className="user-form">
            <div className="user-form__block">
                <UserStatus userName="Человек №3596941" userStatus={info.status} setter={setInfo}/>
                <CitySelect info={info} setter={setInfo}/>
            </div>
            <PassBlock info={info} setter={setInfo} errors={errors} setErrors={setErrors}/>
            <ContactBlock info={info} setter={setInfo} errors={errors} setErrors={setErrors}/>
        </section>
    )
};

export default App;