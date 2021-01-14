import StickyNavbar from "../../components/StickyNavbar"
import BlogItem from "../../components/BlogItem"
import fs from 'fs'
import path from 'path'
import {Head} from 'next/document'

const TaxFaqs = ({blogs}) => {

const entries = blogs[0].blogs


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
            <div className="container all-center">
            <h3>Tax FAQS:</h3>
  
            Our blog is updated monthly with a hand full of new issues related to accounting and taxes. <br/>Take a moment to review some of our most recent entries.  

            {entries.map(blog =>(<BlogItem blog={blog} key={blog.title}/>))}
            </div>

        </div>
    )
}

export default TaxFaqs

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const postsDirectory = path.join(process.cwd(), 'blogs')
  const filenames = fs.readdirSync(postsDirectory)


  const blogs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const blogs = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   blogs,
    }
  })
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      blogs,
    },
  }
}

