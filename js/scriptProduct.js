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
});