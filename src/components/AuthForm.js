import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const AuthForm = (props) => {
    const [isSignUp, setSignUp] = useState(true);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[message, setMessage] = useState(null);

    const setSignFalse = () => {
        setSignUp(false)
    }

    const seSignUpTrue = () => {
        setSignUp(true)
    }

    const handChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const register = () => {
        if(localStorage.getItem('users') === null){
            localStorage.setItem('users', JSON.stringify([])) 
        }
        const users = JSON.parse(localStorage.getItem("users"));
        const user = {
            email,
            password
        }
        const userExists = user.some((existedUser) => existedUser.email === user.email)
        if(!userExists){
            users.push(user);
            setMessage(null)
            localStorage.setItem("users", JSON.stringify(users))
        }else{
            setMessage('User with email ${email} already exists')
        }
        console.log('REGISTER', email, password)
    }

    const login = () => {
        console.log('LOGIN')
    }
    
    const handelSubmit = (e) => {
        
        e.preventDefault();
        if(isSignUp == true){
             register()
        }else{
          login()
        }
            
    }
    return (
        <div className="w-100">
            <h1>{isSignUp ? "Sign Up": "Login"}</h1>
            <Form onSubmit={handelSubmit}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={handChangeEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
          </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={handChangePassword} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
        </Button>
            </Form>
            <p>If you already have a password <Button variant="link" onClick={setSignFalse}>Log In</Button></p>
            <p>If you want to sign up,please <Button variant="link" onClick={seSignUpTrue}>Sign Up</Button> </p>

        </div>
    )
}
export default AuthForm;