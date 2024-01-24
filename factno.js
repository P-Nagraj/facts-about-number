let userEle = document.getElementById("userInput");
let factParaElement = document.getElementById("fact");
let loadingSpinner = document.getElementById("spinner");


function resultDisplay(event) {
    if (event.key === "Enter") {
        let userValue = userEle.value;
        if (userValue === "") {
            alert("Enter A Number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userValue;
        let option = {
            method: "GET",
        };
        loadingSpinner.classList.remove("d-none");
        factParaElement.classList.add("d-none");
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                loadingSpinner.classList.add("d-none");
                factParaElement.classList.remove("d-none");
                let result = jsonData.fact;
                factParaElement.textContent = result;
            });
    }

}

userEle.addEventListener("keyup", resultDisplay);