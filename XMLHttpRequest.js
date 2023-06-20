const req = new XMLHttpRequest();

req.onload = function (){
    console.log("IT LOAD");
    const data = JSON.parse(this.response)
}

req.onerror = function () {
    console.log("error")
}


req.open("GET","https://swapi.dev/api/people/1")
req.send();
