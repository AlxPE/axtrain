function onTime(start) {
    document.getElementById('start60').setAttribute('style', 'pointer-events: none;');
    document.getElementById('start80').setAttribute('style', 'pointer-events: none;');
    document.getElementById('start30').setAttribute('style', 'pointer-events: none;');
    document.getElementById('poptime').style.display = 'table';
    document.getElementById('counter').innerHTML = start;
    start--;
    if (start < -1) {
        document.getElementById('poptime').style.display = 'none';
        document.getElementById('start60').setAttribute('style', 'pointer-events: all;');
        document.getElementById('start80').setAttribute('style', 'pointer-events: all;');
        document.getElementById('start30').setAttribute('style', 'pointer-events: all;');
        new Audio('http://soundbible.com/mp3/Car%20Alarm-SoundBible.com-2096911689.mp3').play();
    } else {
        setTimeout(function(){onTime(start)}, 1000);
    }
};

document.getElementById('start30').onclick = function(){
    onTime(30);
}
document.getElementById('start60').onclick = function(){
    onTime(60);
}
document.getElementById('start80').onclick = function(){
    onTime(80);
}
