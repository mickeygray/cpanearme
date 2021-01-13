import StickyNavbar from "../../components/StickyNavbar"
import Footer from "../../components/Footer"
import Image from "next/image"


const About = () => {
    return (
        <div>
           <StickyNavbar/>
           <div className='container'>
               <div className='grid-2c'>
                   <div>
                       <h3>Our Mission Statement:</h3> 

                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo aperiam totam dolores molestias corporis! Magnam quibusdam laboriosam obcaecati dolorem, illum, ullam et, recusandae laudantium commodi voluptatem porro. Ducimus corrupti cumque iste consequuntur architecto quam atque voluptatibus nostrum, ipsam ipsum, excepturi non accusantium corporis repellat aliquam tempore libero earum porro debitis? </p> 
                   
                     <div className='grid-2'> <div><input
              type='text'
              name='fullName'
              placeholder='Full Name'
          
            />
            <input
              type='text'
              name='email'
              placeholder='e-mail'
     
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'

            />
            <textarea />
            <button className='btn btn-dark'> Leave A Message </button>
            </div> <div><Image src="/about.jpg" alt='professional tax help and advice' height='200px' width='200px' /> </div>  </div>  
                   </div>

                   <div>
                       <h3>Our Advertising and Partnership Policy</h3>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium atque voluptatum aperiam natus excepturi corrupti dolorem iusto nobis quam ea odit eius totam aliquam neque amet inventore, quos cum eos ut sed architecto. Ad obcaecati laboriosam totam alias minima, inventore nulla beatae quo dicta eum! Vel omnis eveniet, nam dolorum autem ratione, reprehenderit, tenetur nostrum non aliquid reiciendis. Esse facere officiis odio. Rerum ut, ex cum expedita perferendis, assumenda explicabo consectetur ullam labore non quisquam. Natus, culpa neque. Voluptates! </p> 
                   </div>
               </div>
               <br/>
               <div className='all-center'>
                  <h3>As Seen On</h3> 
           <Image src="/asseenon.jpg" alt='professional tax help and advice' height='100px' width='600px' /> 
               </div>
           </div>
           <Footer/>
        </div>
    )
}

export default About
