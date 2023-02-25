import styled from "styled-components";
import { useState, useEffect } from "react";
import { ALL_ORDER } from "../../crud/order_crud";
import ORDER_DETAIL from "../components/ADMIN_ALL_ORDER_DETAIL";
import { CHOOSE_SORT, LINK_ACTIVE } from "../../utils/functions";

function ADMIN_ALL_ORDER() {
    let ACTIVE = LINK_ACTIVE()
    const [ORDER, SET_ORDER] = useState([])
    const [ORDER_CHOOSE, SET_ORDER_CHOOSE] = useState([])

    useEffect(() => {
        
        let IS_MOUNTED = true;
        
        if (IS_MOUNTED) ALL_ORDER(SET_ORDER, SET_ORDER_CHOOSE, CHOOSE_SORT)
        
        return () => IS_MOUNTED = false

    }, [])

    return (
        <CONTAINER>
            <div className="change__header">
                <div className="header__title">
                    <h2>All The Orders</h2>
                </div>
                <div className="header-link">
                    <p
                        className={`header-link__title ${ACTIVE === 0 ? "active" : ""}`}
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "today"))}
                    >Today</p>
                    <p
                        className={`header-link__title ${ACTIVE === 1 ? "active" : ""}`}
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "month"))}
                    >Month</p>
                    <p
                        className={`header-link__title ${ACTIVE === 2 ? "active" : ""}`}
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "year"))}
                    >Year</p>
                    <p
                        className={`header-link__title ${ACTIVE === 3 ? "active" : ""}`}
                        onClick={() => SET_ORDER_CHOOSE(CHOOSE_SORT(ORDER, "all"))}
                    >All</p>
                    <p className="header-link__count">Orders Total: {ORDER_CHOOSE?.length}</p>
                </div>
            </div>

            <div className="change-mains">
                {
                    ORDER_CHOOSE?.map((data) => (
                        <ORDER_DETAIL key={Math.random()} data={data} />
                    ))
                }
            </div>
        </CONTAINER>
    )
}

export default ADMIN_ALL_ORDER
const CONTAINER = styled.div``