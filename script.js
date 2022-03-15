function OnOff(){

    var imagem = document.getElementById('lampada').src;

    
    if(imagem == 'https://www.w3schools.com/js/pic_bulbon.gif')
    {
    	document.getElementById('lampada').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    }
    else if (imagem == 'https://www.w3schools.com/js/pic_bulboff.gif')
    {
    	document.getElementById('lampada').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    }
}
document.getElementById("lampada").addEventListener("click", OnOff);