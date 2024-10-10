import styled from "styled-components"
import ChangeCircleLoacte from "../changeLocate";
import MouseCircle from "../mouseCircle";

const Header = styled.div`
    position:fixed;
`

function HeaderWrapper(){
    return (
        <Header>
            <ChangeCircleLoacte />
            <MouseCircle />
        </Header>
    )
}

export default HeaderWrapper;