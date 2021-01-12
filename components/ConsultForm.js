import {useState} from "react"
import Image from "next/image"
import Link from "next/link"
const ConsultForm = props => {

   


    return (
  
              
       ( <div className='form bg-light p-3' style={{borderRadius:'20px'}}>
     <div className='btn' style={{display:'flex', flex:'right'}} onClick={props.closeModal}>X</div>
            <h5 className='text-center'>Set up a risk free consult with real accounting experts</h5>
            <form action="">
                
                <label htmlFor="">Name</label>
                <input type="text" name="" id=""/>                
                <label htmlFor="">Phone</label>
                <input type="text" name="" id=""/>
                <label htmlFor="">Email</label>
                <input type="text" name="" id=""/>
                <br/>
                <button className='btn btn-block btn-dark'>Get a Free Consult</button>
            </form>
            
        </div>)
       

        )
    
}

export default ConsultForm
