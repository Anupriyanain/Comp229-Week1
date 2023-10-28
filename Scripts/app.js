// IIFE- Immediately Invoked function Expression
"use strict";

(function(){
    
     function start(){  
        let myVariable = 20;
        console.log("my number is " + myVariable);
        
        for (let index = 0; index < myVariable; index++) {
              console.log("your number is "+ myVariable);
            
        }
        
    }

    window.addEventListener("load", start);

   
})();




