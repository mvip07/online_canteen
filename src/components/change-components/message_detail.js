import styled from "styled-components";
import { DELETE_MESSAGE } from "../../crud/message_crud";

function ORDER_DETAIL({ data, SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE }) {
    const USER_MESSAGE = "usermessages"
  
    return (
        <COMPONENT>
            <div className="change__content">
                <div className="content__date">
                    <span>{ data?.create_date.substring(0, 10) }</span>
                </div>
                <div className="content__decription">
                    <p>{data?.message}</p>
                </div>
                <div className="content__btn">
                    <button onClick={() => DELETE_MESSAGE(data?._id, USER_MESSAGE, SET_MESSAGE, SET_MESSAGE_CHOOSE, CHOOSE_SORT, CHOOSE_DATE)}>Delete</button>
                    <button >Edit</button>
                </div>
            </div>
        </COMPONENT>
    )
}

export default ORDER_DETAIL

const COMPONENT = styled.div`
    position: relative;

     .change__content {
        left: 50%;
        width: 220px;
        height: 300px;
        padding: 10px;
        position: relative;
        background: #1F1D2B;
        border-radius: 10px;
        border: 1px solid #393C49;
        transform: translate(-50%);
    }

    .content__date span {
        color: #ABBBC2;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Barlow';
    }

    .content__decription p {
        margin: 8px 0;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        font-style: normal;
        font-family: 'Barlow';
    }

    .content__btn {
        bottom: 0;
        left: 1px;
        width: 100%;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;

        button {
            width: 50%;
        }
    }

    .content__btn button:first-child {
        border-radius: 0px 0px 0px 10px;
    }

    .content__btn button:last-child {
        border-radius: 0px 0px 10px 0px;
    }
`