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

    window.addEventListener("load",()=>{
        const display = document.querySelector("#display");
        data.forEach(elt =>{
            let div = document.createElement('div');
            div.setAttribute("class","col  m3");
            div.innerHTML = 
            `<div class="card">
                <div class="card-image">
                    <img src="../../assets/images/${elt.src}">
                    <span class="card-title">${elt.title}</span>
                </div>
                <div class="card-action">
                    <a href="" @click="bonjour">This is a link</a>
                </div>
            </div>`
            
            display.appendChild(div);
            div.querySelector('a').addEventListener("click",(e)=>{
                e.preventDefault();
                console.log(e.toElement.parentElement.offsetParent.firstElementChild.firstElementChild);
                e.toElement.parentElement.offsetParent.firstElementChild.innerHTML = `<img src="../../assets/images/abstract0.jpg"></img>`
             });
        })
    
    })