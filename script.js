
let titles = ["Game Designer", "Web Developer"];

let waitTime = 100;
let paused = false;
let curIndex = 0;
let val;
let type = document.getElementById("titles");
let G = document.getElementById("game");
let We = document.getElementById("web");
let projects = document.querySelector(".projects");
let sectionSelected = false;
function sleep(ms) {
    return new Promise((resolves) => setTimeout(resolves, ms));

}

async function titleLoop() {
    while (true) {
        console.log("called");
        if (!paused) {

            let curInstruc = titles[curIndex];

            for (i = 0; i < curInstruc.length; i++) {

                if (paused) {
                    break;
                }
                type.innerText = curInstruc.substring(0, i + 1);
                await sleep(waitTime);

            }

            await sleep(waitTime * 10);

            for (let i = curInstruc.length; i > 0; i--) {
                if (paused) {
                    break;
                }
                type.innerText = curInstruc.substring(0, i - 1);
                await sleep(waitTime);

            }

            await sleep(waitTime * 5);

            //cycling phrases that I have. 
            if (curIndex === titles.length - 1) {
                curIndex = 0;
            } else {
                curIndex++;
            }

        } else {

            if (val == "ga") {
                type.innerText = titles[0];
            } else {
                type.innerText = titles[1];
            }
            type.style.color = "#AA6373";
            await sleep(waitTime * 40);
            //paused = false;

        }
    }


}

function determineButtonsClick() {

    val = this.value;
    curr = document.getElementById("currents");
    curr.style.display = "none";
    paused = true;
    if (val != null) {
        if (val == "ga") {
            type.innerText = titles[0];

            highlightGames();
        } else {
            type.innerText = titles[1];
            highlightWeb();
        }
    }

}


function highlightGames() {
    // paused = true;
    G.style.background = "#AA6373";
    We.style.background = "transparent";
    projects.style.display = "flex";
    projects.style.background = "linear-gradient(#AA6373 0%,38%,#1A1B25 100%)";
    projects.innerHTML = `
             <div class="item">
            <a href="project_pages/GalaxBrain.html">
            <img src="assets/brainAsset.png" />
            </a>
             <p>Galaxy Brain</p>
            </div>

            <div class="item">
            <a href="project_pages/Rat.html">
            <img src="assets/Asset4.png" />
            </a>
             <p>Rat City</p>
            </div>
          
            <div class="item">
            <a href="https://xshgames.itch.io/final-prototype">
            <img src="assets/Asset1.png" />
            </a>
             <p>Adventure with Doug</p>
            </div>
          
   `;
    // type.innerText = titles[0];
}



G.addEventListener("click", determineButtonsClick);

document.addEventListener("DOMContentLoaded", function () {
    titleLoop();
    document.querySelector(".introHalf").addEventListener("click", function () {
        // alert("reloading page");
        window.location.reload();
    });
})

function highlightWeb() {

    We.style.background = "#AA6373";
    G.style.background = "transparent";
    projects.style.display = "flex";
    projects.style.background = "linear-gradient(#AA6373 0%,20%,#1A1B25 100%)";
    projects.innerHTML = `

            <div class="item">
            <a href="project_pages/Ast_M.html">
            <img src="assets/Asset3.png" />
            </a>
            <p>Astro-movies</p>
            </div>
           

            <div class="item">
            <a href="project_pages/Oyster.html">
            <img src="assets/Asset2.png" />
            </a>
            <P>NYC Oyster Projects</P> 
            </div>
    `;

}

We.addEventListener("click", determineButtonsClick);
// titleLoop();
