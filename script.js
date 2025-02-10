const age = document.querySelector(".age input")
const height = document.querySelector(".height input")
const weight = document.querySelector(".weight input")
const submit = document.querySelector(".submit button")
const male = document.querySelector("#male")
const female = document.querySelector("#female")

function isNormal(a, b, c) {
    document.querySelector(".value").style.color = "black"
    document.querySelector(".normal").style.visibility = "visible"
    if (a <= b) {
        document.querySelector(".normal").innerText = `Under Weight`
        document.querySelector(".normal").style.color = "red"
    }
    else if (a <= c) {
        document.querySelector(".normal").innerText = `Normal Weight`
        document.querySelector(".normal").style.color = "green"
    }
    else {
        document.querySelector(".normal").innerText = `Over Weight`
        document.querySelector(".normal").style.color = "red"
    }
}

function range(a, b, c) {
    let lower = Math.round(a * (c * c))
    let upper = Math.round(b * (c * c))
    document.querySelector(".range").style.visibility = "visible"
    document.querySelector(".range").innerText = `Normal Range: ${lower}Kg - ${upper}Kg`
}

function unvalid(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || a > 100) {
        document.querySelector(".value").innerText = "Please enter Valid values"
        document.querySelector(".value").style.color = "red"
        document.querySelector(".normal").style.visibility = "hidden"
        document.querySelector(".range").style.visibility = "hidden"
    }
}

male.addEventListener("click", () => {
    document.getElementById("female").style.border = "1px solid black"
    document.getElementById("male").style.border = "2px solid black"
})

female.addEventListener("click", () => {
    document.getElementById("male").style.border = "1px solid black"
    document.getElementById("female").style.border = "2px solid black"
})

submit.addEventListener("click", () => {
    let age = document.querySelector(".age input")
    let height = document.querySelector(".height input")
    let weight = document.querySelector(".weight input")

    let bmi = weight.value / (height.value * height.value)
    document.querySelector(".result").style.visibility = "visible"
    document.querySelector(".value").innerText = `BMI: ${bmi}`

    if (age.value < 5) {
        isNormal(bmi, 13.8, 16.8)
        range(13.8, 16.8, height.value)
    } else if (age.value < 10) {
        isNormal(bmi, 14.2, 19.4)
        range(14.2, 19.4, height.value)
    } else if (age.value <= 15) {
        isNormal(bmi, 16.5, 23.4)
        range(16.5, 23.4, height.value)
    } else if (age.value >= 16) {
        isNormal(bmi, 18.5, 24.9)
        range(18.5, 24.9, height.value)
    }
    unvalid(age.value, weight.value, height.value)
})