import styled from "styled-components";
import { useState, useEffect } from "react";
import { ALL_MESSAGES } from "../../crud/message_crud";
import { CHOOSE_SORT, LINK_ACTIVE } from "../../utils/functions";
import MESSAGE_DETAIL from "../components/ADMIN_ALL_MESSAGE_DETAIL";

function ADMIN_ALL_MESSAGE() {
    let CHOOSE_DATE = ""
    let ACTIVE = LINK_ACTIVE()
    const [MESSAGES, SET_MESSAGE] = useState([])
    const [MESSAGE_CHOOSE, SET_MESSAGE_CHOOSE] = useState([])

    switch (ACTIVE) {
        case 0:
            CHOOSE_DATE = "today"
            break
        case 1:
            CHOOSE_DATE = "month"
            break
        case 2:
            CHOOSE_DATE = "year"
            break
        case 3:
            CHOOSE_DATE = "all"
            break
        default: ACTIVE = 0; CHOOSE_DATE = "today"
    }

    useEffect(() => {

        let IS_MOUNTED = true;
        
        if (IS_MOUNTED) ALL_MESSAGES(SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE)
        
        return () => IS_MOUNTED = false
        
    }, [])

    return (
        <CONTAINER>
            <div className="change__header">
                <div className="header__title">
                    <h2>All The Messages</h2>
                </div>
                <div className="header-link ">
                    <p
                        className={`header-link__title ${ACTIVE === 0 ? "active" : ""}`}
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGES, "today"))}
                    >Today</p>
                    <p
                        className={`header-link__title ${ACTIVE === 1 ? "active" : ""}`}
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGES, "month"))}
                    >Month</p>
                    <p
                        className={`header-link__title ${ACTIVE === 2 ? "active" : ""}`}
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGES, "year"))}
                    >Year</p>
                    <p
                        className={`header-link__title ${ACTIVE === 3 ? "active" : ""}`}
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGES, "all"))}
                    >All</p>
                    <p className="header-link__count">Orders Total: {MESSAGE_CHOOSE?.length}</p>
                </div>
            </div>

            <div className="change-mains">
                {
                    MESSAGE_CHOOSE?.map((data) => (
                        <MESSAGE_DETAIL
                            data={data}
                            key={Math.random()}
                            SET_MESSAGE={SET_MESSAGE}
                            CHOOSE_SORT={CHOOSE_SORT}
                            CHOOSE_DATE={CHOOSE_DATE}
                            SET_MESSAGE_CHOOSE={SET_MESSAGE_CHOOSE}
                        />
                    ))
                }
            </div>
        </CONTAINER>
    )
}

export default ADMIN_ALL_MESSAGE
const CONTAINER = styled.div``