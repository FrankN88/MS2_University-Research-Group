let foto = new Array();

foto[0] = "assets/images/people/gallery1.jpeg"
foto[1] = "assets/images/people/gallery2.jpeg"
foto[2] = "assets/images/people/gallery3.jpeg"
foto[0] = "assets/images/people/gallery4.jpeg"
foto[1] = "assets/images/people/gallery5.jpeg"
foto[2] = "assets/images/people/gallery6.jpeg"

let i = 0;

function ahead()
{
    if (i == 0)
    {
        i = foto.length - 1;
    }
    else
    {
        i--;
    }
    document.immagine.src = foto[i];
}

function back()
{
    if (i > foto.length - 1)
    {
        i++;
    }
    else
    {
        i=0;
    }
    document.immagine.src = foto[i];
}