
import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';



function UpdateModal({i,album, updateAlbumInList,modalOpened,setModalOpened}) {

  const [title, setTitle] = useState("");
 const theme = useMantineTheme();
 
 function handleUpdate(e){
  e.preventDefault();
  updateAlbumInList(title)

  setModalOpened(false)
  setTitle("");

  // const id = album.id;
  //   let updateTitle = document.getElementById('title-inp').value;
  //   console.log(updateTitle)

  //   if (updateTitle === '') {
  //     updateTitle = album.title;
  //   }
  // console.log(i, "updtaeddwnjjewfn")
  updateAlbumInList(i,title,album);

  }
 


  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        overlayProps={{
           color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form className='infoForm'>
            <h3>Update Album</h3>
            <div>
                <input type='text' 
                id='title-inp'
                className='infoInput'
                 name='title'
                placeholder='Title'
                value={title}
                onChange={(e)=>{
                  setTitle(e.target.value)
                }}
                />
            </div>
            <button className='addValue'  onClick={handleUpdate}>Submit</button>
        </form>
      </Modal>

   
    </>
  );
}
export default UpdateModal