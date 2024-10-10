import styled from "styled-components"
import ChangeCircleLoacte from "../changeLocate";
import MouseCircle from "../mouseCircle";
import Timer from "../Timer";

const Header = styled.div`
    position:fixed;
`

function HeaderWrapper(){
    return (
        <Header>
            <ChangeCircleLoacte />
            <Timer />
            <MouseCircle />
        </Header>
    )
}

export default HeaderWrapper;