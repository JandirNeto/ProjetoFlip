produto = JSON.parse(localStorage.getItem('produto_selecionado'));
console.log(produto);

$(document).ready(function(){

    $('#numberProductInput').on('input', function(){
        tratarInput('numberProductInput', null, [' ','1','2','3','4','5','6','7','8','9'] , null);
    });

    $('#numberProductInput').on('blur', function(){
        console.log($('#numberProductInput').val())
        if(typeof($('#numberProductInput').val()) != 'number'){
            $('#numberProductInput').val('1');
        }
    });

    
    if(produto == null ){
        constructDivAvisoErroProduct();
    }else{
        constructDivConteudoProdutoProduct();
    }
});

function constructDivAvisoErroProduct(){

    let html = '';

    html += '<section id="divAvisoErroProduct">';
    html += '  <div class="containe d-flex justify-content-center align-items-center">';
    html += '    <div>';
    html += '      <div>';
    html += '        <div>';
    html += '          <h2>Ocorreu um erro...</h3>';
    html += '        </div>';
    html += '        <div>';
    html += '          <h5>Tente novamente mais tarde</h5>';
    html += '        </div>';
    html += '      </div>';
    html += '      <div>';
    html += '        <a href= '+ document.location.protocol +'//'+ document.location.host +'>Voltar</a>';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';
    html += '</section>';

    $('main').html(html);
}

function constructDivConteudoProdutoProduct(){

    let html = '';

    html += '<section id ="divConteudoProdutoProduct">';
    html += '  <div class="d-flex justify-content-end mx-5">';
    html += '      <svg onclick="back()" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16" style="cursor: pointer;">';
    html += '          <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>';
    html += '      </svg>';
    html += '  </div>';
    html += '  <div class="container d-flex justify-content-center">';
    html += '    <div class="col-md-10 mt-5">';
    html += '      <div class="row">';
    html += '          <div class="col-md-6 p-0">';
    html += '              <img style="width: 100%; height: 100%;" src="../img/'+ produto.img +'" alt="camisa_1">';
    html += '          </div>';
    html += '          <div class="col-md-6 d-flex flex-column justify-content-end p-0">';
    html += '            <div class="w-100 h-100">';
    html += '              <div id="tituloNomeItem" class="d-flex justify-content-center">';
    html += '                <h4>'+ produto.nome +'</h4>';
    html += '              </div>';
    html += '            </div>';
    html += '            <div class="d-flex justify-content-center">';
    html += '               <p>'+ produto.preco +'</p>';
    html += '            </div>';
    html += '            <div class="d-flex justify-content-center m-3">';
    html += '              <div class="col-1 d-flex justify-content-center align-items-center" onclick="$(\'#numberProductInput\').val(parseInt($(\'#numberProductInput\').val()) + 1)">';
    html += '                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">';
    html += '                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>';
    html += '                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>';
    html += '                  </svg>';
    html += '              </div>';
    html += '              <div class="w-50">';
    html += '                  <input  class="form-control" key value="1" id="numberProductInput" pattern="[1-9]+$">';
    html += '              </div>';
    html += '              <div class="col-1 d-flex justify-content-center align-items-center" onclick="$(\'#numberProductInput\').val($(\'#numberProductInput\').val() - 1 > 1 ? $(\'#numberProductInput\').val() - 1 : 1)">';
    html += '                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">';
    html += '                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>';
    html += '                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>';
    html += '                  </svg>';
    html += '              </div>';
    html += '              </div>';
    html += '              <div class="d-flex flex-column align-items-center">';
    html += '                  <div class="m-1">';
    html += '                      <button onclick="adicionarAoCarrinho()" type="button" class="btn btn-secondary">';
    html += '                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">';
    html += '                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>';
    html += '                          </svg>';
    html += '                      </button>';
    html += '                  </div>';
    html += '                  <div class="m-1">';
    html += '                    <button type="button" class="btn btn-secondary">Comprar</button>';
    html += '                  </div>';
    html += '              </div>';
    html += '          </div>';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';
    html += '</section>';

    $('main').html(html);
}

function back(){
    window.location.href= window.location.protocol +'//'+ window.location.host + '/html/shop.html';
}

function comprarProduto(){
    console.log('comprar')
}

function adicionarAoCarrinho(){

    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    let produtoExistente = null;
    let item = null;
    console.log(JSON.parse(localStorage.getItem('carrinho')))
    console.log(carrinho)

    if(carrinho != undefined && carrinho != null  && carrinho.find(elemento => elemento.id == produto.id)){

        produtoExistente = carrinho.find(object => object.id == produto.id);

        item = {

            "id": produto.id,
            "nome": produto.nome,
            "preco": produto.preco,
            "img": produto.img,  
            "grupo": produto.grupo,
            "quantidade": (parseInt($('#numberProductInput').val())+parseInt(produtoExistente.quantidade))
        }


        carrinho.forEach((element, index) => {
            if(element == produtoExistente){
               carrinho[index].quantidade = item.quantidade;
            }
        });

        localStorage.setItem('carrinho',JSON.stringify(carrinho));

        return;

    }else{
        console.log(carrinho)
        item = {

            "id": produto.id,
            "nome": produto.nome,
            "preco": produto.preco,
            "img": produto.img,  
            "grupo": produto.grupo,
            "quantidade": $('#numberProductInput').val()
        }
    }

    console.log(carrinho);
    if(!carrinho){

        carrinho = [
            item
        ];
        window.localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }else{
        carrinho.push(item);
        window.localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

}
