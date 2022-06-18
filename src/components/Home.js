import { SocialDiv } from "./Socials"

export const HomeScreen = (props) =>{
    return(
    <div>
        <div className='block sm:hidden mt-16'>
            <SocialDiv></SocialDiv>
        </div>
        <div className="min-h-screen w-full font-noto-sans p-4 sm:px-20 py-[16vh]">
            <h1 className="text-4xl font-light">I am currently:</h1> 
            <div className="rounded bg-slate-800 w-4/5 h-auto p-10 my-10 ">
                Working on this site
            </div>
        </div>
    </div>
    )
} 