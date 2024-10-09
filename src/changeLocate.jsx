import styled from "styled-components"
import useScrollPosition from "./senseScrollEvent";

const Circle = styled.div`
    width:100px;
    height:100px;
    background-color: blue;
    border-radius:50%;
    position: absolute; 
    top: ${(props) => props.top}px;
    left: ${(props) => props.top}px;
    transform: translateX(-50%);
`

function ChangeCircleLoacte(){
    const scrollPosition = useScrollPosition();
    return(
        <Circle top={scrollPosition}/>
    )
}

export default ChangeCircleLoacte;