window.console.log("eu sou o console")

//EVENTS - executa ação quando clicado pelo usuário

//ouvir o submit
//const submitButton = document.querySelector("#submit-button");

//submitButton.addEventListener("click", function (e) {
    //e.preventDefault(); //impede o comportamento padrão
    //console.log("clicked!");

    const myForm = document.querySelector("#my-form");

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    
    const items = document.querySelector(".items");
    const body = document.querySelector("body");
    
    
    submitButton.addEventListener("click", function (e) {
        e.preventDefault(); //impede o comportamento padrão
    
        const nameValue = nameInput.value; //pega os valores do input
        const emailValue = emailInput.value;
    
        //para valores não preenchidos
        if (nameValue === "" || emailValue === "") {
            return alert("Please fill out all the fields!"); //prenenche todos os campos
        };
    })
//

//myForm.style.background = "red";
//items.children[1].textContent = emailValue;