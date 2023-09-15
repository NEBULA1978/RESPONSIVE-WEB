function includeHTML(containerID, htmlFile) {
  var container = document.getElementById(containerID);
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        container.innerHTML = this.responseText;
      }
      if (this.status == 404) {
        container.innerHTML = "Page not found";
      }
    }
  };

  xhttp.open("GET", htmlFile, true);
  xhttp.send();
}

// Llama a la función para cargar el contenido de menu.html en el contenedor correspondiente
includeHTML("menu-container", "partials/menu.html");
includeHTML("products-container", "partials/products.html");
includeHTML("aside-container", "partials/aside.html");
includeHTML("footer-container", "partials/footer.html");
