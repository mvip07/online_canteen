import styled from "styled-components"

function ORDER_DETAIL({ data }) {
    
    return (
        <COMPONENT>
            <div className="change__content">
                <div className="content__date">
                    <span>{(data.create_date)?.substring(0, 10)}</span>
                </div>
                <div className="content__image">
                    <img src={data.food?.image} alt="" />
                </div>
                <div className="content__title">
                    <p>{data.food?.name}</p>
                </div>
                <div className="content__price">
                    <p>$ {data.food?.price}</p>
                </div>
            </div>
        </COMPONENT>
    )
}

export default ORDER_DETAIL

const COMPONENT = styled.div`
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

    .content__image img {
        position: relative;
        left: 50%;
        width: 132px;
        height: 132px;
        text-align: center;
        border-radius: 50%;
        margin: 10px 0 24px 0;
        transform: translate(-50%);
    }

    .content__title p {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        font-style: normal;
        margin-bottom: 8px;
        font-family: 'Barlow';
    }

    .content__price p {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        font-family: 'Barlow';
    }
`