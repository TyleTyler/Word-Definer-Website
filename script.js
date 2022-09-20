let input = document.querySelector(".input");
let definition = document.getElementById("definition")




let renderWord = (callBack)=> {
    let req = new XMLHttpRequest();
    req.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    req.addEventListener('readystatechange', ()=> {
        if(req.status === 200){
            console.log(JSON.parse(req.responseText))
           callBack(req, undefined)
        }
        else {
            callBack(undefined, "Not a word")
        }
        
    })


    req.send();
}
setInterval(
    function ()  {renderWord((data, err)=> {
              
            if(err){
                definition.innerText = err
            }
            else{
                let oudata = JSON.parse(data.responseText) 
                definition.innerText = oudata[0].word
            }
        })
    },
     1000
)

