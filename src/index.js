//==================================================================
//SELECCIONAR ELEMENTO DEL DOM
// -- Hoja Home --
const buttonEncrypt=document.getElementById('btn_encriptar');
const buttonDecrypt=document.getElementById('btn_descriptar');

const sectionBanner=document.getElementById('container_banner');
const sectionHome=document.getElementById('container_home');

const sectionEncrypt=document.getElementById('container_encode');
const sectionDecrypt=document.getElementById('container_decode');

const menuBar=document.getElementById('menu_bar');
//  --Hoja Encode--
const buttonEncode=document.getElementById('btn_encode');
const messageResult=document.getElementById('message_result');

const result480= document.getElementById('result_480'); 

// -- Hoja Decode --

const buttonDecode=document.getElementById('btn_decode');
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
    const messageEncode=document.getElementById('message_encode').value;
    const messageResult=document.getElementById('message_result');

    messageResult.style.display='block';
    messageResult.innerHTML=cipher.encode(offsetEncode,messageEncode);
});

// -- Hoja Decode

buttonDecode.addEventListener('click',() => {
    
    const offsetDecode=document.getElementById('offset_decode').value;
    const messageDecode = document.getElementById('message_decode').value;
    const messageResultDecode=document.getElementById('message_result_decode');
    messageResultDecode.innerHTML=cipher.decode(offsetDecode,messageDecode);
} );

//==================================================================
