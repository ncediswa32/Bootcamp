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







 let images=[
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
]

let img = document.getElementById("image")


let current=0;

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
