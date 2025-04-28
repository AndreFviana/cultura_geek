const form = document.getElementById('form-despesas')
let listaDespesas = document.getElementById('lista-depesas')
const totalDespesas = document.getElementById('total-despesas')

let despesas =[]

//função que previne o nevagdor de dar refrash(atualizar página)
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const descricao = document.getElementById('descricao').value
    const categoria = document.getElementById('categoria').value
    const valor = document.getElementById('valor').value

    console.log('${descricao} - ${categoria} - ${valor}')

    if(descricao && categoria && valor >0){
        const despesa ={descricao:descricao, categoria:categoria, valor:valor}
        despesas.push(despesa)
        atualizarLista()
        calcularDespesas()
        form.rese()
    } else{
        alert('preeencha todos os campos!')

    }

    
})
function atualizarLista(){
        listaDespesas = ''
        despesas.forEach((desepsa,index)=>{
            const td = document.createElement('tr')

            tr.innerHTML =`
                <td>${despesa.descricao}</td>
                <td>${despesa.categoria}</td>
                <td>${despesa.valor}</td>
                <td><button class="btn-acao" onclick = "removerDespesas(${index})
                `
        })
    }

    function calcularDespesas(){
        const total = despesas.reduce((acumulador, despesa)=> acumulador + despesa , 0)
        totalDespesas = total
    }