import StickyNavbar from "../../components/StickyNavbar"
import BlogItem from "../../components/BlogItem"
import fs from 'fs'
import path from 'path'

const TaxFaqs = ({blogs}) => {

const entries = blogs[0].blogs


    return (
        <div>
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

