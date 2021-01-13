import StateItem from "../../components/StateItem";
import StickyNavbar from "../../components/StickyNavbar";
import Footer from "../../components/Footer";
import {Fragment} from 'react'
import fs from 'fs'
import path from 'path'



const StateTax = ({states}) => {



  return (
    <Fragment>
      <StickyNavbar />

      <div className='container'>
        <h3>
          If you are unsure as to whether or not you owe any state taxes and
          have received correspondance from a third party reguarding that debt,
          please take a moment and contact your home state at one of these
          links. If you need help reaching out to the state due to high call
          volume or for any other reason, contact one of our associated firms and they will help
          you walk through process of paying your taxes back.
        </h3>
        <div style={userStyle}>
          {states[0].states.map((state) => (
            <StateItem key={state.state} state={state} />
          ))}
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

const userStyle = {
  display: "grid",

  gridTemplateColumns: "repeat(3, 1fr)",

  gridGap: "1rem",
};

export default StateTax;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const postsDirectory = path.join(process.cwd(), 'states')
  const filenames = fs.readdirSync(postsDirectory)


  const states = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const states = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
   states,
    }
  })
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      states,
    },
  }
}