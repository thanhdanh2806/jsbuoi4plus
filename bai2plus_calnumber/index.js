document.getElementById("totalDay").onclick = function() {
    var e = parseInt(document.getElementById("Month").value)
      , t = parseInt(document.getElementById("Year").value)
      , n = !1
      , a = 0;
    switch ((t % 4 == 0 && t % 100 != 0 || t % 400 == 0) && (n = !0),e) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        a = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        a = 30;
        break;
    case 2:
        a = n ? 29 : 28;
        break;
    default:
        a = 0
    }
    document.getElementById("done").innerHTML = "Tháng " + e + " năm " + t + " có " + a + " ngày"
}