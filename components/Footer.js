import Link from "next/link"
const Footer = () => {
    return (
        <div className='bg-dark navbar footer'>
          <h5>CPANearMe.com</h5>
         <ul>
           <li className='py-3'> <Link href='/taxfaqs'><a style={{color:'white'}}>Tax Faqs</a></Link> </li>
        <li className='py-3'> <Link href='/taxfiling'><a style={{color:'white'}}>Tax Filing Seminar</a></Link> </li>
        <li className='py-3'> <Link href='/taxcompanies'><a style={{color:'white'}}>Finding The Best CPA</a></Link> </li>
          <li className='py-3'> <Link href='/statetax'><a style={{color:'white'}}>State Tax Help</a></Link> </li>
        <li className='py-3'> <Link href='/about'><a style={{color:'white'}}>More About Us</a></Link> </li>    
         </ul>               
        </div>
    )
}

export default Footer
