import { withRouter } from 'next/router'
import parse from "html-react-parser"
import StickyNavbar from "../../../components/StickyNavbar"
import Footer from "../../../components/Footer"
import Image from "next/image"

const BlogPage = props => {

let blog

 if(props){
blog = JSON.parse(props.router.query.data) 
 }



    return (
        <div>
            <StickyNavbar />
            <div className="container bg-light">
                <div className="grid-2">
                <div>
                 <h2>Tax FAQs</h2>
                </div>
                <div>
                   
                </div>
                </div>
                <div className='all-center'>
                   <h3 className="lead">{blog.title}</h3>
                   <h5><i>{blog.date}</i></h5>
                   </div>
                   <div className="m-2 container" style={{textIndent:'25px'}}>

                       <div>{parse(blog.p1)}</div>
                       <br/>
                       <div className='all-center'><Image src={blog.img2} alt='professional tax help and advice' height='300px' width='300px'/> </div>
                       <br/>
                       <div className="">{parse(blog.p2)}</div>
                       <br/>
                       <div className="grid-2">
                           <div style={{margin:'auto'}}>{parse(blog.p3)}</div>
                           <div><Image src={blog.img3} alt='professional tax help and advice' height='600px' width='600px'/> </div>
                           </div>
                       <br/>
                       <div className="">{parse(blog.p4)}</div>
                       <br/>
                       <div className="">{parse(blog.p5)}</div>
                       </div>

                   </div>
  <Footer/>
                </div>
               
               
            
    )
}

export default withRouter(BlogPage)
