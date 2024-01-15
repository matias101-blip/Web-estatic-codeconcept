function saluda(){
  Swal.fire("Hola Mundo");
}

function sopa(){
  Swal.fire({
    title: "Ingresa un ingrediente",
    input: "text",
    inputLabel: "Introduce tu respuesta",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){
      Swal.fire(`Tu sopa tiene el ingrediente: ${result.value}`)
    }else{
      Swal.fire("Bye.")
    }
  })
}

function plato(){
  Swal.fire({
    title: "Ingresa el ingrediente",
    input: "text",
    inputLabel: "Introduce tu respuesta",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){
      Swal.fire(`Su sopa de ${result.value} esta lista`)
    }
  })
}
