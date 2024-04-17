function ispalindrome = (input)=>{
   const str=string(input);
   let i=0;
   while(i<str.length/2){
         if(str[i]!==str[str.length-1-i]){
            return false;
        }
         i++;
         }
             return true;
        }
        const result = ispalindrome(ABCBA);
        console.log(result);
    
        
    
    

