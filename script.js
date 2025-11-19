let loginButton = document.getElementById("loginButton");
let nameInput = document.getElementById("nameInput");

loginButton.addEventListener("click", function () {
    let userName = nameInput.value.trim();

        if (userName === "") {
                alert("Please enter your name!");
                    } else {
                            // Save the name
                                    localStorage.setItem("userName", userName);

                                            // Redirect to the love page
                                                    window.location.href = "love.html";
                                                        }
                                                        });