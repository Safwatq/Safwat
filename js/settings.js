// =================================
// Settings
// =================================

const SETTINGS = {

    ip:"192.168.4.1",

    websocket:"ws://192.168.4.1/ws",

    darkmode:true,

    mapZoom:18,

    speed:50,

    homePan:90,

    homeTilt:90

};

function saveSettings(){

localStorage.setItem(

"tracker",

JSON.stringify(SETTINGS)

);

}

function loadSettings(){

let s=localStorage.getItem("tracker");

if(s){

Object.assign(

SETTINGS,

JSON.parse(s)

);

}

}

loadSettings();
