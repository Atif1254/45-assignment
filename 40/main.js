"use strict";
function myAlbum(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = myAlbum("ali", "rang-e-mohabat");
let album2 = myAlbum("madad", "roshan andhera");
let album3 = myAlbum("ayaz", "mausam-e-dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
let album4 = myAlbum2("ali", "rang-e-mohabat", 30);
let album5 = myAlbum2("zain", "roshan", 35);
let album6 = myAlbum2("ayaz", "mausam");
