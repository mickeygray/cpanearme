import StickyNavbar from "../../components/StickyNavbar"
import UsMap from "../../components/UsMap"
import {useState} from "react"
import Footer from "../../components/Footer"
import fs from 'fs'
import path from 'path'

const Home = ({firms}) => {



const [firmList,setFirms] = useState(firms[0].firms)

  return (
    <div>
      <StickyNavbar/>
      <div className='bg-primary'>      
    <h3 className='text-center lead'>Click your state to load national and local firms that serve your tax and accounting needs</h3>
      <UsMap firmList={firmList} setFirms={setFirms}/>
    
      
    
      </div>
      <Footer />
    </div>

  )
}

export default Home

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const postsDirectory = path.join(process.cwd(), 'firms')
  const filenames = fs.readdirSync(postsDirectory)


  const firms = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const firms = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   firms,
    }
  })
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      firms,
    },
  }
}

