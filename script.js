let cliente = document.getElementById('cliente')
let nomes_mesa = document.getElementById('nomes_mesa')
let btnAdicionar = document.getElementById('btnAdicionar')

let arrNomes = ['joao', 'lucas', 'andres', 'lucas h']

compareNames = (e) => {
  nomes_mesa.innerHTML = ''
	let input = e.target.value.toUpperCase()
  let result = []

  if(input.length) {
    if(arrNomes.length) {
    	arrNomes.filter((name) => {
        let nome = name.toUpperCase()
        
        if(nome.includes(input)) {
        	result.push(name)
        }
      })
    } else {
    	result = []
    }

    renderNames(result)

  } else {
  	nomes_mesa.innerHTML = ''
  }
}

renderNames = (result) => {
	let html = ''
  	if (result) {
      for(let i in result) {
        html += `
          <li>${result[i]}</li>
        `
      }
    
    nomes_mesa.innerHTML = html
		getName()   
  }
}

getName = () => {
 	document.querySelectorAll("ul#nomes_mesa li")
  	.forEach((name, index) => {
      name.addEventListener('click', (name) => {
        cliente.value = name.target.textContent
        nomes_mesa.innerHTML = ''
      })

      if (index % 2 === 0) {
        name.className = 'zebraon'
      }
    })
}

addName = (e) => {
	let input = cliente.value.trim()
  let isMatch = arrNomes.find(
  	(name) => name === input
  )
  
	if(input.length) {
  	if (!isMatch) {
    	arrNomes.push(input)
    }
  }

  cliente.value = ''
}

cliente.addEventListener('keyup', compareNames)
btnAdicionar.addEventListener('click', addName)

document.addEventListener('click', (e) => {
	if(e.target.value !== nomes_mesa){
  	nomes_mesa.innerHTML = ''
  }
})
