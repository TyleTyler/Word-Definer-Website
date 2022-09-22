import colors from './map.js'

let definition = document.getElementById("definition")
let input = document.querySelector(".input")
let body = document.querySelector("body")
let heading = document.querySelector("h1")


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
                isnotWord("<span class = 'ntWord'> Not a word</span>")
            )
            
        })
        req.send();
    })
}


input.addEventListener("input",()=>{
   if(input.value.length === 0){
    definition.textContent = " " 
   }
   else if(Cap(input.value) === "Bounce-text"){
        input.addEventListener("input",()=>{
            input.classList.add("bounce")
            setTimeout(()=>{   
                input.classList.remove("bounce")
            }, 100)
   })
}
   else if(Cap(input.value) === "Rainbow-text"){
      input.classList.add("rainbowBorder")
      definition.classList.add("def")
      heading.classList.add("def")
      body.classList.add("rainbowMode")
      definition.innerHTML = `<span class = "display"> You have activated Rainbow Mode</span> `
   }
   else if(input.value === ":3"){
    let catSecret = document.querySelector(".nya")
    let keyword = "cat"
    definition.innerHTML = "<span class = 'ntWord'>Nya</span>"
    catSecret.src =`https://cataas.com/${keyword}/cute`
       setInterval(()=>{
            if(!(input.value === ":3" )){
                catSecret.src = " "
            }
       }, 1000)
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
        definition.innerHTML = ntWord
    })
   }

})

function Cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


