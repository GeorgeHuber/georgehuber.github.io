import logo from './logo.svg';
import './App.css';

import { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { Link, Element, animateScroll} from 'react-scroll'
import Sketch from "react-p5";

import { HomeScreen } from './components/Home';
import { MeScreen } from './components/Me';
import { ProjectsScreen } from './components/Projects';

import { SocialDiv } from './components/Socials';

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
  const [blink, setBlink] = useState(false);

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

  const alternateCurrent = () =>{
    setBlink(b=>!b);
    //console.log(blink);
}

  useEffect(()=>{
    const blinkTimer = setInterval(()=>{
      alternateCurrent();
    }, 800);
     
    return () => {
      clearInterval(blinkTimer);
    };
  })
  
  useLayoutEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const headerClasses = "z-40 h-[8vh] shadow-xl justify-center items-center w-full top-0 left-0 bg-black md:px-10 py-4 flex font-noto-sans font-semibold select-none text-lg"


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth,window.innerHeight*.92).parent(canvasParentRef);
    p5.background(15, 23, 42 )
    head = p5.createVector(100,100);
    vel = p5.createVector(1,0)
  }

  const windowResized = (p5)=> {
    //p5.resizeCanvas(window.innerWidth,window.innerHeight*.92);
  }
  
  const draw = (p5) => {
    let halfScreen = p5.createVector(p5.width/2, p5.height/2)
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

      let testv = vel.copy();
      testv.add(head);
      testv.sub(halfScreen)

      let testh = head.copy();
      testh.sub(halfScreen)
      if (testv.mag()>testh.mag()){
        //p5.ellipse(10,10,20,20)
        testv.add(halfScreen)
        let s = (((p5.abs(testv.x-halfScreen.x))/halfScreen.x)**2 + ((p5.abs(testv.y-halfScreen.y))/halfScreen.y)**2)
        //p5.text(s.toFixed(3),30,30)
        norm.normalize()
        norm.mult(s**2*2)
          //12*12**(2.6*Math.sqrt(s)**1.5-2.6))
        //if (head.x<60 ||head.x>p5.width-60 || head.y<60 || head.y>p5.height-60){
          //norm.normalize()
          
        //}
      }
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
    
    //console.log(head)
    p5.noFill()
    //p5.fill(0)
    p5.strokeWeight(5);
    p5.stroke(255)
    p5.beginShape()
    var i = 0;
    for (let point of headTrail){
      i+=1;
      p5.curveVertex(point.x, point.y) 
    }
    var i = 0;
    p5.noStroke()
    for (let point of headTrail){
      i+=1;
      var col =parseInt(255*(i/headTrail.length))
      p5.fill(col,col)
      //optional sketch
      p5.rect(point.x-5, point.y-2,10,headTrail.length-i+4)
      
      p5.rect(point.x-5, point.y-5,10,10)
    }

    p5.noFill()
    p5.endShape()
    headTrail.push(head.copy())
    if(headTrail.length>150){
      headTrail.splice(0,1)
    }
    if(head.x>p5.mouseX-20 && head.x<p5.mouseX+20 && head.y>p5.mouseY-20 && head.y<p5.mouseY+20 ){
      moveOnOwn = true
    }

    p5.noStroke();
    p5.fill(255)
    p5.ellipse(head.x, head.y,20,20)
  }

  const onMove = (p5) => {
    moveOnOwn = false
    
    //p5.circle(p5.mouseX,p5.mouseY,10,10)
  }

  return (
    <div className={`relative font-noto-sans bg-slate-900 text-indigo-100 w-full min-h-full ${navPercent>1?`pt-[8vh]`:""}`}>
      {<Sketch setup={setup} draw={draw} mouseMoved={onMove} windowResized={windowResized}/>}
      <div ref ={screenRef} className="absolute top-0 w-screen flex flex-col items-center sm:flex-row-reverse justify-evenly sm:pt-6 sm:pb-14 h-[81vh] sm:h-[100vh]">
        <div className='mt-[12vh] sm:mt-0 flex flex-col items-center sm:flex-row-reverse sm:justify-start sm:pt-6'>
        <img className="w-3/5 sm:w-1/3 lg:min-w-1/4 lg:mr-auto" src={"./images/george3.png"}></img>
        <div className='sm:hidden sm:w-1/2 m-auto min-h-full flex justify-center'>
          <h1 className='sm:hidden  font-extrabold text-4xl sm:text-8xl p-8 rounded'>George Huber</h1>
        </div>
        <p  className='hidden relative sm:block m-auto text-xl font-normal'>
          Hello, I'm 
        <div className='hidden sm:flex sm:w-auto m-auto min-h-full flex justify-center' style={{
          transform:`translate(0,${navPercent<1?navPercent*y0/1.9:0}px)`
        }}>
          
          <h1 style = {{
              transform: `scale(${(1-navPercent)*0.5+0.5}) rotate(${3*360*(1-navPercent)}deg)`
            }} className='  m-auto hidden sm:block  text-4xl sm:text-6xl font-extrabold p-8 rounded'>George Huber</h1>
        </div>
        <SocialDiv></SocialDiv>
        <h1 className="absolute z-0 top-0 w-full h-full text-xl text-center pt-80 z" style={{ color: blink ? "white" : "rgba(0,0,0,0)" }}>&#9660;</h1>
        </p>
        
        </div>
      </div>
      <div ref={navRef} className={navPercent>1?headerClasses+" fixed":headerClasses+" sm:mt-[8vh]"}>
        {/*Make list space evenly on font adjust */}
        <ul className='list-none font-light text-xl w-full sm:w-2/3 flex flex-row justify-evenly ' >
        {navPercent>1?<li className='hidden sm:block  text-2xl  font-extrabold' onClick={()=>animateScroll.scrollTo(0)}>George Huber</li>:""}
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
            <HomeScreen></HomeScreen>
      </Element>
      <Element name = "me">
            <MeScreen></MeScreen>
      </Element>
      <Element name = "projects">
            <ProjectsScreen></ProjectsScreen>
      </Element>
      <div className='w-full h-[8vh] md:px-32 bg-black absolute bottom-0 z-30 flex flex-row items-center justify-around'>
        <h1>Copyright 2022 George Huber</h1> <a href="mailto:georgehuber8@gmail.com">georgehuber8@gmail.com</a>
      </div>
    </div>
  );
}

export default App;
