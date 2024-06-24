import React from 'react'
import axios from 'axios'

function SignUp() {
    const [Fname, setFname] = React.useState('');
    const [Lname, setLname] = React.useState('');
    const [Pwd, setPassword] = React.useState('');
    const [Dob, setDob] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001', {Fname: Fname,Lname: Lname,Password: Pwd,Dob: Dob})
        .then(res => {console.log(res);})
        .catch(err => {console.log(err);});
    }
    return (
        <div>
            <div id='form'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div id="FirstName">
                        <label for='fname'>First Name:</label><br></br>
                        <input type='text' placeholder='First Name' id='fname' name='fname' value={Fname} onChange={(e)=>setFname(e.target.value)} />
                    </div>
                    <div id="LastName">
                        <label for='lname'>Last Name:</label><br></br>
                        <input type='text' placeholder='Last Name' id='lname' name='lname' value={Lname} onChange={(e)=>setLname(e.target.value)}/>
                    </div>
                    <div id="pwd">
                        <label for='Password'>Password:</label><br></br>
                        <input type='password' placeholder='Password' id='Password' name ='Password' value={Pwd} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div id="DOB">
                        <label for ='dob'>Date of Birth:</label><br></br>
                        <input type='date' id='dob' name='dob' value={Dob} onChange={(e)=>setDob(e.target.value)}/>
                    </div>
                    <div id ='submit'>
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
                <div id='login'>
                    <p> If you already have an account</p>
                    <a href='/login'>Login</a>
                </div>
            </div>
                
         </div>
     );
}

export default SignUp;