let result = document.getElementById("result");
document.querySelectorAll("button:not(#equals)").forEach(button => {
    button.addEventListener("click", function (e) {
        result.value += this.innerHTML;
    })
})

document.getElementById("equals").addEventListener("click", function (e) {
    result.value = eval(result.value);
})

document.getElementById("c").addEventListener("click", function (e) {
    result.value = ""
})

document.getElementById("del").addEventListener("click", function (e) {
    let sanity = result.value?.replaceAll("Del", "")
    result.value = sanity?.slice(0, -1)

})