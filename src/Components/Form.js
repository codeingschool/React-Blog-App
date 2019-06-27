import React from "react";
import "./Form.css"

function Form(){
    return(
        <div className="App" >
            <div>
            <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" >
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>


                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required/>


                <label>Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."required></textarea>
                <input type="submit" value="Submit" />
                </form>
            </div>
    </div>
    )
}

export default Form;