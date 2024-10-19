/*

let nombre = 'hoberlai';

for (let i = 0; i <= (nombre.length -1) ; i++){
    if (nombre.startsWith("ober", i, i+3)) {
        console.log("aqui hay un ober");

    } else if (nombre.startsWith("ai", i, i+2)) {
        console.log("aqui hay un ai")
    }
        
}
*/

/*
let nombre = ['a','v'];
console.log(nombre);
for (let i = 0; i <= (nombre.length-1); i++) {
    console.log(nombre[i]);
    if (nombre[i] == 'a') {
        nombre[i] = 'avion'
    }
}
console.log(nombre);

// imprime geomer

*/
var copiar = document.querySelector('#cuerpo_seccion2_divicion2_botonCopiar').style.display = 'none';

function encriptar() {
    let valorInputentrada = document.getElementById('cuerpo_seccion1_input').value;
    let variable = '';
    let acum = [];
    let button = document.getElementById('cuerpo_seccion2_divicion2_botonCopiar');

    desaparecer()
    
    


    for (let i = 0; i<= (valorInputentrada.length-1); i++) {

        acum.push(valorInputentrada[i]);

    };



    for (let i = 0; i<= (acum.length-1); i++) {

        if (acum[i] == 'a') {
            acum[i] = 'ai';
        } else if (acum[i] == 'e') {
            acum[i] = 'enter';
        } else if (acum[i] == 'i') {
            acum[i] = 'imes';
        } else if (acum[i] == 'o') {
            acum[i] = 'ober';
        } else if (acum[i] == 'u') {
            acum[i] = 'ufat';
        } ;
    };


    for (let i = 0; i<= (acum.length-1); i++) {
        variable = variable + acum[i]  ;
    };


    limpiarcaja();
    
    asignarTextoElemento('p',variable);
    
    button.textContent='copiar';
    return;
}

function desencriptar() {

    let valorInputentrada2 = document.getElementById('cuerpo_seccion1_input').value;
    let variable1 = '';
    let acum1 = [];
    let button = document.getElementById('cuerpo_seccion2_divicion2_botonCopiar');

    desaparecer()


    for (let i = 0;i<= (valorInputentrada2.length-1);i++){



        if (valorInputentrada2.startsWith("ai", i, i+2)){
            acum1.push('ai');
            i = i +1;

        } else if (valorInputentrada2.startsWith("enter", i, i+5)) {
            acum1.push('enter');
            i = i +4;

        } else if (valorInputentrada2.startsWith("imes", i, i+4)) {
            acum1.push('imes');
            i = i +3;

        } else if (valorInputentrada2.startsWith("ober", i, i+4)) {
            acum1.push('ober');
            i = i +3;

        } else if (valorInputentrada2.startsWith("ufat", i, i+4)) {
            acum1.push('ufat');
            i = i +3;


        } else {
            acum1.push(valorInputentrada2[i]);

        };

    };

    console.log(acum1)

    for (let i = 0; i<=(acum1.length-1);i++) {
        if (acum1[i] == 'ai') {
            acum1[i] = 'a';
        } else if ( acum1[i] == 'enter') {
            acum1[i] = 'e';
        } else if ( acum1[i] == 'imes') {
            acum1[i] = 'i';
        } else if ( acum1[i] == 'ober') {
            acum1[i] = 'o';
        } else if ( acum1[i] == 'ufat') {
            acum1[i] = 'u';
        } else if ( acum1[i] == ' ') {
            acum1[i] = ' ';
        };
    };

    for ( let i = 0 ; i<= (acum1.length-1);i++){
        variable1 = variable1 + acum1[i]
    };

    asignarTextoElemento('p',variable1);
    limpiarcaja()

    
    button.textContent='copiar';
    

}

function limpiarcaja() { 
    document.querySelector('#cuerpo_seccion1_input').value='';
    return;
}

function copiarAlPortapapeles() {
    
    let texto = document.getElementById('cuerpo_seccion2_divicion1_input');
    let button = document.getElementById('cuerpo_seccion2_divicion2_botonCopiar');

    navigator.clipboard.writeText(texto.textContent);
    button.textContent='copiado';
}

function asignarTextoElemento(elemento,texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;

}

function desaparecer() {
    document.querySelector('#cuerpo_seccion2_divicion1_dibujo').style.display = 'none';
    document.querySelector('#cuerpo_seccion2_divicion1_mensaje1').style.display = 'none';
    document.querySelector('#cuerpo_seccion2_divicion1_mensaje2').style.display = 'none';
    document.querySelector('#cuerpo_seccion2_divicion2_botonCopiar').style.display = ''
    
    return;
}