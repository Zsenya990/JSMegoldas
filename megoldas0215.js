document.write(`<h2>Elso feladat!</h2>`)
document.write(`<h3>A dokumentum készitője: </h3> Juhász Jevgenyij <br>`);
document.write(`<h3>A csoport azonositoja: </h3> Team 15<br>`);
document.write(`<h4>Mennyire ertem a HTML nyelvet: </h4> 90%`);
document.write(`<h4>Mennyire ertem a CSS kodolast: </h4> 90%`);
document.write(`<h4>Mennyire ertem jelengleg a JavaScript-et: </h4> 85%`);
document.write("<hr>");

document.write(`<h2>Masodik feladat!</h2>`)
function hatvany(a, b) {
    return a ** b;
}
document.write(hatvany(5, 2));
document.write("<br>" + hatvany(2, 3));
document.write(`<hr>`);

document.write(`<h2>Harmadik feladat!</h2>`);
function randomszam(hatar_egy, hatar_ketto) {
    if (hatar_egy <= hatar_ketto) {
        var alsohatar = hatar_egy;
        var felsohatar = hatar_ketto;
    }
    else {
        var alsohatar = hatar_ketto;
        var felsohatar = hatar_egy;
    }

    if (alsohatar == felsohatar && alsohatar % 2 == 1) {
        return `[${alsohatar},${felsohatar}] intervallumban NEM generálható páros szám!`;
    }

    let generaltszam;
    do {
        generaltszam = Math.floor(Math.random() * (felsohatar - alsohatar + 1)) + alsohatar;
    } while (generaltszam % 2 !== 0);

    return `[${alsohatar},${felsohatar}] intervallumban generált páros számunk: ${generaltszam}`;
}
document.write(randomszam(2, 500));
document.write(`<hr>`);

document.write(`<h2>Negyedik feladat!</h2>`);
function Eletkor(kor) {
    if (kor < 0) {
        return "Hibás adat";
    }
    else if (kor <= 6) {
        return "Kisgyermekkor";
    }
    else if (kor <= 12) {
        return "Gyermekkor";
    }
    else if (kor <= 16) {
        return "Serdülőkor";
    }
    else if (kor <= 20) {
        return "Ifjúkor";
    }
    else if (kor <= 30) {
        return "Fiatal felnőttkor";
    }
    else if (kor <= 60) {
        return "Felnőttkor";
    }
    else if (kor <= 120) {
        return "Aggkor";
    }
    else {
        return "Hibás adat";
    }
}
document.write("<br>" + Eletkor(-1));
document.write("<br>" + Eletkor(5));
document.write("<br>" + Eletkor(10));
document.write("<br>" + Eletkor(15));
document.write("<br>" + Eletkor(25));
document.write("<br>" + Eletkor(35));
document.write("<br>" + Eletkor(55));
document.write("<br>" + Eletkor(95));
document.write("<br>" + Eletkor(135));
document.write(`<hr>`)

document.write(`<h2>Otodik feladat!</h2>`);
function Oszthato(szam_1, szam_2) {
    if (szam_1 % szam_2 == 0) {
        return "Oszthato"
    }
    else {
        return "Nem oszthato"
    }
}
document.write("<br>" + Oszthato(5, 10));
document.write("<br>" + Oszthato(10, 2));
document.write("<br>" + Oszthato(25, 3));
document.write(`<hr>`)

document.write(`<h2>Hatodik feladat!</h2>`);
function Negyzetszamok() {
    let eredmeny = "";
    for (let i = 1; i <= 10; i++) {
        eredmeny += `A(z) ${i}. négyzetszám: ${i * i}<br>`;
    }
    return eredmeny;
}
document.write(Negyzetszamok());