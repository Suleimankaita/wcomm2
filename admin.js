 let show =document.getElementById("show")

const obj={
     y:110,
     x:0,
      yx:0.1
     
}


const grap=()=>{
  
      let div=document.createElement("div")
      let gr=document.getElementById("gr")
      div.style.height="200px"
     div.style.background="blue"
      div.style.width="2px"
    
      if(obj.y<=10){
        div.style.background="red"
        div.style.height="200px"
      }
      else if(obj.y<=10 || obj.y>10){
          div.style.background="blue"
          div.style.height="200px"
      }
      gr.appendChild(div)
}
grap()