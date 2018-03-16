var s0 = document.getElementById('s0');
s0.addEventListener('click', function () { odwrocKarte(); });
function odwrocKarte()
{
    var obraz = 'url("Images/ahri.png")';
    $("#s0").css("background-image", obraz);
}