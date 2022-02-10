//bot token
var telegram_bot_id = "5241407877:AAHLrxqpkZzA79lKM6MUr1J3k_hDoCmooKU";
//chat id
var chat_id = 1368894799;
var name, email, number, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    message = document.getElementById("message").value;
    message = "Имя: " + u_name + "\nEmail: " + email + "\nНомер: " + number + "\nСообщение: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
    return false;
};
