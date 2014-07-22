<!doctype html>
<html>
<head>
  <title>Click Me!</title>
  <style>
    body, button {margin:10px;}
    div {padding:10px;}
  </style>
  <script>
    window.onload = function(){
      var count = 0;
      var message = "You clicked me ";
      var div = document.getElementById("message");

      var button = document.getElementById("clickme");
      button.onclick = function() {
        count ++;
        div.innterHTML = message + count + " times!";
      };
    };
  </script>
</head>
<body>
  <button id="clickme">Click me!</button>
  <div id="message"></div>
</body>
</html>
