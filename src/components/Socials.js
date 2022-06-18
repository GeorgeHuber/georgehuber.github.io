export const SocialDiv = () =>{
    return(
      <div className=' flex flex-col sm:flex-row border-indigo-400 border-top-2 flex-row w-full  justify-start space-y-8 sm:space-y-0 sm:space-x-16 pt-4'>
            <a target="_blank" href ="https://github.com/GeorgeHuber" className='z-20 hover:bg-indigo-100 hover:text-black py-2 px-4 rounded-lg border-2 flex items-center space-x-4'>
              <a>GitHub</a>
              <img src={"./images/github.png"} className="w-8"></img>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/george-huber-2a5800237/" className=' z-20 hover:bg-indigo-100 hover:text-black py-2 px-4 rounded-lg border-2 flex items-center space-x-4'>
              <a>LinkedIn</a>
              <img src={"./images/linkedin.png"} className="w-8"></img>
              </a>
            <a target="_blank" href="mailto:georgehuber8@gmail.com" className='z-20 hover:bg-indigo-100 hover:text-black py-2 px-4 rounded-lg border-2 flex items-center space-x-4'>
              <a>Email</a>
              <img src={"./images/mail.png"} className="w-8"></img>
              </a>
          </div>
    )
  }