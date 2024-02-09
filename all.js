const allowed = ["bbioawbdibiawdbi", "tawz1","inianwidnwafinaf493904","ubeiabfiabjohncai0","861237","yesmannosiryesplease", "alhamdulilah1", "canigotothemarkettofindsomenewclothes"]

function now(landing) {
    window.location = "/smart/" + landing;
}

function getCookieValue(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

function verify() {
    const aja = prompt("Revision Time! Say YAY")
    for (let i = 0; i < allowed.length; i++) {
        if (aja == "YAY") {
            window.location.href = "https://smartrevise.online/student/home/Index";
            break;
        }
        if (aja === allowed[i]) {
            return aja
        } else if (aja === "MASTERKEY") {
            return aja
        } else {
            if (i === allowed.length - 1)
                window.location.href = "https://smartrevise.online/student/home/Index";
        }
    }
}


const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
function rot13(str) {
    let strArray = str.split("")
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].toUpperCase();
    }
    for (let i = 0; i < strArray.length; i++) {
        for (let a = 0; a < alphabet.length; a++) {
            if (strArray[i] == alphabet[a]) {
                let abc = a + 13
                if (abc > 35) {
                    let rem = abc % 36
                    abc = rem
                }
                strArray[i] = alphabet[abc]
                break;
            }
        }
    }
    return strArray.join("");
}

function rot13(str) {
    let strArray = str.split("")
    for (let i = 0; i < strArray.length; i++) {
      strArray[i] = strArray[i].toUpperCase();
    }
    for (let i = 0; i < strArray.length;i++){
      for (let a = 0;a < alphabet.length;a++){
        if (strArray[i] == alphabet[a] ){
          let abc = a + 13
          if (abc > 35){
            let rem = abc % 36
            abc = rem
          }
          strArray[i] = alphabet[abc]
          break;
        }
      }
    }
    return strArray.join("");
  }