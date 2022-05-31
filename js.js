/*
$(function(){

    console.log("valami") // jquery methods go here...
    $(".tartalom").html("<div>Ez az első div</div>");
    $(".tartalom").append("<div>Ez a második div</div>");
    //$(".tartalom").empty();
    let elemtartalom=$(".tartalom").text();
    console.log(elemtartalom);
    $(".tartalom div").css("border", "2px solid red");
    $(".tartalom div").on("click", function(){
        $(this).toggleClass("kiemel");
    });
    $(".tartalom").append("<img>");
    $(".tartalom img").attr("src", "kep.jpg");
    $(".tartalom div").css("border", "2px solid red");
})
*/
const file = "./recept.json"
var data = ""

$(document).ready(function(){
    fetchData(file);
})

function fetchData(files) {
    fetch(files)
        .then(x => x.json())
        .then(data => { 
        console.log(data.receptek);
        megjelenit(data.receptek)
        });
}

function megjelenit(tomb){
    console.log(tomb);
    let txt = "<table>";
    tomb.forEach(function(recept, index){
        txt+="<tr id="+index+">";
        for (const key in recept) {
            txt+="<td>";
            txt+=recept[key];
            txt+="</td>";
        }
        txt+="</tr>";
    });
    txt += "</table>";
    $(".tablazat").append(txt);

    $(".tablazat table tr").on("click", function(){
        let aktId = $(this).attr("id");
        console.log(aktId);
        $(this).toggleClass("tartalom");
        receptMegjelenit(tomb, aktId);
    })
}

function receptMegjelenit(tomb, aktId){
    $(".recept").empty();
    let aktRecept = tomb[aktId]
    tomb.kep
    for (const key in aktRecept) {
        if(key == "Kep"){
            $(".recept").append(`<img src="${aktRecept[key]}" alt="nev">`)  
        }
        else{
            $(".recept").append(`<p>${aktRecept[key]}</p>`)
        }

    }    
}