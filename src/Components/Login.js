import React, { useRef } from 'react'
import styled from 'styled-components'
import firebase from '../../firebaseConfig'

const Wrapper = styled.div``;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Email = styled.input``;
const Password = styled.input``;
const Submit = styled.input``;

function Login () {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    function handleSubmit (e) {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
        .then((response) => {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    return (
        <Wrapper>
            <div>LOGIN</div>
            <Form onSubmit={handleSubmit}>
                <Email ref={emailRef} placeholder="email" />
                <Password ref={passRef} type="password" placeholder="password" />
                <Submit type="submit" value="Submit" />
            </Form>
        </Wrapper>
    );
}

export default Login;