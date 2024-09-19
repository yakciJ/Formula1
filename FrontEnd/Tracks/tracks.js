document.getElementById("connect").addEventListener('click', connectToDB);

function connectToDB(){
    fetch('/connect');
    console.log("a")
}