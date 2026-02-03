function cambiarImagenHover(imagenId) {
  var imagen = document.getElementById(imagenId);
  imagen.src = imagen.src.replace("-normal", "-hover");
}

  
  function cambiarImagenNormal(imagenId) {
  var imagen = document.getElementById(imagenId);
  imagen.src = imagen.src.replace("-hover", "-normal");
}


  function cambiarImagen(imagenId) {
  var imagen = document.getElementById(imagenId);
  if (imagen.src.indexOf("-normal") !== -1) {
    imagen.src = imagen.src.replace("-normal", "-hover");
  } else {
    imagen.src = imagen.src.replace("-hover", "-normal");
  }
}


