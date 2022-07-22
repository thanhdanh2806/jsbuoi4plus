document.getElementById("btnSearch").addEventListener("click", function() {
    var e = document.getElementById("inputName1").value
      , t = document.getElementById("inputX1").value
      , n = document.getElementById("inputY1").value
      , a = document.getElementById("inputName2").value
      , c = document.getElementById("inputX2").value
      , u = document.getElementById("inputY2").value
      , m = document.getElementById("inputName3").value
      , d = document.getElementById("inputX3").value
      , o = document.getElementById("inputY3").value
      , l = document.getElementById("inputX4").value
      , r = document.getElementById("inputY4").value
      , s = Math.pow(l - t, 2) + Math.pow(r - n, 2)
      , i = Math.sqrt(s);
    console.log(i);
    var g = Math.pow(l - c, 2) + Math.pow(r - u, 2)
      , h = Math.sqrt(g);
    console.log(h);
    var y = Math.pow(l - d, 2) + Math.pow(r - o, 2)
      , k = Math.sqrt(y);
    console.log(k);
    var b = "";
    b = i > h && i > k ? e : h > i && h > k ? a : m,
    document.getElementById("txtSearch").innerHTML = "Sinh viên xa trường nhất: " + b
});
