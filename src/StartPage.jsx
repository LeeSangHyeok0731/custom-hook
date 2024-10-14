import styled from "styled-components";
import { Link } from "react-router-dom";
import RankingGroup from "./Ranking";
import LoginButton from "./LoginButton";

const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;  
    align-items:center;
    flex-direction:column;
`;

const StartButtonWrapper = styled.div`
    background-color: skyblue;
    height: 300px;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StartButton = styled(Link)`
    background-color: white;
    padding: 10px 20px; 
    border: none; 
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    color: black;
    font-size: 18px; 
    &:hover {
        background-color: lightgray; 
    }
`;

function StartPage() {
    return (
        <Body>
            <StartButtonWrapper>
                <StartButton to="/play" aria-label="게임 시작하기">
                    시작하기
                </StartButton>
                <LoginButton />
            </StartButtonWrapper>
            <RankingGroup />    
        </Body>
    );
}

export default StartPage;
