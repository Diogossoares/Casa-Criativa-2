function addCard(){
    document
        .querySelector("#modal")
        .classlist
        .toggle("hide")



console.log(toggle);

    document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

    document
    .querySelector("modal")
    .classList
    .toggle("addScroll")
}

function checkFields(event){
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsString = ! event.target[value].value.trim()
        if(checkIfIsString && checkIfIsEmpty){
            return true
        }
    })


        if(isEmpty){
            event.preventDefault()
            alert("por favor, preencha todos os campos")
        }
    
}