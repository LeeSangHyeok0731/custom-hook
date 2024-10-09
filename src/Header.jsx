import styled from "styled-components"
import ChangeBackgroudColor from "./changeColor";
import ChangeCircleLoacte from "./changeLocate";

const Header = styled.div`
    position:fixed;
`

function HeaderWrapper(){
    return (
        <Header>
            <ChangeBackgroudColor />
            <ChangeCircleLoacte />
        </Header>
    )
}

export default HeaderWrapper;