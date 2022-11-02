const username = prompt("Введите имя: ")
let count = 0

if (username) {
    document.getElementById("user_name").innerHTML = "Ваш список дел, " + username + ":"
} else {
    document.getElementById("user_name").innerHTML = "Список дел анонимного пользователя"
}

function addTasks() {
    count = count + 1

    if (count > 5) {
        document.getElementById("fail").innerHTML = "Можно ввести до 5 дел"
        return
    }

    const input = document.getElementById("myinput")
    const task = input.value

    const myList = document.getElementById("list")
    myList.innerHTML += `<li>${task}</li>`
    input.value = ""
}