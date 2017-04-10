<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ajax无刷新分页</title>
</head>
<body>
  
  <h2>ajax无刷新分页</h2>
  <div id="result"></div>

  <script type="text/javascript">
    function showpage(url){
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(xhr.readyState ==4){
          document.getElementById('result').innerHTML = xhr.responseText;
        }
      }
      xhr.open('get',url);
      xhr.send(null);
    }
    window.onload = function(){
      showpage('./data.php?page=1');
    }
  </script>
</body>
</html>