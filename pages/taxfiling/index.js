import StickyNavbar from "../../components/StickyNavbar"
import YouTube from "react-youtube"
import Image from "next/image"
const TaxHelp = () => {
const opts = {
              height: '350',
      width: '350',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,

    },
  };
    return (
        <div>
            <StickyNavbar/>
  <div className='container'>
      <div className='my-1'>
            <h1>Tax Filing Seminar</h1>
        <br/>
        <p> CPANearMe.com partners with some of the largest and best CPA, Tax Attorney and Tax Preparer firms across the country. One of our premier partners, Nationwide Tax Experts has provided a few step by step guides to how to handle all the major tax forms you may have to file. </p>
          </div>
          <div>
              <div className='my-3'>
              <div className='grid-2c'>

                  <div className='grid-2'>

                      <div>
                          <h3>English</h3>
                          <YouTube videoId='XrA_i2a8uvY' opts={opts} /></div>
                      <div>
                           <h3>Espanol</h3>
                          <YouTube videoId='XrA_i2a8uvY' opts={opts} /></div>
                  </div>
                  <div className='py-1'>
                      <h1 className='text-center'>1040-A</h1>
                <Image src="/seminar1.jpg" alt='free tax filing seminar ' height='300px' width='300px'/>
                  </div>
                
              </div>
              <div>
                  <h4>Form 1040-A  Personal Income Tax Return </h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque iure officia dolorum ut error quae, a esse, exercitationem, nisi odit mollitia laudantium? Enim delectus eveniet, asperiores velit cupiditate voluptatibus.</p>
              </div>
              
              </div>

            <div className='my-3'>
              <div className='grid-2c'>

                  <div className='grid-2'>

                      <div>
                          <h3>English</h3>
                          <YouTube videoId='ky2jesjFHvk' opts={opts} /></div>
                      <div>
                           <h3>Espanol</h3>
                          <YouTube videoId='ky2jesjFHvk' opts={opts} /></div>
                  </div>
                  <div className='py-1'>
                      <h1 className='text-center'>1099</h1>
                <Image src="/seminar2.jpg" alt='free tax filing seminar ' height='300px' width='300px'/>
                  </div>
                
              </div>
              <div>
                  <h4>Form 1099 - Independent Contractor Tax Return </h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque iure officia dolorum ut error quae, a esse, exercitationem, nisi odit mollitia laudantium? Enim delectus eveniet, asperiores velit cupiditate voluptatibus.</p>
              </div>
              
              </div>

              <div className='my-3'>
              <div className='grid-2c'>

                  <div className='grid-2'>

                      <div>
                          <h3>English</h3>
                          <YouTube videoId='UzOKOVSoUa4' opts={opts} /></div>
                      <div>
                           <h3>Espanol</h3>
                          <YouTube videoId='UzOKOVSoUa4' opts={opts} /></div>
                  </div>
                  <div className='py-1'>
                      <h1 className='text-center'>1120-S</h1>
                <Image src="/seminar3.jpg" alt='free tax filing seminar ' height='300px' width='300px'/>
                  </div>
                
              </div>
              <div>
                  <h4>Form 1120-S - S-Corporation Tax Return</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque iure officia dolorum ut error quae, a esse, exercitationem, nisi odit mollitia laudantium? Enim delectus eveniet, asperiores velit cupiditate voluptatibus.</p>
              </div>
              
              </div>

              <div className='my-3'>
              <div className='grid-2c'>

                  <div className='grid-2'>

                      <div>
                          <h3>English</h3>
                          <YouTube videoId='O7BI4wU-GTs' opts={opts} /></div>
                      <div>
                           <h3>Espanol</h3>
                          <YouTube videoId='O7BI4wU-GTs' opts={opts} /></div>
                  </div>
                  <div className='py-1'>
                      <h1 className='text-center'>1040-X</h1>
                <Image src="/seminar1.jpg" alt='free tax filing seminar ' height='300px' width='300px'/>
                  </div>
                
              </div>
              <div>
                  <h4>Form 1040 - X Amended Personal Income Tax </h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque iure officia dolorum ut error quae, a esse, exercitationem, nisi odit mollitia laudantium? Enim delectus eveniet, asperiores velit cupiditate voluptatibus.</p>
              </div>
              
              </div>
                  
                  
                  
             
                  
                  
            </div>
          </div>

        </div>
    )
}

export default TaxHelp