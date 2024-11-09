import React, { useState } from 'react';
import styled from 'styled-components';
import emailImage from "../../assets/img/email/emailImage.webp";
const Wrapper = styled.div`
    .main_email_section {
    width: 100%;
}

.email_section {
    background-image: url(${(props)=>props.emailImage});
    background-repeat: no-repeat;
    background-position: 11% 49%;
    background-size: cover;
    height: 30rem;
}

.email_container {
    display: grid;
    place-content: center;
    place-items: center;
    height: 100%;
}

.email_heading {
    display: grid;
    place-content: center;
    place-items: center;


}

.email_heading h3 {
    color: #fff;
    font-size: 3.5rem;
    font-weight: 900;

    @media(max-width:480px){
        font-size:3rem;
        padding-left:0.5rem;
        padding-right:0.5rem;
    }
}

.email_heading span {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: 1rem;
    padding-bottom: 3rem;
    text-align: center;
}

.email_input {
    background: black;
    width: 40rem;
    height: 5rem;
    display: flex;
}

.email_input  input {
    outline: none;
    border: none;
    width: 75%;
    height: 100%;
    padding-left: 1.5rem;

}

.email_input  input::placeholder {
    color: #afafaf !important;
    font-size: 16px;
}

.email_input  button {
    border: none;
    outline: none;
    background: transparent;
    color: white;
    height: 100%;
    width: 25%;
    cursor: pointer;
    font-size:1.4rem;
    font-weight:700;
}
#error{
    color:#fff;
    font-size:1.2rem;
    font-weight: 700;
    margin-top: 1rem;
}
@media (min-width:360px) and (max-width:480px){
    .email_input {
        width: 30rem;
}
    .email_section {
    background-position: right center;
}
}
@media(max-width:360px){
    .email_input{
        width:30rem;
    }
    .email_section {
    background-position: right center;
}
}
`

const EmailSection = () => {
    const [value,setValue] = useState({
        email:""
    })
    const changeHandler = (e) =>{
     const name = e.target.name;
     const value = e.target.value;
     setValue({...value,[name]:value})
    }
    const isValidate = ()=>{
        const emailError = document.getElementById('error');
        if(value.email === ""){
            emailError.innerHTML = 'please fill the email box';
            return false;
         }
         if(value.email.indexOf('@')<=0){
           emailError.innerHTML =' @ Invalid Position';
           return false;
         }
         if(value.email.charAt(value.email.length - 4) !='.' && value.email.charAt(Email.length - 3) !='.'){
           emailError.innerHTML = `Invalid email address`;
           return false;
         }
         return true;
    }
    const submitHandler = (e) =>{   
        e.preventDefault()
         if(isValidate()){
            setValue({
              email:""
            })
            return true
         }else{
            return false;
         }
        }
    return (
        <>
            <Wrapper  emailImage={emailImage}>
                <div className="main_email_section">
                    <div className="email_section">
                        <div className="email_container">
                            <div className="email_heading">
                                <h3 style={{width:"100%",textAlign:'center'}}>PARTICIPATE TEAM</h3>
                                <span className="subtext">Be the first to know about campaigns and surprises</span>
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className="email_input">
                                    <input type="text"
                                        placeholder="email address"
                                        className="outline-none"
                                        autocomplete="off"
                                        name="email"
                                        id="email"
                                        value={value.email}
                                        onChange={changeHandler}
                                    />

                                        <button type="submit" >JOIN US!</button>
                                </div><br/>
                                    <small id="error"></small>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default EmailSection