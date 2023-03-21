let a = prompt("Nhập số a :");
let b = prompt("Nhập số b (b>a) :");
let c = 0;

function checkSnt(n)
{
    let kiemTra = true;
 
    if (n < 2){
        kiemTra = false;
    }
    else if (n == 2){
        kiemTra = true;
    }
    else if (n % 2 == 0){
        kiemTra = false;
    }
    else{
        for (var i = 3; i < n-1; i+=2){
            if(n % i == 0){
            kiemTra = false;
            break;
            }
        }
    }

    if (kiemTra === true){
        document.write(n + " là số nguyên tố <br/>");
        c = c + n;
    }
}

for (let j=a; j <= b; j++){
    checkSnt(j);
}
document.write(c);