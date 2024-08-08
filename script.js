const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')

//capturando as informações digitadas pelo usuário e enviando-as para o backend
fetch('https://httpbin.org/')
.then(response => response.json())
.then(data =>{
    console.log('sucesso', data);
})
.catch((error)=>{
    alert= 'Não foi possível adicionar o produto'
    console.log(error);
})
function cadastrarProduto (evento){
    evento.preventDefault()
   
   
    nomeProduto.value
    valorProduto.value

    const jsonBody =    JSON.stringify({
        titulo: nomeProduto.value,
        mensagem: valorProduto.value
    })
    console.log(jsonBody)
    
    fetch('https://httpbin.org/post'),{
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonBody
        
    }
    
}

btnEnviar.addEventListener('click', cadastrarProduto)
