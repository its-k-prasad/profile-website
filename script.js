console.log("Script is runnging");

document.querySelector(".cro").style.display = 'none';
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle('sidebargo')
     if(document.querySelector(".sidebar").classList.contains('sidebargo')){
        document.querySelector(".hm").style.display= 'inline'
                document.querySelector(".cro").style.display= 'none'
     }
     else{
         document.querySelector(".hm").style.display= 'none'
         setTimeout(() => {
              document.querySelector(".cro").style.display= 'inline'
         }, 300);
              
     }
})