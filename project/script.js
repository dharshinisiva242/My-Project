let qrGenrater = () => {
    const abc = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let strlen = 7;
    let res = '';
    for (i = 0; i < strlen; i++) {
        let random = Math.floor(Math.random() * abc.length);
        res += abc.substring(random, random + 1);
    }

    let website = "http://localhost:5000/login?token=" + res;
    if (website) {
        let qrContainer = document.getElementById("qr");
        qrContainer.innerHTML = "";
        new QRCode(qrContainer, website);

        document.getElementById("qr-container").style.display = "block";
    }
}

window.onload = qrGenrater;

setInterval(() => {
    qrGenrater()
}, 300000)