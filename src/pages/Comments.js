import styled from "styled-components";
import { useEffect, useState } from "react";
import { ALL_USER_MESSAGE } from "../crud/message_crud";
import { CHOOSE_SORT, LINK_ACTIVE } from "../utils/functions";
import COMMENT_DETAIL from "../components/change-components/message_detail";

function COMMENT() {
    let CHOOSE_DATE = ""
    let ACTIVE = LINK_ACTIVE()
    const [MESSAGE, SET_MESSAGE] = useState([])
    const [MESSAGE_CHOOSE, SET_MESSAGE_CHOOSE] = useState()

    switch (ACTIVE) {
        case 0:
            CHOOSE_DATE = "all"
            break
        case 1:
            CHOOSE_DATE = "today"
            break
        case 2:
            CHOOSE_DATE = "month"
            break
        case 3:
            CHOOSE_DATE = "year"
            break
        default: ACTIVE = 0; CHOOSE_DATE = "all"
    }

    useEffect(() => {
        ALL_USER_MESSAGE(SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE)
    }, [CHOOSE_DATE])

    return (
        <CONTAINER>
            <div className="change__header">
                <div className="header__title">
                    <h2>My Comment</h2>
                </div>
                <div className="header-link ">
                    <p
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGE, "all"))}
                        className={`header-link__title ${ACTIVE === 0 ? "active" : ""}`}
                    >All</p>
                    <p
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGE, "today"))}
                        className={`header-link__title ${ACTIVE === 1 ? "active" : ""}`}
                    >Today</p>
                    <p
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGE, "month"))}
                        className={`header-link__title ${ACTIVE === 2 ? "active" : ""}`}
                    >Month</p>
                    <p
                        onClick={() => SET_MESSAGE_CHOOSE(CHOOSE_SORT(MESSAGE, "year"))}
                        className={`header-link__title ${ACTIVE === 3 ? "active" : ""}`}
                    >Year</p>
                    <p className="header-link__count">Orders Total: {MESSAGE_CHOOSE?.length}</p>
                </div>
            </div>

            <div className="change-mains">
                {
                    MESSAGE_CHOOSE?.map((data) => (
                        <COMMENT_DETAIL
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

export default COMMENT
const CONTAINER = styled.div``