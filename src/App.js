import logo from './logo.svg';
import './App.css';

import { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { Link, Element, animateScroll} from 'react-scroll'

var y0 = null;

function App() {
  const navRef = useRef(null);

  const [navPercent, setNavPercent] = useState(0)
  const bottomPos = (element) => element.getBoundingClientRect().bottom;
  const getHeight = (element) => element.offsetHeight;

  const onScroll = () => {
    if (!y0){
      y0 = bottomPos(navRef.current);
    }
    const navHeight = getHeight(navRef.current);
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    const navPercent = y0-navHeight==0?0:scrollPos/(y0-navHeight) 

    //console.log(scrollPos,y0,navHeight,navPercent);
    setNavPercent(navPercent)
    
  }
  
  useLayoutEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const headerClasses = "h-[8vh] shadow-xl justify-center items-center w-full top-0 left-0 bg-slate-800 md:px-10 py-4 flex font-noto-sans font-semibold select-none text-lg"

  return (
    <div className="bg-slate-900 text-indigo-100 w-full min-h-full">
      <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-start sm:pt-6 sm:pb-14 h-[81vh] sm:h-[92vh]">
        <img className="mt-14 sm:mt-0 w-3/5 md:w-1/3 lg:w-1/4 lg:mr-auto" src={"./george3.png"}></img>
        <div className='sm:hidden sm:w-1/2 m-auto min-h-full flex justify-center'>
          <h1 className='sm:hidden font-tangerine text-6xl sm:text-8xl p-8'>George Huber</h1>
        </div>
        <div className='hidden sm:flex sm:w-auto m-auto min-h-full flex justify-center' style={{
          transform:`translate(0,${navPercent<1?navPercent*y0/2:0}px)`
        }}>
          <h1 style = {{
              transform: `scale(${(1-navPercent)*0.5+0.5}) rotate(${3*360*(1-navPercent)}deg)`
            }} className='m-auto hidden sm:block font-tangerine text-6xl sm:text-8xl p-8'>George Huber</h1>
        </div>
      </div>
      <div ref={navRef} className={navPercent>1?headerClasses+" fixed":headerClasses}>
        {/*Make list space evenly on font adjust */}
        <ul className='list-none font-light text-xl w-full sm:w-2/3 flex flex-row justify-evenly ' >
        {navPercent>1?<li className='hidden sm:block font-tangerine text-3xl ' onClick={()=>animateScroll.scrollTo(0)}>George Huber</li>:""}
        <li className=''>
          <Link className="rounded " activeClass="font-bold" to="home" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className=''>
        <Link className=" rounded" activeClass="font-bold" to="me" spy={true} smooth={true} offset={0} duration={500}>
          Life Story
        </Link>
        </li>
        <li className=''>
        <Link className=" rounded" activeClass="font-bold" to="projects" spy={true} smooth={true} offset={0} duration={500}>
          Projects
        </Link>
        </li>
        
        </ul>
      </div>
      <Element name="home">
        <div className='min-h-screen'>

        </div>
      </Element>
      <Element name = "me">
        <div className='min-h-screen'>

        </div>
      </Element>
      <Element name = "projects">
        <div className='min-h-screen'>

        </div>
      </Element>
      
    </div>
  );
}

export default App;
