import React, { useRef } from 'react'
import styled from 'styled-components'
import firebase from '../../firebaseConfig'
import * as API from '../API'

const Wrapper = styled.div``;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Email = styled.input``;
const Password = styled.input``;
const Submit = styled.input``;

function CreateAccount () {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    function handleSubmit (e) {
        e.preventDefault();
        API.signup(emailRef.current.value, passRef.current.value);
    }

    return (
        <Wrapper>
            <div>Create Account</div>
            <Form onSubmit={handleSubmit}>
                <Email ref={emailRef} placeholder="email" />
                <Password ref={passRef} type="password" placeholder="password" />
                <Submit type="submit" value="Submit" />
            </Form>
        </Wrapper>
    );
}

export default CreateAccount;