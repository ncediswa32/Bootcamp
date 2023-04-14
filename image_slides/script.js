 //let preview = document.getElementById("preview").value;
   //let next = document.getElementById("next").value;
    
   
   //images[3].style.display="block"
   //let n=1
//preview.onclick=function(){
    //for (let i=0;1<images.length; i++)
//images slides[i].style.display="none"
//images slides[n].style.display="block";

//}
//n++
//if(n>=images.length);
//i=0





//let show=getElementById("image")

 let images=[
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    
]

let img = document.getElementById("image")
let current=0

//let current = 0;
function add(){
    
    let Img = document.getElementById("img").value;
    images.push(Img)
    //document.getElementById()
 

}




function next(){

    let img = document.getElementById("image")

   
    current ++;
    if(current >= images.length){
        current=0;

    }
    img.src = images[current];
    
}

function prev(){

    let img = document.getElementById("image")

  
    current--;
    if(current<0){
     current= images.length-1;

    }
    img.src = images[current];
    
}


 let pictures = [
           "img1.jpg",
           "img2.jpg",
           "img3.jpg",
           "img4.jpg",
           "img5.jpg",
           "img6.jpg",
 ]
 localStorage.setItem("img",JSON.stringify(pictures))
//localStorage.getItem("img")
    







// function add (){
//     let img = document.getElementById("image").value;
//     images.push(img)
//     console.log(img)
    //document.getElementById()















/*function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      }  }*/