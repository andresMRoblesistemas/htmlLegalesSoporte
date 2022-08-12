function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

  const params = new URLSearchParams(document.location.search);
  const pagina = (params.get("s") === null) ? "/vistas/bienvenida.html" : params.get("s");
  const titulo = (params.get("t") === null) ? "00" : params.get("t");
  contador = 0;

  function cargarRutaEnMarco(pagina){
      if (contador<1) {
          document.getElementById("vista").src = pagina+'#'+titulo;
          console.log(document.getElementById("vista").src);
          contador++;
      } else {
          pagina = "404.html"
      }
  }