import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
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

function LoginButton(){
    return(
        <>
            <Button to="/login">
                로그인 하러가기
            </Button>
        </>
    )
}

export default LoginButton;