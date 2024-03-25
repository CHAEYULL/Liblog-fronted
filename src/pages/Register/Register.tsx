import { useState } from 'react';

function Register() {
    
    let [email, setEmail] = useState("");
    let [username, setUsername] = useState("");
    let [displayName, setDisplayName] = useState("");
    let [password, setPassword] = useState("");
    let [passwordCheck, setPasswordCheck] = useState("");

    function register(){
        fetch(`/users/register`, {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, username, displayName, password, passwordCheck }) 
        })
        console.log(email)
    }
    return(
        <div>
            <input id="email" type="email"  name="email" onChange={(e:any)=>{setEmail(e.target.value)}}/>
            <input id="username" type="text" name="username" onChange={(e:any)=>{setUsername(e.target.value)}}/>
            <input id="displayName" type="text" name="displayName" onChange={(e:any)=>{setDisplayName(e.target.value)}}/>
            <input id="password" type="password" name="password" onChange={(e:any)=>{setPassword(e.target.value)}}/>
            <input id="passwordCheck" type="password" name="passwordCheck" onChange={(e:any)=>{setPasswordCheck(e.target.value)}}/>
            <button onClick={register}>가입</button>
        </div>
    )
}
export default Register