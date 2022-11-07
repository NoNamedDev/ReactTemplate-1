import Body from "./Body";
import NavBar from "./NavBar";
import Footer from "./Footer";


/*
    TODO :  V-> Adauga Orarul in About Us
            V-> Adauga sectiuni in Menu (Alcool,Soft,Pizza, etc. )
            -> Vezi daca adaugi google maps pentru ai gasi mai rapid?
            V-> Sticky NavBar

            -> Add terms & conditions for Users (since you use e-mail sending stuff)

            ->> Cand consideri ca e gata , incearca sa faci si pe alte culori (combinatii de culori pentru customizare)
*/

function Main () {
    return (
        <div className="bg-color-2 relative">
            <NavBar></NavBar>
            <Body></Body>
            <Footer></Footer>
        </div>
    );

}



export default Main;