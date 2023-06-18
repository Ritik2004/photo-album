import React from 'react'
import { useState } from "react";
import  Pagination from './Pagination';
import UpdateModal from './UpdateModal';

const Card = ({data, deleteData,album,updateAlbumInList}) => {

  const[modalOpened, setModalOpened] = useState(false)
  function handleDelete(id){
    deleteData(id)
  }
  console.log(data.id,"id")
 
  return (
    <div className='card'>
  
    {
        data.map((elem,i)=>(
           
            <div key={elem.id} className='structure'>
            
            <div className='info'>
          <h1>{elem.id}</h1>
          <h2>{elem.title}</h2>
       </div>
       <div className='btn'>
        <button className='b1' id='b' onClick={()=>setModalOpened(true)}>
        <i class="fa-solid fa-pen-to-square" style={{color:'black', size:'5px'}}></i>
        </button>
        
        <UpdateModal 
         
        i={elem.id-i}
        album={album} 
        updateAlbumInList = {updateAlbumInList}
        modalOpened={modalOpened} 
       setModalOpened={setModalOpened}/>
        <button className='b2' id='b' onClick={()=>handleDelete(elem.id)}>
        <i class="fa-solid fa-trash color" style={{color:'black', size:'5px'}}></i>
        </button>
       </div>
       </div>
       
        ))
    }
    
    </div>
  )
}

export default Card 
