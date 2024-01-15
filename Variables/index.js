let arreglo = [
  "","",""
]

let posOriginal = {};

function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
  if(arreglo[parseInt(ev.target.id)]==""){

    let data = ev.dataTransfer.getData("text");
    posOriginal[data] = ev.target.id;
    arreglo[parseInt(ev.target.id)] = data;
    ev.target.appendChild(document.getElementById(data));
  }

  if(arreglo[0]!=""&& arreglo[1]!="" && arreglo[2] != ""){
    if(arreglo[0]=="String" && arreglo[1]=="Number" && arreglo[2]=="Boolean"){
      Swal.fire({
        title: "Perfecto",
        icon: "success",
        text: "Lo hiciste muy bien"
      })
    }else{
      Swal.fire({
        title: "Oops",
        icon: "error",
        text: "Te equivocaste suerte para la proxima, recarga la pagina para reintentar."
      });
      for (let i = 0; i < arreglo.length; i++){
        if(posOriginal[arreglo[i]]){
          let originalCu = document.getElementById(posOriginal[arreglo[i]]);
          originalCu.appendChild(document.getElementById(arreglo[i]));
        }
      }
      arreglo = ["","",""];
      posOriginal = {};
    }
  }
}

// Trate de hacer que al equivorse las img se regresen pero no funciono f.
