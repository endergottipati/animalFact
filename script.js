var myclick=document.getElementById('clicker');
myclick.addEventListener('click',function(){

 var req=new XMLHttpRequest();

 req.open("GET",'https://cat-fact.herokuapp.com/facts/random',true);
  req.send();
 req.onload=function(){
   const json = JSON.parse(req.responseText);
   document.getElementById('halwa').innerText=JSON.stringify(json.text)
 }




});
