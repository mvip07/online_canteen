import styled from "styled-components";
import { useEffect, useState } from "react";
import { USER_ALL } from "../../crud/user_crud";
import ADMIN_USER_DETAIL from "../components/ADMIN_USER_DETAIL";

function ADMIN_USER() {

    const [USERS, SET_USERS] = useState([])
    const [SEARCH, SET_SEARCH] = useState("")
    const [SELECT, SET_SELECT] = useState("Job")

    useEffect(() => {
        let IS_MOUNTED = true;
        
        if (IS_MOUNTED) USER_ALL(SET_USERS)

        return () => IS_MOUNTED = false

    }, [])

    return (
        <CONTAINER>
            <div className="change__header">
                <div className="header__title">
                    <h2>All The Users</h2>
                </div>
            </div>

            <div className="header__search">
                <div className="search__title">
                    <p>Search engine for you</p>
                </div>

                <div className="search__group">
                    <div className="search__input">
                        <input
                            type="search"
                            placeholder="Search"
                            onChange={({ target }) => SET_SEARCH(target.value)}
                        />
                    </div>
                    <div className="search__select">
                        <select
                            onChange={({ target }) => SET_SELECT(target.value)}>
                            <option defaultValue="job">Job</option>
                            <option defaultValue="username">Username</option>
                            <option defaultValue="lastname">Last Name</option>
                            <option defaultValue="firstname">First Name</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="change-main">
                {
                    USERS.filter(({ job, username, lastname, firstname }) => {
                        switch (SELECT) {
                            case "Job":
                                return job.toUpperCase().search(SEARCH.toUpperCase()) >= 0
                            case "Username":
                                return username.toUpperCase().search(SEARCH.toUpperCase()) >= 0
                            case "Last Name":
                                return lastname.toUpperCase().search(SEARCH.toUpperCase()) >= 0
                            case "First Name":
                                return firstname.toUpperCase().search(SEARCH.toUpperCase()) >= 0
                            default: console.log(null)
                        }
                        return null
                    }).map((data) =>
                        <ADMIN_USER_DETAIL
                            data={data}
                            SET_USERS={SET_USERS}
                            key={Math.random()}
                        />
                    )
                }
            </div>
        </CONTAINER>
    )
}

export default ADMIN_USER

const CONTAINER = styled.div`
    .change-main {
        gap: 30px;
        width: 100%;
        height: 70vh;
        display: grid;
        overflow-y: scroll;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .header__search {
        margin-top: 20px;
    }

    .search__title p {
        color: #ABBBC2;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        font-style: normal;
        font-family: 'Barlow';
    }

    .search__group {
        gap: 20px;
        display: flex;
        align-self: center;
    }

    .search__input input {
        width: 350px;
    }

    .search__select select {
        width: 150px;
    }

    @media (max-width: 1045px) {
        .search__input input, .search__select select {
            width: 100%;
        }

        .search__group {
            display: block;
        }

        .change-main {
            height: 60vh;
        }
    }
`