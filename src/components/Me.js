export const MeScreen = (props) =>{
    return(
        <div className='min-h-screen  sm:w-full font-noto-sans p-4 sm:px-20 pb-[12vh] sm:pb-[16vh]'>
            <div className="gap-y-16  w-full flex flex-col items-center sm:grid sm:grid-cols-2 xl:grid-cols-3 text-gray-300">
            <div className="font-thin text-indigo-100 text-4xl rounded-[100%] border w-80 h-80 flex flex-col text-center justify-center">How I Got Here<br></br><p className="text-base font-normal">or so I think</p></div>
            
            
            <div className="w-80 h-80 p-4 border-red-200 border flex flex-col rounded-xl hover:shadow-xl">
                <h1 className=" text-2xl font-medium text-indigo-100">2016</h1>
                <br></br>
                <p>I began programming in 7th grade on a Raspberry Pi. My early work was mostly pranks, spam emailing my sisters or creating a sarcastic chat bot.</p>
                <br></br>
                <img className="w-16" src={"./images/rpi.svg"}></img>
            </div>
            <div className=" w-80 h-80 p-4 border-gray-50 border flex flex-col rounded-xl hover:shadow-xl">
                <h1 className="text-2xl font-medium text-indigo-100">2019</h1>
                <br></br>
                <p>I skipped lunch to take my first CS class: AP Computer Science in Java. Next year I would take CS 331: Data Structures and Algorithms for dual credit and finally created a senior capstone project my senior year.</p>
            </div>
            <div className=" w-80 h-80 p-4 border-indigo-300 border flex flex-col rounded-xl hover:shadow-xl">
                <h1 className="text-2xl font-medium text-indigo-100">2019-2021</h1>
                <br></br>
                <img className="w-32" src={"./images/cninjas.png"}></img>
                <br></br>
                <p>Working as an instructor and later software developer at Code Ninjas helped me purchase my first real computer while making an impact on hundreds of children. </p>
                
               
            </div>
            <div className="w-80 h-80 p-4 border-indigo-100 border flex flex-col rounded-xl hover:shadow-xl">
                <h1 className="text-2xl font-medium text-indigo-100">2019-2021</h1>
                <br></br>
                <p>Hackathons have taught me to prototype quickly with an eye for design. </p>
            </div>
           
            <div className=" w-80 h-80 p-4 border-sky-300 border flex flex-col rounded-xl hover:shadow-xl">
                <h1 className="text-2xl font-medium text-indigo-100">2020-2022</h1>
                <br></br>
                <p>I became president of Libertyville High Schools technology club - <strong>Coding Cats</strong>. Here I mentored members, taught programming courses at public libraries, and organized events of 75+ people.</p>
            </div>
            </div>
        </div>
    )
} 