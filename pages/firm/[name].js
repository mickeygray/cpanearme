import { withRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import StickyNavbar from '../../components/StickyNavbar'
import ReviewItem from "../../components/ReviewItem"
import Footer from '../../components/Footer'

const Profile = props => {

const firm = JSON.parse(props.router.query.data)
   
    return (
        <div>
            <StickyNavbar/>
            <div className='container ' style={{backgroundColor:'#b0bec5'}}>
                <h3 className='text-primary'>{firm.name}</h3>
                <i>Founded {firm.years} ago</i>
     
                <div className="grid-3a">
                    <div className="card p-3">
                        Conact Info:<br/>  
                        {firm.address} <br/>
                        {firm.city}, {firm.state} <br/>
                        {firm.email} <br/>
                        {firm.phone}<br/>
                    </div>
                    <div> <h3 className='lead text-primary text-center'>About this company:</h3><br/>
                    <p style={{textIndent:'10px'}} className='py-1'>{firm.profileCopy}</p>
                    
                      </div>
                      <div>
                          <br/>
                          <br/>
                         On The Web: <br/>
                         <a href={firm.website} className='lead' >Their Site</a> <br/> 
                         <a href={firm.bbb} className='lead' >Their BBB</a>  
                      </div>
                </div>
                <br/>
                <div > <h3 className='text-center text-primary lead'> Meet The CPA </h3><br/>
                       <h4 className='text-center text-secondary lead'>{firm.cpa}</h4>
                        <div className='all-center round-img'>
                            <Image
            src={firm.cpapic}
            alt='Tax Expert CPA'
            className='round-img'
              width= "100px"
              height= "100px"
         
 
          /> </div> 
          <div className="mx-3">
              <p style={{textIndent:'10px'}}>{firm.cpabio}</p>
              </div>   
                
                </div>

        <br/>
        <br/>
                <div>
                   <h3 className='text-center text-primary lead'>Pros and Cons</h3>
                    <div className="grid-2">
                        <div className='card all-center'>Pros: <br/>
                        <ul>{firm.pros.map(pro=> (<li><i class="fas fa-plus"></i>{' '}{pro}</li>))}</ul>
                        </div>
                        <div className='card all-center'>Cons: <br/>
                        <ul>{firm.cons.map(con=> (<li><i class="fas fa-minus"></i>{' '}{con}</li>))}</ul>
                        </div>
                    </div>
                    </div>
<br/>
<br/>
                 <div><h3 className='text-center text-primary lead'>Services offered</h3> 
                    <div className="grid-3">
                        <div className='card'>Federal Tax : <br/>
                        <ul>{firm.services.federal.map(fed=> (<li><i class="fas fa-check"></i>{' '}{fed}</li>))}</ul>
                        </div>
                        <div className='card'>State Tax: <br/>
                        <ul>{firm.services.state.map(state=> (<li><i class="fas fa-check"></i>{' '}{state}</li>))}</ul>
                        </div>
                        <div className='card'>Accounting: <br/>
                        <ul>{firm.services.accounting.map(account=> (<li><i class="fas fa-check"></i>{' '}{account}</li>))}</ul>
                        </div>
                    </div>
                 </div>          
  <br/>
  <br/>
              <div>
                  <h3 className='text-center text-primary lead'>More About Their Fees:</h3>
                  
                    
   
                  <div className='text-center'> 
                  <h3>Pricing Information</h3>         
                     Minimum Debt: {firm.minimum} <br/>
                     Average Fees: {firm.cost} <br/>
                     Exploration Cost: {firm.exploration} <br/>
                     Average Client Savings: {firm.avgsavings}</div>
                
                  <p style={{textIndent:'10px'}}>{firm.fees}</p>
              </div>
<br/>
 <br/>                         <div>
                  <h3 className='text-center text-primary lead'>Read Real Customer Reviews:</h3>
                  <div className='all-center'>
                  {firm.reviews.map((review,i)=> (<ReviewItem review={review} key={i}/>))}
                  </div>
              </div>
            </div>
            <Footer/>
        </div>
    )
}

export default withRouter(Profile)
 