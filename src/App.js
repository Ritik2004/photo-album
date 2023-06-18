
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import  Pagination from './components/Pagination';

function App() {
  const[data, setData] = useState([]);
  const [updateAlbum, setUpdateAlbum] = useState({});
  
  //This state is uded to get nos od todos we want in a page
  const[todosPerPage, setTodosPerPage] = useState(10)
  const[currentPage, setCurrentPage] = useState(1);
  
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    setData(await response.json());
  }
 
  useEffect(()=>{
    getData();
  },[])
     
  const indexOfLastTodo = currentPage*todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo-todosPerPage

  const visibleData = data.slice(indexOfFirstTodo,indexOfLastTodo)
   console.log(visibleData)
  const deleteData = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,
     { method: 'DELETE'});
     const newdata = data.filter((data) => data.id !== id);
     
     setData(newdata); 
    alert("Your album deleted")
  } 
 
  const addAlbumToList = (userId, title) => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: data.length + 1,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());

    const album = {
      userId: userId,
      id: data.length + 1,
      title: title,
    };

    setData([...data, album]);
    alert("Your album added")
  };

  const updateAlbumInList = async (id, updateTitle, oldAlbum) => {
    const updatedAlbum = id < 100
      ? await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
          
            id: id,
            title: updateTitle,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((response) => response.json())
        : {
            id: id,
            title: updateTitle,
        };
    //  console.log(updatedAlbum)
    var updatedAlbums = data.map((album) => {
      if (album === oldAlbum) {
        return updatedAlbum;
      }
      return album;
    });
      console.log(id)
      updatedAlbums.filter((k,ind)=>{
       if(k?.id===id){
        k.title = updateTitle 
       }
    })
    // console.log(visibleData)
    // console.log(updatedAlbums, "updtaed")
    setData(updatedAlbums);
    alert("Update Successfully done");
  };
  return (
    <div className="App">
      <Navbar addAlbumToList={addAlbumToList}/>
      <div className="data">
         <Card data={visibleData} deleteData = {deleteData} album={updateAlbum}  updateAlbumInList={updateAlbumInList}/>
      </div>
      <Pagination totalPosts={data.length} postsPerPage={todosPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default App;
