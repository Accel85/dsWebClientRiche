/* Nom : Raballand
Prenom : Axel
Groupe : 4
*/
const API_KEY = '360be32432aa4b51aaf8a3aa89a861f0';
const useSpoonApi = {
bySearch: (search) => new Promise((resolve, reject) => {
    const SPOON_API_URL = `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=${search}&apiKey=${API_KEY}`;

    fetch(SPOON_API_URL)
        .then(response => response.json())
        .then(jsonResponse => resolve(jsonResponse))
        .catch((err) => reject(err))
})}

window.addEventListener("load",()=>{
    document.getElementById("button").addEventListener("click",(e)=>{
        const display = document.querySelector("#display");
        e.preventDefault();
        let txt = document.querySelector("#search").value;
        console.log(txt);
        useSpoonApi.bySearch(txt).then(data => data.forEach(dt =>{
            console.log(dt);
            document.getElementById("display").innerHTML += dt.image+"<br>";
        }));
    });
})