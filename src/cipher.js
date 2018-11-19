window.cipher = {

 encode: function(offset, string){
  
  const positionAscii=[] ;
  
  for (var i = 0; i < $cifrar.length ; i++) {

    console.log($offset);
    $positionAscii[i] = String.fromCharCode(($cifrar.charCodeAt(i)  - 65 + $offset) % 26 + 65) ;
}
  console.log(positionAscii);
 },

 decode:function(offset, string){
  console.log('objetodecode');

 }
};
//offset, string