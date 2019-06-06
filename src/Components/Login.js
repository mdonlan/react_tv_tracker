import React, { useRef, useState } from 'react'
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
const ErrorMsg = styled.div``;

function Login (props) {
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState(null);

    function handleSubmit (e) {
        e.preventDefault();
        
        firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
        .then((response) => { 
            props.history.push('/');
        })
        .catch(function(error) { 
            setErrorMsg(error.message);
        })
    }

    return (
        <Wrapper>
            <div>LOGIN</div>
            <Form onSubmit={handleSubmit}>
                <Email ref={emailRef} placeholder="email" />
                <Password ref={passRef} type="password" placeholder="password" />
                <Submit type="submit" value="Submit" />
                {errorMsg &&
                    <ErrorMsg>Error: {errorMsg}</ErrorMsg>
                }
            </Form>
        </Wrapper>
    );
}

export default Login;