//==================================================================
//SELECCIONAR ELEMENTO DEL DOM
// -- Hoja Home --
const buttonEncrypt=document.getElementById('btnEncriptar');
const buttonDecrypt=document.getElementById('btnDescriptar');

const sectionSidebar=document.getElementById('containerSlider');
const sectionHome=document.getElementById('containerHome');

const sectionEncrypt=document.getElementById('container-encode');
const sectionDecrypt=document.getElementById('container-decode');

//  --Hoja Encode--
const buttonEncode=document.getElementById('btnEncode');

// -- Hoja Decode --

const buttonDecode=document.getElementById('btnDecode');
//==================================================================
///ASOCIAR EL EVENTO A ESE ELEMENTO

sectionDecrypt.style.display='none';
sectionEncrypt.style.display='none';

// -- Hoja Home --

buttonEncrypt.addEventListener( 'click',() => {
    sectionSidebar.style.display='none' ;  
    sectionHome.style.display='none';
    sectionDecrypt.style.display='none';
    sectionEncrypt.style.display='block';
});
buttonDecrypt.addEventListener('click',() => {
    sectionSidebar.style.display='none';
    sectionHome.style.display='none';
    sectionEncrypt.style.display='none';
    sectionDecrypt.style.display='block';
});

//  --Hoja Encode--
    
//buttonEncode.addEventListener('click',funEncode);


buttonEncode.addEventListener('click',() => {
    const offsetEncode=document.getElementById('offset').value;
    const messageEncode=document.getElementById('messageEncode').value;
    const messageResult=document.getElementById('message-result');

    messageResult.innerHTML=cipher.encode(offsetEncode,messageEncode);
});

// -- Hoja Decode

buttonDecode.addEventListener('click',() => {
    
    const offsetDecode=document.getElementById('offsetDecode').value;
    const messageDecode = document.getElementById('messageDecode').value;
    const messageResultDecode=document.getElementById('message-result-decode');
    messageResultDecode.innerHTML=cipher.decode(offsetDecode,messageDecode);
} );

//==================================================================
