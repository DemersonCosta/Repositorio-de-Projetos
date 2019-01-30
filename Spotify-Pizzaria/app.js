
//Incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");
//console.log(botoesIncrementa);

for(let botao of botoesIncrementa)
{

    botao.addEventListener('click',incrementa);

    function incrementa()
    {   

        //closest ele pega o elemento mais próximo acima 
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');
        input.value++;    

        var preco = pegarPrecoItem(item);
        adicionaTotal(preco);   

    }
}


//decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");
//console.log(botoesDecrementa);

for(let botao of botoesDecrementa)
{

    botao.addEventListener('click', decrementa)

    function decrementa()
    {
        //closest ele pega o elemento mais próximo acima 
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');

        if (input.value > 0) {
            input.value--;    
            var preco = pegarPrecoItem(item);
            adicionaTotal(-preco);        
        } else
        {
            console.log(input.value)

        }
        
    }
}

function decrementar()
{
    //closest ele pega o elemento mais próximo acima 
    var item = botaoIncrementa.closest('.item');

    var input = item.querySelector('.quantidade');

    if (input.value > 0) {
        input.value--;    
        var preco = pegarPrecoItem(item);
        adicionaTotal(-preco);        
    } else
    {
        console.log(input.value)

    }
    
}

var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', function(event){

    var contador = 0;

    var inputs = formPedido.querySelectorAll("input.quantidade");

    for (let input of inputs) {
       if (input.value > 0) {
           contador++;
       }
        
    }
    if (contador == 0) {
        alert("Deve ter pelo menos 1 pizza no pedido");
        event.preventDefault();
    }

});



/*##### FUNÇÕES AUXILIARES #####*/
function pegarPrecoItem(item)
{
     //bucar dentro do elemento (item) a class preco-item 
     var precoItem = item.querySelector('.preco-item')
     return preco = Number(precoItem.textContent);    
     

}

function adicionaTotal(valor)
{
    var elementoTotal  = document.querySelector('#total');
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}