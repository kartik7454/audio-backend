


import { useState,useEffect } from "react";
import '../App.css';
import { Sidebar } from "../components/sidebar";

 
function Upload() {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    var [source, setsource] = useState('')
    var [thumbnail, setthumbnail] = useState('')
    
    const [tags, settags] = useState('educational')
    const [user, setuser] = useState('kartik')


    async function   handlesubmit2(e){
        const fileInput = document.getElementById("fileInput")
    
setthumbnail(fileInput.files[0])    
 console.log(fileInput.files[0])
   }


   async function   handlesubmit3(e){   
    const fileInput = document.getElementById("fileInput2")
 console.log(fileInput.files[0])
setsource(fileInput.files[0])
}

     async function handlesubmit1 (e){
        e.preventDefault() 

const formdata = new FormData();
formdata.append("title",title)
formdata.append("user",user)
formdata.append("desc",desc)
formdata.append("tags",tags)
formdata.append("thumbnail",thumbnail)
formdata.append("source",source)

       
  
      const response = await fetch('/',{
          method:"POST",
          body :formdata//convert to json from object
          
      })
      const json = await response.json()
      if (!response.ok){
    console.log(json.error)

      window.location.href = "http://localhost:3000/login";
      }
      if (response.ok){
         
        window.location.href = "http://localhost:3000/dashboard";

      }

    }
   
return(<div>
<Sidebar/>
<div className="uploadbox">
<form onSubmit={handlesubmit1}>
<label>title</label>
<input type="text"  className="uploadtitle" maxlength="50" onChange={(e)=>settitle(e.target.value)  } value ={title}></input>
<br></br>
<label>description</label>
<input type="textbox"  className="uploaddesc" maxlength="500" onChange={(e)=>setdesc(e.target.value)  } value ={desc}></input>
<br></br>
<label>thumbnail</label>
<input type="file" id="fileInput" accept=".jpg,.png" onChange={()=>(handlesubmit2() )  } ></input>
<br></br>
<label>video source</label>

<input type="file"   id="fileInput2" accept=".mp4" onChange={()=>(handlesubmit3() )   }  ></input>
<br></br>
<label>type</label>
<select  className="inputsel" onChange={(e)=>settags(e.target.value)  } value ={"educational"} >
    <option>tags</option>
    <option>educational</option>
    <option>comedy</option>
    <option>horror</option>
    <option>Interview</option>
    <option>business</option>
    
</select>
<br></br>
<button className="submit">submit</button>
</form>



</div>

</div>)


   
}

export { Upload}  ;