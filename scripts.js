// https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json.
let cupcakesCollection = null;

$.get("https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json", function(data){

    console.log(data);
    displayCupcakes(data);

    cupcakesCollection = data;
}, "json").fail(function(data){
    $("#cupcakes").empty();
    $("#cupcakes").append("<div>there was an issue</div>");
});

$("#alpha").on("click", function(){
    if(cupcakesCollection[0].name === "Blubble Gum Pop"){
        return;
    }else{
        let backwardsCupcakes = cupcakesCollection;
        backwardsCupcakes = backwardsCupcakes.reverse();
        displayCupcakes(backwardsCupcakes);
    }
});

$("#zed").on("click", function(){
    if(cupcakesCollection[0].name === "Blubble Gum Pop"){
        let backwardsCupcakes = cupcakesCollection;
        backwardsCupcakes = backwardsCupcakes.reverse();
        displayCupcakes(backwardsCupcakes);
    }else{
        return;
    }
});

//function to display cupcakes
function displayCupcakes(data){
    // clear out container previous content
    $("#cupcakes").empty();

    let string = "";

    for(let cupcake of data){
        string +=
        `<section>
            <img src="${cupcake.image}"  alt="${cupcake.alt}">
            <h4>${cupcake.name}</h4>
            <b>Ingredientes:</b>
            <p class="ingredients">${cupcake.ingredients}</p>
            <b>${cupcake.frosting} Frosting</b>
            <p class="frosting">${cupcake.frostingIngredients}</p>
        </section>`;
    }

    $(`#cupcakes`).html(string);
}