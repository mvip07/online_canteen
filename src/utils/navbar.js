import NAVBAR from "../pages/Navbar";
import styled from "styled-components";

function ADD_NAVBAR({children}) {
    return (
        <CONTAINER >
            <NAVBAR />
            {children}
        </CONTAINER>
    )
}

export default ADD_NAVBAR
const CONTAINER = styled.section`
    display: flex;
`