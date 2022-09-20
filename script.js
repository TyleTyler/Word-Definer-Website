let definition = document.getElementById("definition")




let renderWord = (aWord) => {
    return new Promise((resolve, reject) =>{
        let req = new XMLHttpRequest();
        req.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${aWord}`);
        req.addEventListener('readystatechange', ()=> {
            if(req.status === 200 ){
                resolve("This is a word")
            }
            else(
                reject("Not a word")
            )
            
        })
        req.send();
    })
}


renderWord("AHHHHHHHHHH").then((word) =>{
    console.log(word)}
).catch(nrWord =>{
    console.log("This is not a real word")
})


// let getSomething = ()=>{
//     return new Promise((resolved, rejected) =>{
//         resolved("A word")

//         rejected("Not a word")
//     })
// }


// getSomething().then(data =>{
//     console.log(data)
// })

// let renderWord = () => {
//     return new Promise((resolved, rejected) =>{
//         let req = new XMLHttpRequest()
//         req.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
//         req.addEventListener('readystatechange', ()=>{
//             if(req.status === 200){
//                 resolved("Resolved!")
//             }
//             else{
//                 rejected("Not Resolved")
//             }
//         req.send();
//         })
//     })
// }

// renderWord().then(status =>{
//     console.log(status)
// })
