import '../styles/Contact.css'

export function Contact( props ) {
    return(
        <div ClassName="Contact">
            <h2>Contact Us</h2>
            <form
            id="contact-form"
            action="https://example.com/handler"
            method="post"
            >

                {/* name */}
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your Name" />
                {/* email */}
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="you@domain.com" />
                {/* message */}
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" cols="24" 
                placeholder="Hi Hows it going?"></textarea>
                <button type="reset">Clear</button>
                <button type="submit">Send</button>
            </form>
            
        </div>
    )
}

export default Contact