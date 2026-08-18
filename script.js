function getOtp() {
    let OTP = Math.floor(100000 + Math.random() * 900000);
    alert(OTP);
    let remaining = 10;

    let countDown = setInterval(function () {
        let minute = Math.floor(remaining / 60);
        let second = remaining % 60;
        document.getElementById("timer").textContent = minute + " : " + (second < 10) ? "0" : second;
        remaining--;
        if (remaining < 0) {
            clearInterval(countDown);
        }
    }, 1000)


}