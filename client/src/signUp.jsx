import React from 'react'

function SignUp() {
    return (
        <div>
            <div id='form'>
                <h1>Sign Up</h1>
                <form>
                    <div id="FirstName">
                        <label for='fname'>First Name:</label><br></br>
                        <input type='text' placeholder='First Name' id='fname' name='fname'></input>
                    </div>
                    <div id="LastName">
                        <label for='lname'>Last Name:</label><br></br>
                        <input type='text' placeholder='Last Name' id='lname' name='lname'></input>
                    </div>
                    <div id="pwd">
                        <label for='Password'>Password:</label><br></br>
                        <input type='password' placeholder='Password' id='Password' name ='Password'></input>
                    </div>
                    <div id="DOB">
                        <label for ='dob'>Date of Birth:</label><br></br>
                        <input type='date' id='dob' name='dob'></input>
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