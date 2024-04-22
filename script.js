
let titles = ["Game Designer","Web Developer"];

let waitTime = 100;
let paused = false;
let curIndex = 0;
let val;
let type = document.getElementById("titles");
let G = document.getElementById("game");
let We = document.getElementById("web");
let projects = document.querySelector(".projects");

function sleep(ms){
    return new Promise((resolves) =>setTimeout(resolves, ms));

}

async function titleLoop(){
    while(true){
        console.log("called");
        if(!paused){
            
            let curInstruc = titles[curIndex];

                for (i = 0; i< curInstruc.length; i++){
                    type.innerText = curInstruc.substring(0, i +1);
                    await sleep(waitTime);
                }

                await sleep(waitTime * 10);

                for (let i = curInstruc.length; i > 0 ; i--){
                    type.innerText = curInstruc.substring(0, i - 1);
                    await sleep(waitTime);
                }

                await sleep(waitTime * 5);

                //cycling phrases that I have. 
                if(curIndex === titles.length -1){
                    curIndex = 0;
                }else{
                    curIndex++;
                }

        }else{

                await sleep(waitTime * 40);

        }
    }

}

function determineButtonsClick(){
    
    val = this.value;
    console.log(val);
    if(val != null){
        if(val == "ga"){
        console.log("loadingGames");
        highlightGames();
    }else{
        console.log("web is clicked");
        highlightWeb();
    }}

    }
    

function highlightGames(){
    // paused = true;
    G.style.background= "#AA6373";
    We.style.background="transparent";
    projects.style.display ="flex";
    projects.style.background ="linear-gradient(#AA6373 0%,38%,#1A1B25 100%)";
    projects.innerHTML= `
            <div class="item">
            <a href="https://xshgames.itch.io/the-rat-city">
            <img src="assets/Asset4.png" />
            </a>
             <p>Rat City</p>
            </div>
          
            <div class="item">
            <a href="Doug.html">
            <img src="assets/Asset1.png" />
            </a>
             <p>Adventure with Doug</p>
            </div>
          
   `;
    // type.innerText = titles[0];
}

// function values(){
        
// }

G.addEventListener("click", determineButtonsClick);

document.addEventListener("DOMContentLoaded", function(){
    titleLoop();
})

function highlightWeb(){

    We.style.background="#AA6373";
    G.style.background = "transparent";
    projects.style.display ="flex";
    projects.style.background ="linear-gradient(#AA6373 0%,20%,#1A1B25 100%)";
    projects.innerHTML= `

            <div class="item">
            <a href="Ast_M.html">
            <img src="assets/Asset3.png" />
            </a>
            <p>Astro-movies</p>
            </div>
           

            <div class="item">
            <a href="Oyster.html">
            <img src="assets/Asset2.png" />
            </a>
            <P>NYC Oyster Projects</P> 
            </div>
    `;

}

We.addEventListener("click", determineButtonsClick);
// titleLoop();
