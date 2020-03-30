/* Nom : Raballand
Prenom : Axel
Groupe : 4
*/
let data = [];
for(let i = 0;  i<5; i++)
    data.push({
        id: i,
        src:"cat"+i+".jpg",
        title: "Chat "+i
    })
for(let i = 0;  i<5; i++)
    data.push({
        id: i+5,
        src:"nightlife"+i+".jpg",
        title: "Nuit "+i
    })

// data.forEach(element => {
//     let display = document.getElementById("display");
//     let div1 = document.createElement("div").className("col m2");
//     display.appendChild(div1);
//     let div2 = document.createElement("div").className("card");
//     div1.appendChild(div2);
//     let div3 = document.createElement("div").className("card-image");
//     div2.appendChild(div3);
//     let img = document.createElement("img").src = "../../assets/images/"+element.src;
//     div3.appendChild(img);
// })

window.addEventListener("load",()=>{
    const display = document.querySelector("#display");
    data.forEach(elt =>{
        let div = document.createElement('div');
        div.setAttribute("class","col  m3");
        div.innerHTML = 
        `<div class="card">
            <div class="card-image">
                <img id = "${elt.title}" src="../../assets/images/${elt.src}">
                <span class="card-title">${elt.title}</span>
            </div>
            <div class="card-action">
                <a href="" @click="bonjour">This is a link</a>
            </div>
        </div>`
        
        display.appendChild(div);
        div.querySelector('a').addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(e.path[2].children[0].innerText);
            for (let index = 0; index < 5; index++) {
                let val = "Chat "+index
                if (val == e.path[2].children[0].innerText) {
                    let doc = document.getElementById(val);
                    doc.src = "../../assets/images/cat"+index+".jpg"
                }
            }
            for (let index = 0; index < 5; index++) {
                let val = "Nuit "+index
                if (val == e.path[2].children[0].innerText) {
                    let doc = document.getElementById(val);
                    doc.src = "../../assets/images/nightlife"+index+".jpg"
                }
            }
         });
    })

})