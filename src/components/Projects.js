export const ProjectsScreen = (props) => {
    return (
        <div className='min-h-screen w-full font-noto-sans p-4 sm:px-20 pb-[12vh] sm:pb-[16vh]'>
            <h1 className="text-4xl font-light border-b-2 pb-3 sm:pr-8 sm:w-fit">What I've worked on:</h1>
            <div className="rounded-xl w-11/12 mt-12 h-auto py-6 px-10 bg-black">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-6 items-center"><h3 className="text-indigo-200 font-medium text-xl">2022</h3><h5>-</h5><h2 className="font-bold text-2xl">Worldle - Contributor</h2></div>
                        <h2 className="text-lg text-white">React</h2>
                        <p className="sm:font-medium pb-6 sm:pb-0 sm:pr-32 text-gray-400">I authored commits to implement logo display, tags, and titles for Worldle on mobile devices. This game has over <strong>1 million players </strong> daily. </p>
                    </div>
                    <a target="_blank" className="flex flex-col items-center" href="https://worldle.teuteuf.fr/"><img className="w-40 m-auto" src="https://worldle.teuteuf.fr/logo192.png"></img>
                        *view*
                    </a>
                </div>
            </div>
            <div className="rounded-xl w-11/12 mt-12 h-auto py-6 px-10 bg-black">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-6 items-center"><h3 className="text-indigo-200 font-medium text-xl">2022</h3><h5>-</h5><h2 className="font-bold text-2xl">March Madness Bracket Simulator</h2></div>
                        <h2 className="text-lg text-white">Python, Kaggle, TensorFlow</h2>
                        <p className="sm:font-medium pb-6 sm:pb-0 sm:pr-32 text-gray-400">Using a kaggle data set dating back to 1985, I calculated NCAA's mens basketball stats by hand and then performed a complex analysis to create a predictive march madness model.<br></br><br></br>*Correction to the article - 10,000 lines of data not 100,000 lines of code which is physically impossible</p>
                    </div>
                    <a target="_blank" className="flex flex-col items-center" href="https://www.lhsdoi.com/24526/sports/libertyvilles-computer-scientist-george-huber-and-his-predictive-march-madness-model/"><img className="w-60 m-auto" src="https://www.lhsdoi.com/wp-content/uploads/2022/05/USING-IN-LAYOUT-900x457.png"></img>
                        *view*
                    </a>
                </div>
            </div>
            <div className="rounded-xl w-11/12 mt-12 h-auto py-6 px-10 bg-black">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-6 items-center"><h3 className="text-indigo-200 font-medium text-xl">2020</h3><h5>-</h5><h2 className="font-bold text-2xl">D12 Driving App</h2></div>
                        <h2 className="text-lg text-white">React-Native, Firebase, Google OAuth</h2>
                        <p className="sm:font-medium pb-6 sm:pb-0 sm:pr-32 text-gray-400">Servicing over 300 students, the D128 Driving app allows students to track their hours and join virtual classrooms to streamline the drivers education process. </p>
                    </div>
                    <a target="_blank" className="flex flex-col items-center" href="https://apps.apple.com/us/app/d128driving/id1532687628"><img className="w-40" src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/6c/be/05/6cbe0580-41cd-da56-0782-c983265891b7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"></img>
                        *view*
                    </a>
                </div>
            </div>
            <div className="rounded-xl w-11/12 mt-12 h-auto py-6 px-10 bg-black">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-6 items-center"><h3 className="text-indigo-200 font-medium text-xl">2020</h3><h5>-</h5><h2 className="font-bold text-2xl">High School Contest in Mathematical Modeling Algorithm</h2></div>
                        <h2 className="text-lg text-white">Python</h2>
                        <p className="sm:font-medium pb-6 sm:pb-0 sm:pr-32 text-gray-400">The High School Mathematical Modeling Contest in Modeling is a nationwide competition where teams of four use algorithms and math to model a given real life problem. I was tasked to find the best schedule of government funding toward ecological conservation which maximized biodiversity. Attatched is the resultant formal research paper. </p>
                    </div>
                    <a target="_blank" className="flex flex-col items-center" href="https://drive.google.com/file/d/1tpFdCSgjsYU5WfzgoucAsiPLD4UJYEW2/view?usp=sharing"><img className="w-40 bg-gray-200" src="./images/paper.svg"></img>
                        *view*
                    </a>
                </div>
            </div>
            <div className="rounded-xl w-11/12 mt-12 h-auto py-6 px-10 bg-black">
                <a target="_blank" href="https://drive.google.com/file/d/1dTXtSFFdK4f8qlkD_0BpmMy9Lv7-RZWo/view?usp=sharing">
                <h1 className="font-bold text-4xl">Resume</h1>
                <p>To read more about my other projects and background, click here!</p>
                </a>
            </div>



        </div>
    )
} 