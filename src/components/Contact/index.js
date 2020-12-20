import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Please enter a valid email address');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`Please enter a ${e.target.name}.`)
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return( 
        <section className='contact-form' onSubmit={handleSubmit}>
            <div className="container" >
             <h2>Contact Me</h2>   
            <form >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"   />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email"  defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-message">{errorMessage}</p>
                    </div>
                    )}
                <button type="submit">Submit</button>
            </form>
            
            </div>
           
        </section>
    )
}
export default ContactForm;