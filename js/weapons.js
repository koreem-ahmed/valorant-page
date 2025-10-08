window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        document.querySelector('.nav').classList.remove('blur');
    } else if (window.scrollY > 0) {
        document.querySelector('.nav').classList.add('blur');
    }
});

function play(e) {
    var audio = document.getElementById("myAudio");
    if (e === 1){
        audio.src = "../sounds/Weapons/Pistols/classicSpray.mp3";
        audio.play();}
    else if(e === 2)
        {
        audio.src = "../sounds/Weapons/Pistols/frenzySpray.mp3";
        audio.play();}
    else if(e === 3)
        {
        audio.src = "../sounds/Weapons/Pistols/ghostSpray.mp3";
        audio.play();}
    else if(e === 4)
        {
        audio.src = "../sounds/Weapons/Pistols/sheriffSpray.mp3";
        audio.play();}
    else if(e === 5)
        {
        audio.src = "../sounds/Weapons/Shotguns/buckySpray.mp3";
        audio.play();}
    else if(e === 6)
        {
        audio.src = "../sounds/Weapons/Shotguns/judgeSpray.mp3";
        audio.play();}
    else if(e === 7)
        {
        audio.src = "../sounds/Weapons/Shotguns/shortySpray.mp3";
        audio.play();}
    else if(e === 8)
        {
        audio.src = "../sounds/Weapons/SMGs/spectreSpray.mp3";
        audio.play();}

    else if(e === 9)
        {
        audio.src = "../sounds/Weapons/SMGs/stingerSpray.mp3";
        audio.play();}
        
    else if(e === 10)
        {
        audio.src = "../sounds/Weapons/Rifles/vandalSpray.mp3";
        audio.play();}

    else if(e === 11)
        {
        audio.src = "../sounds/Weapons/Rifles/phantomSpray.mp3";
        audio.play();}

    else if(e === 12)
        {
        audio.src = "../sounds/Weapons/Rifles/guardianSpray.mp3";
        audio.play();}

    else if(e === 13)
        {
        audio.src = "../sounds/Weapons/Rifles/bulldogSpray.mp3";
        audio.play();}

    else if(e === 14)
        {
        audio.src = "../sounds/Weapons/Snipers/marshalSpray.mp3";
        audio.play();}

    else if(e === 15)
        {
        audio.src = "../sounds/Weapons/Snipers/operatorSpray.mp3";
        audio.play();}

    else if(e === 16)
        {
        audio.src = "../sounds/Weapons/LMGs/aresSpray.mp3";
        audio.play();}

    else if(e === 17)
        {
        audio.src = "../sounds/Weapons/LMGs/odinSpray.mp3";
        audio.play();}

    else if(e === 18)
        {
        audio.src = "../sounds/Weapons/Melee/knifeSwing.mp3";
        audio.play();}
}