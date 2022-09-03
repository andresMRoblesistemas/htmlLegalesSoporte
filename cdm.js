let contador = 0;

  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    console.log(obj.style.height);
  }
  
  

  function cargarRutaEnMarco(){
      if (contador<1) {
        const params = new URLSearchParams(document.location.search);
        const pagina = (params.get("s") ) ?? "/vistas/bienvenida.html";
        const titulo = (params.get("t") ) ?? "00";
        document.getElementById("vista").src = pagina+'#'+titulo;
        console.log(document.getElementById("vista").src+"wee");
        contador++;
      }
  }