import colors from './map.js'

let definition = document.getElementById("definition")
let input = document.querySelector(".input")


console.log(colors.get(1))

let renderWord = (aWord) => {
    return new Promise((isWord, isnotWord) =>{
        let req = new XMLHttpRequest();
        req.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${aWord}`);
        req.addEventListener('readystatechange', ()=> {
            if(req.status === 200){
                try{
                    let word = JSON.parse(req.response)[0]
    
                    isWord(word)
                }
                catch(err){
                    console.log()
                }
                
            }
            else(
                isnotWord("Not a word")
            )
            
        })
        req.send();
    })
}


input.addEventListener("input",()=>{
   if(input.value.length === 0){
    definition.textContent = " " 
   }
   else if(Cap(input.value) === "Rainbow-text"){
      definition.style.color = (`${colors.get(1)}`)
   }
   else{
    renderWord(input.value).then(word =>{
        console.log(word.meanings)
        let fullWords = []
        definition.innerHTML = `<span class = "display">${Cap(word.word)} :</span> `
        word.meanings.forEach(meaning => {
            fullWords.push(`<br> ${Cap(meaning.partOfSpeech)} -`)
            meaning.definitions.forEach(definitions =>{ 
                for(let i = 0; i <fullWords.length; i++){
                    fullWords[i] += `<ul> <li>${definitions.definition}</li></ul>`
                }
             })
            })
        fullWords.forEach(entWord =>{
            definition.innerHTML += `${entWord}`
        })
    }).catch(ntWord =>{
        definition.textContent = ntWord
    })
   }

})

function Cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }