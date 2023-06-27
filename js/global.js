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
            nome: 'Camisa G fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_6.png'
        },
        {
            id: 3,
            nome: 'Camisa Bulldog',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_2.jpg'
        },
        {
            id: 4,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_3.jpg'
        },
        {
            id: 5,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_4.jpg'
        },
        {
            id: 6,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_5.png'
        },
        {
            id: 7,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_6.png'
        },
        {
            id: 8,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_7.jpg'
        },
        {
            id: 8,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_8.jpg'
        },
        {
            id: 8,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_9.jpg'
        },
        {
            id: 8,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_10.jpg'
        },
        {
            id: 8,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_11.jpg'
        },
        {
            id: 8,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_12.jpg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_1.jpeg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_2.jpeg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_3.jpeg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_4.jpg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_5.jpg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_6.jpg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_7.jpg'
        },
        {
            id: 8,
            nome: 'Calça',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_8.jpg'
        },
        {
            id: 11,
            nome: 'Boné Diamond Basic',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_3.jpeg'
        },
        {
            id: 12,
            nome: 'Boné Championship',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_4.jpeg'
        },
        {
            id: 13,
            nome: 'Boné New Era Black',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_5.jpeg'
        },
        {
            id: 14,
            nome: 'Boné Charllote Hornets',
            preco: 'R$159,90',
            grupo: 'bones',
            img: 'bone_6.jpeg'
        },
        {
            id: 15,
            nome: 'Boné Blue Basic',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_7.jpeg'
        },
        {
            id: 16,
            nome: 'Boné New Era',
            preco: 'R$89,90',
            grupo: 'bones',
            img: 'bone_8.jpeg'
        },
        {
            id: 17,
            nome: 'Boné LA Basic',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 18,
            nome: 'Boné Boston Celtics',
            preco: 'R$129,90',
            grupo: 'bones',
            img: 'bone_10.jpeg'
        },
        {
            id: 19,
            nome: 'Boné Diamond Basic',
            preco: 'R$66,90',
            grupo: 'bones',
            img: 'bone_11.jpeg'
        },
        {
            id: 20,
            nome: 'Boné Diamond Red',
            preco: 'R$79,90',
            grupo: 'bones',
            img: 'bone_12.jpeg'
        },
        {
            id: 21,
            nome: 'Boné Basic Championship',
            preco: 'R$79,90',
            grupo: 'bones',
            img: 'bone_13.jpeg'
        },
        {
            id: 22,
            nome: 'Boné Grizzly',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_14.jpeg'
        },
        {
            id: 23,
            nome: 'Capuz Irmão do Jorel',
            preco: 'R$89,90',
            grupo: 'bones',
            img: 'bone_15.jpeg'
        },
        {
            id: 24,
            nome: 'Bone Vovó Juju',
            preco: 'R$99,90',
            grupo: 'bones',
            img: 'bone_16.jpeg'
        },
    

    ]

    localStorage.setItem('produtos', JSON.stringify(produtos));
}
