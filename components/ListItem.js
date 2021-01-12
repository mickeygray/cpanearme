import Link from "next/link"
import {useRouter} from "next/router"
import Image from "next/image"

const ListItem = ({firm}) => {

const router = useRouter()

//<Link href={firm.name}><a className='lead' style={{color:'#f4f4f4'}}></a></Link>

    return (

        <div className='card bg-secondary'>
        <div className='grid-3'>
        <div> Company: <br/> <p className='lead'>{firm.name}</p> </div>
        <div> Tele: <br/> <p className='lead'>{firm.phone}</p></div>
        <div className='text-right'><Image src={firm.logo} alt={firm.name} height='100px' width='200px'/></div>  
        </div>
        <div className='grid-3'> 
        <div className='card bg-light'>
         <h5>Average Cost</h5> <br/>
         <p className="lead">{firm.cost}</p>
        </div>
        <div className='card bg-dark'>
        <h5>Exploration Fees</h5> <br/>
         <p className="lead">{firm.exploration}</p>
        </div>
        <div className='card bg-light'>
        <h5>Minimum Debt Amount</h5> <br/>
         <p className="lead">{firm.minimum}</p>
        </div>
        </div>
        <div className='grid-3'>
            <div>
                <p>This company is best for</p>
                <ul>
                    {firm.types.map(type => <ul>{type}</ul>)}
                </ul>
            </div>
            <div>Rated: <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> 4/5 Stars</div>
            <div><a href={firm.website} className='lead' style={{color:'#f4f4f4'}}>View Their Site</a> <br/> 
            <a className='lead'
      onClick={() => {
        router.push({
          pathname: `/firm/${firm.name}`,
          query: { data: JSON.stringify(firm)},
        })
      }}
    >View Their Profile and Reviews</a>   
                 <br/>
                <a href={firm.bbb} className='lead' style={{color:'#f4f4f4'}}>View Their BBB</a> <br/>
            </div>
        </div>
</div>

     
    )
}

export default ListItem
