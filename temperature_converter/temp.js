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
   // let number = document.getElementById("search").value;
    
let c =(number-32)* 5/9;
if(!number) result.innerHTML("results")
else if (c<-273.15)result.innerHTML=("it can not be cold")

    else if(c<16){
        result.innerHTML(c+""+""+""+"it's cold,you might wear a jacket");
    }
    else if (c>=16 && c < 21){
        result.innerHTML("it is warm,wear T-shirt & Jeans");
    }
    else{
        result.innerHTML("it is hot,wear shorts");
    }

}

