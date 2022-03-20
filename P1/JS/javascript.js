function ordenar(){

    var cadena = document.getElementById('input').value;

    var caracteres = cadena.split("");
    var cadena_nueva = ""
    
    for(i = (caracteres.length - 1); i > -1; i--){

        cadena_nueva += caracteres[i]

    }

    document.querySelector("#texto_2").textContent = cadena_nueva;

}