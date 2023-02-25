import styled from "styled-components";
import NAVBAR from "../pages/ADMIN_NAVBAR";

function ADMINADDNAVBAR({children}) {
    return (
        <ADDCONTAINER >
            <NAVBAR />
            {children}
        </ADDCONTAINER>
    )
}

export default ADMINADDNAVBAR
const ADDCONTAINER = styled.section``