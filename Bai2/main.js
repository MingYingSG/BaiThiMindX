let triangle = ""
function numberOneTriangle(nUmber){
    for (i = 1; i <= nUmber; i++){
        triangle = triangle + "*";
        document.write(triangle);
        document.write("<br>");
        console.log(triangle);
    }
}
numberOneTriangle(Number(prompt("Nhập số n (1-10) muốn vẽ tam giác : ")));