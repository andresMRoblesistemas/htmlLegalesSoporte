function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

  const params = new URLSearchParams(document.location.search);
  //params === null ? pagina = "../vistas/bienvenida.html" : pagina = params.get("s");
  const pagina = params.get("s");
  const titulo = params.get("t");
  contador = 0;

  function cargarRutaEnMarco(pagina){
      if (contador<1) {
          document.getElementById("vista").src = pagina+'#'+titulo;
          contador++;
      } else {
          pagina = "../vistas/bienvenida.html";
      }
  }