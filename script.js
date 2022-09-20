let div = document.querySelector("#word");





let renderWord = (callBack)=> {
    let req = new XMLHttpRequest();
    req.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/bonjour");
    req.addEventListener('readystatechange', ()=> {
        if(req.readyState === 4 && req.status === 200){
            console.log(JSON.parse(req.responseText))
           callBack(req)
        }
    })


    req.send();
}

renderWord((data)=> {
    let oudata = JSON.parse(data.responseText)
    div.innerText = oudata[0].word + " " +  oudata[0].meanings[1].definitions[0].definition
})
    

