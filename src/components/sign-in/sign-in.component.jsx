import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../FormInput/forminput.component';
import CustomButton from '../button/button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(event)=>{
        const {name, value}=event.target;
        this.setState({[name]:value})
    }
    handleSubmit=async (event)=>{
        event.preventDefault();
        const {email, password}=this.state;
        try{
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({email:'',password:''})
        }catch(error){
            console.log(error)
        }
       
    }
    render(){
        return <div className='sign-in'>
            <h2>I already have an account</h2>
            <span> Signin with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                type='email'
                 name='email' 
                 value={this.state.email}
                 handleChange={this.handleChange}
                 label='email' 
                 required/>
                 <FormInput 
                    type='password'
                    name='password' 
                    label='password'
                    value={this.state.password}
                    handleChange={this.handleChange} required/>
                    <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>
                        Sign In
                    </CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} googleSignIn>
                        Sign In google
                    </CustomButton>
                 </div> 
            </form>
           
        </div>
    }
}

export default SignIn;