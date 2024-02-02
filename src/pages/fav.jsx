


import { useState,useEffect } from "react";
import '../App.css';
import { Sidebar } from "../components/sidebar";
import { Favbox } from "../components/favbox.jsx";
 
function Fav() {
    const [Podcast, setPodcast] = useState([null])
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
                  
                const response = await fetch ('/fav')
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
   

    <div className="podcastcontainer">


    {   Podcast.old && Podcast.old.map((item)=>{ 
          var itm = item[0]
          return <Favbox
          id ={itm._id}
          image ={itm.thumbnail}
          title={itm.title} 
          desc={itm.desc}
          time= {itm.createdAt}
          user={itm.user}
          />
        })}
    </div>

   
    
   
    </div>
    
   ) 

   
}

export { Fav}  ;