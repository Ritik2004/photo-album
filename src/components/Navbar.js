import React from 'react'
import { useState } from "react"
import InfoModal from './InfoModal'


const Navbar = ({addAlbumToList}) => {
    const[modalOpened, setModalOpened] = useState(false)

  return (
    <div className='nav'>
    <h1>Photo Album</h1>
      <button onClick={()=>setModalOpened(true)}> + Add</button>
      <InfoModal addAlbumToList={addAlbumToList}
       modalOpened={modalOpened} 
       setModalOpened={setModalOpened}/>
    </div>
  )
}

export default Navbar
