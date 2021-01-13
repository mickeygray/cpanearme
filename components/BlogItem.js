import Image from "next/image"
import {useRouter} from "next/router"
const BlogItem = ({blog}) => {

    const router = useRouter()



    return (
        <div style={{width:'700px'}}className='card bg-light grid-2'>
          <div> <h3><a onClick={() => {
        router.push({
          pathname: `/taxfaqs/${blog.id}`,
          query: { data: blog.id},
        })
      }}>{blog.title}</a></h3> <h5><i>{blog.date}</i></h5></div>
          <div><Image src={blog.img1} alt='professional tax help and advice' height='100px' width='100px' /> </div>

         
        </div>
    )
}


export default BlogItem
