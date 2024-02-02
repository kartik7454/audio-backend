



import '../App.css';


 var bhau  = null;
 var bhau2 = null; 
 var bhau3 = null;
  const alo =  async (title,desc,source)=>{

      bhau = title
      bhau2 = desc
      bhau3= source
      
}

function Video() {
      
   
   if(bhau3){return(<div> 
   
   <video className='video' width="90%" height="800" controls >
      <source src={
         require("./images2/"+bhau3)} type="video/mp4"/>
</video>
   <h1 className='vidtitle'>{bhau}</h1>
   <h4  className='viddesc'>{bhau2}</h4>
   </div>
  
  
  

   ) }
        
   
}

export {Video,alo}  ;