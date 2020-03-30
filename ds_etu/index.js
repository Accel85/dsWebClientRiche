class Student {
    nom;
    prenom;
    sujetQ1;
    sujetQ2;
    sujetQ3;
    sujetQ4;

    constructor(nom, prenom,code) {
        if (code.length != 4)
            throw new Error("code invalide "+ code);
        this.nom = nom;
        this.prenom = prenom;
        this.sujetQ1 = code.substr(0,1);
        this.sujetQ2 = code.substr(1,1);
        this.sujetQ3 = code.substr(2,1);
        this.sujetQ4 = code.substr(3,1);
    }

}

const students = [
new Student("BARTHÉS","Antoine","3282"),
    new Student("BATARD","Baptiste","3184"),
    new Student("BENDREF","Léo","5609"),
    new Student("BERNARD","Adrien","5471"),
    new Student("BLANCHARD","Hugo","4201"),
    new Student("BOIS","Jean-Maël","9409"),
    new Student("BOURSIN","Baptiste","4145"),
    new Student("BOUVRON","Erwan","0331"),
    new Student("BRANCHAREL","Romain","2676"),
    new Student("CAMUS","Tanguy","6155"),
    new Student("CAPIAUX","Charles","0452"),
    new Student("CHASSERIAU","Hugo","2874"),
    new Student("CLOUET","Thomas","5792"),
    new Student("CLÉMOT","Kévin","7366"),
    new Student("COURTEILLE","Alexis","4575"),
    new Student("CRON","Benjamin","8829"),
    new Student("DA SILVA-CARREGA","Pablo","1358"),
    new Student("DARY","Nicolas","1942"),
    new Student("DEBART","Axel","6825"),
    new Student("DELMAIRE","Rémi","9539"),
    new Student("DEPIENNE","Guilhem","9226"),
    new Student("DUBOIS","Eliott","1979"),
    new Student("DUPUIS","Mattias","5160"),
    new Student("FORGET","Malory","3433"),
    new Student("FORSI DROBI","Hajar","3661"),
    new Student("GENDROT","Thomas","7708"),
    new Student("GICQUEL","Mathieu","0640"),
    new Student("GIGAUD","Loïs","7123"),
    new Student("GOBIN","Matthieu","3816"),
    new Student("GOUIN","Hugo","4039"),
    new Student("GOUPIL","Alban","7493"),
    new Student("GRANDIÈRE","Mathieu","4485"),
    new Student("GROLLIER","Theo","0346"),
    new Student("GUET","Zacharie","8000"),
    new Student("GUIHARD","Albert","1305"),
    new Student("GUILLOTIN","Alexis","6766"),
    new Student("GUTIERREZ-MOUGIN","Matthias","4294"),
    new Student("HERITEAU","Lou","0851"),
    new Student("HERMEGIL","Théo","1405"),
    new Student("HERVIEUX","Hugo","1211"),
    new Student("HUVELIN","Corentin","1809"),
    new Student("JURET","Romain","6380"),
    new Student("LASSALLE","Florian","3529"),
    new Student("LAVAL","Théo","7430"),
    new Student("LE GUILLY","Ewen","8121"),
    new Student("LE SECH","Lise","0886"),
    new Student("LECOMTE","Kylian","6715"),
    new Student("LEGUÉDÉ","Maxence","2943"),
    new Student("LEPROUX","Matthieu","0609"),
    new Student("LESENECHAL","Adrien","6575"),
    new Student("LESÉNÉCHAL","Dorian","1299"),
    new Student("LETELLIER","Charly","0537"),
    new Student("LETOUZE","Théo","6921"),
    new Student("LEVET","Titouan","0835"),
    new Student("MALÉZY","Vincent","1304"),
    new Student("MICHON","Lucas","8242"),
    new Student("MOREAU","Erwann","0592"),
    new Student("NAJI","Adame","2207"),
    new Student("NICOLAS","Clément","2072"),
    new Student("NOMBRET","Arthur","9903"),
    new Student("NOUAILLE","Lucas","1493"),
    new Student("NOËL","Axel","5843"),
    new Student("PAINTER","Raphaël","1321"),
    new Student("PERRIN","Simon","2293"),
    new Student("PETIT","Adam","3009"),
    new Student("PHANGRATH","Phonephasong-Nicolas","7308"),
    new Student("POUPLIN","Gabriel","3160"),
    new Student("PÉRÉ","Simon","6931"),
    new Student("QUARDON","Juluan","0222"),
    new Student("RABALLAND","Axel","8816"),
    new Student("RADECKI","Leonard","5612"),
    new Student("RAQUOIS","Julien","4403"),
    new Student("RAVARD","Maxime","5808"),
    new Student("RIBAULT","Benjamin","4503"),
    new Student("ROCHER","Nathan","3036"),
    new Student("SALLAUD","Josik","1587"),
    new Student("SASSI","Simon","9034"),
    new Student("VIGNERON","Théo","3764")
    ];
window.addEventListener("load",()=>{
    const display = document.querySelector('#display');
    students.forEach(student =>{
        let div = document.createElement('div');
        div.setAttribute("class","col  m3");
        div.innerHTML = `
      <div class="card">
        <div class="card-image">
          <img src="assets/images/abstract0.jpg">
          <span class="card-title"> ${student.nom} ${student.prenom}</span>
        </div>
        <div class="card-action">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal_${student.nom}_${student.prenom}"> Sujets </a>
        </div>
      </div>`
           div.querySelector('a').addEventListener("click",(e)=>{
           e.preventDefault();

        });
        display.appendChild(div);
        let modale = document.createElement('div');
        modale.innerHTML = `
        <!-- Modal Structure -->
        <div id="modal_${student.nom}_${student.prenom}" class="modal">
            <div class="modal-content">
                <h4>${student.nom} ${student.prenom}</h4>
                <p><a href="exercice1-dom/sujet1-${student.sujetQ1}/sujet1-${student.sujetQ1}.html"> exercice 1 : le DOM </a></p>
                <p><a href="exercice2-materialize/sujet2-${student.sujetQ2}/sujet2-${student.sujetQ2}.html"> exercice 2 : MaterializeCSS  </a></p>
                <p><a href="exercice3-asynchrone/sujet3-${student.sujetQ3}/sujet3-${student.sujetQ3}.html"> exercice 3 : appel asynchrone </a></p>
                <p><a href="exercice4-vuejs/sujet4-${student.sujetQ4}/sujet4-${student.sujetQ4}.html"> exercice 4 : VueJS </a></p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">OK</a>
            </div>
  </div>`;
        display.appendChild(modale);
    })
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems, {});

})
