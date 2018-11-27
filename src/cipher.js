window.cipher = {

 encode: function(offset, string){

          const offset1=parseInt(offset);
          
          let mesajeFinally='';

          for (let i = 0; i < string.length ; i++) {
            const codeAscci = string.toUpperCase().charCodeAt(i);    
           

            if (codeAscci===32 ) {
              
              mesajeFinally= mesajeFinally +' ';

            } else {
              
              mesajeFinally = mesajeFinally + String.fromCharCode(((codeAscci - 65 + offset1) % 26 )+ 65);

            }
           
          }
          
          return mesajeFinally;
         
 },

 decode:function(offset, string){

          const offset1=parseInt(offset);
          
          let mesajeFinally='';

          for (let i = 0; i < string.length ; i++) {

            const codeAscci = string.toUpperCase().charCodeAt(i);   
            
            const conditionForm=( (codeAscci - 65) - offset1 );
           
                  if (codeAscci==32) {

                    mesajeFinally=  mesajeFinally + ' ';
                  
                  } else {
                    
                      if (conditionForm > 0 || (  conditionForm % 26) === 0 ) {

                          mesajeFinally = mesajeFinally + String.fromCharCode(( conditionForm % 26  ) + 65);
                          
                        } else {
                
                          mesajeFinally=mesajeFinally + String.fromCharCode(( conditionForm % 26 + 26 ) + 65)
                      }
                  
                    }
                  
              }
          
          return mesajeFinally;
  

 },

    
};

//offset, string