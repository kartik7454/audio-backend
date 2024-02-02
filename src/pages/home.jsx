


import { useState,useEffect } from "react";
import '../App.css';
import { Sidebar } from "../components/sidebar";
import { Podcastbox } from "../components/podcastbox";

function Home() {
    const [state, setstate] = useState('all')
    const [Podcast, setPodcast] = useState(null)
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
                  
                const response = await fetch ('/podcast')
                const json = await response.json()
                
                
        
                if(!response.ok){
                     
                    window.location.href = "http://localhost:3000/login"; 
                   
                   }
                if(response.ok){
                 setPodcast(json)  
                 
                }
                }
                fetchtodo()
                
                
                })



   return(<div><Sidebar />
    <h1 className="topbar"></h1>
    <div className="filterbtndiv">
    <button onClick= { ()=> setstate("all")}  className="filterbtn">all</button>
    <button onClick= { ()=> setstate("educational")} className="filterbtn">educational</button>
    <button onClick= { ()=> setstate("comedy")} className="filterbtn">comedy</button>
    <button onClick= { ()=> setstate("horror")} className="filterbtn">horror</button>
    <button onClick= { ()=> setstate("interview")} className="filterbtn">interview</button>
    <button onClick= { ()=> setstate("business")} className="filterbtn">business</button>
    </div>
    <div className="podcastcontainer">


    {   Podcast && Podcast.filter((item) =>{ 
      if(state === "all") 
      {return  item}
      else{return  state === item.tags }
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

export { Home}  ;