import React, {useState} from "react";
import UserStatus from "../userStatus/userStatus";
import CitySelect from "../citySelect/citySelect";
import PassBlock from "../passBlock/passBlock";
import ContactBlock from "../contactBlock/contactBlock";

import "./app.scss";

const App = () => {
    const [info, setInfo] = useState({
        status: "Прежде чем действовать, надо понять", email: "", pass: "", confirm: "", city: "Красноярск", subscribe: true
    })
    const [errors, setErrors] = useState({
        email: false, pass: false, confirm: false
    })

    const sendData = () => {
        const keys = Object.keys(errors);
        const empty = [];
        let c = 0;
        keys.forEach(key => {
            if(errors[key]) c++;
            if(!info[key].trim()) empty.push(key);
        });
        if(c>0) return false
        if(empty.length) {
            empty.forEach(elem => {
                setErrors((prev) => {
                    return {
                        ...prev, [elem]: true
                    }})
            });
            return false;
        }
        return true;
    }


    return (
        <section className="user-form">
            <div className="user-form__block">
                <UserStatus userName="Человек №3596941" userStatus={info.status} setter={setInfo}/>
                <CitySelect info={info} setter={setInfo}/>
            </div>
            <PassBlock info={info} setter={setInfo} errors={errors} setErrors={setErrors}/>
            <ContactBlock info={info} setter={setInfo} errors={errors} setErrors={setErrors} sendData={sendData}/>
        </section>
    )
};

export default App;