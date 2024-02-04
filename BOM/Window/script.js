let myWindow;
let width = document.getElementById(`width`);
let height = document.getElementById(`height`);
width.innerHTML = `Window of width is:` + window.innerWidth;
height.innerHTML = `Window of height is:` + window.innerHeight;
function openWindow() {
  myWindow = window.open(`https://www.google.com/`);
}
function closeWindow() {
    // myWindow.close()//ata kno kaj korlo na bujte parlam na
    window.close()
}
