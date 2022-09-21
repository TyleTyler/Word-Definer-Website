let definition = document.getElementById("definition")
let input = document.querySelector(".input")



let renderWord = (aWord) => {
    return new Promise((resolve, reject) =>{
        let req = new XMLHttpRequest();
        req.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${aWord}`);
        req.addEventListener('readystatechange', ()=> {
            if(req.status === 200){
                try{
                    let word = JSON.parse(req.response)[0]
    
                    resolve(word)
                }
                catch(err){
                    console.log("error")
                }
                
            }
            else(
                reject("Not a word")
            )
            
        })
        req.send();
    })
}


input.addEventListener("input",()=>{
   
    if(input.value.length === 0){
        definition.innerText = " "
    }  else{
      
    renderWord(input.value).then(word =>{
        definition.innerText = `${word.word} : `
        word.meanings.forEach(meaning => {
             meaning.definitions.forEach(definitions =>{
                definition.innerHTML += `<br> ${definitions.definition}`
             })
        })
}).catch(ntword => {
        definition.textContent = ntword
    })  
    }

})


