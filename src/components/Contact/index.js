import React, {useState} from 'react';

function ContactForm() {
    
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return( 
        <section className='contact-form' onSubmit={handleSubmit}>
            <div >
            <form >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name"   />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email"  defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                <div><p>Error Message</p></div>
                <button type="submit">Submit</button>
            </form>
            
            </div>
           
        </section>
    )
}
export default ContactForm;