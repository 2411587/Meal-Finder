function searchMeal() {

    var search = document.getElementById("search").value;

    var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(search);

    fetch(url)

    .then(res => res.json())

    .then(data => {

        var meals = data.meals;

        var output = "";

        if (meals == null) {
            output = "<h2>No meals found!</h2>";
        }

        else {

            for (var i = 0; i < meals.length && i < 5; i++) {

                output = output + `

                    <div class="meal-card">

                        <img src="${meals[i].strMealThumb}">

                        <h2>${meals[i].strMeal}</h2>

                        <p>Category: ${meals[i].strCategory}</p>

                        <p>Cuisine: ${meals[i].strArea}</p>

                    </div>

                `;
            }
        }

        document.getElementById("meals").innerHTML = output;

    })

    .catch(error => {
        document.getElementById("meals").innerHTML =
            "Unable to load meals. Please try again.";
    });

}