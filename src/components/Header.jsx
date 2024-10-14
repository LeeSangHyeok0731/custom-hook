import styled from "styled-components";
import ChangeCircleLoacte from "../changeLocate";
import MouseCircle from "../mouseCircle";
import { Routes, Route } from 'react-router-dom';  // Routes 추가
import StartPage from "../StartPage";
import LoginPage from "../LoginPage";

const Header = styled.div`  
    
`;

function HeaderWrapper() {
    return (
        <Header>
            <Routes>  
                <Route path="/" element={<StartPage />} />  
                <Route path="/play" element={
                    <>
                        <ChangeCircleLoacte />
                        <MouseCircle />
                    </>
                } />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Header>
    );
}

export default HeaderWrapper;
