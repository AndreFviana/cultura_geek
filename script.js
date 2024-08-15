const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')


function cadastrarProduto (evento){
    evento.preventDefault()
//capturando as informações digitadas pelo usuário, tranformando-as em formato JSON e salvando em uma string 
    const jsonBody =    JSON.stringify({
        titulo: nomeProduto.value,
        mensagem: valorProduto.value,
        descricao : descricaoProduto.value
    })
    console.log(jsonBody)
    //enviando as informações para o backend
    fetch('https://httpbin.org/post',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonBody
        
    })
    .then(response => { response.json();
    })

    .then(data => {
        console.log('sucesso', data)
    document.getElementById('feedback-usuario').textContent='Produto cadastrado com sucesso!';
    
    
})
//tratando possível erro de requisição
    .catch(error=>{
        console.error(error);
        alert('Deu erro!')
    })

}

btnEnviar.addEventListener('click', cadastrarProduto)
