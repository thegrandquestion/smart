key = ""
const jaj = ["RA|I|I|I","Ijaz2036","MZ|I|I|I","IH|I|I|I","SH|I|I|I","IQ|I|I|I","TahseensBalls"]
function verify(){
    const aja = prompt("Revision Time! Say YAY")
    for (let i = 0; i < jaj.length; i++) {;
        if (aja == "YAY") {
            window.location.href = "https://smartrevise.online/student/home/Index";
            break;
        }
        if (aja === jaj[i]) {
            return "smart/revise?pass"+jaj[i]
        } else if (aja === "MASTERKEY"){
            document.getElementById("hiddenLinks").style.visibility = "visible";
            return "smart/revise?pass"+jaj[i]
        } else {
            if (i === jaj.length - 1)
            window.location.href = "https://smartrevise.online/student/home/Index";
        }
    }
}
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function rot13(str) {
  let strArray = str.split("")
  console.log(strArray.join(""))
  for (let i = 0; i < strArray.length;i++){
    for (let a = 0;a < alphabet.length;a++){
      if (strArray[i] == alphabet[a] ){
        let abc = a + 13
        if (abc > 25){
          let rem = abc % 26
          abc = rem
        }
        strArray[i] = alphabet[abc]
        break;
      }
    }
  }
  return strArray.join("");
}
