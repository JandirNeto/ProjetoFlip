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
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_1.jpg'
        },
        {
            id: 4,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_1.jpg'
        },
        {
            id: 5,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_1.jpg'
        },
        {
            id: 6,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_1.jpg'
        },
        {
            id: 7,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_1.jpg'
        },
        {
            id: 8,
            nome: 'Camisa Branca fodase',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_1.jpg'
        },
        {
            id: 9,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_10.jpeg'
        },
        {
            id: 10,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_2.jpeg'
        },
        {
            id: 11,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_3.jpeg'
        },
        {
            id: 12,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_4.jpeg'
        },
        {
            id: 13,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_5.jpeg'
        },
        {
            id: 14,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_6.jpeg'
        },
        {
            id: 15,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_7.jpeg'
        },
        {
            id: 16,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_8.jpeg'
        },
        {
            id: 17,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 18,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 19,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 20,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 21,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 22,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 23,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 24,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 25,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 26,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 27,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 28,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 29,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 30,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },
        {
            id: 31,
            nome: 'Bone',
            preco: 'R$69,90',
            grupo: 'bones',
            img: 'bone_9.jpeg'
        },


    ]

    localStorage.setItem('produtos', JSON.stringify(produtos));
}
