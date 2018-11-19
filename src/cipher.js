window.cipher = {

 encode: function(offset, string){


  
          const positionAscii=[] ;

          const codeAscci=[];

          const offset1=parseInt(offset);
  
          for (var i = 0; i < string.length ; i++) {
            
            codeAscci[i]=string.toUpperCase().charCodeAt(i);

            if (codeAscci[i]==32) {
              positionAscii[i]=' ';
            } else {
              
              positionAscii[i] = String.fromCharCode((codeAscci[i]  - 65 + offset1) % 26 + 65) ;

            }
          
          }
          
          
          return positionAscii.join('');
         
 },

 decode:function(offset, string){

          const positionAscii=[] ;

          const offset1=parseInt(offset);

          const codeAscci=[];



          for (var i = 0; i < string.length ; i++) {

              codeAscci[i]=string.toUpperCase().charCodeAt(i);


              if (codeAscci[i]==32) {

                positionAscii[i]=' ';
              
              } else {
                console.log(offset1);
                console.log(codeAscci[i]);
                console.log(codeAscci[i]-65);
                console.log(codeAscci[i]-65 -offset1 );

                const conditionForm= Math.abs( codeAscci[i]-65 -offset1) ;

                console.log(conditionForm);

                if (conditionForm <= 26 ) {
                  
                  positionAscii[i] = String.fromCharCode(  ( codeAscci[i]-65) - offset1  % 26 + 65) ;

                } else  {
                  positionAscii[i]= String.fromCharCode(  ( codeAscci[i]-65) - offset1  % 26 + 91 );
                }


               

              }
          }
  
          return positionAscii.join('');
  

 }
};
//offset, string