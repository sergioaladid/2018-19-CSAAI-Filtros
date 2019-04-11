function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al deslizador
  deslizador = document.getElementById('deslizador')
  deslizador2 = document.getElementById('deslizador2')
  deslizador3 = document.getElementById('deslizador3')
  boton = document.getElementById('gris')

  //-- Valor del deslizador
  range_value = document.getElementById('range_value')
  range_value2 = document.getElementById('range_value2')
  range_value3 = document.getElementById('range_value3')

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Funcion de retrollamada del deslizador
  deslizador.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value.innerHTML = deslizador.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador.value


    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;

    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }

  deslizador2.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value2.innerHTML = deslizador2.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    //ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral2 = deslizador2.value


    //-- Filtrar la imagen según el nuevo umbral

    for (var i = 0; i < data.length; i+=4) {
      if (data[i+1] > umbral2)
        data[i+1] = umbral2;

    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);

  }

  deslizador3.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value3.innerHTML = deslizador3.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    //ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral3 = deslizador3.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+2] > umbral3)
        data[i+2] = umbral3;
    }

    boton.onclick = () => {

      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imgData.data
      brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8;
      for (var i = 0; i < data.length; i+=4) {
          data[i] = brillo;
          data[i+1] = brillo;
          data[i+2] = brillo;
      }
      ctx.putImageData(imgData, 0, 0);
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
}
