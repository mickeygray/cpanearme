import {useState,useEffect, useCallback} from 'react'
import USAMap from "react-usa-map";
import ConsultForm from './ConsultForm';
import ListItem from './ListItem';
const UsMap = ({firms,setFirms}) => {


const [modalState, setModalState] = useState(false)
 const [popupState, setPopupState] = useState(false)

const [modalStyle, setModalStyle] = useState({visibility:'hidden'})


useEffect(() => {
  const timer = setTimeout(() => {
    setModalStyle({visibility:'visible', width:'300px'})
    setPopupState(true)
  }, 5000);
  return () => clearTimeout(timer);
}, []);

const mapHandler = (event) => {
    setModalState(prevState => !prevState) 
   
    setFirms(firms.filter(firm => firm.states.includes(event.target.dataset.name)))
}



 const closeModal = useCallback (()=> setPopupState(prevState => !prevState),[])
 
    return (
    <div>
        <div style={{height:'80vh'}} className={popupState ? "grid-2" : "container"}>

       <div className={modalStyle.visibility==="visible" ? "all-center" : "container"}>
        <USAMap  onClick={mapHandler} />
        </div>
        {popupState ? 
        <div style={modalStyle}>
        <ConsultForm closeModal={closeModal} />
           </div>
        :''}
    
        </div>
                <div className ='container py-3 bg-primary'>
           {modalState ? firms.map(firm =>(
<ListItem firm={firm} key={firm.name}/>
      )) : ''}
        </div>
    </div>
    )
}

export default UsMap
