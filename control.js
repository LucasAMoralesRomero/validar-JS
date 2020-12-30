function validacion() {
    usuario = document.getElementById("user").value;
    clave = document.getElementById("password").value;
    comprobar = new RegExp("@");
    if (usuario.value == !null || usuario.length == 0) {
      // Si no se cumple la condicion...
      alert('>ALERTA< El campo no debe estar vacio');
      return false;
    }
    
    else if( !comprobar.test(usuario)) {
      // Si no se cumple la condicion...
      alert('>ALERTA< Debe tener un arroba el nombre');
      return false;
    }
    else if (clave.value == !null || clave.length == 0) {
      // Si no se cumple la condicion...
      alert('>ALERTA< El campo contraseña no puede estar vacio');
      return false;
    }
  
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    alert('>FELICIDADES< Completaste el formulario de forma valida, el foirmulario se enviara ahora');
    return true;
 
  }