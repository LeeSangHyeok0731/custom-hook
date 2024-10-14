import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const InputWrapper = styled.div`
    width: 500px;
    height: 500px;
    background-color: skyblue;
    display: flex;  
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const LoginId = styled.input`
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const LoginPassword = styled.input`
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const ReturnButton = styled(Link)`
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
`

function LoginPage() {
    return (
        <Body>
            <InputWrapper>
                <LoginId type="text" placeholder="Enter your ID" />
                <LoginPassword type="password" placeholder="Enter your password" />
           </InputWrapper>
           <ReturnButton to="/">
                되돌아가기
           </ReturnButton>
        </Body>
    );
}

export default LoginPage;
