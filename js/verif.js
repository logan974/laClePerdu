function firstPuzzle() {
  let arrayErreur = ["Champs1, ", "Champs2, ", "Champs3, ", "Champs 4, "];
  let texteErreur = "Code faux des le(s) champ(s) : ";
  let texteReussite =
    "<button onclick=\"window.location.href = './bureauLogan.html'\">Login</button>";
  let err = false;
  if (Formulaire1.Gateau.value != 2007) {
    texteErreur += arrayErreur[0];
    err = true;
  }
  if (Formulaire1.F.value != 2014) {
    texteErreur += arrayErreur[1];
    err = true;
  }
  if (Formulaire1.Vie.value != 2002) {
    texteErreur += arrayErreur[2];
    err = true;
  }
  if (Formulaire1.Musee.value != 1989) {
    texteErreur += arrayErreur[3];
    err = true;
  }
  if (err == false) {
    window.location.href = "./theCakeWasALie.html";
  } else {
    document.getElementById("reponse").innerHTML = texteErreur;
  }
}

function secondPuzzle() {
  let arrayErreur = ["Champs1, ", "Champs2, ", "Champs3,"];
  let texteErreur = "Code faux des le(s) champ(s) : ";
  let texteReussite =
    "<button onclick=\"window.location.href = './bureauLogan.html'\">Login</button>";
  let err = false;
  if (Formulaire2.empereur.value.toLowerCase() != "martin") {
    texteErreur += arrayErreur[0];
    err = true;
  }
  if (Formulaire2.diplomate.value.toLowerCase() != "sixtine") {
    texteErreur += arrayErreur[1];
    err = true;
  }
  if (Formulaire2.colline.value.toLowerCase() != "luc") {
    texteErreur += arrayErreur[2];
    err = true;
  }
  if (err == false) {
    window.location.href = "./porteVersInconnue.html";
  } else {
    document.getElementById("reponse").innerHTML = texteErreur;
  }
}

function thirdPuzzle() {
  let arrayErreur = ["NOP"];
  let texteErreur = "";
  let texteReussite =
    "<button onclick=\"window.location.href = './bureauLogan.html'\">Login</button>";
  let err = false;
  if (Formulaire3.Pierre.value.toLowerCase() != "jade") {
    texteErreur += arrayErreur[0];
    err = true;
  }
  if (err == false) {
    window.location.href = "./reacteur.html";
  } else {
    document.getElementById("reponse").innerHTML = texteErreur;
  }
}
