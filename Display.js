function applyFilters()
{
    var authorname = document.getElementById("authorname").value.toLowerCase();
    var book = document.getElementById("title").value.toLowerCase();
    var subject = document.getElementById("subject").value.toLowerCase();
    var publish = document.getElementById("publishDate").value;

    reformattedDate = publish[8] + publish[9] + "/";
    reformattedDate = reformattedDate + publish[5] + publish[6] + "/";
    reformattedDate = reformattedDate + publish.slice(0,4);
    publish = reformattedDate;

    if(authorname.length == undefined)
        authorname = "";
    if(book.length == undefined)
        book = "";
    if(subject.length == undefined)
        subject = "";
    if(publish.includes("NaN"))
        publish = "";

    let cards = document.getElementsByClassName('card');
    let counter = 0;

    for(let i = 0 ; i < cards.length ; i++)
    {
        var card = cards[i];
        var bookName = card.getElementsByTagName("h2")[0].innerText.toLowerCase();
        var author = card.getElementsByTagName("p")[0].innerText.toLowerCase();
        var date = card.getElementsByTagName("p")[1].innerText;
        var subj = card.getElementsByTagName("p")[2].innerText.toLowerCase();

        var flag1 = 0,flag2 = 0,flag3 = 0,flag4 = 0;
        if(authorname == "" || author.includes(authorname))
            flag2 = 1;
        if(book == "" || bookName.includes(book))
            flag1 = 1;
        if(publish == "" || date.includes(publish))
            flag3 = 1;
        if(subject == "" || subj.includes(subject))
            flag4 = 1;

        if(flag1 && flag2 && flag3 && flag4)
        {
            card.style.display = "block";
            counter++;
        }
        else
        {
            card.style.display = "none";
        }
    }

    if(counter == 0)
    {
        document.getElementById("search").innerHTML = "Oops! Your search showed 0 results!";
    }
    else
    {
        document.getElementById("search").innerHTML = "Your search showed "+counter+" result(s)!";
    }
}

function Reset()
{
    document.getElementById("authorname").value = "";
    document.getElementById("title").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("publishDate").value = "";
    document.getElementById("search").innerHTML = "";

    const cards = document.getElementsByClassName('card');
    for(let i = 0 ; i < cards.length ; i++)
    {
        var card = cards[i];
        var bookName = card.getElementsByTagName("h2")[0].innerText.toLowerCase();
        card.style.display = "block";
    }
}