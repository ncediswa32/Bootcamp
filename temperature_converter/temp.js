//function converttemperature(f){
//}return converttemperature=(C*9/5)+32

//console.log(converttemperature(26));

//function convertT(f){
    //let c =(f-32)* 5/9;
    //if(c<16){
        //console.log("it is cold,wear jacket")
    //}
   // else if (c>=16 && c < 21){
        //console.log("it is warm,wear T-shirt & Jeans");
    //}
    //else{
        //console.log("it is hot,wear shorts");
    //}
//} 
//convertT(50)

function submit(){
    let number = document.getElementById("search").value;
    
let c =(number-32)* 5/9;
    if(c<16){
        alert("it is cold,wear jacket");
    }
    else if (c>=16 && c < 21){
        alert("it is warm,wear T-shirt & Jeans");
    }
    else{
        alert("it is hot,wear shorts");
    }

}

