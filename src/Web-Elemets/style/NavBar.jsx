import NavBarButtons from './data/Data_NavBarButtons.json';



function NavBar (){

    return (
        <div className='sticky top-0 z-10 bg-color-1 text-color-2'>
            <div className="flex
            justify-center space-x-5
            pt-3
            shadow-md shadow-black/10" >

                {
                    NavBarButtons.map((buttonName,key) => {
                        return(
                            <Button key={key} bName={buttonName.ButtonName} hyperRef={buttonName.href}></Button>
                        )
                    })
                }
            </div>
        </div>
    ) ;
}

const Button = ({bName,hyperRef}) => {
    return(
        <a href={hyperRef} className="
        text-md 
        sm:text-xl
        md:text-2xl 
        border-b-4 border-gray-600/0 
        hover:border-b-4 hover:shadow-xl hover:shadow-zinc-800/25
        transition-all duration-150 
        p-2 bg-slate-0">   
            {bName}
        </a>
    );
}

export default NavBar;