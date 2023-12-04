key = ""
const jaj = ["IZ|I|I|I","MZ|I|I|I","IH|I|I|I","SH|I|I|I","IQ|I|I|I"]
const weird = "MASTERKEY";
function verify(){
    const aja = prompt("Revision Time! Say YAY")
    for (let i = 0; i < jaj.length; i++) {;
        if (aja == "YAY") {
            window.location.href = "https://smartrevise.online/student/home/Index";
            break;
        }
        if (aja === jaj[i]) {
            return "smart/revise?pass"+jaj[i]
        } else if (aja === weird){
            document.getElementById("hiddenLinks").style.visibility = "visible";
            return "smart/revise?pass"+jaj[i]
        } else {
            if (i === jaj.length - 1)
            window.location.href = "https://smartrevise.online/student/home/Index";
        }
    }
}
