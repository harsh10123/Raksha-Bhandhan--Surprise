/* ================= HACKER INTRO ================= */

const hackerLines = [

    "Scanning identity...",

    "Searching for special person...",

    "Found: MUSKI ❤️",

    "Decrypting Raksha Bandhan surprise...",

    "Love Encryption: SUCCESS",

    "Welcome, Sister 🌸"

];

let hackerIndex = 0;


function typeHackerText(){

    const textElement = document.getElementById("hackerText");

    if(hackerIndex < hackerLines.length){

        textElement.innerHTML += hackerLines[hackerIndex] + "<br>";

        hackerIndex++;

        setTimeout(typeHackerText, 700);

    }

}


let progress = 0;


const progressInterval = setInterval(function(){

    progress += 5;

    document.getElementById("progressBar").style.width = progress + "%";

    document.getElementById("progressText").innerText =
        "Scanning... " + progress + "%";


    if(progress >= 100){

        clearInterval(progressInterval);

        document.getElementById("progressText").innerText =
            "ACCESS READY ❤️";

        document.getElementById("startBtn").style.display =
            "inline-block";

    }

}, 200);


typeHackerText();



/* ================= PAGE FUNCTION ================= */

function showPage(pageId){

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page){

        page.classList.remove("active");

        page.style.display = "";

    });


    const selectedPage = document.getElementById(pageId);

    selectedPage.classList.add("active");

}



/* ================= LOGIN ================= */

function showLogin(){

    showPage("loginPage");

}


function checkLogin(){

    const username =
        document.getElementById("username")
        .value
        .trim()
        .toLowerCase();

    const message =
        document.getElementById("loginMessage");


    if(

        username === "muski" ||
        username === "muskan"

    ){

        message.innerText =
            "Correct! Welcome Muski ❤️";

        setTimeout(function(){

            showQuiz();

        }, 800);

    }

    else{

        message.innerText =
            "Hmm... Only my special sister knows the secret name ❤️";

    }

}



/* ================= QUIZ ================= */

const quizQuestions = [

    {

        question:
        "Who made this special website for you? ❤️",

        options:
        [
            "Your Brother Harsh",
            "A Hacker",
            "A Random Person",
            "Nobody"
        ],

        answer:0

    },

    {

        question:
        "What is stronger than any password? 🔐",

        options:
        [
            "Wi-Fi",
            "A Brother-Sister Bond ❤️",
            "A Computer",
            "A Firewall"
        ],

        answer:1

    },

    {

        question:
        "What does your brother promise? 🌸",

        options:
        [
            "To annoy you forever 😂",
            "To always support you ❤️",
            "Both of the above 😄",
            "Nothing"
        ],

        answer:2

    }

];


let currentQuestion = 0;


function showQuiz(){

    showPage("quizPage");

    currentQuestion = 0;

    displayQuestion();

}


function displayQuestion(){

    const question =
        quizQuestions[currentQuestion];


    document.getElementById("questionText").innerText =
        question.question;


    const optionsBox =
        document.getElementById("optionsBox");


    optionsBox.innerHTML = "";


    question.options.forEach(function(option, index){

        const button =
            document.createElement("button");


        button.className =
            "optionButton";


        button.innerText = option;


        button.onclick = function(){

            checkAnswer(index);

        };


        optionsBox.appendChild(button);

    });

}


function checkAnswer(selectedAnswer){

    const question =
        quizQuestions[currentQuestion];


    const message =
        document.getElementById("quizMessage");


    if(selectedAnswer === question.answer){

        message.innerText =
            "Correct! ❤️";


        setTimeout(function(){

            currentQuestion++;


            if(
                currentQuestion <
                quizQuestions.length
            ){

                message.innerText = "";

                displayQuestion();

            }

            else{

                showGiftPage();

            }

        }, 700);

    }

    else{

        message.innerText =
            "Try again 😄";

    }

}



/* ================= GIFT PAGE ================= */

function showGiftPage(){

    showPage("giftPage");

}


function chooseGift(gift){

    const message =
        document.getElementById("giftMessage");


    if(gift === "love"){

        message.innerText =
            "Correct choice! The best gift is waiting ❤️";


        setTimeout(function(){

            showLovePage();

        }, 1000);

    }

    else{

        message.innerText =
            "Nice choice 😄 But there is an even more special gift ❤️";

    }

}



/* ================= LOVE PAGE ================= */

function showLovePage(){

    showPage("lovePage");

}



/* ================= LETTER PAGE ================= */

function openLetterPage(){

    showPage("letterPage");


    const music =
        document.getElementById("bgmusic");


    music.play().catch(function(){

        console.log(
            "Click Music ON/OFF if browser blocks autoplay."
        );

    });


    setTimeout(function(){

        openEnvelope();

    }, 800);

}



/* ================= ENVELOPE ================= */

let letterStarted = false;


function openEnvelope(){

    const envelope =
        document.getElementById("envelope");


    envelope.classList.add("open");


    if(!letterStarted){

        letterStarted = true;

        setTimeout(function(){

            typeLetter();

        }, 700);

    }


    setTimeout(function(){

        document
        .getElementById("memorySection")
        .classList
        .add("show");

    }, 2500);

}



/* ================= TYPEWRITER LETTER ================= */

const letterMessage = `Happy Raksha Bandhan Muski ❤️

This is not just a website.

It is a small surprise made specially for you.

Every page,
every click,
every animation,
and every line of code

was made with love ❤️

Thank you for being my sister,
my friend,
and one of the most important people in my life.

We may fight,
argue,
and annoy each other 😂

but our bond will always remain special.

I pray that you always stay happy,
achieve all your dreams,
and keep smiling forever.

I promise that whenever you need me,
I will always try to stand beside you.

Happy Raksha Bandhan ❤️

Love you forever.

Your Brother,
Harsh ❤️`;


function typeLetter(){

    const letterText =
        document.getElementById("letterText");


    letterText.innerHTML = "";


    let index = 0;


    function type(){

        if(index < letterMessage.length){

            if(letterMessage.charAt(index) === "\n"){

                letterText.innerHTML += "<br>";

            }

            else{

                letterText.innerHTML +=
                    letterMessage.charAt(index);

            }


            index++;


            letterText.parentElement.scrollTop =
                letterText.parentElement.scrollHeight;


            setTimeout(type, 25);

        }

    }


    type();

}



/* ================= PHOTO SLIDESHOW ================= */

const photos = [

    "photos/photo1.jpeg",

    "photos/photo2.jpeg",

    "photos/photo3.jpeg"

];


let currentPhoto = 0;


setInterval(function(){

    const image =
        document.getElementById("gallery");


    if(image){

        currentPhoto =
            (currentPhoto + 1) %
            photos.length;


        image.src =
            photos[currentPhoto];


        document
        .getElementById("photoNumber")
        .innerText =
            "Memory " +
            (currentPhoto + 1) +
            " ❤️";

    }

}, 3000);



/* ================= MUSIC ================= */

function toggleMusic(){

    const music =
        document.getElementById("bgmusic");


    if(music.paused){

        music.play();

    }

    else{

        music.pause();

    }

}



/* ================= FINAL PAGE ================= */

function showFinalPage(){

    showPage("finalPage");

    startFireworks();

}



/* ================= RESTART ================= */

function restartWebsite(){

    location.reload();

}



/* ================= FIREWORKS ================= */

function startFireworks(){

    const canvas =
        document.getElementById("fireworks");


    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;


    canvas.height =
        window.innerHeight;


    const particles = [];


    function createFirework(){

        const x =
            Math.random() *
            canvas.width;


        const y =
            Math.random() *
            canvas.height *
            0.7;


        for(let i = 0; i < 50; i++){

            particles.push({

                x:x,

                y:y,

                dx:
                (Math.random() - 0.5) * 6,

                dy:
                (Math.random() - 0.5) * 6,

                life:100

            });

        }

    }


    function animate(){

        ctx.clearRect(

            0,

            0,

            canvas.width,

            canvas.height

        );


        particles.forEach(function(particle){

            particle.x +=
                particle.dx;


            particle.y +=
                particle.dy;


            particle.dy += 0.03;


            particle.life--;


            ctx.fillStyle =
                "rgba(255,255,255," +
                particle.life / 100 +
                ")";


            ctx.beginPath();


            ctx.arc(

                particle.x,

                particle.y,

                3,

                0,

                Math.PI * 2

            );


            ctx.fill();

        });


        for(

            let i =
            particles.length - 1;

            i >= 0;

            i--

        ){

            if(particles[i].life <= 0){

                particles.splice(i, 1);

            }

        }


        requestAnimationFrame(animate);

    }


    animate();


    setInterval(

        createFirework,

        1000

    );


    createFirework();

}