import StickyNavbar from "../../components/StickyNavbar"
import UsMap from "../../components/UsMap"
import {useState} from "react"
import Footer from "../../components/Footer"

const Home = ({firms}) => {


const [,setFirms] = useState(firms)

  return (
    <div>
      <StickyNavbar/>
      <div className='bg-primary'>      
    <h3 className='text-center lead'>Click your state to load national and local firms that serve your tax and accounting needs</h3>
      <UsMap firms={firms} setFirms={setFirms}/>
    
      
    
      </div>
      <Footer />
    </div>

  )
}

export default Home

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const firms = [
  {
    name: "Nationwide Tax Experts",
    website: "https://www.ntetax.com",
    phone:"800-222-2222",
    stars: 4,
    email:"info@nte.com",
    cpa: "Gina Lee",
    cpapic:"/ginalee.jpg",
    cpabio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia ratione accusamus odit omnis sit quidem atque, explicabo nulla dignissimos?",
    years:"20 years",
    states:["AL","AK","AZ","AR","CA","CO","CT","OH","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
    types:["Federal Income Tax", "State Income Tax", "Corporate Structuring", "Tax Preparation"],
    minimum: "$10,000",
    cost:"$5000",
    address: "123 123 St",
    city: "New York",
    state: "Ny",
    exploration:"$500",
    logo: "/ntetax-logo.png",
    avgsavings:"95%",
    services:{
      federal:["Tax Preparation","Audit Representation","Offer In Compromise","Collection Due Process","Hardship"],
      state:["Tax Preparation","Audit Representation", "Sales Tax Forgiveness", "Payment Plans"],
      accounting:["Corporate Structuring","Annuity And Retirment Accounts", ]
    },
    pros: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    cons: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    profileCopy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus odio obcaecati nisi tenetur et ea cumque? Dolorem aliquam cum sunt sint beatae? Amet tempora fugit, qui repellat, deleniti autem suscipit perferendis placeat harum nulla, neque eos sit earum at quaerat! Quo sed officia consequuntur voluptates, facilis deserunt iure vero.",
    bbb: "https://www.bbb.org/us/ca/huntington-beach/profile/tax-consultant/nationwide-tax-experts-inc-1126-100075576",
     reviews: [{reviewer:"Steve Dingle", date:'1/1/2020', review: "Love Dat!",pic:"/stevedingle.jpeg"}, {reviewer: "Bang Dang", date:'1/1/2020',review: "Hate Dat!",pic:"/bangdang.jpg"}],
    fees: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos ex delectus cum veniam voluptate, possimus deserunt iusto optio inventore eveniet quibusdam perferendis ducimus eos ipsam itaque vitae. Eius, consectetur.",
  },
    {
    name: "Anthem Tax",
    website: "https://try.anthemtaxes.net/",
    phone:"800-222-2222",
    stars: 4,
    email:"info@nte.com",
    cpa: "Gina Lee",
    cpapic:"/ginalee.jpg",
    cpabio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia ratione accusamus odit omnis sit quidem atque, explicabo nulla dignissimos?", 
    years:"20 years",
    states:["AL","AK","AZ","AR","CA","CO","CT","DE","OH","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
    types:["Federal Income Tax", "State Income Tax", "Corporate Structuring", "Tax Preparation"],
    minimum: "$10,000",
    cost:"$5000",
    address: "123 123 St",
    city: "New York",
    state: "Ny",
    exploration:"$500",
    logo: "/anthemlogo.png",
    services:{
      federal:["Tax Preparation","Audit Representation","Offer In Compromise","Collection Due Process","Hardship"],
      state:["Tax Preparation","Audit Representation", "Sales Tax Forgiveness", "Payment Plans"],
      accounting:["Corporate Structuring","Annuity And Retirment Accounts", ]
    },
    pros: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    cons: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    profileCopy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus odio obcaecati nisi tenetur et ea cumque? Dolorem aliquam cum sunt sint beatae? Amet tempora fugit, qui repellat, deleniti autem suscipit perferendis placeat harum nulla, neque eos sit earum at quaerat! Quo sed officia consequuntur voluptates, facilis deserunt iure vero.",
    bbb: "https://www.bbb.org/us/ca/canoga-park/profile/tax-return-preparation/anthem-tax-1216-703723",
    avgsavings:"95%",
    reviews: [{reviewer:"Steve Dingle", date:'1/1/2020', review: "Love Dat!",pic:"/stevedingle.jpeg"}, {reviewer: "Bang Dang", date:'1/1/2020', review: "Hate Dat!",pic:"/bangdang.jpg"}],
    fees: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos ex delectus cum veniam voluptate, possimus deserunt iusto optio inventore eveniet quibusdam perferendis ducimus eos ipsam itaque vitae. Eius, consectetur.",
  },
    {
    name: "Tax Advocate Group",
    website: "http://www.taxadvocategroup.com",
    phone:"800-222-2222",
    stars: 4,
    email:"info@nte.com",
    cpa: "Gina Lee",
    cpapic: "/ginalee.jpg",
    cpabio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia ratione accusamus odit omnis sit quidem atque, explicabo nulla dignissimos?",
    years:"20 years",
    states:["AL","AK","AZ","AR","CA","CO","CT","DE","DC","OH","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
    types:["Federal Income Tax", "State Income Tax", "Corporate Structuring", "Tax Preparation"],
    minimum: "$10,000",
    cost:"$5000",
    exploration:"$500",
    address: "123 123 St",
    city: "New York",
    state: "Ny",
    services:{
      federal:["Tax Preparation","Audit Representation","Offer In Compromise","Collection Due Process","Hardship"],
      state:["Tax Preparation","Audit Representation", "Sales Tax Forgiveness", "Payment Plans"],
      accounting:["Corporate Structuring","Annuity And Retirment Accounts", ]
    },
    pros: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    cons: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    profileCopy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus odio obcaecati nisi tenetur et ea cumque? Dolorem aliquam cum sunt sint beatae? Amet tempora fugit, qui repellat, deleniti autem suscipit perferendis placeat harum nulla, neque eos sit earum at quaerat! Quo sed officia consequuntur voluptates, facilis deserunt iure vero.",
    logo: "/tax-advocate-group-logo-small.png",
    avgsavings:"95%",
    bbb: "https://www.bbb.org/us/ca/valley-village/profile/tax-consultant/tax-advocate-group-llc-1216-1266916",
   reviews: [{reviewer:"Steve Dingle", date:'1/1/2020', review: "Love Dat!",pic:"/stevedingle.jpeg"}, {reviewer: "Bang Dang", date:'1/1/2020', review: "Hate Dat!",pic:"/bangdang.jpg"}],
    fees: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos ex delectus cum veniam voluptate, possimus deserunt iusto optio inventore eveniet quibusdam perferendis ducimus eos ipsam itaque vitae. Eius, consectetur.",
  },
    {
    name: "New York Tax Fags",
    website: "http://www.lemonparty.com",
    address: "123 123 St",
    city: "New York",
    state: "Ny",
    email:"info@nte.com",
    phone:"800-222-2222",
    stars: 4,
    cpa: "Gina Lee",
    cpapic: "/ginalee.jpg",
    cpabio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia ratione accusamus odit omnis sit quidem atque, explicabo nulla dignissimos?",
    years:"20 years",
    states:["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","OH","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
    types:["Federal Income Tax", "State Income Tax", "Corporate Structuring", "Tax Preparation"],
    pros: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    cons: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    minimum: "$10,000",
    cost:"$5000",
    avgsavings:"95%",
    fees: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos ex delectus cum veniam voluptate, possimus deserunt iusto optio inventore eveniet quibusdam perferendis ducimus eos ipsam itaque vitae. Eius, consectetur.",
    services:{
      federal:["Tax Preparation","Audit Representation","Offer In Compromise","Collection Due Process","Hardship"],
      state:["Tax Preparation","Audit Representation", "Sales Tax Forgiveness", "Payment Plans"],
      accounting:["Corporate Structuring","Annuity And Retirment Accounts", ]
    },
    profileCopy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus odio obcaecati nisi tenetur et ea cumque? Dolorem aliquam cum sunt sint beatae? Amet tempora fugit, qui repellat, deleniti autem suscipit perferendis placeat harum nulla, neque eos sit earum at quaerat! Quo sed officia consequuntur voluptates, facilis deserunt iure vero.",
    exploration:"$500",
    logo: "/newyork.webp",
    bbb: "https://www.bbb.org/us/ca/huntington-beach/profile/tax-consultant/nationwide-tax-experts-inc-1126-100075576",
    reviews: [{reviewer:"Steve Dingle", date:'1/1/2020', review: "Love Dat!",pic:"/stevedingle.jpeg"}, {reviewer: "Bang Dang", date:'1/1/2020', review: "Hate Dat!",pic:"/bangdang.jpg"}],
  },
]
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      firms,
    },
  }
}
