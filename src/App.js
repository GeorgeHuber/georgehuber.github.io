import logo from './logo.svg';
import './App.css';

import { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { Link, Element, animateScroll} from 'react-scroll'
import Sketch from "react-p5";

var y0 = null;

let head; 
let vel;
let headTrail = [];
let moveOnOwn = true;
let t = 0;
function App() {
  const navRef = useRef(null);
  const screenRef = useRef(null);

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


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth,window.innerHeight*.92).parent(canvasParentRef);
    p5.background(15, 23, 42 )
    head = p5.createVector(100,100);
    vel = p5.createVector(1,0)
  }

  const draw = (p5) => {
    t++;
    p5.background(15, 23, 42 )

    if (p5.mouseX<20 ||p5.mouseX>p5.width-20 || p5.mouseY<20 ||p5.mouseY>p5.height-20){
      moveOnOwn = true
    }
    let acc;
    //the mouse is idle or knob has reached target
    if(moveOnOwn){
      /*
      method 1
      let noise = p5.createVector(p5.noise(t*0.005)-0.5, p5.noise(t*0.005+10^6)-0.5);
      noise.normalize()
      let centripetal =  p5.createVector(p5.width/2-head.x,p5.height/2-head.y);
      //centripetal.normalize();
      centripetal.mult(0.005)
      acc = noise.add(centripetal)
      */
      let tan = vel.copy()
      tan.mult(p5.noise(t*0.005))
      let norm = p5.createVector(vel.x, vel.y,0).cross(p5.createVector(0,0,1));
      norm.mult(p5.noise(t*0.01+1000)-0.5)
      norm.mult(0.5)
      acc = tan.add(p5.createVector(norm.x, norm.y))
      acc.mult(0.001)
    }
    else{
      let difference = p5.createVector(p5.mouseX - head.x, p5.mouseY - head.y)
      acc = difference.copy()
    }
    
    
    acc.normalize()
    
    vel.add(acc)
    vel.mult(0.82)
    
    if(head.x<0+20 ){
      vel = p5.createVector(p5.abs(vel.x), vel.y)
    }
    if(head.x>p5.width-20){
      vel = p5.createVector(-p5.abs(vel.x), vel.y)
    }
    if(head.y<0+20){
      vel = p5.createVector(vel.x, p5.abs(vel.y))
    }
    if(head.y>p5.height-20){
      vel = p5.createVector(vel.x, -p5.abs(vel.y))
    }
    head.add(vel);
    p5.noStroke();
    p5.fill(255)
    p5.ellipse(head.x, head.y,10,10)
    //console.log(head)
    //p5.noFill()
    p5.fill(0)
    p5.strokeWeight(5);
    p5.stroke(255)
    p5.beginShape()
    for (let point of headTrail){
      //p5.ellipse(point.x, point.y,5,5)
      p5.curveVertex(point.x, point.y) 
    }
    p5.endShape()
    headTrail.push(head.copy())
    if(headTrail.length>150){
      headTrail.splice(0,1)
    }
    if(head.x>p5.mouseX-20 && head.x<p5.mouseX+20 && head.y>p5.mouseY-20 && head.y<p5.mouseY+20 ){
      moveOnOwn = true
    }
  }

  const onMove = (p5) => {
    moveOnOwn = false
    
    //p5.circle(p5.mouseX,p5.mouseY,10,10)
  }

  return (
    <div className="bg-slate-900 text-indigo-100 w-full min-h-full">
      {<Sketch setup={setup} draw={draw} mouseMoved={onMove}/>}
      <div ref ={screenRef} className="absolute top-0 w-screen flex flex-col items-center sm:flex-row-reverse justify-evenly sm:pt-6 sm:pb-14 h-[81vh] sm:h-[92vh]">
        <div className='mt-[12vh] sm:mt-0 flex flex-col items-center sm:flex-row-reverse sm:justify-start sm:pt-6'>
        <img className="w-3/5 md:w-1/3 lg:w-1/4 lg:mr-auto" src={"./george3.png"}></img>
        <div className='sm:hidden sm:w-1/2 m-auto min-h-full flex justify-center'>
          <h1 className='sm:hidden  font-tangerine text-6xl sm:text-8xl p-8 rounded'>George Huber</h1>
        </div>
        <div className='hidden sm:flex sm:w-auto m-auto min-h-full flex justify-center' style={{
          transform:`translate(0,${navPercent<1?navPercent*y0/2:0}px)`
        }}>
          <h1 style = {{
              transform: `scale(${(1-navPercent)*0.5+0.5}) rotate(${3*360*(1-navPercent)}deg)`
            }} className='  m-auto hidden sm:block font-tangerine text-6xl sm:text-8xl p-8 rounded'>George Huber</h1>
        </div>
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
