let start = document.getElementById("start");
let descr = document.getElementById("descr");
let descr2 = document.getElementById("descrTwo");
let body = document.body;
let title;
let input;
let pretitle;
let buttonY;

let image1;
let image2;

function startNow() {
start.addEventListener('click', ()=> {
    if (descr2.classList.contains("warp")){
    descr.parentNode.removeChild(descr);
    } else {
        descr2.classList.add("warp");
    }
    start.parentNode.removeChild(start);
    title = document.createElement("h1");
    input = document.createElement("input");

    title.textContent = "Пожалуйста, введите Ваше имя";

    body.append(title);
    body.append(input);

    input.addEventListener('keyup', (event)=>{
        if (event.code == "Enter" && input.value != ""){
            title.textContent = "Добро пожаловать, " + input.value + "!";
            input.parentNode.removeChild(input);
            setTimeout(() => {
                title.parentNode.removeChild(title);
                iLoveMath();
            }, 2000)
        }
    })
} )
}
startNow();

function createTextLevel(question, answer, nextLevel) {
    title = document.createElement("h1");
    input = document.createElement("input");
    pretitle = document.createElement("p");

    title.textContent = question;

    body.append(title);
    body.append(input);
    body.append(pretitle);

    input.addEventListener('keyup', (event)=>{
        if (event.code == "Enter" && input.value != ""){
            if (input.value.toLowerCase() == answer) {
                input.parentNode.removeChild(input);
                pretitle.textContent = 'Верно!'

                setTimeout(() => {
                    title.parentNode.removeChild(title);
                    pretitle.parentNode.removeChild(pretitle);
                    if (nextLevel != null){
                    nextLevel();
                    }
                }, 2000)
            } else {
                pretitle.textContent = 'Неверно:(';
                input.value = '';
            }
        }
    })
}

function createIMGLevel1(question, trueLink, falseLink, nextLevel) {
    title = document.createElement("h1");
    pretitle = document.createElement("p");
    image1 = document.createElement("img");
    image2 = document.createElement("img");

    title.textContent = question;

    body.append(title);
    body.append(pretitle);
    body.append(image1);
    body.append(image2);

    image1.src = trueLink;
    image2.src = falseLink;

    image1.addEventListener('click', () => {
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        pretitle.textContent = 'Верно!';
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            if (nextLevel != null){
            nextLevel();
            }
        }, 2000)
    })

    image2.addEventListener('click', () => {
        pretitle.textContent = 'Неверно!';
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMath();
        }, 2000)
    })
}
function createIMGLevel2(question, falseLink, trueLink, nextLevel) {
    title = document.createElement("h1");
    pretitle = document.createElement("p");
    image1 = document.createElement("img");
    image2 = document.createElement("img");

    title.textContent = question;

    body.append(title);
    body.append(pretitle);
    body.append(image1);
    body.append(image2);

    image1.src = falseLink;
    image2.src = trueLink;

    image2.addEventListener('click', () => {
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        pretitle.textContent = 'Верно!';
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            if (nextLevel != null){
            nextLevel();
            }
        }, 2000)
    })

    image1.addEventListener('click', () => {
        pretitle.textContent = 'Неверно!';
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMath();
        }, 2000)
    })
}
function createBtnLevel() {
    title = document.createElement("h1");
    pretitle = document.createElement("p");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    button3 = document.createElement("button");
    button4 = document.createElement("button");
    button5 = document.createElement("button");

    body.append(title);
    body.append(pretitle);
    body.append(button1);
    body.append(button2);
    body.append(button3);
    body.append(button4);
    body.append(button5);

    title.textContent = "Попытайте удачу! Одна из кнопок перебросит Вас на следующий уровень"
    button1.textContent = "Кнопка One";
    button2.textContent = "Кнопка Two";
    button3.textContent = "Кнопка Three";
    button4.textContent = "Кнопка Four";
    button5.textContent = "Кнопка Five";


    button1.addEventListener('click', () => {
        pretitle.textContent = 'Неверно!';
        button1.parentNode.removeChild(button1);
        button2.parentNode.removeChild(button2);
        button3.parentNode.removeChild(button3);
        button4.parentNode.removeChild(button4);
        button5.parentNode.removeChild(button5);
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMath();
        }, 2000)
    })

    button2.addEventListener('click', () => {
        pretitle.textContent = 'Неверно!';
        button1.parentNode.removeChild(button1);
        button2.parentNode.removeChild(button2);
        button3.parentNode.removeChild(button3);
        button4.parentNode.removeChild(button4);
        button5.parentNode.removeChild(button5);
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMath();
        }, 2000)
    })

    button3.addEventListener('click', () => {
        pretitle.textContent = 'Неверно!';
        button1.parentNode.removeChild(button1);
        button2.parentNode.removeChild(button2);
        button3.parentNode.removeChild(button3);
        button4.parentNode.removeChild(button4);
        button5.parentNode.removeChild(button5);
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMath();
        }, 2000)
    })

    button4.addEventListener('click', () => {
        button1.parentNode.removeChild(button1);
        button2.parentNode.removeChild(button2);
        button3.parentNode.removeChild(button3);
        button4.parentNode.removeChild(button4);
        button5.parentNode.removeChild(button5);
        pretitle.textContent = 'Верно!';
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMount();
        }, 2000)
    })
    button5.addEventListener('click', () => {
        pretitle.textContent = 'Неверно!';
        button1.parentNode.removeChild(button1);
        button2.parentNode.removeChild(button2);
        button3.parentNode.removeChild(button3);
        button4.parentNode.removeChild(button4);
        button5.parentNode.removeChild(button5);
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMath();
        }, 2000)
    })
}

function iLoveMath() {
    createTextLevel("Сколько будет 12 в квадрате?", 144, iLoveGeography)
}

function iLoveGeography() {
    createTextLevel("Назовите столицу Германии", "берлин", createBtnLevel)
}

function iLoveMount() {
    createIMGLevel2("Фортинайт или пабаджи?", "./img/fort.webp", "./img/pubg.webp", PSP)
}

function PSP() {
    createIMGLevel1("Пабаджи или икс бокс икс икс икс икс(XBOX)?", "./img/pubg.webp", "./img/xbox.webp", PSD)
}

function PSD() {
    createIMGLevel2("Пабаджи или плейстейшен файв?", "./img/pubg.webp", "./img/ps5.webp", PSF)
}

function PSF() {
    createIMGLevel2("Плейстейшен файв или лучбиг?", "./img/ps5.webp", "./img/log.webp", PSK)
}

function PSK() {
    createIMGLevel2("Лучбиг или хипер икис икис икис?", "./img/log.webp", "./img/hyperxxx.webp", PSA)
}

function createIMGLevel3(question, falseLink, trueLink) {
    title = document.createElement("h1");
    pretitle = document.createElement("p");
    image1 = document.createElement("img");
    image2 = document.createElement("img");

    title.textContent = question;

    body.append(title);
    body.append(pretitle);
    body.append(image1);
    body.append(image2);

    image1.src = falseLink;
    image2.src = trueLink;

    image2.addEventListener('click', () => {
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        title.parentNode.removeChild(title);
        pretitle.textContent = 'Верно! Ураааа, поздравляю! Вы окончили квест';
        buttonY = document.createElement("button");
        body.append(buttonY);
        buttonY.textContent = "Вернуться обратно";
        buttonY.addEventListener('click', () => {
            buttonY.parentNode.removeChild(buttonY);
            pretitle.parentNode.removeChild(pretitle);
            start = document.createElement("button");
            body.prepend(start);
            descr2.classList.remove("warp");
            start.textContent = "Начать";
            startNow();
        })
    })

    image1.addEventListener('click', () => {
        pretitle.textContent = 'Неверно!';
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        setTimeout(() => {
            title.parentNode.removeChild(title);
            pretitle.parentNode.removeChild(pretitle);
            iLoveMath();
        }, 2000)
    })
}

function PSA() {
    createIMGLevel3("Хипер икис икис икис или ...(GTA 5)?", "./img/hyperxxx.webp", "./img/gta5.webp");
}