window.cipher = {

 encode: function(offset, string){

          const offset1=parseInt(offset);
          
          let mesajeFinally='';

          for (let i = 0; i < string.length ; i++) {
            const codeAscci = string.toUpperCase().charCodeAt(i);    
            console.log(typeof(codeAscci) );

            if (codeAscci===32 ) {
              
              mesajeFinally= mesajeFinally +' ';

            } else {
              
              mesajeFinally = mesajeFinally + String.fromCharCode(((codeAscci - 65 + offset1) % 26 )+ 65);

            }
           
            console.log((codeAscci - 65 + offset1) % 26);
            console.log(mesajeFinally );
          }
          
          return mesajeFinally;
         
 },

 decode:function(offset, string){

          const offsets=parseInt(offset);

         // const nuevoOffset =  offsets % 26;
          
          let mesajeFinally='';

          for (let i = 0; i < string.length ; i++) {

            const codeAscci = string.toUpperCase().charCodeAt(i);   
            
            const conditionForm=( (codeAscci - 65) - offset );

            console.log('conditionForm'+conditionForm);
          
          if (conditionForm > 0 || (  conditionForm % 26) === 0 ) {

               
                  mesajeFinally = mesajeFinally + String.fromCharCode(( conditionForm % 26  ) + 65);

                console.log('>=0');
            
          } else {
            

                    mesajeFinally=mesajeFinally + String.fromCharCode(( conditionForm % 26 + 26 ) + 65)
                    console.log('<0');
          }
           
            console.log(mesajeFinally );
          }
          
          return mesajeFinally;
  

 },

    
};
//offset, string