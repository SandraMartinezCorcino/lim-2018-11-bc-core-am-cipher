describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() =>{
      assert.equal( cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ') ,'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    
    it('debería retornar espacio en blanco "HIJK LMN" para "ABCD EFG" con offest 33',() =>{
      assert.equal( cipher.encode(33,'ABCD EFG') ,'HIJK LMN');
    });

    it( 'deria retornar en mayuscula "HIJK" para "abcd" con offset 33 ',()=>{
      assert.equal(  cipher.encode(33,'abcd') , 'HIJK' );
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33' , ()=>{

      assert.equal( cipher.decode( 33,'HIJKLMNOPQRSTUVWXYZABCDEFG') , 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' );

    });

    it('deberia retorna espacio en blanco "ANA ANA " para "HUH HUH " con offest 33',()=>{

      assert.equal( cipher.decode(33,'HUH HUH'),'ANA ANA' );
    });

    
                           
  });

 /* describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });*/

});
