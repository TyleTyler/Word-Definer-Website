let definition = document.getElementById("definition")
let input = document.querySelector(".input")



let renderWord = (aWord) => {
    return new Promise((resolve, reject) =>{
        let req = new XMLHttpRequest();
        try{ 
            req.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${aWord}`);}
        catch(err){
            console.log("This was not a word")
        }
        req.addEventListener('readystatechange', ()=> {
            if(req.status === 200 ){
                let word = JSON.parse(req.response)[0].word 
                resolve(word)
            }
            else(
                reject("Not a word")
            )
            
        })
        req.send();
    })
}


input.addEventListener("input",()=>{
    renderWord(input.value).then(word =>{
        definition.textContent = word   
}).catch(ntword => {
        definition.textContent = ntword
    })
})
