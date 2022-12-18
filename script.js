function applyHover(x){
                
    x.children[1].children[1].style.width="50px";
    x.children[1].children[1].style.marginTop="-150px";
    x.children[1].style.flexDirection="column";
    x.children[1].children[1].style.marginLeft="150px";
    x.children[1].children[1].style.opacity="1";
    x.style.backgroundColor = "rgb(35, 35, 35)";
}

function removeHover(x){
    
    x.children[1].children[1].style.display="grid";
    x.children[1].children[1].style.marginTop="-100px";
    x.children[1].children[1].style.opacity="0";
    x.children[1].children[1].style.transition="all .5s"; 
    x.style.backgroundColor = "rgb(24, 24, 24)";
}

let audioElement = new Audio('Spotify/songs/Ae Dil Hai Mushkil.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progrssBar');
let songIndex = 0;

let songArr = [
    {songName:'Ae Dil Hai Mushkil Title Track (From "Ae Dil Hai Mushkil")', songPath:'Spotify/images/songs/Ae Dil Hai Mushkil.mp3'},
    {songName:'Phir Le Aya Dil (Reprise From "Barfi" Arijit Singh | Pritam)', songPath:'Spotify/images/songs/Phir Le Aya Dil.mp3'},
    {songName:'Channa Mereya (From "Ae Dil Hai Mushkil" Arijit Singh)', songPath:'Spotify/images/songs/Channa Mereya.mp3'},
    {songName:'Kalank - Title Track (From "Kalank" Arijit Singh | Pritam)', songPath:'Spotify/images/songs/Kalank.mp3'},
    {songName:'Laal Ishq (From "Goliyon Ki Raasleela Ram-Leela" Arijit Singh)', songPath:'Spotify/images/songs/Laal Ishq.mp3'},
    {songName:'Sanam Re (From "Sanam Re" Arijit Singh | Mithoon)', songPath:'Spotify/images/songs/Sanam Re.mp3'},
    {songName:'Soch Na Sake (From "Airlift" Arijit Singh | Tulsi Kumar)', songPath:'Spotify/images/songs/Soch na sake.mp3'},
    {songName:'Tu Chale (From "I" Arijit singh | Shreya Ghoshal | AR Rahman)', songPath:'Spotify/images/songs/Tu Chale.mp3'},
    {songName:'Tujhe Kitna Chahne Lage (From "Kabir Singh" Arijit Singh | Mithoon)', songPath:'Spotify/images/songs/Tujhe kitna chahne lage .mp3'},
    {songName:'Khamoshiyan (From "Khamoshiyan") Arijit Singh | Jeet Ganguly', songPath:'Spotify/images/songs/Khamoshiyan.mp3'}
]

masterPlay.addEventListener('click', function masterplay(){
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('gif').style.opacity="1";
        document.getElementById('gif').style.width="110px";
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        document.getElementById('gif').style.opacity="0";
        document.getElementById('gif').style.width="0px";
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    progressBar.value = progress;
});

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value*audioElement.duration)/100;
});

function playSong(x){
    songIndex = parseInt(x);
    document.getElementById('Title').textContent = songArr[songIndex].songName;
    audioElement.src = songArr[songIndex].songPath;
    
    audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('gif').style.opacity="1";
        document.getElementById('gif').style.width="110px";
}

function nextSong(){
    songIndex = songIndex+1;
    document.getElementById('Title').textContent = songArr[songIndex].songName;
    audioElement.src = songArr[songIndex].songPath;
    
    audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('gif').style.opacity="1";
        document.getElementById('gif').style.width="110px";
}

function previousSong(){
    songIndex = songIndex-1;
    document.getElementById('Title').textContent = songArr[songIndex].songName;
    audioElement.src = songArr[songIndex].songPath;
    
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementById('gif').style.opacity="1";
    document.getElementById('gif').style.width="110px";
}

