let saluda = document.getElementById("Saludar_f")

function _if(){
  let resultado
  Swal.fire({
    title: "Ingresa true o false",
    input: "text",
    inputLabel: "Introduce tu respuesta",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){
      resultado = result.value
      _inner(resultado);
      if (resultado == "true"){
        Swal.fire({
          icon: "success",
          title: "Bien hecho :3",
          text: "Hola, como estas?",
          footer: "como ingresaste 'true' se cumplio la el 'if'."
        })
      }else{
        Swal.fire({
          icon: "error",
          title: "Lo siento",
          text: "Ingresaste false o otra cosa"
        })
      }
    }else{
      Swal.fire("Bye.")
    }
  })
}

function _inner(resultado){
  debugger;
  saluda.innerText=resultado
  Prism.highlightElement(saluda);
}

function _else(){
  let num1
  let num2
  Swal.fire({
    title: "Ingresa el numero 1",
    input: "number",
    inputLabel: "Introduce tu respuesta",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){
      num1 = result.value
      numero2(num1)
    }else{
      Swal.fire("Bye.")
    }
  })
}

function numero2(num1){
  let num2
  Swal.fire({
    title: "Ingresa el numero 2",
    input: "number",
    inputLabel: "Introduce tu respuesta",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){
      num2 = result.value
      if(num1 > num2){
        Swal.fire("El numero 1 es mayor al numero 2")
      }else{
        Swal.fire("El numero 2 es mayor al numero 1")
      }
    }else{
      Swal.fire("Bye.")
    }
  })
}

function verificarEdad(){
  let edad
  Swal.fire({
    title: "Ingresa tu edad",
    input: "number",
    inputLabel: "Introduce tu respuesta",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){
      edad = result.value
      if(edad <= 17 && edad > 0){
        Swal.fire(`Tienes ${edad} años.`,"Eres menor de edad",'error')
      }else if(edad >= 18){
        Swal.fire(`Tienes ${edad} años.`,"Eres mayor de edad",'success')
      }else{
        Swal.fire({
          icon: "question",
          text: "Estas seguro que esa es tu edad"
        })
      }
    }else{
      Swal.fire("Bye.")
    }
  })
}
