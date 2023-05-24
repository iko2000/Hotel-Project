import './pages.css'
import img1 from "../Static/Pics/1.jpg";
import img2 from "../Static/Pics/2.jpg";
import img3 from "../Static/Pics/3.jpg";
import img4 from "../Static/Pics/4.jpg";
import img5 from "../Static/Pics/5.jpg";
import img6 from "../Static/Pics/6.jpg";
import img7 from "../Static/Pics/7.jpg";
import img8 from "../Static/Pics/8.jpg";
import img9 from "../Static/Pics/9.jpg";
import img10 from "../Static/Pics/10.jpg";
import img11 from "../Static/Pics/11.jpg";
import img12 from "../Static/Pics/12.jpg";
import './gall.css';
import next from '../Static/Pics/next.JPG'
import prev from '../Static/Pics/prev.JPG'

import {useState} from 'react'




export default function Gallery() {
       const [currentpic, setCurrentpic] = useState(0);

   const pics = [img1, img2, img3 , img4, img5, img6, img7, img8, img9, img10, img11, img12]
    return (
        <div className="maindiv"> 
        <div className='gallerybox'>
            <div className='pic'> 
            <img src={pics[currentpic]} />
            </div>
            <div className='btn'> 
            <button onClick={() => {
                if(currentpic === 0) return
                setCurrentpic(currentpic - 1);
            }}><img className='btns' src={prev}/></button>
            <button onClick={() => {
                   if(currentpic === 11) return
                setCurrentpic(currentpic + 1);
            }}><img className='btns' src={next}/></button>

            </div>

            

            </div>
            </div>
    )
}

