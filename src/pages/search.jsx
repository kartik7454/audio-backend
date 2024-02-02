

import { FaSearch } from "react-icons/fa";
import { useState,useEffect } from "react";
import '../App.css';
import { Sidebar } from "../components/sidebar";
import { Podcastbox } from "../components/podcastbox";

function Search() {

   function handlesubmit(){
     var value =   document.getElementById("searchbar").value;
    
     setvalue(value.toLowerCase())
  
     
   }

   const [Podcast, setPodcast] = useState(null)
   const [value, setvalue] = useState('')
   useEffect( ()=>{
      const fetchtodo  = async ()=>{
                
              const response = await fetch ('/podcast')
              const json = await response.json()
              
              
      
              if(!response.ok){
                   
                  ; 
                 
                 }
              if(response.ok){
               setPodcast(json)  
               
              }
              }
              fetchtodo()
              
              
              })



   return(<div><Sidebar />
    <h1 className="topbar"></h1>
    <div  className="searchbar"> <input type="text"   id="searchbar"></input>
    <button className="searchbtn" onClick={handlesubmit}><FaSearch /></button>
    </div>

    <div className="podcastcontainer">


    {   Podcast && Podcast.filter((item) =>{ 
      if(value === "") 
      {
      return}
      else{ var alo =item.title
      var bhalu = alo.toLowerCase()
      
      return (bhalu.includes(value))  }
    }).map((item)=>{ 
          

          return <Podcastbox
          id ={item._id}
          image ={item.thumbnail}
          title={item.title} 
          desc={item.desc}
          source={item.source}
          time= {item.createdAt}
          user={item.user}
          />
        })}
    </div>
    </div>
    
    
   ) 

   
}

export { Search}  ;