let btn = document.getElementById("btn");
btn.addEventListener("click", result);

function result() {
let day = parseInt(document.getElementById("day").value);

    switch (day) {
        case 1:
            document.getElementById("result").innerHTML = "thang 1 co 31 ngay";
            break;
        case 2:
            document.getElementById("result").innerHTML = "thang 2 co 28 hoặc 29";

            break;
        case 3:
            document.getElementById("result").innerHTML = "thang 3 co 31 ngay";

            break;
        case 4:
            document.getElementById("result").innerHTML = "thang 4 co 30 ngay";

            break;
        case 5:
            document.getElementById("result").innerHTML = "thang 5 co 31 ngay";

            break;
        case 6:
            document.getElementById("result").innerHTML = "thang 6 co 30 ngay";

            break;
        case 7:
            document.getElementById("result").innerHTML = "thang 7 co 31 ngay";

            break;
        case 8:
            document.getElementById("result").innerHTML = "thang 8 co 31 ngay";

            break;
        case 9:
            document.getElementById("result").innerHTML = "thang 9 co 30 ngay";

            break;
        case 10:
            document.getElementById("result").innerHTML = "thang 1 co 31 ngay";

            break;
        case 11:
            document.getElementById("result").innerHTML = "thang 11 co 30 ngay";

            break;
        case 12:
            document.getElementById("result").innerHTML = "thang 1 co 31 ngay";

            break;
        default:
            break;

    }
}