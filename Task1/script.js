let countdown;

document.querySelector(".join-btn").addEventListener("click", openPreparing);

function openPreparing() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("preparing").classList.remove("hidden");
    document.getElementById("unlocked").classList.add("hidden");

    let time = 5;
    document.getElementById("count").innerText = time;

    countdown = setInterval(() => {
        time--;
        document.getElementById("count").innerText = time;

        if (time === 0) {
            showUnlocked();
        }
    }, 1000);
}

function showUnlocked() {
    clearInterval(countdown);

    document.getElementById("preparing").classList.add("hidden");
    document.getElementById("unlocked").classList.remove("hidden");

    // After 1.5 seconds → go to Task 1 page
    setTimeout(() => {
        window.location.href = "task1.html";
    }, 1500);
}

