$(document).ready( () => {
    console.log("jQuery has Loaded!");

    $("button").on("click", () => {
        const randomNum = Math.ceil(Math.random() * 88);
        $.get(`https://akabab.github.io/starwars-api/api/id/${randomNum}.json`, function(data) {
            $("#name").text(data['name']);
            $(".values p:nth-child(1)").text(data['gender']);
            $(".values p:nth-child(2)").text(data['height']);
            $(".values p:nth-child(3)").text(data['mass']);
            $("img").attr("src", data['image']);
        })
    })
})