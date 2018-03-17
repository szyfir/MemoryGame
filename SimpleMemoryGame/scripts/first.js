var fotki = new Array("s0.png", "s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s0.png", "s1.png", "s2.png", "s3.png", "s5.png", "s4.png");
var random = new Array();
var obiekty = new Array();
var ilosc_par = 6;

for (i = fotki.length; i >= 0; i--) {
    var randomFotka = fotki.splice(Math.floor(Math.random() * fotki.length), 1);
    random.push(randomFotka);
}


var s0 = document.getElementById("s0");
s0.addEventListener("click", function () { odwroc(0); });

var s1 = document.getElementById("s1");
s1.addEventListener("click", function () { odwroc(1); });

var s2 = document.getElementById("s2");
s2.addEventListener("click", function () { odwroc(2); });

var s3 = document.getElementById("s3");
s3.addEventListener("click", function () { odwroc(3); });

var s4 = document.getElementById("s4");
s4.addEventListener("click", function () { odwroc(4); });

var s5 = document.getElementById("s5");
s5.addEventListener("click", function () { odwroc(5); });

var s6 = document.getElementById("s6");
s6.addEventListener("click", function () { odwroc(6); });

var s7 = document.getElementById("s7");
s7.addEventListener("click", function () { odwroc(7); });

var s8 = document.getElementById("s8");
s8.addEventListener("click", function () { odwroc(8); });

var s9 = document.getElementById("s9");
s9.addEventListener("click", function () { odwroc(9); });

var s10 = document.getElementById("s10");
s10.addEventListener("click", function () { odwroc(10); });

var s11 = document.getElementById("s11");
s11.addEventListener("click", function () { odwroc(11); });


var pierwsza_odslonieta = false;
var numer_pierwszej_karty;
var numer_drugiej_karty;
var blokada = false;
var liczba_ruchów = 0;


function odwroc(nr)
{
    
    var ukrycie = $("#s"+nr).css("opacity");
    if (blokada == false && ukrycie!=0)
    {
        var obraz = "url(Images/" + random[nr] + ")";
        $("#s" + nr).css("background-image", obraz);
        blokada = true;


        if (pierwsza_odslonieta == false )
        {
            numer_pierwszej_karty = nr;
            pierwsza_odslonieta = true;
            blokada = false;
         
           
        }
        else 
        {           
            numer_drugiej_karty = nr;
           
        


                if (random[numer_pierwszej_karty].toString() == random[numer_drugiej_karty].toString()) {
                    //Ukrycie karty
                    setTimeout(function () { ukrycie_kart(numer_pierwszej_karty, numer_drugiej_karty); }, 600);
                }
                else {
                    setTimeout(function () { pokazanie_rewersu(numer_pierwszej_karty, numer_drugiej_karty); }, 1000);

                }
                pierwsza_odslonieta = false;
       
            
        }


    }
}

function pokazanie_rewersu(nr_karta1, nr_karta2)
{

    $("#s" + nr_karta1).css("background-image", "url(/Images/layout.png)");
    $("#s" + nr_karta2).css("background-image", "url(/Images/layout.png)");
    ruchy();

    blokada = false;
}
function ukrycie_kart(nr_karta1, nr_karta2)
{
        $("#s" + nr_karta1).css("opacity", 0);
        $("#s" + nr_karta2).css("opacity", 0);
        ilosc_par--;
        if (ilosc_par == 0) {
            document.getElementById("pole").innerHTML = "Wygrana! Gratulacje </br> <a style='cursor:pointer' onClick='window.location.reload()'>Gramy od nowa?</a>";
        }
        ruchy();
        blokada = false;

 
}

function ruchy()
{
    liczba_ruchów++;
    document.getElementById("score").innerHTML = "Liczba ruchów: " + liczba_ruchów;
}


