const allowed = ["bbioawbdibiawdbi", "tawz1","inianwidnwafinaf493904","ubeiabfiabjohncai0","yesmannosiryesplktctcccctccease", "alhamdulilah1", "canigotothemarkettofindsomenewclothes"]

function now(landing){
    window.location = "/smart/"+landing+"?UserID="+respond(john);
}

function setCookie(name, value, daysToExpire) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    var cookieString = name + "=" + encodeURIComponent(value) + "; expires="+ expirationDate.toUTCString() + "; path=/";

    document.cookie = cookieString;
}

function verify() {
      const aja = prompt("Premium Only")
      if (aja !== null) {
        const yesman = rot13(aja);
        setCookie("ThanksMan",yesman, 1)
        setCookie("UserID",respond(aja),1)
      }
      for (let i = 0; i < allowed.length; i++) {
        if (aja === "YAY" || aja === null) {
          window.location.href = "https://smartrevise.online/student/home/Index";
          break;
        }
        if (aja === allowed[i]) {
          alert("PASSED");
          return aja
        } else {
          if (i === allowed.length - 1) {
            window.location.href = "https://smartrevise.online/student/home/Index";
          }
        }
      }
}

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]
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

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === "r") {
        console.log("CTRL + R PRESSED")
        event.preventDefault();
        window.location.href = "https://thegrandquestion.github.io/smart/";
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
    }
})

function respond(user){
    for (let i = 0; i < allowed.length; i++){
      if (user === allowed[i]){
        return i
      }
    }
    window.location = "https://smartrevise.online"
  }

const john = verify();
if (john === null) {
    window.location = "https://smartrevise.com"
}