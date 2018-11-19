//==================================================================
//SELECCIONAR ELEMENTO DEL DOM
// -- Hoja Home --
const buttonEncrypt=document.getElementById('btnEncriptar');
const buttonDecrypt=document.getElementById('btnDescriptar');

const sectionSidebar=document.getElementById('containerSlider');
const sectionHome=document.getElementById('containerHome');

const sectionEncrypt=document.getElementById('containerEncrypt');
const sectionDecrypt=document.getElementById('containerDecrypt');

//  --Hoja Encode--
const buttonEncode=document.getElementById('btnEncode');


//==================================================================
//ASOCIAR EL EVENTO A ESE ELEMENTO

// -- Hoja Home --
buttonEncrypt.addEventListener('click',funcEncrypt);
buttonDecrypt.addEventListener('click',funcDecrypt);

//  --Hoja Encode--
buttonEncode.addEventListener('click',funEncode);

//==================================================================
//EVENTO

sectionDecrypt.style.display='none';
sectionEncrypt.style.display='none';

// -- Hoja Home --
function funcEncrypt() {
    sectionSidebar.style.display='none' ;  
    sectionHome.style.display='none';
    sectionDecrypt.style.display='none';
    sectionEncrypt.style.display='block';
}

function funcDecrypt(){
    sectionSidebar.style.display='none';
    sectionHome.style.display='none';
    sectionEncrypt.style.display='none';
    sectionDecrypt.style.display='block';

}

//  --Hoja Encode--
function funEncode(){

    const offsetEncode=document.getElementById('offset').value;
    const messageEncode=document.getElementById('messageEncode').value;

    cipher.encode(offsetEncode,messageEncode);
}

//==================================================================
