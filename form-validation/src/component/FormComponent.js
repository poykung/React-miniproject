import './FormComponent.css';
import {useState} from 'react'
import { ReactComponent as SVGImage } from './svg/Signup.svg';

    const FormComponent =()=>{
    const [userName,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpwd,setconfirmpwd] = useState('')

    const [errorusername , seterrousername] = useState('')
    const [erremail , seterroremail] = useState('')
    const [errpassword , seterrorpassword] = useState('')
    const [errconfirm , seterrconfirm] = useState('')

    const [usernamecolor,setusernamecolor] = useState('')
    const [emailcolor,setemailcolor] = useState('')
    const [passwordcolor,setpasswordcolor] = useState('')
    const [confirmcolor,setconfirmcolor] = useState('')

    const valiDateForm = (e) =>{
        e.preventDefault()
        if(userName.length>=8){
            seterrousername('')
            setusernamecolor('green')
        }else{
            seterrousername('Username must contain 8 characters.')
            setusernamecolor('red')
        }

        if(email.includes("@")){
            seterroremail('')
            setemailcolor('green')
        }else{
            seterroremail('Invalid email format.')
            setemailcolor('red')
        }

        if(password.length>=8){
            seterrorpassword('')
            setpasswordcolor('green')
        }else{
            seterrorpassword('Password must contain 8 characters.')
            setpasswordcolor('red')
        }

        if(confirmpwd != "" & confirmpwd === password){
            seterrconfirm('')
            setconfirmcolor('green')
        }else{
            seterrconfirm(`Passwords don't match.`)
            setconfirmcolor('red')
        }

       
    }


    return(
        <div className="container">
            <SVGImage className="img"/>
            <form className="form" onSubmit={valiDateForm}>
                <h2>Signup</h2>
                <div className="form-control">
                    <label>Username : </label>
                    <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:usernamecolor}}></input>
                    <small style={{color:usernamecolor}}>{errorusername}</small>
                </div>
                <div className="form-control">
                    <label>Email : </label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailcolor}}></input>
                    <small style={{color:emailcolor}}>{erremail}</small>
                </div>
                <div className="form-control">
                    <label>Password : </label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordcolor}}></input>
                    <small style={{color:passwordcolor}}>{errpassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password : </label>
                    <input type="password" value={confirmpwd} onChange={(e)=>setconfirmpwd(e.target.value)} style={{borderColor:confirmcolor}}></input>
                    <small style={{color:confirmcolor}}>{errconfirm}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
        
    )
}

export default FormComponent