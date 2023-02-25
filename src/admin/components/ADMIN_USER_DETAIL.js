import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { USER_BLOCK, USER_UNBLOCK } from "../../crud/user_crud";

function ADMIN_USER_DETAIL({ data, SET_USERS }) {
    const NAVIGATE = useNavigate()
    return (
        <COMPONENT onDoubleClick={() => NAVIGATE(`/admin/user/selected/${data._id}`)}>
            <div className="change__content">
                <div className="content__image">
                    <img src={data.image != "" ? data.image : "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"} />
                </div>

                <div className="user__information">
                    <span>First Name:</span>
                    <p>{data.firstname}</p>
                </div>
                <div className="user__information">
                    <span>Last Name:</span>
                    <p>{data.lastname}</p>
                </div>
                <div className="user__information">
                    <span>Username:</span>
                    <p>{data.username}</p>
                </div>
                <div className="user__information">
                    <span>Password:</span>
                    <p>{data.password}</p>
                </div>
                <div className="user__information">
                    <span>Rol:</span>
                    <p>{data.rol}</p>
                </div>

                <div className="user__btn">
                    {
                        data.block == false ? <button onClick={() => USER_BLOCK(data._id, SET_USERS)}>Block</button> : <button id="UnBlock" onClick={() => USER_UNBLOCK(data._id, SET_USERS)}>UnBlock</button>
                    }
                </div>
            </div>
        </COMPONENT>
    )
}

export default ADMIN_USER_DETAIL
const COMPONENT = styled.div`
    .change__content {
        width: 100%;
        padding: 10px;
        height: 300px;
        margin-top: 10px;
        position: relative;
        border-radius: 8px;
        background: #252836;
        align-items: center;
    }

    .content__image img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .user__information span {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        font-family: 'Barlow';
    }

    .user__information p {
        color: #ABBBC2;
        font-size: 15px;
        font-weight: 400;
        margin-left: 10px;
        line-height: 140%;
        font-style: normal;
        font-family: 'Barlow';
    }

    .user__btn {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 45px;
        position: absolute;
    }

    .user__btn button {
        width: 100%;
        height: 100%;
    }

    /* @media (max-width: 1200px) {
        .change__content {
            height: 120px;
            display: block;
        }

        .content__image img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .user__information {
            margin: 0 8px;
            display: block;
        }

        .user__btn button {
            height: 40%;
            width: 100%;
        }
    } */
`