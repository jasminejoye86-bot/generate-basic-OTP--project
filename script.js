let OTP
let countDown;
function getOtp() {
    OTP = Math.floor(100000 + Math.random() * 900000);
    alert(OTP);
    let remaining = 10;

    countDown = setInterval(function () {
        let minute = Math.floor(remaining / 60);
        let second = remaining % 60;
        document.getElementById("timer").textContent = `${minute} : ${second < 10 ? "0" + second : second} `;
        remaining--;
        if (remaining <= 0) {
            clearInterval(countDown);
        }
    }, 1000)
}
function checkOtp() {
    let otp = document.getElementById("otp").value;
    if (otp == OTP) {
        clearInterval(countDown)
        document.getElementById("display").innerHTML = "<h3 style='color:green'>OTP verified</h3>"
    } else {
        clearInterval(countDown)
        document.getElementById("display").innerHTML = "<h3 style='color:red'>Wrong OTP </h3>"
    }
}