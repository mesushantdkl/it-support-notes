function loadContent(section) {
  fetch(`content/${section}.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("content-area").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("content-area").innerHTML = "<p>Error loading content.</p>";
    });
}
