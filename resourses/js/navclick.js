document.querySelector('#navig').addEventListener('click', function(){
    
   document.querySelector('#close').style.display='block'; 
   document.querySelector('.main-nav').style.display='block'; 
   document.querySelector('#navig').style.display='none'; 
    
    
});


document.querySelector('#close').addEventListener('click', function(){
    
   document.querySelector('#navig').style.display='block';
    
   document.querySelector(' .main-nav').style.display='none'; 
   document.querySelector('#close').style.display='none'; 
    
    
});