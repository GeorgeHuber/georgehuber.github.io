import { useState, useEffect } from "react";

import { SocialDiv } from "./Socials"

export const HomeScreen = (props) =>{

    const [date, setDate] = useState(new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60000) + (3600000 * -5)))
    var timer;

    useEffect(()=>{
        timer = setInterval(()=>{
            setDate(new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60000) + (3600000 * -5)))
        },1000)
        return ()=>clearInterval(timer)
    },[])

    const getActivity = (h)=>{
        let hour = parseInt(h);
        if(hour>23 || hour<7){
            return "Likely sleeping. Or maybe getting some late night coding in"
        }
        if(hour<8){
            return "Having breakfast. "
        }
        if (hour<10){
            return "Going for a run or playing some pickleball."
        }
        if (hour==12){
            return "Having lunch."
        }
        if(hour<12){
            return "Studying and collaborating on lab assignments."
        }
        if(hour<15){
            return "Practicing trombone and learning marching drill."
        }
        if(hour<20){
            return "Working on personal projects such as learning Rust, modeling fluid flow, and completing a Google machine learning course. "
        }
        return "Relaxing! likely enjoying Stranger Things Season 4 and Jojo's Bizzare Adventure."
        
        
    }

    return(
    <div>
        <div className='block sm:hidden mt-16'>
            <SocialDiv></SocialDiv>
        </div>
        <div className="min-h-screen w-full font-noto-sans p-4 sm:px-20 py-[12vh] sm:py-[16vh]">
            <h1 className="text-4xl font-light border-b-2 pb-3 sm:pr-8 sm:w-fit">I am currently:</h1> 
            <div className="flex flex-col sm:flex-row justify-around my-10 py-10 space-y-12 sm:space-y-0">
                <div className="rounded-lg bg-slate-300 text-black h-fit p-10 sm:w-[30%]">
                    <h3 className="font-bold text-xl">Studying Computer Science @ University of Illinois Urbana - Champaign</h3>
                    <br></br>
                    <p>
                        The fall of 2022, I begin my studies as a Computer Science major in the Grainger College of Engineering. I am involved in undergraduate research,
Association for Computing Machinery (ACM), and the Marching Illini.  
                    </p>
                    <br></br>
                    <p>
                        Relevant coursework thusfar includes AP Computer Science A, Data Structures and Algorithms, Calculus 1-3, Statistics, and Physics.
                    </p>
                </div>
                <div className="rounded-lg bg-slate-300 text-black h-fit p-10 sm:w-[30%]">
                    <h3 className="font-bold text-xl">{getActivity(date.getHours())}</h3>
                    <br></br>
                    <h3 className="text-xl">
                        {date.getHours()>9?date.getHours():"0"+date.getHours()} : {date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes()} : {date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds()}
                    </h3>
                    <br></br>
                    <p>^ Predicted based on current central time</p>
                </div>
                <div className="rounded-lg bg-slate-300 text-black h-fit p-10 sm:w-[30%]">
                    <h3 className="font-bold text-xl">Working On This Website</h3>
                    <br></br>
                    <p>
                        This website is being made from scratch using: 
                        <br></br><br></br><a target="_blank" href="https://reactjs.org/"><img className="w-2/5" src={"./images/react.png"}></img></a>
                        <br></br><a target="_blank" href="https://tailwindcss.com/"><img src={"./images/tailwind.png"} className="w-1/2"></img></a>
                        <br></br><br></br>
                        and is hosted using Github Pages.
                    </p>
                </div>
                
            </div>
        </div>
    </div>
    )
} 