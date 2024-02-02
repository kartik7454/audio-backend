import '../App.css';
import {alo} from './video.jsx';
import {redirect, useNavigate } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa";
const aloo = alo

function Favbox(props) {
    function handleclick2(title,desc){
        aloo(title,desc)
        history("/video")
      }
 
    const history = useNavigate();
 async function handleclick(){
  console.log(props.id)
  const response = await fetch('/fav',{
    method:"DELETE",
    body :JSON.stringify({"id":props.id}),//convert to json from object
    headers:{
        'Content-Type':'application/json'
    }
})
const json = await response.json()
if (!response.ok){
  
console.log(json.error)
  
}
if (response.ok){
   
    
    
}

}



  var  alo  = props.time
var  bhalu = alo.slice(0,10)
   return(
   <div className='Podcastbox'>
    <img className='pimg' src={require("./images2/"+props.image)}></img>
    <h3 className='ptitle'>{props.title}</h3>
    
    <h5 className='time'>{bhalu}</h5>
    <h5>{props.user}</h5>
    <h3 className='delbtn'  onClick={()=>handleclick()}><FaTrashAlt /></h3>
   </div>
    
    
   ) 

   
}

export { Favbox}  ;