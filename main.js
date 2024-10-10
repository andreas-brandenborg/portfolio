const switchBtn = document.querySelector("#switch")
console.log(switchBtn)

switchBtn.addEventListener("change", () => {
    if (switchBtn.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
})
