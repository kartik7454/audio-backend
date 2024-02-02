


import { useState,useEffect } from "react";
import '../App.css';
import { Sidebar } from "../components/sidebar";
import { DBPodcastbox } from "../components/dashpodcastbox.jsx";
 
function Dashboard() {
    const [Podcast, setPodcast] = useState([null])
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
                  
                const response = await fetch ('/dashboard')
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
    <h1 id="ut" >YOUR UPLOADS</h1>

    {   Podcast.old && Podcast.old.map((item)=>{ 
          

          return <DBPodcastbox
          id ={item._id}
          image ={item.thumbnail}
          title={item.title} 
          desc={item.desc}
          time= {item.createdAt}
          user={item.user}
          />
        })}
    </div>

   
    
   
    </div>
    
   ) 

   
}

export { Dashboard}  ;