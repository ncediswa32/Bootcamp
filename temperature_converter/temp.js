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
let numbr = document.getElementById("search").value
let c =(numbr-32)* 5/9;

results = document.getElementById("results")
results.innerHTML = c
    


if(!numbr) results.innerHTML = ("enter value")
else if(isNaN(numbr)) results.innerHTML = ("enter value")


else if (c < -273.15)results.innerHTML = ("it can not be this cold");

else if(c<16){
        results.innerHTML = (c+" "+"it's cold,carry a jacket");
    }
else if (c>=16 && c <21){
        results.innerHTML = (c+" "+"it is warm,wear T-shirt & Jeans");
    }
 else if(c>21)
        results.innerHTML = (c+" "+"it is hot,wear shorts");
    

}

