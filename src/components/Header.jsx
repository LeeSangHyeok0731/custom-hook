import styled from "styled-components"
import ChangeBackgroudColor from "../changeColor";
import ChangeCircleLoacte from "../changeLocate";
import MouseCircle from "../mouseCircle";
import CrashCircle from "../Newcrash";

const Header = styled.div`
    position:fixed;
`

function HeaderWrapper(){
    return (
        <Header>
            <ChangeBackgroudColor />
            <ChangeCircleLoacte />
            <MouseCircle />
        </Header>
    )
}

export default HeaderWrapper;