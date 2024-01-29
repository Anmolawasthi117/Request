function changeButtonPosition() {
    const button = document.getElementById("noButton");
    const vw = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const vh = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    
    button.style.left = vw + "px";
    button.style.top = vh + "px";
}

function changeImages() {
    const image1 = document.getElementById("image1");

    // Replace this URL with your actual image URL for Image 1
    const newImage1URL = "https://i.pinimg.com/originals/cf/cc/16/cfcc166c3a0a13c4a135ae9d21da4d4d.gif";

    image1.src = newImage1URL;
}