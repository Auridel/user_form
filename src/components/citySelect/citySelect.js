import React, {useState, useEffect} from "react";
import data from "../../cities.json";
import CityList from "../cityList/cityList";

import "./citySelect.scss";

const CitySelect = ({info, setter}) => {
    const [opened, setOpened] = useState(false);
    const closeHandler = (e) => {
        if(opened && e.key === "Escape") setOpened(false);
    }

    useEffect(() => {
        document.addEventListener("keydown", closeHandler);
        return () => {
            document.removeEventListener("keydown", closeHandler);
        }
    })

    const onChoice = (value) => {
        setter({...info, city: value});
    }

    const closeList = () => {
        setOpened(false);
    }

    const sortList = (list) => {
        list = data.filter(item => item.population > 50000).map(el => el.city).sort();
        const idx = list.findIndex(item => item === "Красноярск");
        if(idx > -1) {
            const removed = list.splice(idx, 1);
            list = [removed[0], ...list];
        }
        return list;
    }

    return (
        <div className="user-form__field">
            <label className="user-form__label" htmlFor="city">Ваш город</label>
            <div className="form-input__wrapper">
                <button
                    onClick={() => setOpened(!opened)}
                    className="city-input" id="city">{info.city}</button>
                <button
                    onClick={() => setOpened(!opened)}
                    className="city-input__expand-btn"/>
                {opened? <CityList
                    onChoice={onChoice}
                    trigger={closeList}
                    list={sortList(data)}/> : ""}
            </div>
        </div>
    )
};

export default CitySelect;