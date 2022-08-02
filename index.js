function validateform(){
    let name=document.getElementById("name").value;
    let fname=document.getElementById("fname").value;
    let _class=document.getElementById("_class").value;
    let department=document.getElementById("dep").value;
    let gender= document.querySelector( 'input[name="gender"]:checked'); 
    let relign= document.querySelector( 'input[name="rel"]:checked'); 
    let regno=document.getElementById("rno").value;
    let dob=document.getElementById("dob").value;
    let add=document.getElementById("address").value;
    let pno=document.getElementById("pno").value;
    

if(name==""){
    document.getElementById("nameerr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("nameerr").innerHTML=""
}
if(fname==""){
    document.getElementById("fnameerr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("fnameerr").innerHTML=""
}
if(regno==""){
    document.getElementById("rnoerr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("rnoerr").innerHTML=""
}

if(_class==""){
    document.getElementById("classerr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("classerr").innerHTML=""
}
if(department==""){
    document.getElementById("subjecterr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("subjecterr").innerHTML=""
}

if(gender==null) {
    document.getElementById("gendererr").innerHTML="plese select any one"; 
   
    } else {
      
        document.getElementById("gendererr").innerHTML=""; 
        gender=gender.value;
     
       }
       if(relign==null) {
        document.getElementById("relignerr").innerHTML="plese select any one"; 
       
        } else {
           
            document.getElementById("relignerr").innerHTML=""; 
            relign=relign.value;
         
           }
       
     
       
if(dob==""){
    document.getElementById("doberr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("doberr").innerHTML=""
}
if(pno==""){
    document.getElementById("pnoerr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("pnoerr").innerHTML=""
}
if(add==""){
    document.getElementById("adderr").innerHTML="please enter valid input"
}
else
{
    document.getElementById("adderr").innerHTML=""
}

let result={name,fname,regno,_class,department,gender,relign,dob,pno,add};

console.log(result)

}
