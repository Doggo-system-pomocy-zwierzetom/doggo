function Contact(){

    return(
        <div>
        <p>Napisz do nas</p>
        <form>
            <label>Imię:</label>
            <input type="text" id="fname" name="fname" required/>
            <label>E-mail:</label>
            <input type="email" id="fmail" name="fmail" required/>
            <label>Wiadomość:</label>
            <input type="text" id="fcontent" name="fcontent" required/>
        </form>
        </div>
    )
}
export default Contact;