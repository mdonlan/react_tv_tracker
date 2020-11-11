import React, { useRef } from 'react'
import styled from 'styled-components'
import { create_user_account } from '../API'

export function Create_Account () {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    function handleSubmit (e) {
        e.preventDefault();
        create_user_account(emailRef.current.value, passRef.current.value);
    }

    return (
        <Wrapper>
            <Title>Create Account</Title>
            <Form onSubmit={handleSubmit}>
                <Email ref={emailRef} placeholder="email" />
                <Password ref={passRef} type="password" placeholder="password" />
                <Submit type="submit" value="Submit" />
            </Form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 300px;
`

const Title = styled.div`
    font-size: 24px;
    margin-bottom: 40px;
`

const Email = styled.input`
    outline: none;
    border: none;
    font-size: 18px;
    background: #1e1e1e;
    padding: 5px;
    margin-bottom: 10px;
    color: #dddddd;
`
const Password = styled.input`
    outline: none;
    border: none;
    font-size: 18px;
    background: #1e1e1e;
    padding: 5px;
    margin-bottom: 10px;
    color: #dddddd;
`
const Submit = styled.input`
    outline: none;
    border: none;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    background: #1d591b;
    transition: 0.5s;

    :hover {
        background: #2e8a2b;
    }
`

const Error_Message = styled.div``