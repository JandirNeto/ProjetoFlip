function productsGenerate(){

    localStorage.clear();
    console.log(window.localStorage.getItem('produtos'));
    if(window.localStorage.getItem('produtos')){
       return;
    }
    localStorage.clear();

    let produtos = [
        {
            id:  1,
            nome:  'Camisa Branca Básica',
            preco:  'R$89,90',
            grupo:  'camisa',
            img:  'camisa_1.jpg'
        },
        {
            id: 2,
            nome: 'Camisa Branca fodase',
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
            id: 2,
            nome: 'Camisa Branca fodase',
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
            id: 2,
            nome: 'Camisa Branca fodase',
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
            id: 2,
            nome: 'Camisa Branca fodase',
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
    ]

    localStorage.setItem('produtos', JSON.stringify(produtos));
}
    
function load(status){
    if (status==true){
        console.log(status)
        $('#loading').css("cssText", 'display inline-block !important');
    }else if(status==false){
        console.log(status);
        $('#loading').css("cssText", 'display none !important');
    }
}
