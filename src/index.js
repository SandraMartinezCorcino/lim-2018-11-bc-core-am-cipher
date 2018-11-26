//==================================================================
//SELECCIONAR ELEMENTO DEL DOM
// -- Hoja Home --
const buttonEncrypt=document.getElementById('btnEncriptar');
const buttonDecrypt=document.getElementById('btnDescriptar');

const sectionBanner=document.getElementById('container-banner');
const sectionHome=document.getElementById('containerHome');

const sectionEncrypt=document.getElementById('container-encode');
const sectionDecrypt=document.getElementById('container-decode');

const menuBar=document.getElementById('menu-bar');
//  --Hoja Encode--
const buttonEncode=document.getElementById('btnEncode');
const messageResult=document.getElementById('message-result');

const result480= document.getElementById('result-480'); 

// -- Hoja Decode --

const buttonDecode=document.getElementById('btnDecode');
//==================================================================
///ASOCIAR EL EVENTO A ESE ELEMENTO

sectionDecrypt.style.display='none';
sectionEncrypt.style.display='none';
messageResult.style.display='none';

// -- Hoja Home --

buttonEncrypt.addEventListener( 'click',() => {
    sectionBanner.style.display='none' ;  
    sectionHome.style.display='none';
    sectionDecrypt.style.display='none';
    sectionEncrypt.style.display='block';
   
});
buttonDecrypt.addEventListener('click',() => {
    sectionBanner.style.display='none';
    sectionHome.style.display='none';
    sectionEncrypt.style.display='none';
    sectionDecrypt.style.display='block';
});

//  --Hoja Encode--
    
//buttonEncode.addEventListener('click',funEncode);
menuBar.addEventListener( 'click',() =>{
    sectionHome.style.display='block';
    sectionBanner.style.display='block';
    if (sectionDecrypt.style.display==='block' ||  sectionEncrypt.style.display==='block') {
        sectionDecrypt.style.display='none';
        sectionEncrypt.style.display='none';
    } 
   
   
} );

result480.addEventListener('click',() => {
    const message=document.getElementById('message');
    message.style.display='block';
    result480.style.display='none';
});

buttonEncode.addEventListener('click',() => {
    const offsetEncode=document.getElementById('offset').value;
    const messageEncode=document.getElementById('messageEncode').value;
    const messageResult=document.getElementById('message-result');

    messageResult.style.display='block';
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
