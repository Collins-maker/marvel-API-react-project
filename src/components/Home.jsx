import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
   const [url, setUrl] =useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0471ed53491063817bbf28bb7d9dacf1&hash=d014678a8aa920f1c7069528ceed537f') 

   const [item, setItem]=useState();

   useEffect(()=>{
    const fetchItems=async()=>{
        try {
            const res= await axios.get(url);
       setItem(res.data.data.results);
        } catch (error) {
            console.error('error fetching Characters', error);
        }
       console.log("Items fetching")
    };
    fetchItems();
   },[url]);

  return (
    <div className='home'>
        <div className="hero-section">
           <h3>Celebrating 60 Years of Avengers</h3>
        </div>

    </div>
  )
}

export default Home