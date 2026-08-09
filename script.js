/* =========================================================
   HAPPY BIRTHDAY JANET
   SCRIPT.JS
   PHASE 4
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------
       LOADING SCREEN
    ----------------------------- */

    const loadingScreen = document.getElementById("loading-screen");

    const introScene = document.getElementById("intro-scene");

    const introText = document.getElementById("introText");

    const skipIntro = document.getElementById("skipIntro");

    const countdownPage = document.getElementById("countdown-page");

    const birthdayPage = document.getElementById("birthday-page");

const unlockDate = new Date().getTime() - 1000;
    const messages = [

        "I've been waiting...",

        "For this day...",

        "Because today...",

        "Someone very special...",

        "Celebrates another year... ❤️"

    ];

    let messageIndex = 0;

    function startIntro(){

        introScene.style.display = "flex";

        introText.textContent = messages[0];

        const interval = setInterval(()=>{

            messageIndex++;

            if(messageIndex < messages.length){

                introText.style.opacity = 0;

                setTimeout(()=>{

                    introText.textContent = messages[messageIndex];

                    introText.style.opacity = 1;

                },400);

            }

            else{

                clearInterval(interval);

                setTimeout(()=>{

                    introScene.style.display = "none";

                    startCountdown();

                },1200);

            }

        },3000);

    }

    function startCountdown(){

        const days=document.getElementById("days");
        const hours=document.getElementById("hours");
        const minutes=document.getElementById("minutes");
        const seconds=document.getElementById("seconds");

        function updateCountdown(){

            const now=new Date().getTime();

            const distance=unlockDate-now;

            if(distance<=0){

                countdownPage.style.display="none";

                birthdayPage.style.display="block";

                if(typeof confetti==="function"){

                    confetti({

                        particleCount:300,

                        spread:180,

                        origin:{y:.6}

                    });

                }

                clearInterval(timer);

                return;

            }

            countdownPage.style.display="flex";

            birthdayPage.style.display="none";

            days.textContent=Math.floor(distance/(1000*60*60*24));

            hours.textContent=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

            minutes.textContent=Math.floor((distance%(1000*60*60))/(1000*60));

            seconds.textContent=Math.floor((distance%(1000*60))/1000);

        }

        updateCountdown();

        const timer=setInterval(updateCountdown,1000);

    }

    setTimeout(()=>{

        loadingScreen.style.opacity="0";

        setTimeout(()=>{

            loadingScreen.style.display="none";

            startIntro();

        },1000);

    },2500);

    skipIntro.addEventListener("click",()=>{

        introScene.style.display="none";

        startCountdown();

    });

});
/* =====================================
   TYPEWRITER EFFECT
===================================== */

function typeLetter(letter){

    const typedLetter = document.getElementById("typedLetter");

    const letterCard = document.querySelector(".letter-card");

    letterCard.style.display = "block";

    typedLetter.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < letter.length){

            typedLetter.innerHTML += letter.charAt(i);

            i++;

            setTimeout(typing,25);

        }

    }

    typing();

}
/* =====================================
   START EXPERIENCE
===================================== */

const startButton = document.getElementById("startExperience");
const birthdayMusic = document.getElementById("birthdayMusic");

if(startButton){

    startButton.addEventListener("click",()=>{

        if(birthdayMusic){
            birthdayMusic.volume = 0.6;
            birthdayMusic.play().catch(err => console.log(err));
        }

        if(typeof confetti === "function"){

            confetti({

                particleCount:250,

                spread:170,

                origin:{y:.6}

            });

        }

        const letter = `
        // =====================
// PLAY BACKGROUND MUSIC
// =====================

const music = document.getElementById("birthdayMusic");

if (music) {

    music.volume = 0.25; // 25% volume

    music.play().catch(error => {

        console.log("Music couldn't start:", error);

    });

}

        const letter = `

(I hope you read this, my Love.

Happy Birthday, my beautiful Janet, my sweetest blessing 

As you read this, I hope you can feel every heartbeat behind these words because they all come from a place of genuine love. Some feelings are too deep to say in ordinary conversations, and that's why I decided to write this letter. I wanted you to have something you could keep, something you could come back to whenever you want to remember just how much you mean to me.

Today is your special day, and more than anything, I want to thank God for bringing you into this world. I may not have met you from the beginning of your journey, but I am grateful that life brought our paths together. Meeting you has been one of the greatest blessings I could ever ask for.

You have become more than just my girlfriend. You have become my peace, my smile on difficult days, my reason to believe that love can be beautiful again. Every conversation we have, every laugh we share, every little moment with you has found a permanent place in my heart. Even when we are apart, somehow you never leave my thoughts. You are always there, quietly reminding me that there is someone worth loving with everything I have.

I know I am not a perfect man. I have my flaws, my fears, and my moments when I don't always get everything right. But if there is one thing I will never want you to question, it is my love for you. My love for you is real. It is not based on convenience or temporary emotions. It is a choice I make every day, and one I will continue to make because you are worth it.

Thank you for accepting me, for listening to me, for encouraging me, and for simply being yourself. You have shown me kindness in ways you may not even realize. You have taught me that love is found in the little things a simple message, a smile, your concern for me, and the way you make me feel seen and appreciated.

As you celebrate another year today, I don't just pray for happiness for you. I pray that God surrounds you with favor wherever you go. I pray that every dream hidden in your heart finds its way into reality. May every opportunity you deserve locate you. May your hard work be rewarded. May your laughter never disappear. May your health remain strong, your faith become stronger, and may peace always find its way into your heart.

I pray that whenever life becomes difficult, you will never feel alone. I hope you always remember that there is someone here who genuinely believes in you and wants nothing but the very best for you. I want to see you grow into the amazing woman you are meant to become. I want to celebrate your victories, encourage you through your struggles, and remind you every day that you are capable of achieving incredible things.

Sometimes I sit and think about the future, and I smile because I imagine all the beautiful memories we could create together. I imagine celebrating birthdays side by side, laughing over little jokes that only we understand, supporting each other through every season of life, and building something beautiful together. Whether life gives us sunshine or rain, I want us to face it together, holding on to each other with love, patience, and understanding.

Mihamo, you deserve a love that is honest, respectful, faithful, patient, and consistent. Every single day I pray that I become that man for you. I want to be someone who makes you feel safe, valued, appreciated, and deeply loved. I never want you to doubt your place in my heart because you occupy a space that no one else can replace.

Thank you for every smile you've given me, every memory we've shared, and every moment you've chosen to spend with me. Thank you for trusting me enough to let me be part of your life. That is a gift I never take for granted.

On your birthday, I want you to make one promise to yourself: never stop believing in your worth. Never let anyone make you feel less than the incredible woman you are. Continue chasing your dreams with confidence, continue being kind, continue shining your light wherever you go because this world is a better place with you in it.

And if there is one thing I could give you today that would last forever, it would be the assurance that you are deeply loved. Not because of what you have or what you achieve, but simply because you are you.

I don't know what tomorrow holds, but I do know that today my heart is full of gratitude because I get to celebrate someone as wonderful as you. I hope this new year of your life brings you more joy than sorrow, more victories than disappointments, more laughter than tears, and more reasons to smile than you could ever count.

Happy Birthday once again, my love, my Janet, my Mihamo.

May God continue to bless you, protect you, guide your steps, and fill your life with endless happiness. Thank you for being the wonderful woman you are. I will continue to cherish you, support you, pray for you, and love you with all that I have.

Enjoy every moment of your special day, my love. You deserve every beautiful thing life has to offer.

With all my heart,

I love you so much darling.)

With all my heart,

Israel ❤️

`;

        typeLetter(letter);

        startButton.style.display = "none";

    });

}
/* =========================================================
   PHASE 6
   Floating Hearts • Balloons • Rose Petals
========================================================= */

/* ===========================
   TOUCH HEARTS
=========================== */

const touchLayer = document.getElementById("touch-hearts");

document.addEventListener("click", createTouchHeart);
document.addEventListener("touchstart", createTouchHeart);

function createTouchHeart(e){

    if(!touchLayer) return;

    let x, y;

    if(e.touches){

        x = e.touches[0].clientX;
        y = e.touches[0].clientY;

    }else{

        x = e.clientX;
        y = e.clientY;

    }

    const heart = document.createElement("div");

    heart.className = "touch-heart";

    heart.innerHTML = "❤️";

    heart.style.left = x + "px";

    heart.style.top = y + "px";

    touchLayer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1200);

}

/* ===========================
   FLOATING HEARTS
=========================== */

const floatingHearts = document.getElementById("floating-hearts");

function spawnHeart(){

    if(!floatingHearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration =
        (5 + Math.random()*5) + "s";

    heart.style.fontSize =
        (18 + Math.random()*20) + "px";

    floatingHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(spawnHeart,700);

/* ===========================
   FLOATING BALLOONS
=========================== */

const balloonLayer = document.getElementById("floating-balloons");

const balloonColors = [

    "red",

    "pink",

    "white",

    "gold"

];

function spawnBalloon(){

    if(!balloonLayer) return;

    const balloon = document.createElement("div");

    balloon.className =
        "balloon " +
        balloonColors[
            Math.floor(Math.random()*balloonColors.length)
        ];

    balloon.style.left =
        Math.random()*100 + "%";

    balloon.style.animationDuration =
        (10 + Math.random()*8) + "s";

    balloonLayer.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },18000);

}

setInterval(spawnBalloon,2200);

/* ===========================
   ROSE PETALS
=========================== */

const petalLayer = document.getElementById("rose-petals");

function spawnPetal(){

    if(!petalLayer) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random()*100 + "%";

    petal.style.animationDuration =
        (6 + Math.random()*5) + "s";

    petal.style.fontSize =
        (14 + Math.random()*18) + "px";

    petalLayer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(spawnPetal,500);
/* =========================================================
   PHASE 7
   Shooting Stars • Sparkles • Animated Browser Title
========================================================= */

/* ===========================
   SHOOTING STARS
=========================== */

const shootingStarsLayer = document.getElementById("shooting-stars");

function createShootingStar(){

    if(!shootingStarsLayer) return;

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = "3px";
    star.style.height = "120px";
    star.style.background = "linear-gradient(white, transparent)";
    star.style.transform = "rotate(45deg)";
    star.style.left = Math.random() * 90 + "%";
    star.style.top = Math.random() * 30 + "%";
    star.style.opacity = "1";
    star.style.boxShadow = "0 0 15px white";
    star.style.transition = "all 1.5s linear";

    shootingStarsLayer.appendChild(star);

    requestAnimationFrame(() => {

        star.style.left = (parseFloat(star.style.left) + 20) + "%";
        star.style.top = (parseFloat(star.style.top) + 40) + "%";
        star.style.opacity = "0";

    });

    setTimeout(() => {

        star.remove();

    }, 1500);

}

setInterval(createShootingStar, 6000);

/* ===========================
   SPARKLES
=========================== */

const sparkleLayer = document.getElementById("sparkles");

function createSparkle(){

    if(!sparkleLayer) return;

    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = Math.random() * 100 + "%";
    spark.style.top = Math.random() * 100 + "%";

    sparkleLayer.appendChild(spark);

    setTimeout(() => {

        spark.remove();

    }, 2000);

}

setInterval(createSparkle, 250);

/* ===========================
   BROWSER TITLE
=========================== */

const titles = [

    "❤️ Happy Birthday Janet",

    "❤️ You Are My Greatest Blessing",

    "❤️ Thank You For Existing",

    "❤️ I Love You",

    "❤️ Forever & Always"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if(titleIndex >= titles.length){

        titleIndex = 0;

    }

}, 4000);