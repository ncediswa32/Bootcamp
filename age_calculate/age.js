//function agecult(years){
//let age =(2023-years);

//if  (age < 0)
    //return("age cannot be negetive")
    //else if (age >= 0) 
    //return age
  //else if(!years)
  //return("Enter year born")
 

//}
//console.log(agecult(2020))
function search(){
  let years = document.getElementById("search").value;

  let age =(2023-years);
  
if (!years) {

     alert("Enter year born")
  }
      else if (age >= 0) 
      alert(age)
    else if(age<0)
    alert("Age can't be a negetive")
}  
  
  





