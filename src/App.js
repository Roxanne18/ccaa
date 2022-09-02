import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './App.css';
import { useRef, useState } from "react";
import './Login.css';
import { signup, login, logout, useAuth } from "./firebase";
export default function App() {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
  
    const emailRef = useRef();
    const passwordRef = useRef();
  
    async function handleSignup() {
      setLoading(true);
      try {
        await signup(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert("Error!");
      }
      setLoading(false);
    }
  
    async function handleLogin() {
      setLoading(true);
      try {
        await login(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert("Error!");
      }
      setLoading(false);
    }
  
    async function handleLogout() {
      setLoading(true);
      try {
        await logout();
      } catch {
        alert("Error!");
      }
      setLoading(false);
    }


    return (
        <div id="main ">
          
          <div>Currently logged in as: { currentUser?.email } </div>
        
          

          <div class="form-inner">
            <form action="#" class="login">
                <div class="field">
                    <input type="text" ref={emailRef}  placeholder="Email Address" required />
                </div>
                <div class="field">
                    <input ref={passwordRef} type="password" placeholder="Password" required />
                </div>
                <div class="pass-link">
                    <a href="#">Forgot password?</a>
                </div>
                    <button  class="field btn" disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
                <div class="field btn">
                    <div class="btn-layer"></div>
                </div>
                <div class="field btn">
                    <div class="btn-layer"></div>
                    <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
                </div>
                <div class="signup-link">
                    Don't have an account? <a href="">Signup now</a>
                </div>
                <div class="seperator"><b>or</b></div>
                <p>Sign in with your social media account</p>
        
                <div class="social-icon">
                    <button type="button"><i class="fa fa-linkedin"></i></button>
                    <button type="button"><i class="fa fa-facebook"></i></button>
                    <button type="button"><i class="fa fa-google"></i> </button>
                </div>

            </form>
            
        </div>
    
          <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
          <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
          <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
  
        </div>
      );
}





// // import {  } from "module";
// function App() {
//   return (
//     <Container className='bg'>
//     <Form className='form-container'>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </Container>
//   );
// }


// export default App;