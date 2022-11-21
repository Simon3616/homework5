// Add js here.

function $(id){
	return document.getElementById(id)
};

var video = $('videoplayer');
// initilize
video.autoplay = false;
video.loop = false;
video.load();
var length = 0;
var curVolume = video.volume;
video.oncanplay=function(){
    length = video.duration;
}
var length = video.duration;
var play = $('play');
var pause = $('pause');
var slowDown = $('slower');
var speedUp = $('faster');
var skipAhead = $('skip');
var mute = $('mute');
var slider = $('slider');
var volumeText = $('volume');

// play
play.addEventListener('click',play_click,false);
function play_click(){
    video.play();
};

// pause
pause.addEventListener('click',pause_click,false);
function pause_click(){
    video.pause();
};

// slowDown
slowDown.addEventListener('click',slowDown_click,false);
function slowDown_click(){
    if(video.playbackRate <= 0){
        alert("Video is at slowest speed!");
    }else{
        video.playbackRate -= 0.5;
    }
    video.playbackRate=video.playbackRate.toFixed(2);
};

// fastest speed is 3x normal speed
speedUp.addEventListener('click',speedUp_click,false);
function speedUp_click(){
    if(video.playbackRate >= 3){
        alert("Video is at fastest speed!");
    }else{
        video.playbackRate += 0.5;
    }
    video.playbackRate = video.playbackRate.toFixed(2);
};

// Advance the current video by 15 seconds.If the video length has been exceeded go back to the start of the video.
skipAhead.addEventListener('click',skipAhead_click,false);
function skipAhead_click(){
    //console.log(length);
    if(video.currentTime > length - 15){
        video.currentTime = 0;
        video.pause();
    }else{
        video.currentTime += 15;
    }
};

// Mute/unmute the video and update the text in the button.
mute.addEventListener('click',mute_click,false);
function mute_click(){
    if(video.volume > 0){
        curVolume = video.volume;
        //console.log(curVolume);
        video.volume = 0;
        slider.value = 0;
        this.innerHTML = "unmute";
    }else{
        video.volume = curVolume;
        slider.value = curVolume*100;
        this.innerHTML = "Mute";
    }
    volumeText.innerText = slider.value;
};

// Change the volume based on the slider and update the volume information.
slider.addEventListener('click',slider_click,false);
function slider_click(){
    curVolume = slider.value/100;
    video.volume = curVolume;
    volumeText.innerText = slider.value;
}
