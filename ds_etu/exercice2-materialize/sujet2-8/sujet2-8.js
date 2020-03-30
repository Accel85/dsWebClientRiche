/* Nom : Raballand
Prenom : Axel
Groupe : 4
*/

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{
        onCloseEnd : function () {
            console.log(document.querySelector('.collapsible-body').textContent)
        }
    });
  });