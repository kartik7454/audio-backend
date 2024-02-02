import '../App.css';
 import {alo} from './video.jsx';
 import {redirect, useNavigate } from "react-router-dom"
 import { FaRegHeart } from "react-icons/fa";
const aloo = alo

function Podcastbox(props) {
  const history = useNavigate();


 async  function handleclick(title,desc,source){
     await aloo(title,desc,source)
    history("/video")
  }

   async function addtofav(id){
    const response = await fetch('/fav',{
      method:"POST",
      body :JSON.stringify({"id":id}),//convert to json from object
      headers:{
          'Content-Type':'application/json'
      }
  })
  const json = await response.json()
  if (!response.ok){
    
  console.log(json.error)
    // window.location.href = "http://localhost:3000/login";
  }
  if (response.ok){
     
      
      console.log(json.mssg)
  }
  

  }

  
  var  alo  = props.time
var  bhalu = alo.slice(0,10)
   return(
   <div className='Podcastbox' >
    <img className='pimg' src= {require("./images2/"+props.image)} onClick={()=>{handleclick(props.title,props.desc,props.source)}} ></img>
    <h3 className='ptitle'>{props.title}</h3>
    
    <h5 className='time'>{bhalu}</h5>
    <h3 className='favbtn' onClick={ ()=>{addtofav(props.id) } }><FaRegHeart /></h3>
    <h5>{props.user}</h5>
    


    
   </div>
    
    
   ) 

   
}

export { Podcastbox}  ;