var produtos = [
    {
        id: 1,
        nome: 'Camisa Branca Básica',
        preco: 'R$89,90',
        grupo: 'camisa',
        img: 'camisa_1.jpg'
    },
    {
        id: 2,
        nome: 'Camisa Branca fodase',
        preco: 'R$89,90',
        grupo: 'camisa',
        img: 'camisa_1.jpg'
    },
    {
        id: 3,
        nome: 'Camisa Branca calca',
        preco: 'R$89,90',
        grupo: 'calca',
        img: 'camisa_1.jpg'
    }
];
    


$(document).ready(function(){

    constructAllProdutos();
});

function constructAllProdutos(grupoDefined = 'all'){

    let html = '';

    produtos.forEach(element => {

        console.log(element.grupo);

        if(element.grupo == grupoDefined){

            html += '<div id="camisa_'+ element.id +'" class="'+ element.grupo +'card col-md-3 m-2 border border-0" style="width: 18rem;">';
            html += '   <img src="../img/'+ element.img +'" class="card-img-top" alt="...">';
            html += '   <div class="card-body">';
            html += '       <div class="d-flex justify-content-center">';
            html += '           <p class="card-text">'+ element.nome +'</p>';
            html += '       </div>';
            html += '       <div class="d-flex justify-content-center">';
            html += '           <p><strong>'+ element.preco +'</strong></p>';
            html += '       </div>';
            html += '   </div>';
            html += '</div>';
            
        }else if(grupoDefined == 'all'){

            html += '<div id="camisa_'+ element.id +'" class="'+ element.grupo +'card col-md-3 m-2 border border-0" style="width: 18rem;">';
            html += '   <img src="../img/'+ element.img +'" class="card-img-top" alt="...">';
            html += '   <div class="card-body">';
            html += '       <div class="d-flex justify-content-center">';
            html += '           <p class="card-text">'+ element.nome +'</p>';
            html += '       </div>';
            html += '       <div class="d-flex justify-content-center">';
            html += '           <p><strong>'+ element.preco +'</strong></p>';
            html += '       </div>';
            html += '   </div>';
            html += '</div>';
        }
    });

    $('#divItens').html(html);
}