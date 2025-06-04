console.log("Welcome to Spotify");

let audioElement = new Audio();
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// // Initialize the variables
// let songIndex = 0;
// let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// // let songItems = Array.form(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "2 Phut Hon Funk - MGD", filePath: "songs/2 Phut Hon Funk - MGD.mp3", coverPath: "covers/1.jpg"},
    {songName: "MATUSHKA ULTRAFUNK - satirin", filePath: "songs/satirin - MATUSHKA ULTRAFUNK (OUT ON SPOTIFY) - satirin.mp3", coverPath: "covers/2.jpg"},
    {songName: "MONTAGEN TOMADA", filePath: "songs/MONTAGEM TOMADA (Official Visualiser) - MXZI.mp3", coverPath: "covers/3.jpg"},
    {songName: "Freeze!", filePath: "songs/XXEPHYRR, FYUZHN - FREEZE! (PHONK) - Universal Sound Studio.mp3", coverPath: "covers/4.jpg"},
    {songName: "FUNK UNIVERSO", filePath: "songs/FUNK UNIVERSO (Slowed) - Irokz.mp3", coverPath: "covers/5.jpg"},
    {songName: "NCTS - NEXT!", filePath: "songs/ncts - NEXT! [Brazilian Phonk] - ncts.mp3", coverPath: "covers/6.jpg"},
    {songName: "OGRYZEK - EMPIRE", filePath: "songs/Ogryzek - EMPIRE (Official Visualiser) - Ogryzek.mp3", coverPath: "covers/7.jpg"},
    {songName: "FORSAKE - DEMONIC SPEED", filePath: "songs/DEMONIC SPEED - Forsake.mp3", coverPath: "covers/8.jpg"},
    {songName: "KARTIK - HAUNTED", filePath: "songs/Haunted - Kartik.mp3", coverPath: "covers/9.jpg"},
    {songName: "LOS VOLTAJE", filePath: "songs/LOS VOLTAJE - Sayfalse.mp3", coverPath: "covers/10.jpg"},
]

// songItems.forEach((element , i)=>{
//     console.log(element,i);
//     element.getElementByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })
// audioElement.play();

// Handle Play/pause click
// masterPlay.addEventListener('click',()=>{
//     if (audioElement.paused || audioElement.currentTime <= 0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listes to Events
audioElement.addEventListener('timeupdate', () =>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',() => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {  
//         makeAllPlays();
//         indexe = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${index+1}.mp3`;
//         audioElement.currentTime = 0;   
//         audioElement.play();
//         masterPlay.classList.remove('fa-paly-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     });
// }); 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        if(songIndex === index && !audioElement.paused) {
            // If clicking the same song that's playing, pause it
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        } else {
            // Play the clicked song
            makeAllPlays();
            songIndex = index;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[songIndex].filePath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
    });
});
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = index;  // Add this line
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = songs[songIndex].filePath;  // Add this line
//         audioElement.currentTime = 0;  // Add this line
//         audioElement.play();  // Add this line
//         masterPlay.classList.remove('fa-play-circle');  // Add this line
//         masterPlay.classList.add('fa-pause-circle');  // Add this line
//         gif.style.opacity = 1;  // Add this line
//     });
// });

// document.getElementById('next').addEventListener('click', () => {
//     if (songIndex >= 9){
//         songIndex = 0
//     }
//     else {
//         songIndex += 1;
//     }
//     audioElement.src = songs[songIndex].filePath;  
//     audioElement.currentTime = 0;  
//     audioElement.play();  
//     masterPlay.classList.remove('fa-play-circle');  
//     masterPlay.classList.add('fa-pause-circle'); 
// })

// document.getElementById('previous').addEventListener('click', () => {
//     if (songIndex <= 0){
//         songIndex = 0
//     }
//     else {
//         songIndex -= 1;
//     }
//     audioElement.src = songs[songIndex].filePath;  
//     audioElement.currentTime = 0;  
//     audioElement.play();  
//     masterPlay.classList.remove('fa-play-circle');  
//     masterPlay.classList.add('fa-pause-circle'); 
// })

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9){
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    makeAllPlays(); // Add this line
    let songItem = Array.from(document.getElementsByClassName('songItemPlay'))[songIndex]; // Add this line
    songItem.classList.remove('fa-play-circle'); // Add this line
    songItem.classList.add('fa-pause-circle'); // Add this line
    audioElement.src = songs[songIndex].filePath;  
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;  
    audioElement.play();  
    masterPlay.classList.remove('fa-play-circle');  
    masterPlay.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0){
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    makeAllPlays(); // Add this line
    let songItem = Array.from(document.getElementsByClassName('songItemPlay'))[songIndex]; // Add this line
    songItem.classList.remove('fa-play-circle'); // Add this line
    songItem.classList.add('fa-pause-circle'); // Add this line
    audioElement.src = songs[songIndex].filePath;  
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;  
    audioElement.play();  
    masterPlay.classList.remove('fa-play-circle');  
    masterPlay.classList.add('fa-pause-circle'); 
})