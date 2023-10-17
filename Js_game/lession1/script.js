let attempts = 3
let array = [];
let secretWord = 'алгоритм';
document.querySelector('.start').onclick= function(){
    let out = ''
    for (let i=0 ; i<secretWord.length; i++ ){
        out += '*' ;
    }
    document.querySelector('.lettor').disabled = false;
    document.querySelector('.check').disabled = false;
    attempts = 3
    document.querySelector('.word').value = out;
    document.querySelector('span').innerHTML = attempts 
}
document.querySelector('.check').onclick = function(){
    let lettor = document.querySelector('.lettor').value;
    attempts -=1;
    array.push(lettor)
    let out = '';
    for (let i=0 ; i<secretWord.length; i++ ){
        if (array.indexOf(secretWord[i])!= -1 ){
            out = out + secretWord[i];
        } else  {
            out = out + '*';
        }
    }
    if (attempts == 0){
        document.querySelector('.lettor').disabled = true;
        document.querySelector('.check').disabled = true;
    }
    document.querySelector('.word').value = out; 
    document.querySelector('span').innerHTML = attempts 
}