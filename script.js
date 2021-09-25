var btntranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txtInput");
var outputDiv=document.querySelector("#output");
var serverURL = 'https://api.funtranslations.com/translate/morse.json'



function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function clickEventHandler(){
    //take input
    var inputText=txtInput.value; 
   fetch(getTranslationURL(inputText))
    .then((Response) => Response.json())
    // outputs in console -> .then(json => console.log(json.contents.translated)) 
    .then((json) => {
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })

};

btntranslate.addEventListener("click", clickEventHandler);
