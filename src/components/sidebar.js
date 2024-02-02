import '../App.css';



function Sidebar() {


  async  function handleclick(){

      const response = await fetch('/logout',{
         method:"DELETE"
        
     })
     const json = await response.json()
     if (!response.ok){
       
     console.log(json.error)
        window.location.href = "http://localhost:3000/";
     }
     if (response.ok){
        
         
         console.log(json.mssg)
     }


   }
   return(
    <div className="sidebar">
    <h1 className='title'>PODS</h1>  
    <a href="http://localhost:3000/" className='mainlinks'><h1>home</h1> </a>
    <a href="http://localhost:3000/search" className='mainlinks'><h1>search</h1> </a>
    <a href="http://localhost:3000/fav" className='mainlinks'><h1>fav</h1> </a>
    <a href="http://localhost:3000/upload" className='mainlinks'><h1>upload</h1> </a>
    <a href="http://localhost:3000/dashboard" className='mainlinks'><h1>DASHBOARD</h1> </a>
    
    <h1  className='mainlinks' onClick={handleclick}>logout</h1>
    </div>
    
    
   
   
   
   ) 

   
}

export { Sidebar}  ;