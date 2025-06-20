const compteur = document.querySelector('#compteur')

let i = 0

const incrementer = function(e){
    i ++
    compteur.querySelector('span').textContent = i.toString()
}

compteur.addEventListener('click', incrementer)