import React, {useState, useRef} from "react";

import "./userStatus.scss";

const UserStatus = ({userName, userStatus}) => {
    const [editable, setEditable] = useState(false);
    const [status, setStatus] = useState(userStatus);
    const inputRef = useRef();

    return (
        <div className="hello__wrapper">
                    <span className="hello__text">Здравствуйте, <span className="hello__user">{userName}
                        <div className="hello__status">
                            {editable?
                                <div>
                                    <input
                                        autoFocus
                                        ref={inputRef}
                                        className="hello__input" type="text" defaultValue={status}/>
                                    <button
                                        onClick={() => {
                                            setStatus(inputRef.current.value);
                                            setEditable(false);
                                        }}
                                        className="hello__confirm">Ок</button>
                                </div>
                                :
                                <span className="hello__status-text">{status}</span>
                            }
                            </div>
                        </span>
                    </span>
            <button
                onClick={() => setEditable(!editable)}
                className="hello__change-btn">Сменить статус</button>
        </div>
    )
};

export default UserStatus;