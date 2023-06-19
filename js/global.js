
console.log('function global');

function productsGenerate(){

    if(window.localStorage.getItem('produtos')){
       return;
    }

    let produtos = [
        {
            id:  1,
            nome:  'Camisa Branca Básica',
            preco:  'R$89,90',
            grupo:  'camisa',
            img:  'camisa1.jpg'
        },
        {
            id: 2,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa1.jpg'
        }
    ]

    console.log(produtos);
    localStorage.setItem('produtos', JSON.stringify(produtos));
}
    
