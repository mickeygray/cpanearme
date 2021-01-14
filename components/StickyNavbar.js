import Link from "next/link"
import {useState, useEffect} from "react"

import Image from 'next/image'

const StickyNavbar = () => {
  const [style, setStyle] = useState({});
let position
if (process.browser) {
  position = window.pageYOffset;
}

  const onClick = () => {
    if (process.browser) {  window.scrollTo(0, 0)}
  
  };
  useEffect(() => {
        if (process.browser) {
    window.addEventListener("scroll", onScroll);
    setStyle({
      backgroundColor: "#f4f4f4",
      overflowY: "hidden",
      width: "95vw",
      marginLeft: "100px",
      overflowX: "hidden",
    });
  }
  }, []);


  useEffect(() => {
    if (position === 0) {
      setStyle({
        backgroundColor: "rgba(52, 52, 52, 0.1)",
        zIndex: "999999999999999",
      });
    }
  }, [position, setStyle]);

  const onScroll = () => {
    setStyle({
      overflowY: "hidden",
      overflowX: "hidden",
      position: "sticky",
      top: "0",
      background: "black",
      zIndex: "999999999999999",
    });
  };

  return (
    <div onScroll={onScroll} style={style}>
   
   <div className="grid-2a">
     <div className="p-1">     <Link href="/"><Image
          onClick={onClick}
            src={style.background=== "black" ? "/logo2.png" : "/logo.png"}
            alt='Find Nationally Rated CPA Firms Near Me'
    
              width= "200px"
              height= "100px"
         
 
          /></Link> <h5>CPA Near Me</h5>  </div>
     <div >        <ul className='navbar'>
        <li className='py-3'> <Link href='/taxfaqs'><a style={{display:'block', borderRadius:'10px'}} className={style.background === "black" ? "btn btn-light" : 'btn btn-dark'}>Tax Faqs</a></Link> </li>
        <li className='py-3'> <Link href='/taxfiling'><a style={{display:'block',borderRadius:'10px'}} className={style.background === "black" ? "btn btn-light" : 'btn btn-dark'}>Tax Filing Seminar</a></Link> </li>
        <li className='py-3'> <Link href='/taxcompanies'><a style={{display:'block',borderRadius:'10px'}} className={style.background === "black" ? "btn btn-light" : 'btn btn-dark'}>Finding The Best CPA</a></Link> </li>
          <li className='py-3'> <Link href='/statetax'><a style={{display:'block',borderRadius:'10px'}} className={style.background === "black" ? "btn btn-light" : 'btn btn-dark'}>State Tax Help</a></Link> </li>
        <li className='py-3'> <Link href='/about'><a style={{display:'block',borderRadius:'10px'}} className={style.background === "black" ? "btn btn-light" : 'btn btn-dark'}>More About Us</a></Link> </li>
        </ul></div>
   </div>
       

    
 
    </div>
  );
};

export default StickyNavbar;
