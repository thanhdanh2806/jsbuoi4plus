document.getElementById("Tomorrow").onclick = function () {
  var e = parseInt(document.getElementById("Day").value),
    t = parseInt(document.getElementById("Month").value),
    n = parseInt(document.getElementById("Year").value),
    a = "";
  switch (t) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      a =
        e > 0 && e < 31
          ? e + 1 + "/" + t + "/" + n
          : 31 == e
          ? "1/" + (t + 1) + "/" + n
          : "Ngày không xác định";
      break;
    case 2:
      a =
        e > 0 && e < 28
          ? e + 1 + "/" + t + "/" + n
          : 28 == e
          ? "1/" + (t + 1) + "/" + n
          : "Ngày không xác định";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      a =
        e > 0 && e < 30
          ? e + 1 + "/" + t + "/" + n
          : 30 == e
          ? "1/" + (t + 1) + "/" + n
          : "Ngày không xác định";
      break;
    case 12:
      a =
        e > 0 && e < 31
          ? e + 1 + "/" + t + "/" + n
          : 31 == e
          ? "1/1/" + (n + 1)
          : "Ngày không xác định";
      break;
    default:
      a = "Ngày không xác định";
  }
  document.getElementById("Date").innerHTML = a;
};

document.getElementById("Yesterday").onclick = function () {
  var e = parseInt(document.getElementById("Day").value),
    t = parseInt(document.getElementById("Month").value),
    n = parseInt(document.getElementById("Year").value),
    a = "";
  switch (t) {
    case 1:
      a =
        e > 1 && e <= 31
          ? e - 1 + "/" + t + "/" + n
          : 1 == e
          ? "31/12/" + (n - 1)
          : "Ngày không xác định";
      break;
    case 2:
      a =
        e > 1 && e <= 28
          ? e - 1 + "/" + t + "/" + n
          : 1 == e
          ? "31/" + (t - 1) + "/" + n
          : "Ngày không xác định";
      break;
    case 3:
      a =
        e > 1 && e < 31
          ? e - 1 + "/" + t + "/" + n
          : 1 == e
          ? NaN + (t - 1) + "/" + n
          : "Ngày không xác định";
      break;
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      a =
        e > 1 && e < 31
          ? e - 1 + "/" + t + "/" + n
          : 1 == e
          ? "30/" + (t - 1) + "/" + n
          : "Ngày không xác định";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      a =
        e > 1 && e <= 30
          ? e - 1 + "/" + t + "/" + n
          : 1 == e
          ? "31/" + (t - 1) + "/" + n
          : "Ngày không xác định";
  }
  document.getElementById("Date").innerHTML = a;
};
