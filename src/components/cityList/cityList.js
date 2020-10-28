import React, {useEffect, useRef} from 'react';

import "./cityList.scss";

const CityList = ({list, onChoice, trigger}) => {
    const listNode = useRef();
    const clickHandler = (e) => {
        if(!listNode.current || !listNode.current.contains(e.target)) trigger();
    }

    useEffect(() => {
        document.addEventListener("click", clickHandler);
        return () => {
            document.removeEventListener("click", clickHandler);
        }
    })

    return (
        <ul
            ref={listNode}
            className="city-list">
            {list.map((item, i) =>
                <li
                    tabIndex="0"
                    onClick={() => {
                        onChoice(item);
                        trigger();
                    }}
                    key={i}
                    className="city-list__item">{item}</li>
            )}
        </ul>
    );
}

export default CityList;