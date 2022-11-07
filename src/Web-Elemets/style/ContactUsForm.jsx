import data from "./data/Data_ContactForm.json"


const ContactUsForm = () => {
    /**
     * Continue to link this to an automatic e-mail sender :
     *  inspiration : https://www.youtube.com/watch?v=I4DKr1JLC50
     *  API : https://www.emailjs.com
     */
    return (
        <section>
            <div className="container my-5">
                <h2 className="--text-center font-menu_font_1 text-2xl text-center my-5">
                    {data.Title.toString()}
                </h2>
                <form className="--form-control --card form-control grid space-y-3 justify-center">
                    <input type="text" placeholder={data.FullName.toString()}
                    name="user_name" className="px-2 text-black" required />
                    <input type="email" placeholder={data.Email.toString()}
                    name="user_email" className="px-2 text-black" required />
                    <input type="text" placeholder={data.Subject.toString()}
                    name="user_subject" className="px-2 text-black" required />
                    <textarea name="user_message" id="" cols="30" rows="10" placeholder={data.Message.toString()} className="px-2 text-black"></textarea>
                    <button type="submit" className="bg-color-2-1 text-color-1 hover:bg-color-1-1 hover:text-color-2 transition-all duration-150 m-auto py-2 px-3 rounded-lg">{data.SubmitButton.toString()}</button>
                </form>
            </div>


        </section>
    );

}

export default ContactUsForm;