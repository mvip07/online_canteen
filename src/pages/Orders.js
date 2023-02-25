import styled from "styled-components";
import { useState, useEffect } from "react";
import { ALL_USER_ORDER } from "../crud/order_crud";
import { CHOOSE_SORT, LINK_ACTIVE } from "../utils/functions";
import ORDER_DETAIL from "../components/change-components/order_detail";

function ORDER() {

    let ACTIVE = LINK_ACTIVE()
    const [ORDER, SET_ORDER] = useState([])
    const [ORDER_CHOOSE, SET_ORDER_CHOOSE] = useState([])

    useEffect(() => {
        ALL_USER_ORDER(SET_ORDER, SET_ORDER_CHOOSE, CHOOSE_SORT)
    }, [])

    return (
        <CONTAINER>
            <div className="change__header">
                <div className="header__title">
                    <h2>My Orders</h2>
                </div>
                <div className="header-link">
                    <p
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "all"))}
                        className={`header-link__title ${ACTIVE === 0 ? "active" : ""}`}
                    >All</p>
                    <p
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "today"))}
                        className={`header-link__title ${ACTIVE === 1 ? "active" : ""}`}
                    >Today</p>
                    <p
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "month"))}
                        className={`header-link__title ${ACTIVE === 2 ? "active" : ""}`}
                    >Month</p>
                    <p
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "year"))}
                        className={`header-link__title ${ACTIVE === 3 ? "active" : ""}`}
                    >Year</p>
                    <p className="header-link__count">Orders Total: {ORDER_CHOOSE?.length}</p>
                </div>
            </div>

            <div className="change-mains">
                {
                    ORDER_CHOOSE.map((data) => (
                        <ORDER_DETAIL key={Math.random()} data={data} />
                    ))
                }
            </div>
        </CONTAINER>
    )
}

export default ORDER
const CONTAINER = styled.div``