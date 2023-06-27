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
