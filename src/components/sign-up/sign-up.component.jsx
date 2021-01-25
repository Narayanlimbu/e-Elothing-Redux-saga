import React from 'react';
import FormInput from '../../components/FormInput/forminput.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Button from '../button/button.component';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
          displayName:"",
          email:'',
          password:'',
          confirmPassword:''
        }
    }
  handleChange=(event)=>{
     const {name, value}=event.target;
     this.setState({[name]:value});
     
  }
  handleSubmit=async (event)=>{
       event.preventDefault();
       const {displayName, email, password, confirmPassword}=this.state;
       if(password!=confirmPassword){
           alert("password don't match");
           return;
       }
       try{
           const{user}=await auth.createUserWithEmailAndPassword(email,password); // it creates user in authentication 
           await createUserProfileDocument(user, {displayName}); // it creates the user in firestore
           this.setState({
            displayName:"",
            email:'',
            password:'',
            confirmPassword:''
        })
       }catch(error){
           console.log(error);
       }

     
  }


  render(){
      const {displayName,email, password, confirmPassword}=this.state;
      return(
          <div className='sign-up'>
              <h2 className='title'>I do not have a account</h2>
              <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className='sign-up=form'>
                    <FormInput
                    name='displayName'
                    handleChange={this.handleChange}
                    value={displayName}
                    require
                    label='DisplayName'
                    />
                    <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={email}
                    require
                    label='email'
                    />
                    <FormInput
                    name='password'
                    type='password'
                    handleChange={this.handleChange}
                    value={password}
                    require
                    label='password'
                    />
                    <FormInput
                    name='confirmPassword'
                    type='password'
                    handleChange={this.handleChange}
                    value={confirmPassword}
                    require
                    label='password'
                    />
                    <Button type='submit' value="submit value">SIGN UP</Button> 
                </form>
          </div>
      )
  }
}
export default SignUp;