
import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
function InfoModal({addAlbumToList, modalOpened,setModalOpened}) {
  
  const [userid, setuserId] = useState();
  const [title, setTitle] = useState("");

  const theme = useMantineTheme();
      

  function handleNew(e){
   e.preventDefault()
    addAlbumToList(userid,title)
    setModalOpened(false)
    setTitle("");
    setuserId("")
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
            <h3>Add Album</h3>
            <div>

            <input type='number' 
                className='infoInput'
                 name='quantity'
                placeholder='UserId'
                value={userid}
                onChange={(e) => {
                  setuserId(e.target.value);
            }}
                />

                <input type='text' 
                className='infoInput'
                 name='title'
                placeholder='Title'
                value={title}

                onChange={(e) => {
              setTitle(e.target.value);
            }}
                />
            </div>
            <button className='addValue' onClick={handleNew}>Submit</button>
        </form>
      </Modal>

   
    </>
  );
}
export default InfoModal