 function includeHTML() {
    var menuContainer = document.getElementById("menu-container");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          menuContainer.innerHTML = this.responseText;
        }
        if (this.status == 404) {
          menuContainer.innerHTML = "Page not found";
        }
      }
    };

    xhttp.open("GET", "partials/menu.html", true);
    xhttp.send();
  }

  // Llama a la función para cargar el contenido de menu.html
  includeHTML();