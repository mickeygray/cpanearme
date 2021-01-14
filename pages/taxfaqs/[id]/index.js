import { router, withRouter } from 'next/router'
import parse from "html-react-parser"
import StickyNavbar from "../../../components/StickyNavbar"
import Footer from "../../../components/Footer"
import Image from "next/image"
import path from "path"
import fs from "fs"
import {Head} from "next/document"

const BlogPage = ({blog}) => {

 let thisBlog = blog[0]
  
    return (
        <div>
                <Head>
        <title>CPA Near Me - Top Rated CPAs serving your state.</title>
        <link rel="canonical" href="http://CPANearMe.org/" />
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta> 
        <meta name="description" content="Free In depth recommendations for CPAs and Tax Attorneys. Find your next accountant. "/>
      </Head>
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
                   <h3 className="lead">{thisBlog.title}</h3>
                   <h5><i>{thisBlog.date}</i></h5>
                   </div>
                   <div className="m-2 container" style={{textIndent:'25px'}}>

                       <div>{parse(thisBlog.p1)}</div>
                       <br/>
                       <div className='all-center'><Image src={thisBlog.img2} alt='professional tax help and advice' height='300px' width='300px'/> </div>
                       <br/>
                       <div className="">{parse(thisBlog.p2)}</div>
                       <br/>
                       <div className="grid-2">
                           <div style={{margin:'auto'}}>{parse(thisBlog.p3)}</div>
                           <div><Image src={thisBlog.img3} alt='professional tax help and advice' height='600px' width='600px'/> </div>
                           </div>
                       <br/>
                       <div className="">{parse(thisBlog.p4)}</div>
                       <br/>
                       <div className="">{parse(thisBlog.p5)}</div>
                       </div>

                   </div>
  <Footer/>
                </div>
               
               
            
    )
}

export default withRouter(BlogPage)

export async function getStaticPaths() {

   const postsDirectory = path.join(process.cwd(), 'blogs')
  const filenames = fs.readdirSync(postsDirectory)


  const blogs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const blogs =  JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return blogs
    
  })



  return {
   paths: blogs[0].map(firm =>({ params: { id: firm.id}})), //firms[0].map(firm => { params: { id: firm.id}}),
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const postsDirectory = path.join(process.cwd(), 'blogs')
  const filenames = fs.readdirSync(postsDirectory)


  const blogs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const blogs =  JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return blogs
    
  })

  const blog = blogs[0].filter(blog => blog.id === params.id)
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      blog,
    },
  }
}