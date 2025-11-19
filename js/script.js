const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');




fetch ('http://127.0.0.1:5501/index.html')
.then (response=> 
    if(response.ok){
        contadorVisitas (contadorVisitas ++1)
    }
)