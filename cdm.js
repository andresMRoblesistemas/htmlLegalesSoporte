function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

  const params = new URLSearchParams(document.location.search);
  const pagina = (params.get("s") ) ?? "/vistas/bienvenida.html";
  const titulo = (params.get("t") ) ?? "00";
  contador = 0;

  function cargarRutaEnMarco(pagina){
      if (contador<2) {
          document.getElementById("vista").src = pagina+'#'+titulo;
          console.log(document.getElementById("vista").src);
          contador++;
      } else {
          pagina = "404.html"
      }
  }