/*var loader=document.getElementById("flag");
window.addEventListener("load",function(){
loader.style.display="none";
} ) */
window.onload = function() {
    // Select the #flag element
    const flag = document.getElementById('flag');
    
    // Set the duration in milliseconds (e.g., 3000 = 3 seconds)
    setTimeout(() => {
      flag.classList.add('hidden'); // Add the 'hidden' class to hide the element
    }, 500);
  }; 
