import React, { useEffect,useState } from 'react'
import Layout from './components/Layout/Layout'
import List from './components/List/List'
import Button from './components/UI/Button/Button'
import Midler from './components/Midler/Midler';

function App() 
  { 
    const[dota,setDota] = useState([]);
    const[page,setPage]= useState(1);
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => response.json())
        .then((data) => {
          setDota(data.results);
        });
    }, [page]);
 console.log(`https://rickandmortyapi.com/api/character/?page=${page}`)
 const next=()=>{
  setPage(page+1)
 }


const handleBack = () => {
  if (page > 1) {
    setPage(page - 1);
  }
};

  return (<>
 <Layout>  
  <Midler>
     <Button click={()=>handleBack()} text="<"></Button>
  <Button text={page}></Button>
  <Button click={()=>next()} text=">" disabled></Button>
  </Midler>


  <List array={dota}></List>
 
  </Layout>
 
 
 
    </> )
}

export default App