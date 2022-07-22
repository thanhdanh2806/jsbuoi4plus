document.getElementById("btnReadInt").addEventListener("click", function() {
    var e = document.getElementById("inputReadInt").value
      , t = Math.floor(e / 100)
      , n = Math.floor(e % 100 / 10)
      , a = "";
    switch (t) {
    case 1:
        a += "một trăm ";
        break;
    case 2:
        a += "hai trăm ";
        break;
    case 3:
        a += "ba trăm ";
        break;
    case 4:
        a += "bốn trăm ";
        break;
    case 5:
        a += "năm trăm ";
        break;
    case 6:
        a += "sáu trăm ";
        break;
    case 7:
        a += "bảy trăm ";
        break;
    case 8:
        a += "tám trăm ";
        break;
    case 9:
        a += "chín trăm ";
        break;
    default:
        alert("số hàng trăm không xác định được")
    }
    switch (n) {
    case 1:
        a += "một mươi ";
        break;
    case 2:
        a += "hai mươi ";
        break;
    case 3:
        a += "ba mươi ";
        break;
    case 4:
        a += "bốn mươi ";
        break;
    case 5:
        a += "năm mươi ";
        break;
    case 6:
        a += "sáu mươi ";
        break;
    case 7:
        a += "bảy mươi ";
        break;
    case 8:
        a += "tám mươi ";
        break;
    case 9:
        a += "chín mươi ";
        break;
    default:
        alert("Số hàng chục không xác định được")
    }
    switch (e % 100 % 10) {
    case 1:
        a += "một";
        break;
    case 2:
        a += "hai";
        break;
    case 3:
        a += "ba";
        break;
    case 4:
        a += "bốn";
        break;
    case 5:
        a += "năm";
        break;
    case 6:
        a += "sáu";
        break;
    case 7:
        a += "bảy";
        break;
    case 8:
        a += "tám";
        break;
    case 9:
        a += "chín";
        break;
    default:
        alert("Số hàng đơn vị không xác định được.")
    }
    document.getElementById("txtReadInt").innerHTML = a
});