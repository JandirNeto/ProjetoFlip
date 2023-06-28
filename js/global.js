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
            nome: 'Camisa HIGH Flick Blue',
            preco: 'R$129,90',
            grupo: 'camisa',
            img: 'camisa_13.jpg'
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
            nome: 'Camisa Santa Cruz Basic',
            preco: 'R$79,90',
            grupo: 'camisa',
            img: 'camisa_3.jpg'
        },
        {
            id: 5,
            nome: 'Camisa THRASHER 3D',
            preco: 'R$109,90',
            grupo: 'camisa',
            img: 'camisa_4.jpg'
        },
        {
            id: 6,
            nome: 'Camisa VANS White',
            preco: 'R$79,90',
            grupo: 'camisa',
            img: 'camisa_5.png'
        },
        {
            id: 7,
            nome: 'Camisa HIGH Flame',
            preco: 'R$129,90',
            grupo: 'camisa',
            img: 'camisa_6.png'
        },
        {
            id: 8,
            nome: 'Camisa THRASHER Tropical',
            preco: 'R$99,90',
            grupo: 'camisa',
            img: 'camisa_7.jpg'
        },
        {
            id: 8,
            nome: 'Camisa VANS Gray',
            preco: 'R$89,90',
            grupo: 'camisa',
            img: 'camisa_8.jpg'
        },
        {
            id: 8,
            nome: 'Camisa HIGH Purple Letal',
            preco: 'R$139,90',
            grupo: 'camisa',
            img: 'camisa_9.jpg'
        },
        {
            id: 8,
            nome: 'Camisa HIGH Orange',
            preco: 'R$99,90',
            grupo: 'camisa',
            img: 'camisa_10.jpg'
        },
        {
            id: 8,
            nome: 'Camisa HIGH Fazenda',
            preco: 'R$129,90',
            grupo: 'camisa',
            img: 'camisa_11.jpg'
        },
        {
            id: 8,
            nome: 'Camisa HIGH Universal',
            preco: 'R$129,90',
            grupo: 'camisa',
            img: 'camisa_12.jpg'
        },
        {
            id: 8,
            nome: 'Calça TUPODE Jeans Brown',
            preco: 'R$219,90',
            grupo: 'calca',
            img: 'calca_1.jpeg'
        },
        {
            id: 8,
            nome: 'Calça TUPODE Carpinteiro',
            preco: 'R$329,90',
            grupo: 'calca',
            img: 'calca_2.jpeg'
        },
        {
            id: 8,
            nome: 'Calça TUPODE Jeans Bege',
            preco: 'R$209,90',
            grupo: 'calca',
            img: 'calca_3.jpeg'
        },
        {
            id: 8,
            nome: 'Calça VANS Black',
            preco: 'R$324,90',
            grupo: 'calca',
            img: 'calca_4.jpg'
        },
        {
            id: 8,
            nome: 'Calça VANS Jogger',
            preco: 'R$219,90',
            grupo: 'calca',
            img: 'calca_5.jpg'
        },
        {
            id: 8,
            nome: 'Calça Jeans Green',
            preco: 'R$149,90',
            grupo: 'calca',
            img: 'calca_6.jpg'
        },
        {
            id: 8,
            nome: 'Calça Jogger Camuflado',
            preco: 'R$89,90',
            grupo: 'calca',
            img: 'calca_7.jpg'
        },
        {
            id: 8,
            nome: 'Calça Moletom GRIZLLY',
            preco: 'R$209,90',
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

/**
 * trata um input, removendo os valores indesejados conforme informado
 * 
 * @param {*} idInput 
 * @param {Array} caracteresNaoAceitos 
 * @param {Array} caracteresAceitos 
 * @param {Array} especials - definições pré feitas, caso locoque o not na frente, ele impede a existecia do elemento
 * 
 * - "number": aceita numeros
 * - "upChar": aceita todas as letras maiusculas
 * - "dawnChar": aceita todas as letras minusculas
 * - "accentuation": aceita letras acentuadas
 * - "especialChar": aceita carecteres especiais
 * 
 * @example
 * tratarInput(null,null,['number']); // permite apenas numeros
 * tratarinput(null,null,['notNumber']); //nao permite apenas numeros
 */
function tratarInput(idInput, caracteresNaoAceitos = [], caracteresAceitos = [], especials = []){

    caracteresAceitos = caracteresAceitos==null ? [] : caracteresAceitos;
    caracteresNaoAceitos = caracteresNaoAceitos==null ? [] : caracteresNaoAceitos;
    especials = especials==null ? [] : especials;

    let valoresInput = $('#'+idInput).val().split('');
    let ValorFinal = '';

    if(typeof especials[0] !== undefined && especials != null && especials[0] != null){

        especials.forEach(element => {
            switch(element){

                case 'number':
                    caracteresAceitos.push('0','1','2','3','4','5','6','7','8','9');
                break;
                case 'notNumber':
                    caracteresNaoAceitos.push('0','1','2','3','4','5','6','7','8','9');
                break;
    
    
                case 'upChar':
                    caracteresAceitos.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
                break;
                case 'notUpChar':
                    caracteresNaoAceitos.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Á','À','Ã','Â','É', 'È','Ẽ','Ê','Í','Ì','Ĩ','Î','Ó','Ò','Õ','Ô','Ú','Ù','Ũ','Û','Ç',);
                break;
    
    
                case 'dawnChar':
                    caracteresAceitos.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
                break;
                case 'notDawnChar':
                    caracteresNaoAceitos.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','á','à','ã','â','é','è','ẽ','ê','í','ì','ĩ','î','ó','ò','õ','ô','ú','ù','ũ','û','ç')
                break;
    
    
                case 'accentuation':
                    caracteresAceitos.push( 'Á','À','Ã','Â','É', 'È','Ẽ','Ê','Í','Ì','Ĩ','Î','Ó','Ò','Õ','Ô','Ú','Ù','Ũ','Û','Ç','á','à','ã','â','é','è','ẽ','ê','í','ì','ĩ','î','ó','ò','õ','ô','ú','ù','ũ','û','ç')
                break;
                case 'notAccentuation':
                    caracteresNaoAceitos.push( 'Á','À','Ã','Â','É', 'È','Ẽ','Ê','Í','Ì','Ĩ','Î','Ó','Ò','Õ','Ô','Ú','Ù','Ũ','Û','Ç','á','à','ã','â','é','è','ẽ','ê','í','ì','ĩ','î','ó','ò','õ','ô','ú','ù','ũ','û','ç')
                break;
                
                case 'especialChar':
                    caracteresAceitos.push('.', ',', ':', ';', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '@', '#', '%', '&', '*');
                break;
                case 'notEspecialChar':
                    caracteresNaoAceitos.push('.', ',', ':', ';', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '@', '#', '%', '&', '*');
                break;

                case 'space':
                    caracteresAceitos.push(' ');
                break;
                case 'notSpace':
                    caracteresNaoAceitos.push(' ');
                break;
            }
        });
    }

     function validar(){
        if(typeof caracteresAceitos[0] !== undefined && caracteresAceitos != null && caracteresAceitos[0] != null){
            valoresInput.forEach(element => {
                if(!caracteresAceitos.includes(element)){
                    valoresInput =    ($('#'+idInput).val()).replace(element, '');
                }
            });
        }
    
        if(typeof caracteresNaoAceitos[0] !== undefined && caracteresNaoAceitos != null && caracteresNaoAceitos[0] != null){
            valoresInput.forEach(element => {
                if(caracteresNaoAceitos.includes(element)){
                    valoresInput =    ($('#'+idInput).val()).replace(element, '');
                }
            });
        }
    
        if(Array.isArray(valoresInput)){
            valoresInput.forEach(element => {
                ValorFinal += element;
            });
        }else{
            ValorFinal = valoresInput;
        }
    
        $('#'+idInput).val(ValorFinal);
    }
      

    if(($('#'+idInput).val().includes('´') || $('#'+idInput).val().includes('^') || $('#'+idInput).val().includes('~')) && !caracteresNaoAceitos.includes('á') && !especials.includes('notAccentuation')){
        setTimeout(function(){
            validar();
        }, 500);
    }else{
        validar();
    }
}
