import CoverPhoto from "../resources/resto_example_1.jpg"
import ContactUsForm from "./ContactUsForm"

import Data_MenuItems_S from "./data/Data_MenuItems_WithSections.json"
import Data_Menu_Sections from "./data/Data_Menu_Sections.json"
import Data_Contact from "./data/Data_ContactUs.json"
import Data_Schedule from "./data/Data_Schedule.json"
import RestoData from "./data/Data.json"



function Body () {
    return (
        <div className="mb-10">
            <NameOfRestaurant photo={CoverPhoto}></NameOfRestaurant>
            <div id="OtherContent" className="container mx-auto space-y-[5rem]">
                <AboutUsPage></AboutUsPage>
                <CustomMenuPage MenuCurrency={"€"}></CustomMenuPage>
                <ContactUsPage></ContactUsPage>
            </div>
        </div>
    );

}

// Home Page

const NameOfRestaurant  = ({photo}) => {
    if(!photo){
        return(
            <div className="relative">
                <div className="bg-color-1 w-screen h-[30rem] z-0"></div>
                <div className="absolute z-0 
                top-[50%] 
                sm:top-[45%]
                md:top-[40%]
                w-full">
                    <h1 id="HomeNameResto" className="
                    text-white text-center font-menu_font_1
                    text-8xl 
                    sm:text-8xl 
                    md:text-9xl
                    glowEffect
                    ">
                        {RestoData.Title_Website}
                    </h1>
                    <h2 className="text-white text-center font-menu_font_1
                    text-4xl 
                    sm:text-6xl 
                    md:text-8xl
                    glowEffect
                    ">Restaurant</h2>
                </div>

            
        </div>
        )
    }
    return(
        <div className="relative">
            <img src={photo} className = "h-screen w-full z-0" alt="Resto_Image"></img>
            <div className="absolute z-0 
            top-[50%] 
            sm:top-[45%]
            md:top-[40%]
            w-full">
                <h1 id="HomeNameResto" className="
                text-white text-center font-menu_font_1
                text-8xl 
                sm:text-8xl 
                md:text-9xl
                glowEffect
                ">
                    {RestoData.Title_Website}
                </h1>
                <h2 className="text-white text-center font-menu_font_1
                    text-4xl 
                    sm:text-6xl 
                    md:text-8xl
                    glowEffect
                    ">Restaurant</h2>
            </div>

            
        </div>
    )
}

// Abous Us Page

const AboutUsPage = () => {
    return(
        <div className="container my-20 p-20 border-b-2 border-custom-2 shadow-lg text-color-1">
            <h1 id="AboutUs" className="PageTitle-Text border-b-2 border-custom-1">{RestoData.Title_AboutUs}</h1>
            <p className="text-3xl font-bold font-menu_font_1 text-center">
            Le restaurant est situé dans une coquette rue piétonne de Mons qui mène à la Grand-Place. La terrasse y est dressée durant les saisons printannière et estivale.
            <br/> 
            Vous nous trouverez à l’adresse suivante : {Data_Contact[0].Number} – {Data_Contact[0].Street} – {Data_Contact[0].PostalCode+" "} {Data_Contact[0].City}
            <br/><br/>
            Dans une rue piétonne de Mons, la cuisine '{RestoData.Title_Website}' marie avec savoir-faire différentes saveurs du monde, au gré de ses inspirations.
            <br/>
            Ses spécialités de pâtes fraîches maison, tirées à la minute, s’intègrent dans une cuisine du produit méridional, gorgé de soleil.
            <br/>
            Ses assiettes bien remplies, pouvant être servies en terrasse aux beaux jours, raviront les gourmands comme les gourmets.
            <br/><br/>
            {RestoData.Title_Website} vous propose également ses vins du monde (Argentine, Chili, Afrique du Sud …) et son homarium en salle, où huitres fraîches et homards vivants se côtoient dans l’ambiance intime de son cadre design.
            </p>
            <div id="Schedule" className="PageTitle-Text my-10 border-b-2 border-custom-1">
                {RestoData.Title_Schedule}
            </div>
            <div className="grid grid-cols-2 font-menu_font_1 text-color-1 text-lg md:text-3xl text-color-1">
                <div className="text-center ">
                    {Data_Schedule.map((value,key) => {
                        return ( 
                            <div key={key}>
                                {value.Day_Name}
                            </div>
                        )
                    })}
                </div>
                <div className="">
                    {Data_Schedule.map((value,key) => {

                            return ( 
                                <div key={key}>
                                    {value.Opening_Hours}
                                </div>
                            )
                        })}
                </div>
                
            </div>
        </div>
    );
}

//Menu Page


const CustomMenuPage = ({MenuCurrency}) => {
    return(
        <div className="bg-color-2 text-color-1 rounded-sm content-center my-5 shadow-lg border-b-2 border-custom-2">

            <h1 id="MenuItemsHolder" className="PageTitle-Text shadow-1"> {RestoData.Title_Menu} </h1>

            {
                Data_Menu_Sections.map((section,key) => {
                    return(
                        <div key={key}>
                            <MenuSection SectionTitle={section.Section_Name}></MenuSection>
                            <div className="grid grid-flow-row space-y-3">
                                {
                                    Data_MenuItems_S.map((item,key2) => {
                                        if(item.Section === section.Section_Number){
                                            return(
                                                <MenuItem key = {key2} ItemName={item.Name} ItemPrice={item.Price} Currency = {MenuCurrency}></MenuItem>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
            
            
        </div>
    );
}

const MenuSection = ({SectionTitle}) => {
    return(
        <div className="font-menu_font_1 text-4xl font-bold my-5 px-2
        md:text-center">
            {SectionTitle}
        </div>
    );
}

const MenuItem = ({ItemName,ItemPrice,Currency}) => {
    return(
        <div className="bg-green-0
        grid grid-cols-2
        text-center text-3xl md:text-4xl
        font-menu_font_1
        ">
            <div> {ItemName} </div>
            
            <div> { Currency ? (ItemPrice +" "+ Currency) : (ItemPrice) } </div>
        </div>
    );
}

//Contact Us

const ContactUsPage = () => {
    // custom css for : ContactUs-Text -> index.css
    return(
        <div className="bg-color-1 text-color-2 border-2">
            <div id="ContactUs" className="PageTitle-Text shadow-2 p-2">
                {RestoData.Title_ContactUs}
            </div>
            <ContactUsForm></ContactUsForm>
            <div className=" grid grid-cols-2 space-x-3">
                <div className=" grid grid-rows-3 text-end">
                    <div className="ContactUs-Text">
                        {Data_Contact[1].Header_Adress.toString() + " : "}
                    </div>
                    <div>

                    </div>
                    <div className="ContactUs-Text">
                        {Data_Contact[1].Header_PhoneNumber.toString() + " : "}
                    </div>
                </div>
                <div className="grid grid-rows-3 ContactUs-Text">
                    <div>
                        {Data_Contact[0].Street.toString() + " " + Data_Contact[0].Number.toString()}
                    </div>
                    <div>
                        {Data_Contact[0].PostalCode.toString() + " " + Data_Contact[0].City.toString()}
                    </div>
                    <div>
                        {Data_Contact[0].PhoneNumber.toString()}
                    </div>
                </div>

            </div>
            
        </div>
    );
}




export default Body;