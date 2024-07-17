const messages = [
    "AKU CUMAN MAU BILANG",
    "SEMANGAT UNTUK MENJALANI HARI INI",
    "AKU GATAU HARUS NGOMONG APA KARENA KITA BARU KENAL",
    "DARI PERKENALAN INI SEMOGA KITA SELALU BAHAGIA YAA!!!!",
    "HEHE, MAAF MESKI GOMBAL SEDIKIT",
    "JAGA DIRI BAIK-BAIK YAA DISANA!!!!!!!",
    "LOVE YOU IBU GURU"
];

const images = [
    "panda1.png",
    "panda8.png",
    "panda4.png",
    "panda2.png",
    "panda5.png",
    "panda6.png",
    "panda7.png"
];

let currentIndex = 0;

document.getElementById('envelope').addEventListener('click', function() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('backgroundMusic').play();
    startSlideshow();
});

function startSlideshow() {
    let timeLeft = 5;
    const timerElement = document.getElementById('timer');
    const countdown = setInterval(() => {
        if (timeLeft > 0) {
            timerElement.textContent = `Tunggu ${timeLeft} detik...`;
            timeLeft--;
        } else {
            changeMessage();
            timeLeft = 5;
            if (currentIndex >= messages.length) {
                clearInterval(countdown);
            }
        }
    }, 1000);
}

function changeMessage() {
    const messageElement = document.getElementById('message');
    const pandaImage = document.getElementById('pandaImage');
    
    messageElement.textContent = messages[currentIndex];
    pandaImage.src = images[currentIndex];
    currentIndex++;
}
