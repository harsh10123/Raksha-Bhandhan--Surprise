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

    document.getElementById("progressBar").style.width =
        progress + "%";

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



/* ================= FUNNY QUIZ ================= */

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

        answer: 0,

        wrongMessages:
        [
            "",
            "Nice try 😂 The hacker only helped with the drama!",
            "A random person would never work this hard 😭😂",
            "Nobody?! Then who wrote all this code? 👀😂"
        ]
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

        answer: 1,

        wrongMessages:
        [
            "Wi-Fi disappears when you need it most 😂 Try again!",
            "",
            "Computer says: Incorrect... but Harsh still loves you 😂",
            "Firewall cannot stop brother-sister love ❤️"
        ]
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

        answer: 2,

        wrongMessages:
        [
            "Technically true... but incomplete 😂",
            "Also true... but you forgot the annoying part 😎",
            "",
            "NOTHING?! Muski, I am offended 😭😂"
        ]
    },


    /* ================= NEW QUESTION 1 ================= */

    {
        question:
        "😎 IMPORTANT QUESTION: Who is the Best Brother in the Universe?",

        options:
        [
            "Harsh",
            "harsh",
            "harshtiwari",
            "Obviously Harsh 😎"
        ],

        answer: 3,

        wrongMessages:
        [
            "Almost! But this answer needs MORE appreciation 😂",
            "Same person... but lowercase confidence detected 🤨😂",
            "Full name detected! But where is the obvious appreciation? 😤😂",
            ""
        ]
    },


    /* ================= NEW QUESTION 2 ================= */

    {
        question:
        "😂 Who annoys Muski the most but also loves her the most?",

        options:
        [
            "The Neighbour",
            "A Random Person",
            "Harsh Bhaiya 😎",
            "The Delivery Boy"
        ],

        answer: 2,

        wrongMessages:
        [
            "The neighbour is innocent 😂 Leave them alone!",
            "Random person?! The audacity 😭😂",
            "",
            "The delivery boy only delivers parcels, not unlimited teasing 😂"
        ]
    },


    /* ================= NEW QUESTION 3 ================= */

    {
        question:
        "🤭 What is Muski's secret superpower?",

        options:
        [
            "Being Cute",
            "Annoying Harsh",
            "Looking Innocent After Causing Trouble 😂",
            "All of the Above 😭😂"
        ],

        answer: 3,

        wrongMessages:
        [
            "Correct... but not the COMPLETE answer 😂",
            "Definitely a strong possibility 😭😂 But keep thinking!",
            "Suspiciously accurate 😂 But there is one better answer!",
            ""
        ]
    },


    /* ================= NEW QUESTION 4 ================= */

    {
        question:
        "🏆 Who is the luckiest sister in the world?",

        options:
        [
            "Muski 😎",
            "Muski ❤️",
            "Obviously Muski 😂",
            "All of the Above"
        ],

        answer: 3,

        wrongMessages:
        [
            "True... but the answer is even more obvious 😂",
            "Also true ❤️ But don't stop there!",
            "Very confident answer 😂 But there is a better one!",
            ""
        ]
    },


    /* ================= FINAL FUNNY QUESTION ================= */

    {
        question:
        "🚨 FINAL SECURITY CHECK: What should Muski say to her amazing brother?",

        options:
        [
            "Thank you Harsh 😎",
            "You are the Best Brother ❤️",
            "Sorry for annoying you... maybe 😂",
            "ALL OF THE ABOVE 😂❤️"
        ],

        answer: 3,

        wrongMessages:
        [
            "Good start 😎 But I need the complete package 😂",
            "Correct emotion ❤️ But there are more options!",
            "Hmm... suspiciously incomplete apology 😂",
            ""
        ]
    }

];


let currentQuestion = 0;


/* ================= SHOW QUIZ ================= */

function showQuiz(){

    showPage("quizPage");

    currentQuestion = 0;

    document.getElementById("quizMessage").innerText = "";

    displayQuestion();
}


/* ================= DISPLAY QUESTION ================= */

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



/* ================= CHECK ANSWER ================= */

function checkAnswer(selectedAnswer){

    const question =
        quizQuestions[currentQuestion];


    const message =
        document.getElementById("quizMessage");


    /* CORRECT ANSWER */

    if(selectedAnswer === question.answer){

        if(currentQuestion === quizQuestions.length - 1){

            message.innerText =
                "🎉 SECURITY CLEARED! Muski has officially confirmed that Harsh is an amazing brother 😂❤️";

        }

        else{

            message.innerText =
                "Correct! ❤️ Next question coming...";
        }


        setTimeout(function(){

            currentQuestion++;


            if(currentQuestion < quizQuestions.length){

                message.innerText = "";

                displayQuestion();
            }

            else{

                showGiftPage();
            }

        }, 1200);

    }


    /* WRONG ANSWER */

    else{

        message.innerText =
            "❌ " +
            question.wrongMessages[selectedAnswer];
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

💌 Dear Muski,

First of all, congratulations! 🎉 You have successfully survived having me as your brother for all these years. Honestly, I deserve an award for being this good and enduring and tolerating all your mistakes and mischieveousness and you deserve one for annoying me in the every possible way. 😂
We fight, we argue, we irritate each other, and sometimes I wonder how you manage to be so dramatic… but then I remember, you got that from me. 😌😂
Jokes apart, having you as my sister is genuinely one of the best things in my life. You're not just my sister, you're my permanent partner in crime, free therapist, occasional headache, and full-time drama queen. ❤️
I may tease you, steal your things, annoy you for no reason, and act like I don't care… but if anyone else tries to trouble you, bas naam bata dena. 😎😂
No matter how old we get or how far life takes us, I'll always be the brother who is there to annoy you, support you, embarrass you, and secretly worry about you. ❤️
So keep smiling, keep being your crazy self, and remember one important thing:
You may not have the world's best brother… but unfortunately, you are stuck with me. 😂❤️
Happy Raksha Bandhan, Muski! 🫶🏻
Love you always, idiot. ❤️
— Your favourite brother (whether you agree or not),
Harsh 😎 
This is not just a website.

It is a small surprise made specially for you.

Every page,
every click,
every animation,
and every line of code

was made with love ❤️`;


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

            particle.x += particle.dx;

            particle.y += particle.dy;

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
            let i = particles.length - 1;
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
