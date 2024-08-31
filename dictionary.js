const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const yourWord= document.querySelector(".your-word p");
const main = document.getElementById("main");


searchBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    getWord(search.value);
});

async function getWord(word){
    const response = await fetch(apiUrl + word);

    // if(response.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`){
    //     document.querySelector(".error").style.display = "block";
    //     document.querySelector(".your-word p").style.display = "none";
    //     document.querySelector(".definition p").style.display = "none";
    //     document.querySelector(".output p").style.display = "none";
    //     document.querySelector(".phonetic p").style.display = "none";
        
    // }else{
     var data = await response.json();
        console.log(data);
       main.innerHTML = ` <div class="your-word">
       <h4>your word:</h4>
       <p id="inp-word"><b>${data[0].word}</b></p>
        </div>
   
   <div class="definition">
       definition:
       <p class="parah" >${data[0].meanings[0].definitions[0].definition}</p>
   </div>
   <div class="output">
       part of speech:
       <p class="parah">${data[0].meanings[0].partOfSpeech}</p>
   </div>
   <div class="phonetic">
       phonetic:
       <p class="parah">${data[0].phonetic}</p>
   </div> 
   `; 
       
  
}


        // document.querySelector(".your-word p").innerHTML = data[0].word;
        // document.querySelector(".definition p").innerHTML = data[0].meanings[0].definitions[0].definition;
        // document.querySelector(".output p").innerHTML = data[0].meanings[0].partOfSpeech;
        // document.querySelector(".phonetic p").innerHTML = data[0].phonetic;

        
//     } 
// }

        // document.querySelector(".error").style.display = "none";
        // document.querySelector(".main").style.display = "block";
        // document.querySelector(".output p").style.display = "block";
        // document.querySelector(".your-word p").style.display = "block";
        // document.querySelector(".definition p").style.display = "block";
        // document.querySelector(".phonetic p").style.display = "block";
