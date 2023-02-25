import styled from "styled-components"

function ADMIN_ALL_ORDER_DETAIL({ data }) {
    
    return (
        <COMPONENT className="ORDER__COMPONENT">
            <div className="change__content">
                <div className="content__date">
                    <span>{(data.create_date).substring(0, 10)}</span>
                </div>

                <div className="content__user">
                    <div className="user__information">
                        <p>{ data.user.firstname }</p>
                        <p>{ data.user.lastname }</p>
                        <p>{ data.user.username }</p>
                        <p>{ data.user.job }</p>
                    </div>
                    <div className="user__image">
                        <img src={data.user.image != "" ? data.user.image : "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"} alt="" />
                    </div>
                </div>

                <div className="order__food">
                    <div className="food__image">
                        <img src={data.food.image} alt="" />
                    </div>
                    <div className="food__title">
                        <p>{data.food.name}</p>
                    </div>
                </div>
            </div>
        </COMPONENT>
    )
}

export default ADMIN_ALL_ORDER_DETAIL

const COMPONENT = styled.div`
    .change__content {
        left: 50%;
        width: 220px;
        height: 220px;
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

    .content__user, .order__food {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .user__information p {
        color: #FFFFFF;
        margin-top: 8px;
        font-size: 14px;
        font-weight: 500;
        line-height: 130%;
        font-style: normal;
        font-family: 'Barlow';
    }
    
    .user__image img, .food__image img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .order__food {
        margin-top: 18px;
        align-items: center;
    }

    .food__title p {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 500;
        margin-left: 8px;
        text-align: right;
        text-align: center;
        font-style: normal;
        margin-bottom: 8px;
        font-family: 'Barlow';
    }
`