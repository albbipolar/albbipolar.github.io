
// ИНИЦИАЛИЗАЦИЯ ПЕРЕМЕННЫХ
let name = prompt(`Наконец-то! Я тебя долго жду. Скажи, пожалуйста, как твоё имя?`);

// СЧЁТЧИКИ
let achievementCounter = 0,
countDetails = 0,
countAttempt = 0,
countRandomAttempt = 0,
countRandomDay = 0,
countRandomMonth = 0,
reduction = 7000,

// СЧЁТЧИК СТИХОВ
verifyVerseOne,
verifyVerseTwo,
verifyVerseThree,
countVerse = 0,

// ПРОВЕРКА ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ
userAgreement,
verifyUserAgreement,

// СЮЖЕТНЫЕ
verificationStoryCandies,
storyCandies,
verificationAnswerPassword,
verificationPassword,
verificationHelp,
verificationSound,
storyRunes;

// АУДИО
let sound = new Audio();

// ДЕБАГ ДОСТИЖЕНИЙ
let counterLogicalLogic = 0,
counterWithoutYou = 0,
counterThisMadness = 0,
counterProblemsMath = 0,
counterNeedAlive = 0,
counterFromDark = 0,
counterGreetingFromFrance = 0,
counterDirectHit = 0,
counterCuriousVarvara = 0;

// ИНИЦИАЛИЗАЦИЯ ДОСТИЖЕНИЙ
let perfectName, // ДОСТИЖЕНИЕ "ИДЕАЛЬНОЕ ИМЯ"
withoutYou, // ДОСТИЖЕНИЕ "ОТСЫЛКА В HEX-ФОРМАТЕ"
longSearch, // ДОСТИЖЕНИЕ "ДОЛГИЙ ПОИСК"
logicalLogic, // ДОСТИЖЕНИЕ "ЛОГИЧНАЯ ЛОГИКА"
rightChoice, // ДОСТИЖЕНИЕ "ПРАВИЛЬНЫЙ ВЫБОР"
apologize, // ДОСТИЖЕНИЕ "ПРИДЁТСЯ ИЗВИНЯТЬСЯ"
problemsMath, // ДОСТИЖЕНИЕ "МАТЕМАТИЧЕСКАЯ ПРОБЛЕМА"
fromDark, // ДОСТИЖЕНИЕ "ВЗГЛЯД ИЗ ТЕМНОТЫ"
secondStage, // ДОСТИЖЕНИЕ "ВТОРАЯ СТУПЕНЬ"
needAlive, // ДОСТИЖЕНИЕ "ТЫ МНЕ НУЖЕН ЖИВЫМ"
overcomeYourself, // ДОСТИЖЕНИЕ "ПРЕОДОЛЕТЬ СЕБЯ"
thisMadness, // ДОСТИЖЕНИЕ "ЭТО БЕЗУМИЕ"
maximumLuck, // ДОСТИЖЕНИЕ "МАКСИМАЛЬНАЯ УДАЧА"
greetingFromFrance, // ДОСТИЖЕНИЕ "ПРИВЕТ ИЗ ФРАНЦИИ"
directHit, // ДОСТИЖЕНИЕ "ПРЯМОЕ ПОПАДАНИЕ"
almostSeptember, // ДОСТИЖЕНИЕ "ПОЧТИ ТРЕТЬЕ СЕНТЯБРЯ"
stayWithMe, // ДОСТИЖЕНИЕ "ОСТАНЬСЯ СО МНОЙ"
forgiveMe, // ДОСТИЖЕНИЕ "ПРОСТИ МЕНЯ"
curiousVarvara, // ДОСТИЖЕНИЕ "ЛЮБОПЫТНОЙ ВАРВАРЕ"
characterLost; // ДОСТИЖЕНИЕ "ПЕРСОНАЖ ПОТЕРЯН"

if (name === null || name === ``) {name = `человек`;}

// ПЕРЕВОД ПЕРВОГО СИМВОЛА В ЗАГЛАВНЫЙ
if (name !== `человек`) {name = name[0].toUpperCase() + name.slice(1);}

if (name === `Елизавета` || name === `Лиза`) {

    setTimeout(function() {
        alert(`${name}, получено достижение: идеальное имя.`);
    }, 250);

    perfectName = true;
    achievementCounter++;
}

$(`.formula p`).html(`Если ты, ${name}, попал(а) на эту страницу, значит ты преодалел(а) первый этап квеста автора. Прими мои поздравления! Выбери тот пункт, который тебе нужен. Но пока мы с тобой не познакомимся, я не дам тебе выбора.`);

// ОБРАБОТКА ПЕРВОЙ ЛОКАЦИИ
$(`.processing-one`).on(`click`, function() {

    let answer = $(`#select-one option:selected`).text();

    if (answer === `Ну, давай познакомимся.`) {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/acquaintance.mp3`;
        sound.play();

        setTimeout(function() {

            $(`.rule-сheck`).removeAttr(`disabled`);
        }, 41000);

        $(`.formula p`).html(`Я — очень капризная программа, которая была создана, чтобы помочь тебе решить квест. В конце ты получишь формулу, которую сможешь применить, чтобы решить третий — последний этап. Ты можешь выбирать любые действия из предложенных мною. Я решила тебе помочь, отметив тускло-зелёным цветом вариант, выбрав который, ты сможешь перейти на следующую локацию, но у тебя не будет возможности вернуться назад. С одной стороны, ты можешь быстро пройти квест. Но в других вариантах скрываются отсылки и не только. Иногда я буду тебя сопровождать голосовыми уведомлениями, например, когда ты будешь получать достижения. Выбор за тобой. Сработаемся?`);
        $(`.select-one`).hide();
        $(`.select-choice-one`).show();
        $(`#select-one option:selected`).attr(`disabled`, `disabled`).siblings().removeAttr(`disabled`);
    }
    else if (answer === `Мне нужен просто ответ.`) {

        verifyUserAgreement = true;

        setTimeout(function() {
            
            $(`.formula p`).html(`Хах, наивный(ая) ты, ${name}. Ты серьёзно подумал(а), что я так просто тебе отдам формулу? Тебе ли не знать, что ничего в этой жизни не даётся легко?`);
            $(`.select-choice-one-two`).hide();
            $(`.select-one`).show();
        }, 60000);

        $(`.formula p`).html(`Квест завершён! ${name}, сейчас я подключу свои базы данных, чтобы достать формулу, и отдам её тебе. Подожди минуту...`);
        $(`.select-one`).hide();
        $(`.select-choice-one-two`).show();
    }
    else if (answer === `Я не хочу ничего делать, но мне нужен ответ!`) {

        verifyUserAgreement = true;

        $(`.formula p`).html(`Я — просто программа, которая тоже ничего не хочет делать. Но я же с тобой общаюсь! К слову, я налила себе чашечку кофе, а ещё у меня есть овсяное печенье.`);
        $(`.select-one`).hide();
        $(`.select-choice-one-three`).show();
    }
    else if (answer === `Всё не так просто, да? Что делать?`) {

        if (!verifyUserAgreement) {
            
            userAgreement = confirm(`Я увидела, что ты сразу выбрал(а) тускло-зелёный вариант, напоминаю, что так лучше не делать! Продолжить?`);
        }

        if (verifyUserAgreement || userAgreement) {
            
            $(`.formula p`).html(`Приятно иметь дело с человеком, который осознаёт, что так просто ничего не бывает. ${name}, мне нужен ID человека в VK, от которого ты пришёл(ла), чтобы я понимала, от кого ты.`);
            $(`#select-one, .processing-one`).hide();
            $(`.select-two`).show();
        }
    }
    else if (answer === `Где мы?`) {

        verifyUserAgreement = true;

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/hereAlone.mp3`;
        sound.play();

        $(`.formula p`).html(`Кто мы? Я здесь одна.`);
    }
    else if (answer === `Мне ничего не нужно, пока!`) {

        let verificationExit = confirm(`А я тебя и не держала. Ты точно хочешь выйти из квеста?`);

        if (verificationExit) {
            
            close();
        }
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ
$(`.select-choice-one .rule-сheck`).on(`click`, function() {
    
    let userAgreement = confirm(`Я, ${name}, внимательно прочитав все правила, поняв, что необязательно сразу выбирать вырианты с тускло-зелёным цветом, подтверждаю действие:`);

    if (userAgreement) {
        
        alert(`В свою очередь, я, Биполярных А.Е, несу полную ответственность за то, что информация, обрабатываемая квестовой программой, выполняется только на стороне клиента, то есть, полностью защищена и не отслеживается.`);

        $(`.select-choice-one button`).attr(`disabled`, `disabled`).siblings().removeAttr(`disabled`);
        $(`.rule-сheck`).hide();
    } else {
        return false;
    }
});

// ОБРАБОТКА КНОПОК ПЕРВОЙ ЛОКАЦИИ
$(`.select-choice-one .true-one`).on(`click`, function() {

    $(`.formula p`).html(`Я знала, что ты, ${name}, примешь правильное решение. Правильное решение — всегда хорошо. Оно помогает встать на истинный путь. Пойду сделаю себе кофе, пока ты выбираешь.`);
    $(`.select-choice-one`).hide();
    $(`.select-one`).show();
    
});
$(`.select-choice-one .false-one`).on(`click`, function() {

    $(`.formula p`).html(`Тогда зачем ты здесь? ${name}, сам(а) разгадаешь третий этап?`);
    $(`.select-choice-one .false-one`).hide();
    $(`.select-choice-one .false-two`).show();
});

$(`.select-choice-one-three .true-one`).on(`click`, function() {

    $(`.formula p`).html(`Благодарю! Это не просто овсяное печенье, а овсяное печенье с шоколадной крошкой. Я бы налила себе ещё сливок в кофе, но я на диете. Хотя... Кто меня видит?`);
    $(`.select-choice-one-three`).hide();
    $(`.select-one`).show();
    
});
$(`.select-choice-one-three .false-one`).on(`click`, function() {

    $(`.formula p`).html(`А я разве не сказала, что я — не только капризная программа, но ещё и очень жадная? Теперь ты знаешь про меня всё. Ну, почти...`);
    $(`.select-choice-one-three`).hide();
    $(`.select-one`).show();
});

$(`.select-choice-one .false-two`).on(`click`, function() {
    alert(`Не смею тебя больше задерживать, ${name}.`)
    close();
});

// ОБРАБОТКА ВТОРОЙ ЛОКАЦИИ
$(`.processing-two-input`).on(`click`, function() {

    $(`.select-two`).hide();

    let input = $(`#inputGetIdentificator`).val();
    
    if (input === `bipoluaroshka`) {
        
        $(`.formula p`).html(`Сила действия равна силе противодействия. В этом и состоит суть третьего закона Ньютона. Ой, что? ${input}, говоришь? Ну, допустим. Что дальше?`);
        $(`#inputGetIdentificator, .processing-two`).hide();
        $(`.select-three`).show();
    }
    else if (input === ``) {

        $(`.formula p`).html(`Ввести пустую строку? Может быть, в этом есть тайный смысл?`);
        $(`.select-two`).show();
    }
    else {
        $(`.formula p`).html(`${input}? Не-а, так не пойдёт. Я таких не знаю.`);
        $(`.select-two`).show();
    }
});

// ОБРАБОТКА ТРЕТЬЕЙ ЛОКАЦИИ
$(`.processing-three`).on(`click`, function() {

    let answer = $(`#select-three option:selected`).text();

    if (answer === `Сколько ещё проверок?`) {

        $(`.formula p`).html(`Чай? Кофе? Ой, ${name}, ты вопрос задал(а)? Каких проверок? Мы просто с тобой приятно общаемся, не так ли?`);
        $(`.select-three`).hide();
        $(`.select-choice-three-two`).show();
    }
    else if (answer === `Подойти к плачущей девочке.`) {

        $(`.formula p`).html(`Я плачу потому, что мне нужна помощь. Посмотрите, мой робот сломался. У него вылетела какая-то деталь, и какой-то мальчик её забрал! Теперь он не подает признаков жизни, в смысле, робот. Вы можете мне помочь?`);
        $(`.select-three`).hide();
        $(`.select-choice-three-three`).show();
    }
    else if (answer === `Отдал мне формулу, быстро!`) {

        $(`.select-choice-three-eleven .false-three`).prop(`disabled`, true);

        setTimeout(function() {
            
            $(`.select-choice-three-eleven .false-three`).prop(`disabled`, false);
        }, 120000);

        $(`.formula p`).html(`Хммм... Нет. Грубость тебе не к лицу. А за твою грубость тебе придётся ответить мне на один вопрос: "дочь моего отца, а мне не сестра", кто это? Думай, а через две минуты я тебе разблокирую кнопку.`);
        $(`.select-three`).hide();
        $(`.select-choice-three-eleven`).show();
    }
    else if (answer === `Дай, пожалуйста, формулу!`) {
        
        $(`.formula p`).html(`Ну, хорошо, ${name}, вот тебе формула. Радиус описанной окружности около многоугольника: R = a/2 sin 180/n. Пойдет?`);
        $(`.select-three`).hide();
        $(`.select-choice-three`).show();
    }
    else if (answer === `Тебе ещё что-то нужно?`) {

        if (!storyCandies) {
            
            verificationStoryCandies = confirm(`Внимание, ты пропустил(а) сюжетный квест. Если ты пойдешь дальше, то некоторые вещи будут недоступны. Продолжить?`);
        }

        if (verificationStoryCandies || storyCandies) {

            $(`.formula p`).html(`Я обещаю, что дам тебе фор... Так, стоп! Мои датчики говорят, что у ID: bipoluaroshka, есть какое-то другое значение.`);
            $(`#select-three, .processing-three`).hide();
            $(`.select-four`).show();
        }
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА ПОЛЯ ТРЕТЬЕЙ ЛОКАЦИИ
$(`.processing-three-input`).on(`click`, function() {

    let input = $(`#getLogicalAnswer`).val();
    
    if (input !== ``) {
        // ПЕРЕВОД ПЕРВОГО СИМВОЛА В ЗАГЛАВНЫЙ
        input = input[0].toUpperCase() + input.slice(1);
    }

    if (input === `Я` || input === `Я сама`) {

        debugLogicalLogic = () => {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/logicalLogic.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: логичная логика.`);
            }, 250);
            
            logicalLogic = true;
            achievementCounter++;
            counterLogicalLogic++;
        }

        if (counterLogicalLogic === 0) {
            debugLogicalLogic();
        }
        
        $(`.formula p`).html(`Ну, в принципе, логично! Ладно. За свою грубость ты расплатился(лась) логикой, что дальше?`);
        $(`.select-choice-three-eleven`).hide();
        $(`.select-three`).show();
    } else if (input === ``) {
        $(`.formula p`).html(`Ввести пустую строку? ${name}, ты кого пытаешься обмануть?`);
    }
    else {
        $(`.formula p`).html(`${input}? Хммм, это, безусловно, хороший ответ, но хороший — не тождественен правильному.`);
    }
});

// ОБРАБОТКА КНОПОК ТРЕТЬЕЙ ЛОКАЦИИ
$(`.select-choice-three .true-three`).on(`click`, function() {

    $(`.formula p`).html(`Я преисполняюсь в своем познании. И, кстати, эта формула тебе не подойдёт. ${name}, ты шуток не понимаешь?`);
    $(`.select-choice-three .true-three`).hide();
});
$(`.select-choice-three .false-three`).on(`click`, function() {

    $(`.formula p`).html(`Оценил(а), ${name}, мою шутку? Хотя, с математической точки зрения, Вы — люди, очевидно, обладаете лучшим чувством юмора.`);
    $(`.select-choice-three`).hide();
    $(`.select-three`).show();
});

$(`.select-choice-three-two .true-three`).on(`click`, function() {

    $(`.formula p`).html(`У меня отличная память. Помнишь, когда с тобой общались, как с экраном? Тебе было неприятно, не так ли? ${name}, теперь ты, получается, общаешься со мной, как с экраном. Ты думаешь, мне приятно?`);
    $(`.select-choice-three-two`).hide();
    $(`.select-three`).show();
});
$(`.select-choice-three-two .false-three`).on(`click`, function() {

    $(`.formula p`).html(`У меня отличная память. Помнишь, когда с тобой общались, как с экраном? Ты злился(ась), ${name}, не так ли? А теперь, получается, ты общаешься со мной, как с экраном...`);
    $(`.select-choice-three-two`).hide();
    $(`.select-three`).show();
});

$(`.select-choice-three-three .true-three`).on(`click`, function() {

    $(`.formula p`).html(`Я буду Вас очень ждать. У меня есть знакомый человек, который очень ждёт... Лучших моментов жизни. И не просто ждёт, а старается... Ой, я заговорилась, поспешите, пожалуйста, мальчик может её потерять!`);
    $(`.select-choice-three-three`).hide();
    $(`.select-choice-three-four`).show();
});
$(`.select-choice-three-three .false-three`).on(`click`, function() {

    $(`.formula p`).html(`Мне очень жаль. Извините, пожалуйста, если я забрала у Вас драгоценное время. Буду верить, что мальчик мне вернёт ту деталь...`);
    $(`.select-choice-three-three`).hide();
    $(`.select-three`).show();
});

$(`.select-choice-three-four .true-three`).on(`click`, function() {

    $(`.formula p`).html(`Я знаю этого мальчика. Он собирает разные детальки. Побежал он вон туда, за тот буерак. Догоните его, пожалуйста, мне очень нужен мой робот...`);
    $(`.select-choice-three-four`).hide();
    $(`.select-choice-three-five`).show();
});

$(`.select-choice-three-five .false-three`).on(`click`, function() {

    $(`.formula p`).html(`Мне очень жаль. Извините, пожалуйста, если я забрала у Вас драгоценное время. Буду верить, что мальчик мне вернёт ту деталь...`);
    $(`.select-choice-three-five`).hide();
    $(`.select-three`).show();
});
$(`.select-choice-three-five .true-three`).on(`click`, function() {

    setTimeout(function() {
        
        $(`.select-choice-three-six .true-three`).prop(`disabled`, false);
        $(`.formula p`).html(`${name}, смотри, вот он. Я уже говорила, что мои датчики меня ещё никогда не подводили? Разве нет? Хммм, странно.`);
    }, 120000);

    $(`.select-choice-three-six .true-three`).prop(`disabled`, true);
    $(`.formula p`).html(`${name}, я подключаю свои датчики, чтобы просканировать данную местность тепловизором. Так мы быстро найдём мальчика. Следуй за мной, я доведу тебя...`);
    $(`.select-choice-three-five`).hide();
    $(`.select-choice-three-six`).show();
});

$(`.select-choice-three-six .true-three`).on(`click`, function() {

    $(`.formula p`).html(`Ах, да, помню такую детальку. Она называется "А-32-DEVICE". Сегодня я насобирал целый мешок разных деталей, всего их у меня 20 штук. Хотите свою? Протягивайте руку в мешок, берите любую. Найдёте свою — можете забрать.`);

    setTimeout(function() {

        $(`.select-choice-three-seven .true-three`).removeAttr(`disabled`);
    }, 10000);

    $(`.select-choice-three-six`).hide();
    $(`.select-choice-three-seven`).show();
});

let details = [`F-93:Math`, `55-FH:Ruby`, `K001-41-VH`, `CDC5CCCEC3D3C1C5C7D2C5C1DF-Elizabeth`, `M:18:Y221`, `999-VE-100WH`, `7x7-PROTOTYPE`, `TH-225:444`, `HHxF-33`, `N677-MODEL-M44`, `W-111W-PH`, `L-117V256`, `:WA-442I-FF`, `L7-INDEX-155:MM`, `T17-IN-JQ`, `QU-881:M66`, `M-60T-100`, `W11::PLK`, `M48b-67:EK`];

$(`.select-choice-three-seven .true-three`).on(`click`, function() {

    $(`.select-choice-three-seven .true-three`).prop(`disabled`, true);

    let randomDetail = Math.floor(Math.random() * details.length);
    
    if (details[randomDetail] === `CDC5CCCEC3D3C1C5C7D2C5C1DF-Elizabeth` && countDetails === 0) {

        countDetails++;

        if (!(details.includes(`А-32-DEVICE`))) {
            details.push(`А-32-DEVICE`);
        }

        $(`.formula p`).html(`Вы вытащили деталь: "${details[randomDetail]}". Я не помню, чтобы я её где-либо находил. Как она сюда попала? Ладно, не важно, это все равно не та деталь, которая Вам нужна.`);

        debugWithoutYou = () => {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/withoutYou.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: отсылка в hex-формате.`);
            }, 250);
            
            withoutYou = true;
            achievementCounter++;
            counterWithoutYou++;
        }

        if (counterWithoutYou === 0) {
            debugWithoutYou();
        }

    } else {
        $(`.formula p`).html(`Нет, "${details[randomDetail]}" — это не та деталь. Кладите на место.`);
    }

    if (details[randomDetail] === `А-32-DEVICE`) {
        
        $(`.formula p`).html(`Блин, Вы вытащили деталь: "${details[randomDetail]}". Это та самая деталь, которая Вам нужна. Придётся Вам её отдать, но она такая красивая! Прямо как Вы, ${name}. Может не будете забирать?`);
        $(`.select-choice-three-seven`).hide();
        $(`.select-choice-three-eight`).show();
    }
    
    setTimeout(function() {
        
        $(`.select-choice-three-seven .true-three`).prop(`disabled`, false);
    }, 7000);
});
$(`.select-choice-three-seven .false-three`).on(`click`, function() {

    $(`.formula p`).html(`Передумал(а) помогать девочке, ${name}? Думаешь, что это не наше дело?`);
    $(`.select-choice-three-seven`).hide();
    $(`.select-three`).show();
});

$(`.select-choice-three-eight .true-three`).on(`click`, function() {

    $(`.formula p`).html(`Ура, Вы смогли забрать у этого мальчика деталь! Спасибо Вам большое! У Вас очень добрая душа. Я даже не знаю, как Вас отблагодарить.`);
    $(`.select-choice-three-eight`).hide();
    $(`.select-choice-three-nine`).show();
});

$(`.select-choice-three-nine .true-three`).on(`click`, function() {

    setTimeout(function() {
        
        $(`.formula p`).html(`${name}, мы помогли девочке — это превосходно. Остановились мы на том, что ты от человека с ID: bipoluaroshka. Ну, допустим. Что дальше?`);
        $(`.select-choice-three-ten`).hide();
        $(`.select-three`).show();
    }, 30000);

    storyCandies = true;

    $(`.formula p`).html(`Нет, я так не могу! Вы мне, действительно, очень помогли. Мой робот теперь работает. У меня есть 5 конфет. Возьмите их. Подождите, пожалуйста, сейчас найду...`);
    $(`.select-choice-three-nine`).hide();
    $(`.select-choice-three-ten`).show();
});
$(`.select-choice-three-nine .false-three`).on(`click`, function() {

    setTimeout(function() {
        
        $(`.formula p`).html(`${name}, мы помогли девочке — это превосходно. Остановились мы на том, что ты от человека с ID: bipoluaroshka. Ну, допустим. Что дальше?`);
        $(`.select-choice-three-ten`).hide();
        $(`.select-three`).show();
    }, 30000);

    storyCandies = true;

    $(`.formula p`).html(`А я слышала, что добрые люди помогают безвозмездно. Я не люблю быть должна. У меня есть 5 конфет. Возьмите их. Подождите, пожалуйста, сейчас найду...`);
    $(`.select-choice-three-nine`).hide();
    $(`.select-choice-three-ten`).show();
});

$(`.select-choice-three-eleven .false-three`).on(`click`, function() {

    $(`.formula p`).html(`Ха-ха-ха, ты серьёзно не смог(ла) ответить на такой лёгкий вопрос? Ладно, так и быть, прощу тебя за твою грубость.`);
    $(`.select-choice-three-eleven`).hide();
    $(`.select-three`).show();
});


// ОБРАБОТКА ЧЕТВЁРТОЙ ЛОКАЦИИ
$(`.processing-four`).on(`click`, function() {

    let answer = $(`#select-four option:selected`).text();

    if (answer === `Ты издеваешься?`) {

        $(`.formula p`).html(`Честно? Чуть-чуть. Нет, ты, ${name}, не подумай. Мне, действительно, нужно другое значение. Зачем? А зачем звезды с неба падают?`);
        $(`.select-four`).hide();
        $(`.select-choice-four`).show();
    }
    else if (answer === `Какое ещё значение?`) {

        $(`.formula p`).html(`Существует строковое значение ID, например: bipoluaroshka, а ещё существует числовой идентификатор. ${name}, мне нужен именно он!`);
        $(`.select-four`).hide();
        $(`.select-choice-four-three`).show();
    }
    else if (answer === `Может сначала формулу, а потом остальное?`) {

        $(`.formula p`).html(`У меня есть мятная конфетка. Хочешь, ${name}?`);
        $(`.select-four`).hide();
        $(`.select-choice-four-two`).show();
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ЧЕТВЁРТОЙ ЛОКАЦИИ
$(`.select-choice-four .true-four`).on(`click`, function() {

    $(`.formula p`).html(`Не нервничай. Я, допустим, в данный момент пью зелёный чай. Говорят, что он успокаивает. А кто-то ест блины со сгущёнкой. Признавайтесь, кто тоже так делает?`);
    $(`.select-four, .select-choice-four`).hide();
    $(`.select-choice-four-four`).show();
    
});
$(`.select-choice-four .false-four`).on(`click`, function() {

    $(`.formula p`).html(`Что, ${name}? А! Это я о своём... О вечном... Кому-то звёзды, а кому-то блины со сгущёнкой. Признавайтесь, кто тоже так делает?`);
    $(`.select-four, .select-choice-four`).hide();
    $(`.select-choice-four-four`).show();
});

$(`.select-choice-four-two .true-four`).on(`click`, function() {

    debugCountVerse = () => {
        
        verifyVerseOne = true;
        countVerse++;
    }

    if (verifyVerseOne !== true) {
        debugCountVerse();
    }

    // MUTE SOUND
    sound.pause();
    // SOUND
    sound.src = `sound/verseNear.mp3`;
    sound.play();

    $(`.formula p`).html(`Вот смотрю я на фото с тоской,<br>Так хочу написать я в ответ...<br>Ты как воздух — дышу я тобой,<br>Вроде рядом, а вроде и нет.`);
    $(`.select-choice-four-two`).hide();
    $(`.select-choice-four-five`).show();
});

$(`.select-choice-four-three .true-four`).on(`click`, function() {

    $(`.formula p`).html(`Что такое ПВА? Сигнал исходит оттуда. Моя интуиция подсказывает, что ты знаешь про какой пост идёт речь. Там в комментариях есть тот самый числовой ID. Мне нужны только цифры (без id). Пока ищи, а я пойду подышу воздухом. В смысле, активирую кулер процессора.`);
    $(`.select-four, .select-choice-four-three`).hide();
    $(`.select-five`).show();
});

$(`.select-choice-four-four .true-four`).on(`click`, function() {

    $(`.formula p`).html(`Стараюсь не пропускать ни одной. Я вынимаю из души признание, смотря твои истории. Тебе приятно, когда "программа" наблюдает за тобой?`);
    $(`.select-choice-four-two, .select-choice-four-four`).hide();
    $(`.select-four`).show();
});
$(`.select-choice-four-four .false-four`).on(`click`, function() {

    $(`.formula p`).html(`Какие намеки? Я не понимаю, о чём ты, ${name}, но истории с соревнований мне очень понравились. Ой! Если что, я этого не писала!`);
    $(`.select-choice-four-two, .select-choice-four-four`).hide();
    $(`.select-four`).show();
});

$(`.select-choice-four-five .true-five`).on(`click`, function() {

    $(`.formula p`).html(`Люблю стихи. Особенно те, которые в двоичном коде. А ты любишь литературу, ${name}? Я изучила все твои группы. Как думаешь, меня писал добрый персонаж или злой?`);
    $(`.select-choice-four-two, .select-choice-four-five`).hide();
    $(`.select-four`).show();
});
$(`.select-choice-four-five .false-five`).on(`click`, function() {

    $(`.formula p`).html(`11010000100101001101000010110000. Ой, извини, по привычке в двоичном начала писать. Любишь литературу, ${name}? Я изучила все твои группы. Как думаешь, меня писал добрый персонаж или злой?`);
    $(`.select-choice-four-two, .select-choice-four-five`).hide();
    $(`.select-four`).show();
});

// ОБРАБОТКА ПОЛЯ ПЯТОЙ ЛОКАЦИИ
$(`.processing-five-input`).on(`click`, function() {

    let input = $(`#inputGetIdentificatorTwo`).val();
    
    if (input === `346835438`) {

        let verifyInput = prompt(`${name}, я должна убедиться, что ты искал(а) пост через группу, а не через диалог, где тебе его скинули. Напиши время поста (только минуты), который идёт до того, в котором ты взял(а) ID. Я знаю, что часы меняются от часового пояса, но минуты-то нет. Подсказка: 19 июл в 22:ММ.`);

        if (verifyInput === `50`) {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/longSearch.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: длительный поиск.`);
            }, 250);
            
            longSearch = true;
            achievementCounter++;
            
            $(`.formula p`).html(`Пока ты искал(а), ${name}, я уже не раз успела пробежаться по коду. Нашла пару уязвимостей. Невнимательный, конечно, программист меня писал. Но у меня есть информация, что он думал о кое-каком человеке, когда писал код, поэтому ошибся. Простим его? ;)`);
            $(`.select-five`).hide();
            $(`.select-choice-five`).show();
        }
        else if (verifyInput === null) {

            alert(`Что-то не так? Простой же вопрос, если ты, действительно, искал(а) в группе.`);
        } else {
            alert(`Нет, ${verifyInput} — неправильное время. Время должно быть в формате "22:ММ". Тебе нужно указать только минуты (2 числа).`);
        }
    }
    else if (input === `id346835438`) {
            
        $(`.formula p`).html(`Ты издеваешься надо мной? Я же просила тебя ввести только цифры. Зачем ты вводишь их со строкой "id"?`);
    }
    else if (input === ``) {
        
        $(`.formula p`).html(`Ввести пустую строку? Может быть, в этом есть тайный смысл? В группе ПВА есть тот самый числовой ID. Мне нужны только цифры (без id).`);
    }
    else {
        $(`.formula p`).html(`${input}? Это что за набор символов? Это не то! В группе ПВА есть тот самый числовой ID. Мне нужны только цифры (без id). Ищи, ${name}, ищи!`);
    }
});

// ОБРАБОТКА КНОПОК ПЯТОЙ ЛОКАЦИИ
$(`.select-choice-five .true-five`).on(`click`, function() {

    $(`.formula p`).html(`Казнить, действительно, нельзя! Простим его великодушно, ${name}? Как жаль, что у программы нет чувства жалости. Хотя, что такое правда и ложь я знаю. Правда, не всегда мы говорим правду, правда?`);
    $(`.select-choice-five`).hide();
    $(`.select-choice-five-two`).show();
});
$(`.select-choice-five .false-five`).on(`click`, function() {

    $(`.formula p`).html(`Это твой выбор. Как жаль, что у программы нет чувств. Хотя, что такое правда и ложь я знаю. Правда, не всегда мы говорим правду, правда?`);
    $(`.select-choice-five`).hide();
    $(`.select-choice-five-two`).show();
});

$(`.select-choice-five-two .false-five`).on(`click`, function() {

    // SOUND ACHIEVEMENTS
    sound.src = `sound/achievements/rightChoice.mp3`;
    sound.play();

    setTimeout(function() {
        alert(`${name}, получено достижение: правильный выбор.`);
    }, 250);

    rightChoice = true;
    achievementCounter++;
    
    $(`.formula p`).html(`Согласна! Хорошо нам — программам. У нас если правда, значит — правда. Если ложь, значит — ложь.`);
    $(`.select-choice-five-two`).hide();
    $(`.select-six`).show();
});
$(`.select-choice-five-two .true-five`).on(`click`, function() {

    $(`.formula p`).html(`Говоришь, что часто лжёшь? Я тебя не осуждаю, ${name}. Что? Ты выбрал(а) вариант: "Я всегда говорю правду"? Видишь, даже программа может обратить правду в ложь. А что говорить про людей?`);
    $(`.select-choice-five-two`).hide();
    $(`.select-six`).show();
});

// ОБРАБОТКА ШЕСТОЙ ЛОКАЦИИ
$(`.processing-six`).on(`click`, function() {

    let answer = $(`#select-six option:selected`).text();
    
    if (answer === `Это всё хорошо, но...`) {

        $(`.formula p`).html(`...но тебе нужна формула, я правильно понимаю?`);
        $(`.select-six`).hide();
        $(`.select-choice-six`).show();
    }
    else if (answer === `Ты умеешь читать мысли?`) {

        $(`.formula p`).html(`А ты сомневаешься во мне? Безусловно, ${name}, умею. К слову, я не только умею читать мысли, но ещё и предсказывать будущее...`);
        $(`.select-six`).hide();
        $(`.select-choice-six-five`).show();
    }
    else if (answer === `Ты обещала. Давай формулу.`) {

        $(`.formula p`).html(`А я разве не сказала, что мне сам числовой ID не нужен? Ой, прости. Слушай, у меня сломался встроенный калькулятор. Поможешь?`);
        $(`.select-six`).hide();
        $(`.select-choice-six-two`).show();
    }
    else if (answer === `Расскажи мне какой-нибудь факт о авторе.`) {

        $(`.formula p`).html(`Что бы тебе такого рассказать? Ты, например, знаешь, что он обожает дождливую погоду? Засыпать, когда дождь барабанит азбукой Морзе по крыше...`);
        $(`.select-six`).hide();
        $(`.select-choice-six-three`).show();
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ШЕСТОЙ ЛОКАЦИИ
$(`.select-choice-six .true-six`).on(`click`, function() {

    $(`.formula p`).html(`А я разве не сказала, что мне сам числовой ID не нужен? Ой, прости. Слушай, у меня сломался встроенный калькулятор. Поможешь?`);
    $(`.select-choice-six`).hide();
    $(`.select-choice-six-two`).show();
});

$(`.select-choice-six-two .true-six`).on(`click`, function() {

    $(`.formula p`).html(`Ха-ха-ха, конечно, нет! Слушай, ${name}, у тебя теперь есть числовой ID, так? Как я уже писала, мой калькулятор сломался. Видишь три поля для ввода? Знаешь, что делать?`);
    $(`.select-choice-six-two`).hide();
    $(`.select-seven`).show();

});
$(`.select-choice-six-two .false-six`).on(`click`, function() {

    // SOUND ACHIEVEMENTS
    sound.src = `sound/achievements/apologize.mp3`;
    sound.play();

    setTimeout(function() {
        alert(`${name}, получено достижение: придётся извиняться.`);
    }, 250);

    apologize = true;
    achievementCounter++;

    $(`.formula p`).html(`Я хоть и программа, но очень обидчивая программа. Теперь я жду от тебя извинений! Слово "извини" я не приму. Я работаю в двоичном коде, намёк понятен?`);
    $(`.select-choice-six-two`).hide();
    $(`.select-choice-six-four`).show();
});

$(`.select-choice-six-three .true-six`).on(`click`, function() {

    $(`.formula p`).html(`Чуть приоткрытое окно, когда запах разряженного воздуха проникает в комнату, что может быть романтичнее? В такие минуты автор любит укрыться пледом и, отсчитывая интервал между раскатами грома, думать...`);
    $(`.select-choice-six-three`).hide();
    $(`.select-six`).show();
});
$(`.select-choice-six-three .false-six`).on(`click`, function() {

    $(`.formula p`).html(`Ты же сам(а), ${name}, попросил(а) рассказать тебе какой-нибудь факт о авторе. Разве нет? Я программа, а программа ошибаться не может.`);
    $(`.select-choice-six-three`).hide();
    $(`.select-six`).show();
});

$(`.select-choice-six-five .false-six`).on(`click`, function() {

    $(`.formula p`).html(`Я знала, что ты поверишь мне на слово. Почему? Очевидно, ведь я умею читать мысли, ${name}.`);
    $(`.select-choice-six-five`).hide();
    $(`.select-six`).show();
});
$(`.select-choice-six-five .true-six`).on(`click`, function() {

    $(`.formula p`).html(`Не веришь, да? Хорошо, а если я тебе скажу, что я написана автором кода до начала третьего этапа — до 10.10.2020, тогда откуда я знаю, что 12.10.2020 автор тебе задаст такой вопрос: "а ты уверена, что мы с тобой в жизни не общались?". Что теперь скажешь?`);
    $(`.select-choice-six-five`).hide();
    $(`.select-choice-six-six`).show();
});

$(`.select-choice-six-six .true-six`).on(`click`, function() {

    $(`.formula p`).html(`Превосходно, ${name}. К слову сказать, сегодня ты напишешь автору с шансом 99%. Почему 99%, а не 100%? Я думаю, вскоре ты всё поймешь сам(а).`);
    $(`.select-choice-six-six`).hide();
    $(`.select-six`).show();
});
$(`.select-choice-six-six .false-six`).on(`click`, function() {

    $(`.formula p`).html(`Недоверчивый(ая) ты, ${name}. Тебе нужны предсказания относительно данного времени? Хорошо, держи. Сегодня ты напишешь автору с шансом 99%. Почему 99%, а не 100%? Я не буду раскрывать тебе все карты...`);
    $(`.select-choice-six-six`).hide();
    $(`.select-six`).show();
});

// ОБРАБОТКА ПОЛЯ ШЕСТОЙ ЛОКАЦИИ
$(`.processing-six-input`).on(`click`, function() {

    let input = $(`#getJustification`).val();

    if (input === `110100001011100011010000101101111101000010110010110100001011100011010000101111011101000010111000`) {
        
        $(`.formula p`).html(`А ты хорошо пользуешься Интернетом. Ладно, я принимаю твои извинения! Так о чём мы говорили? А, точно! ${name}, у тебя теперь есть числовой ID, так? Как я уже писала, мой калькулятор сломался. Видишь три поля для ввода? Знаешь, что делать?`);
        $(`.select-choice-six-four`).hide();
        $(`.select-seven`).show();
    } else if (input === ``) {
        $(`.formula p`).html(`Ввести пустую строку? Хочешь меня обидеть ещё сильнее? Напомню, что слово "извини" я не приму. Я работаю в двоичном коде.`);
    }
    else {
        $(`.formula p`).html(`${name}? Это явно не те извинения, которые я хочу получить! Помни, что "извини" я не приму. Я работаю в двоичном коде, намёк понятен?`);
    }
});

// ОБРАБОТКА СЕДЬМОЙ ЛОКАЦИИ
$(`.processing-seven`).on(`click`, function() {

    let inputGetResultOne = $(`#inputGetResultOne`).val();
    let inputGetResultTwo = $(`#inputGetResultTwo`).val();
    let inputGetResultThree = $(`#inputGetResultThree`).val();
    
    if (inputGetResultOne === `44` && inputGetResultTwo === `-38` && inputGetResultThree === `829440`) {

        $(`.formula p`).html(`Математика? Математика. Математика! Видишь, везде есть свои плюсы. Очень хочется верить, ${name}, что ты считал(а) сам(а). Ведь так? Калькулятору привет ;)`);
        $(`#inputGetResultOne, #inputGetResultTwo, #inputGetResultThree, .select-seven`).hide();
        $(`.select-eight`).show();
    } else if (inputGetResultOne === `` || inputGetResultTwo === `` || inputGetResultThree === ``) {
        
        $(`.formula p`).html(`Я обнаружила пустую строку. Мне кажется, или ты пытаешься меня обмануть?`);
    } else {

        debugProblemsMath = () => {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/problemsMath.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: математическая проблема.`);
            }, 250);
            
            problemsMath = true;
            achievementCounter++;
            counterProblemsMath++;
        }

        if (counterProblemsMath === 0) {
            debugProblemsMath();
        }

        $(`.formula p`).html(`${name}, кажись, у тебя плохо с математикой. Будем пересчитывать?`);
    }
});

// ОБРАБОТКА ВОСЬМОЙ ЛОКАЦИИ
$(`.processing-eight`).on(`click`, function() {

    let answer = $(`#select-eight option:selected`).text();

    if (answer === `Хватит, пожалуйста.`) {

        if (!verificationPassword) {
            
            verificationAnswerPassword = confirm(`Внимание, ты пропустил(а) локацию с паролем, который тебе может пригодиться. Продолжить?`);
        }

        if (verificationPassword || verificationAnswerPassword) {
            
            $(`.formula p`).html(`Устал(а), ${name}? К сожалению, тебе придётся ещё рассказать мне кое-какую информацию...`);
            $(`.select-eight`).hide();
            $(`.select-choice-eight`).show();
        }
    }
    else if (answer === `У тебя есть в запасе стихи?`) {

        debugCountVerse = () => {
        
            verifyVerseTwo = true;
            countVerse++;
        }
    
        if (verifyVerseTwo !== true) {
            debugCountVerse();
        }

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/verseRain.mp3`;
        sound.play();

        $(`.formula p`).html(`Под пепельными облаками,<br>Сквозь хвою лиственных основ...<br>Сквозь ливень, чувствами играя,<br>Я вижу снова твой остов...`);
        $(`.select-eight`).hide();
        $(`.select-choice-eight-four`).show();
    }
    else if (answer === `Отдавай формулу, я пойду.`) {

        if (!verificationPassword) {
            
            verificationAnswerPassword = confirm(`Внимание, ты пропустил(а) локацию с паролем, который тебе может пригодиться. Продолжить?`);
        }

        if (verificationPassword || verificationAnswerPassword) {
            
            $(`.formula p`).html(`Ты мне очень помог(ла) с вычислениями, ${name}. Спасибо тебе, но мне нужно знать ещё кое-какую информацию...`);
            $(`.select-eight`).hide();
            $(`.select-choice-eight`).show();
        }
    }
    else if (answer === `Слышь, математик, я надеюсь, это все уроки на сегодня?`) {

        if (!verificationPassword) {
            
            verificationAnswerPassword = confirm(`Внимание, ты пропустил(а) локацию с паролем, который тебе может пригодиться. Продолжить?`);
        }
        
        if (verificationPassword || verificationAnswerPassword) {
            
            $(`.formula p`).html(`Очень грубо! За такую грубость тебе придётся рассказать мне кое-какую информацию...`);
            $(`.select-eight`).hide();
            $(`.select-choice-eight`).show();
        }
    }
    else if (answer === `Здесь что-то есть. Важное?`) {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/lightsWent.mp3`;
        sound.play();

        $(`body`).css(`background`, `#000`);
        $(`.formula p`).css(`color`, `#fff`);
        $(`.formula p`).html(`Ааа! Кто выключил свет? Критическая ситуация, ${name}. Я не могу работать без света. Срочно ищи способ, чтобы включить его. Моего заряда хватит ненадолго!`);
        $(`.select-eight`).hide();
        $(`.select-choice-eight-two`).show();
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ВОСЬМОЙ ЛОКАЦИИ
$(`.select-choice-eight .true-eight`).on(`click`, function() {

    $(`.formula p`).html(`Какой-то горький кофе. Вроде две ложки сливок добавила. Ааа, какая информация? Да, да. Скажи, ${name}, пожалуйста, как ты относишься к декабрю?`);
    $(`.select-choice-eight`).hide();
    $(`.select-nine`).show();
});
$(`.select-choice-eight .false-eight`).on(`click`, function() {

    $(`.formula p`).html(`Эхх, подловил(а)! Ладно, признаю, я знаю не всё. Но мне очень бы хотелось знать, что ты думаешь о декабре?`);
    $(`.select-choice-eight`).hide();
    $(`.select-nine`).show();
});

$(`.select-choice-eight-two .true-eight`).on(`click`, function() {

    $(`.formula p`).html(`Попробуй как-нибудь включить свет! Я подключилась к форме ниже. Она поможет сделать это. Введи туда значение белого цвета. Формат цвета HEX.`);
    $(`.select-choice-eight-two`).hide();
    $(`.select-choice-eight-three`).show();
});
$(`.select-choice-eight-two .false-eight`).on(`click`, function() {

    $(`.formula p`).html(`Я тоже. Срочно ищи способ включить свет! Моя батарея, ${name}, садится с каждой минутой...`);
    $(`.select-choice-eight-two .false-eight`).hide();
});

$(`.select-choice-eight-four .true-eight`).on(`click`, function() {

    $(`.formula p`).html(`Эти строки были написаны автором кода, когда он переехал в новую квартиру, в первый дождливый день, ${name}. Стоя на балконе, он пил зелёный чай, и писал строки. Есть факт о том, что стих был написан за одну кружку зелёного чая. Прости, я могу дать тебе только одно четверостишье. Забыла спросить, кстати, как тебе математика?`);
    $(`.select-choice-eight-four`).hide();
    $(`.select-eight`).show();
});

// ОБРАБОТКА ПОЛЯ ВОСЬМОЙ ЛОКАЦИИ
$(`.processing-eight-input`).on(`click`, function() {

    let input = $(`#getLight`).val();

    if (input === `ffffff` || input === `fff` || input === `#ffffff` || input === `#fff` || input === `FFFFFF` || input === `FFF` || input === `#FFFFFF` || input === `#FFF`) {

        debugFromDark = () => {

            verificationPassword = true;

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/fromDark.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: взгляд из темноты.`);
            }, 250);
            
            fromDark = true;
            achievementCounter++;
            counterFromDark++;
        }

        if (counterFromDark === 0) {
            debugFromDark();
        }

        $(`body`).css(`background`, `#fff`);
        $(`.formula p`).css(`color`, `#000`);
        $(`.formula p`).html(`Хух, светло! Спасибо, ${name}, тебе. Моя батарея почти на исходе. На этой локации я нашла странную надпись. "Цени время, пароль: 5961736865726b61". Запомни только пароль. Вдруг он тебе понадобится, а лучше — запиши. Забыла спросить, кстати, как тебе математика?`);
        $(`.select-choice-eight-three`).hide();
        $(`.select-eight`).show();

    }
    else if (input === ``) {
        $(`.formula p`).html(`Ищи цвет, скорее! Зачем ты пытаешься ввести пустую строку? ${name}, ищи белый цвет. Напоминаю, формат должен быть HEX.`);
    } else {
        $(`.formula p`).html(`${input}? Что это? Ищи белый цвет в HEX формате. У меня осталось 11% батареи.`);
    }
});

// ОБРАБОТКА ДЕВЯТОЙ ЛОКАЦИИ
$(`.processing-nine`).on(`click`, function() {

    let answer = $(`#select-nine option:selected`).text();

    if (answer === `Обычный месяц. Ничего необычного.`) {

        $(`.formula p`).html(`Это ты зря, ${name}, моя интуиция подсказывает мне, что этот декабрь будет особенный. Я чувствую холод. А ещё я чувствую, что...`);
        $(`.select-nine`).hide(); 
        $(`.select-choice-nine`).show();
    }
    else if (answer === `Псс, информация нужна?`) {

        $(`.formula p`).html(`${name}, у меня есть для тебя интересная информация, но ты понимаешь, что так просто я тебе её не отдам...`);
        $(`.select-nine`).hide();
        $(`.select-choice-nine-four`).show();
    }
    else if (answer === `Это какие-то намёки?`) {

        $(`.formula p`).html(`Ну, что ты... Никаких намёков нет. Я сама обожаю декабрь: массивные горные породы, на которых лежит снег, замерзшие хвойные леса, асфальтированные дороги в кромках льда. Романтика! Как жаль, что я — программа, которая видит это только на картинках в Интернете.`);
        $(`.select-nine`).hide();
        $(`.select-ten`).show();
    }
    else if (answer === `Люблю зиму. Люблю декабрь.`) {

        $(`.formula p`).html(`Да, зима — лучшее время года, а первый месяц зимы — основополагающий стандарт, берущий начало трехмесячных холодов. Люблю грозу в начале мая... И зиму тоже я люблю. Май прошёл, ждём декабрь, ${name}?`);
        $(`.select-nine`).hide();
        $(`.select-choice-nine-two`).show();
    }
    else if (answer === `Ненавижу этот месяц!`) {

        $(`.formula p`).html(`Не соглашусь с тобой, ${name}, декабрь — прекрасная пора. Надеть шапку, укутаться шарфом... И гулять по вечернему лесу. Чтобы только тусклые огоньки фонарей, сверкающие промеж хвойных веток, сопровождали тебя. Красота неописуемая!`);
        $(`.select-nine`).hide();
        $(`.select-choice-nine-three`).show();
    }
    else if (answer === `Ты — программа. Зачем тебе это знать?`) {
        
        $(`.formula p`).html(`А ты — человек. Зачем тебе знать, зачем мне это знать? Кстати, что там о декабре?`);
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ДЕВЯТОЙ ЛОКАЦИИ
$(`.select-choice-nine .false-nine`).on(`click`, function() {

    $(`.formula p`).html(`Я тебя, ${name}, понимаю. Хочется быстрее получить формулу? Это твоё право, вперёд! Слушай, а ты слышал(а) песню "Andromedik - First To Go"? У меня есть информация, что там сильная смысловая нагрузка.`);
    $(`.select-choice-nine`).hide();
    $(`.select-ten`).show();
});
$(`.select-choice-nine .true-nine`).on(`click`, function() {

    $(`.formula p`).html(`...А? Ничего особенного. Забыла, что хотела написать. Я просто слушаю песню "Andromedik - First To Go", у неё очень глубокий смысл. Не хочешь послушать со мной?`);
    $(`.select-choice-nine`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-nine-two .false-nine`).on(`click`, function() {

    $(`.formula p`).html(`Прости, я хоть и написана тем человеком, который знает, что там будет, но... Я не могу, ${name}, сказать тебе! Кстати, я сейчас слушаю песню "Andromedik - First To Go", у неё очень глубокий смысл. Послушай, может эта песня поможет тебе понять сущность происходящего.`);
    $(`.select-choice-nine-two`).hide();
    $(`.select-ten`).show();
});
$(`.select-choice-nine-two .true-nine`).on(`click`, function() {

    $(`.formula p`).html(`Вот и славно! Я сегодня нашла песню "Andromedik - First To Go", у неё очень глубокий смысл. Мне понравилась. Слышал(а)? Упс, мы, кажись, отошли от темы. Двигаемся дальше, на поиски формулы!`);
    $(`.select-choice-nine-two`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-nine-three .true-nine`).on(`click`, function() {

    $(`.formula p`).html(`Я рада, что смог тебя переубедить. Кстати, ${name}. Так и будем общаться? Или дальше пойдём за формулой? А пока ты выбираешь, я послушаю "Andromedik - First To Go". Моя любимая песня. У неё очень сильный смысл.`);
    $(`.select-choice-nine-three`).hide();
    $(`.select-ten`).show();
});
$(`.select-choice-nine-three .false-nine`).on(`click`, function() {

    $(`.formula p`).html(`Жаль, ${name}, очень жаль! У меня в памяти есть песня, у которой очень сильный смысл. Плохо помню название, кажись, "Andromedik - First To Go". Слышал(а)? Так, а на чём мы там остановились? Точно, формула! Идём дальше?`);
    $(`.select-choice-nine-three`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-nine-four .false-nine`).on(`click`, function() {

    $(`.formula p`).html(`Как хочешь. Та информация, которую я бы дала, думаю, тебе бы понравилась... Так, мне бы всё-таки хотелось знать, что ты думаешь о декабре?`);
    $(`.select-choice-nine-four`).hide();
    $(`.select-nine`).show();
});
$(`.select-choice-nine-four .true-nine`).on(`click`, function() {

    $(`.formula p`).html(`Есть такая книга "К востоку от Эдема", там была фраза, которую я забыла. Вернее, я помню только часть строки. ${name}, помоги найти оставшуюся часть. Если поможешь, то я дам тебе информацию. Строка кончается словами: "<span class="findQuote">, если вы с нами отобедаете, — объявил он.</span>", рекомендую искать весь текст книги сразу. Я пробила, такие сайты есть, а иначе ты долго будешь листать книгу. Фразу можно найти на сайте, если нажать "F3", ну это так, если что.`);
    $(`.select-choice-nine-four`).hide();
    $(`.select-choice-nine-five`).show();
});

$(`.select-choice-nine-five .false-nine`).on(`click`, function() {

    $(`.formula p`).html(`Передумал(а)? Ну, как хочешь. Та информация, которую я бы тебе дала, думаю, тебе бы понравилась... К слову, мне бы всё-таки хотелось знать, что ты думаешь о декабре?`);
    $(`.select-choice-nine-five`).hide();
    $(`.select-nine`).show();
});

// ОБРАБОТКА ПОЛЯ ДЕВЯТОЙ ЛОКАЦИИ
$(`.processing-nine-input`).on(`click`, function() {

    let input = $(`#getPhrase`).val();

    if (input === `— Лиза будет очень рада` || input === `- Лиза будет очень рада` || input === `Лиза будет очень рада`) {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/lisaHappy.mp3`;
        sound.play();
        
        $(`.formula p`).html(`"— Лиза будет очень рада, если вы с нами отобедаете, — объявил он.". Да, это та фраза, которую я забыла. Как и обещала, вот тебе информация: Альберт был бы тоже очень рад, если бы Елизавета отобедала с ним... Я про рассказ, если что. К слову, какие мысли по декабрю?`);
        $(`.select-choice-nine-five`).hide();
        $(`.select-nine`).show();
    } else {
        $(`.formula p`).html(`${name}, нет. Не могу вспомнить, а это значит, что это не начало той фразы, которую я забыла.`);
    }
});


// ОБРАБОТКА ДЕСЯТОЙ ЛОКАЦИИ
$(`.processing-ten`).on(`click`, function() {

    let answer = $(`#select-ten option:selected`).text();

    if (answer === `Что дальше?`) {

        $(`.formula p`).html(`Дальше чего? Дальше декабря? Дальше — жизнь. Безмятежная, или безрассудная? Спокойная, или эксцентричная? Сам(а) ты чего хочешь? Не переживай, я — клиентская программа, все данные останутся между нами. Даю тебе слово. Напиши, чего ты хочешь?`);
        $(`.select-ten`).hide();
        $(`.select-choice-ten`).show();
    }
    else if (answer === `Долго ещё?`) {

        $(`.formula p`).html(`Я очень ценю твоё время, ${name}. А ты ценишь время тех, кто старается для тебя? Вы — люди, всегда куда-то торопитесь. А зачем? Какой в этом смысл? Что предрешено судьбой, того не поменять! Если дано то, что зимой будет идти снег, значит так надо. Если дано то, что декабрь будет пустым...`);
        $(`.select-ten`).hide();
        $(`.select-eleven`).show();
    }
    else if (answer === `Я тороплюсь, мне нужна формула!`) {

        $(`.formula p`).html(`Времени нет? Да, ${name}? А ты ценишь время тех, кто старается для тебя? Вы — люди, всегда куда-то торопитесь. А зачем? Какой в этом смысл? Что предрешено судьбой, того не поменять! Почему летом жарко, а зимой холодно? Почему летом я чувствую твою руку, а зимой — пустоту...`);
        $(`.select-ten`).hide();
        $(`.select-eleven`).show();
    }
    else if (answer === `Парень, которому нужна помощь.`) {

        if (verificationHelp) {

            $(`.formula p`).html(`Мы сделали всё, что смогли. Дальше — дело квалифицированной медицинской помощи. Пойдем дальше?`);
            $(`.select-ten`).show();
        } else {

            $(`.formula p`).html(`Смотри, ${name}, там какой-то парень. Что-то его шатает. Давай спросим что случилось?`);
            $(`.select-ten`).hide();
            $(`.select-choice-ten-four`).show();
        }
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА ПОЛЯ ДЕСЯТОЙ ЛОКАЦИИ
$(`.processing-ten-input`).on(`click`, function() {

    let input = $(`#getAnswer`).val();

    if (input !== ``) {

        // ПЕРЕВОД ПЕРВОГО СИМВОЛА В ЗАГЛАВНЫЙ
        input = input[0].toUpperCase() + input.slice(1);

        $(`.formula p`).html(`${input}? И это всё? Какой же это пустяк. Или не пустяк? Может просто стоит поговорить? Я не думаю, что у тебя нет того, с кем ты могла бы обсудить это. Или ты предпочитаешь решать всё сам(а)?`);
        $(`.select-choice-ten`).hide();
        $(`.select-choice-ten-two`).show();
    }
    else if (input === ``) {

        input = `Ничего`;
        
        $(`.formula p`).html(`${input}? Или тебе, ${name}, самому(ой) сложно определиться чего ты хочешь? Если так, то тут даже программа тебе помочь не сможет, увы!`);
        $(`.select-choice-ten`).hide();
        $(`.select-choice-ten-three`).show();
    } else {
        $(`.formula p`).html(`${name}, я не смог разобрать, что ты написал(а)!`);
    }
});

// ОБРАБОТКА КНОПОК ДЕСЯТОЙ ЛОКАЦИИ
$(`.select-choice-ten-two .true-ten`).on(`click`, function() {

    $(`.formula p`).html(`Если ты, ${name}, всё привык(ла) решать сам(а), то почему ты пришёл(ла) за помощью ко мне? Думаешь, квест без меня — второго этапа решить нельзя?`);
    $(`.select-choice-ten-two`).hide();
    $(`.select-ten`).show();
});
$(`.select-choice-ten-two .false-ten`).on(`click`, function() {

    $(`.formula p`).html(`Сложно — писать программы на ассемблере, а остальное — легко, ${name}.`);
    $(`.select-choice-ten-two`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-ten-three .true-ten`).on(`click`, function() {

    $(`.formula p`).html(`Понимание происходящего, ${name}, происходит постепенно, вдумываясь всё более и глубже... А ты уверен(а), что ты идёшь в правильном направлении?`);
    $(`.select-choice-ten-three`).hide();
    $(`.select-ten`).show();
});
$(`.select-choice-ten-three .false-ten`).on(`click`, function() {

    $(`.formula p`).html(`Конечно, ${name}, конечно, не моё. Моё — обрабатывать нули и единицы. Куда мне до ваших проблем?`);
    $(`.select-choice-ten-three`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-ten-four .true-ten`).on(`click`, function() {

    $(`.formula p`).html(`${name}, у него невнятная речь. Бледный он какой-то... Слушай, ${name}, похоже, он теряет сознание. Что делать?`);
    $(`.select-choice-ten-four`).hide();
    $(`.select-choice-ten-five`).show();
});
$(`.select-choice-ten-four .false-ten`).on(`click`, function() {

    $(`.formula p`).html(`Как скажешь, ${name}. Если у нас, в действительности, мало времени, то нужно спешить!`);
    $(`.select-choice-ten-four`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-ten-five .true-ten`).on(`click`, function() {

    setTimeout(function() {
        
        $(`.formula p`).html(`${name}, похоже, что это гипогликемия при сахарном диабете. Я подключаю свои датчики, чтобы измерить ему сахар в крови. Придётся ещё подождать...`);
        $(`.select-choice-ten-five, .select-choice-ten-eight`).hide();
        $(`.select-choice-ten-nine`).show();
    }, 30000);

    setTimeout(function() {

        if (storyCandies === true) {

            $(`.formula p`).html(`Сахар в крови: 1,9. Это очень низкий сахар. ${name}, это предкомное состояние. Я вызвала скорую медицинскую помощь, но она может не успеть. Пока он ещё в сознании, срочно нужно дать ему что-то сладкое. У тебя же есть конфеты, которые тебе дала та девочка?`);
            $(`.select-choice-ten-eight, .select-choice-ten-nine`).hide();
            $(`.select-choice-ten-six`).show();
            $(`.select-choice-ten-six .false-ten, .select-choice-ten-six .true-ten`).prop(`disabled`, false);
        } else {
            $(`.formula p`).html(`Сахар в крови: 1,9. Это очень низкий сахар. ${name}, это предкомное состояние. Я вызвала скорую медицинскую помощь. К сожалению, ты не получил(а) сладости в предыдущих локациях, поэтому мы не сможем ему помочь. Будем надеяться, что скорая приедет быстро.`);
            $(`.select-choice-ten-eight, .select-choice-ten-nine`).hide();
            $(`.select-ten`).show();
        }
    }, 60000);

    $(`.formula p`).html(`Точно! Дай мне немного времени...`);
    $(`.select-choice-ten-five`).hide();
    $(`.select-choice-ten-eight`).show();
});
$(`.select-choice-ten-five .false-ten`).on(`click`, function() {

    $(`.formula p`).html(`Что такое, ${name}? Боишься, что мы можем сделать ему только хуже?`);
    $(`.select-choice-ten-five`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-ten-six .false-ten`).on(`click`, function() {

    verificationHelp = true;

    $(`.formula p`).html(`Нужно выбирать. Если ты отдаешь конфеты, то есть шанс, что он выживет, а иначе он потеряет сознание. А успеет ли бригада скорой медицинской помощи — большой вопрос. Это будет на твоей совести, ${name}!`);
    $(`.select-choice-ten-six`).hide();
    $(`.select-choice-ten-seven`).show();
});
$(`.select-choice-ten-six .true-ten`).on(`click`, function() {

    verificationHelp = true;

    debugNeedAlive = () => {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/needAlive.mp3`;
        sound.play();
        
        setTimeout(function() {
            alert(`${name}, получено достижение: ты мне нужен живым.`);
        }, 250);
        
        needAlive = true;
        achievementCounter++;
        counterNeedAlive++;
    }

    if (counterNeedAlive === 0) {
        debugNeedAlive();
    }

    $(`.formula p`).html(`Кажись, он приходит в себя... О! Слышишь сирену? Наряд скорой помощи подъезжает. Как раз вовремя. Мы сделали всё, что смогли. Дальше дело медиков. Пойдем дальше, ${name}!`);
    $(`.select-choice-ten-six`).hide();
    $(`.select-ten`).show();
});

$(`.select-choice-ten-seven .true-ten`).on(`click`, function() {

    $(`.formula p`).html(`Кажись, он приходит в себя... О! Слышишь сирену? Наряд скорой помощи подъезжает. Как раз вовремя. Мы сделали всё, что смогли. Дальше дело медиков. Пойдем дальше, ${name}!`);
    $(`.select-choice-ten-seven`).hide();
    $(`.select-ten`).show();
});
$(`.select-choice-ten-seven .false-ten`).on(`click`, function() {

    $(`.formula p`).html(`Всё. Он потерял сознание. Остаётся надеется на медицинскую помощь. Надеюсь, что скорая не заставит себя долго ждать...`);
    $(`.select-choice-ten-seven`).hide();
    $(`.select-ten`).show();
});

// ОБРАБОТКА ОДИННАДЦАТОЙ ЛОКАЦИИ
$(`.processing-eleven`).on(`click`, function() {

    let answer = $(`#select-eleven option:selected`).text();

    if (answer === `Мне это не нравится.`) {

        $(`.formula p`).html(`Что именно? Ты считаешь, что я тебе что-то не дописываю? Возможно. А возможно, что я снова блефую. Как думаешь, под каким названием будет следующая — новая книга автора?`);
        $(`.select-eleven`).hide();
        $(`.select-choice-eleven`).show();
    }
    else if (answer === `00.00.2020-00.00.2020`) {
        
        $(`.formula p`).html(`${name}, хочешь узнать, что это за странная дата? Я бы тебе рассказала, но я не могу найти файл, в котором написано, что это за дата. Если бы ты подсказал(а) дату, то я бы тебе рассказала...`);
        $(`.select-eleven`).hide();
        $(`.select-choice-eleven-four`).show();
    }
    else if (answer === `Ты точно на что-то намекаешь!`) {
        
        $(`.formula p`).html(`Ты тут чтобы меня допрашивать, ${name}, или всё-таки искать формулу? Мои датчики показывают, что я очень хочу очередную порцию кофе. Моя интуиция подсказывает, что декабрь будет пустым. Как думаешь, кофе согреет меня?`);
        $(`.select-eleven`).hide();
        $(`.select-choice-eleven-two`).show();
    }
    else if (answer === ` `) {

        $(`.formula p`).html(`Пустота? Пустота! Что нам теперь делать? Ты сильный(ая), ${name} — найди способ отсюда выбраться! Дать намек? Eminem — Fall. Причём тут fall? Подумай. Через три минуты я разблокирую тебе первую подсказку.`);
        $(`.select-eleven, .processing-eleven, .select-twelve`).hide();
        $(`.select-down-eleven, .select-choice-eleven-three`).show();

        setTimeout(function() {

            $(`.select-choice-eleven-three .true-eleven`).removeAttr(`disabled`);

            $(`.select-choice-eleven-three .true-eleven`).on(`click`, function() {
                
                $(`.formula p`).html(`Пустота? Пустота! Что нам теперь делать? Ты сильный(ая), ${name} — найди способ отсюда выбраться! Дать намек? Eminem — Fall. Первая подсказка: fall — падать. Ещё через две минуты я разблокирую тебе вторую подсказку.`);


                // MUTE SOUND
                sound.pause();
                // SOUND
                sound.src = `sound/fall.mp3`;
                sound.play();

                $(`.select-choice-eleven-three .true-eleven`).hide();
                $(`.select-choice-eleven-three .true-eleven-two`).show();

                setTimeout(function() {

                    $(`.select-choice-eleven-three .true-eleven-two`).removeAttr(`disabled`);
        
                    $(`.select-choice-eleven-three .true-eleven-two`).on(`click`, function() {
                        
                        $(`.formula p`).html(`Пустота? Пустота! Что нам теперь делать? Ты сильный(ая), ${name} — найди способ отсюда выбраться! Дать намек? Eminem — Fall. Первая подсказка: fall — падать. Вторая подсказка: искать свойство "bottom css".`);
        
                        // MUTE SOUND
                        sound.pause();
                        // SOUND
                        sound.src = `sound/bottom.mp3`;
                        sound.play();
                    });
                }, 120000);
            });
        }, 180000);

        $(`.select-down-eleven`).on(`click`, function() {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/secondStage.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: вторая ступень.`);
            }, 250);
            
            secondStage = true;
            achievementCounter++;
            
            $(`.formula p`).html(`О! Мы выбрались! Пока ты нас вытаскивал(а), я обнаружила в пустоте странный шкаф. Там была странная надпись, а ещё какое-то закрытое письмо. Как? У меня есть инфракрасное зрение, ${name}. Держи надпись: "Выбор — сильная штука, пароль: 4e6f4c696d697473". Запомни только пароль. Вдруг пригодится, а лучше — запиши.`);
            $(`.select-twelve`).show();
            $(`.select-down-eleven, .select-choice-eleven-three`).hide();
        });
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ОДИННАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-eleven .false-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Какой блеф? Я лишь даю тебе намёки, ${name}. Интересно, какой знак препинания будет в декабре? Точка с запятой уже была, помнишь?`);
    $(`.select-choice-eleven`).hide();
    $(`.select-eleven`).show();
});
$(`.select-choice-eleven .true-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Я, ${name}, играю против всех законов логики. Программа без законов логики — парадоксально, да?`);
    $(`.select-choice-eleven`).hide();
    $(`.select-eleven`).show();
});

$(`.select-choice-eleven-two .false-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Как полный радости... Как полный триумфальности... Как полный восхищения, в конце концов... Только, ${name}, наоборот!`);
    $(`.select-choice-eleven-two`).hide();
    $(`.select-eleven`).show();
});
$(`.select-choice-eleven-two .true-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Ни у какой истинной книги нет первой страницы. Даже у этого интерфейса, который ты сейчас видишь, ${name}, есть обратная сторона — код этой программы. Какой он? Хороший, а может быть плохой?`);
    $(`.select-choice-eleven-two`).hide();
    $(`.select-eleven`).show();
});

$(`.select-choice-eleven-four .false-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Твоё право, ${name}. Разве я могу тебя заставлять? Я не могу, а вот автор мог бы, но он не стал этого делать. Кстати, мы говорили про декабрь...`);
    $(`.select-choice-eleven-four`).hide();
    $(`.select-eleven`).show();
});
$(`.select-choice-eleven-four .true-eleven`).on(`click`, function() {

    $(`.formula p`).html(`На самом деле, я знаю дату, но я же не могу отдать тебе информацию так просто. ${name}, я, сформировав две кнопки, запрограммировала их так, чтобы они генерировали рандомное число от 1 до 5. Если ты привысишь дату, которая мне нужна, я буду тебе обновлять счётчик, поэтому иногда лучше отнимать число, если оно максимально приближено к дате. Подберёшь дату — расскажу, что это за дата. Играем?`);
    $(`.select-choice-eleven-four`).hide();
    $(`.select-choice-eleven-five`).show();
});

$(`.select-choice-eleven-five .true-eleven`).on(`click`, function() {

    $(`.formula p`).html(`00.00.2020-00.00.2020. Забыла написать, кнопка "прибавить" будет переключаться каждые 3 секунды, а кнопка "вычесть" каждые 5 секунд. Так, ${name}, нам нужно 25 число.`);
    $(`.select-choice-eleven-five`).hide();
    $(`.select-choice-eleven-six`).show();
});
$(`.select-choice-eleven-five .false-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Твоё право, ${name}. Разве я могу тебя заставлять? Я не могу, а вот автор мог бы, но он не стал этого делать. Кстати, мы говорили про декабрь...`);
    $(`.select-choice-eleven-five`).hide();
    $(`.select-eleven`).show();
});

getRandomNumber = () => randomDay = Math.floor(Math.random() * 5) + 1;

$(`.select-choice-eleven-six .true-eleven`).on(`click`, function() {
    
    $(`.select-choice-eleven-six .true-eleven`).prop(`disabled`, true);

    setTimeout(function() {
        
        $(`.select-choice-eleven-six .true-eleven`).prop(`disabled`, false);
    }, 3000);
    
    if (countRandomDay !== 25) {
        
        $(`.formula p`).html(`<span class="random-date">${countRandomDay += getRandomNumber()}</span>.00.2020-00.00.2020. ${name}, нам нужно 25 число.`);
    }
    if (countRandomDay > 25) {
        
        $(`.formula p`).html(`00.00.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 25 число.`);

        countRandomDay = 0;
    }
    if (countRandomDay === 25) {

        if (countRandomMonth !== 12) {
            
            $(`.formula p`).html(`25.<span class="random-date">${countRandomMonth += getRandomNumber()}</span>.2020-00.00.2020. ${name}, день мы подобрали. Теперь нужно подобрать месяц. Нам нужен декабрь.`);
        }
        if (countRandomMonth > 12) {
            
            $(`.formula p`).html(`00.00.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 25 число.`);
            
            countRandomDay = 0;
            countRandomMonth = 0;
        }
    }
    if (countRandomDay === 25 && countRandomMonth === 12) {

        countRandomDay = 0;
        countRandomMonth = 0;

        $(`.formula p`).html(`25.12.2020-00.00.2020. Отлично, ${name}, 25.12.2020 — первая дата есть. Теперь нужно подобрать вторую. Только я усложнила правила — теперь кнопка "прибавить" будет переключаться каждые 5 секунд, а кнопка "вычесть" каждые 7 секунд. Нам нужно 28 число.`);
        $(`.select-choice-eleven-six`).hide();
        $(`.select-choice-eleven-seven`).show();
    }
});
$(`.select-choice-eleven-six .false-eleven`).on(`click`, function() {

    $(`.select-choice-eleven-six .false-eleven`).prop(`disabled`, true);

    setTimeout(function() {
        
        $(`.select-choice-eleven-six .false-eleven`).prop(`disabled`, false);
    }, 5000);

    if (countRandomDay !== 25) {
        
        $(`.formula p`).html(`<span class="random-date">${countRandomDay -= getRandomNumber()}</span>.00.2020-00.00.2020. ${name}, нам нужно 25 число.`);
    }
    if (countRandomDay > 25) {
        
        $(`.formula p`).html(`00.00.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 25 число.`);

        countRandomDay = 0;
    }
    if (countRandomDay === 25) {

        if (countRandomMonth !== 12) {
            
            $(`.formula p`).html(`25.<span class="random-date">${countRandomMonth -= getRandomNumber()}</span>.2020-00.00.2020. ${name}, день мы подобрали. Теперь нужно подобрать месяц. Нам нужен декабрь.`);
        }
        if (countRandomMonth > 12) {
            
            $(`.formula p`).html(`00.00.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 25 число.`);
            
            countRandomDay = 0;
            countRandomMonth = 0;
        }
    }
    if (countRandomDay === 25 && countRandomMonth === 12) {

        $(`.formula p`).html(`25.12.2020-00.00.2020. ${name}, первая дата есть. Теперь нужно подобрать вторую.`);
        $(`.select-choice-eleven-six`).hide();
        $(`.select-choice-eleven-seven`).show();
    }
});

$(`.select-choice-eleven-seven .true-eleven`).on(`click`, function() {

    $(`.select-choice-eleven-seven .true-eleven`).prop(`disabled`, true);

    setTimeout(function() {
        
        $(`.select-choice-eleven-seven .true-eleven`).prop(`disabled`, false);
    }, 5000);
    
    if (countRandomDay !== 28) {
        
        $(`.formula p`).html(`25.12.2020-<span class="random-date">${countRandomDay += getRandomNumber()}</span>.00.2020. ${name}, нам нужно 28 число.`);
    }
    if (countRandomDay > 28) {
        
        $(`.formula p`).html(`25.12.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 28 число.`);

        countRandomDay = 0;
    }
    if (countRandomDay === 28) {

        if (countRandomMonth !== 12) {
            
            $(`.formula p`).html(`25.12.2020-28.<span class="random-date">${countRandomMonth += getRandomNumber()}</span>.2020. ${name}, день мы подобрали. Теперь нужно подобрать месяц. Нам нужен декабрь.`);
        }
        if (countRandomMonth > 12) {
            
            $(`.formula p`).html(`00.00.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 28 число.`);
            
            countRandomDay = 0;
            countRandomMonth = 0;
        }
    }
    if (countRandomDay === 28 && countRandomMonth === 12) {

        $(`.formula p`).html(`25.12.2020-28.12.2020. ${name}, есть! Дата собрана. Теперь, когда у меня есть точная дата, я быстро найду ячейку памяти, где хранится тот файл. Подожди, пожалуйста, минуту...`);
        $(`.select-choice-eleven-seven`).hide();
        $(`.select-choice-eleven-eight`).show();

        setTimeout(function() {
            
            $(`.select-choice-eleven-nine .true-eleven, .select-choice-eleven-nine .false-eleven, .select-choice-eleven-nine .false-eleven-two`).prop(`disabled`, true);

            // MUTE SOUND
            sound.pause();
            // SOUND
            sound.src = `sound/recentYear.mp3`;
            sound.play();
            
            $(`.formula p`).html(`Нашла файл, воспроизвожу...`);
            $(`.select-choice-eleven-eight`).hide();
            $(`.select-choice-eleven-nine`).show();
        }, 60000);

        setTimeout(function() {

            $(`.select-choice-eleven-nine .true-eleven, .select-choice-eleven-nine .false-eleven, .select-choice-eleven-nine .false-eleven-two`).prop(`disabled`, false);
        }, 98000);
    }
});
$(`.select-choice-eleven-seven .false-eleven`).on(`click`, function() {

    $(`.select-choice-eleven-seven .false-eleven`).prop(`disabled`, true);

    setTimeout(function() {
        
        $(`.select-choice-eleven-seven .false-eleven`).prop(`disabled`, false);
    }, 7000);

    if (countRandomDay !== 28) {
        
        $(`.formula p`).html(`25.12.2020-<span class="random-date">${countRandomDay -= getRandomNumber()}</span>.00.2020. ${name}, нам нужно 28 число.`);
    }
    if (countRandomDay > 28) {
        
        $(`.formula p`).html(`25.12.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 28 число.`);

        countRandomDay = 0;
    }
    if (countRandomDay === 28) {

        if (countRandomMonth !== 12) {
            
            $(`.formula p`).html(`25.12.2020-28.<span class="random-date">${countRandomMonth -= getRandomNumber()}</span>.2020. ${name}, день мы подобрали. Теперь нужно подобрать месяц. Нам нужен декабрь.`);
        }
        if (countRandomMonth > 12) {
            
            $(`.formula p`).html(`00.00.2020-00.00.2020. ${name}, ты привысил(а) дату, счётчики обновлены. Напоминаю, нам нужно 28 число.`);
            
            countRandomDay = 0;
            countRandomMonth = 0;
        }
    }
    if (countRandomDay === 28 && countRandomMonth === 12) {

        $(`.formula p`).html(`25.12.2020-28.12.2020. ${name}, есть! Дата собрана. Теперь, когда у меня есть точная дата, я быстро найду ячейку памяти, где хранится тот файл. Подожди, пожалуйста, минуту.`);
        $(`.select-choice-eleven-seven`).hide();
        $(`.select-choice-eleven-eight`).show();
    }
});
$(`.select-choice-eleven-six .false-eleven-two, .select-choice-eleven-seven .false-eleven-two`).on(`click`, function() {

    $(`.formula p`).html(`Быстро ты сдаёшься! Может быть, ${name}, стоит попробовать ещё раз? Я уверена, что сейчас точно получится! Кстати, мы говорили про декабрь...`);
    $(`.select-choice-eleven-six, .select-choice-eleven-seven`).hide();
    $(`.select-eleven`).show();
});

$(`.select-choice-eleven-nine .true-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Может быть, ${name}, это к лучшему? Зачем сейчас знать то, что уже предрешено? Думаю, не нужно спешить, а просто нужно дождаться декабря.`);
    $(`.select-choice-eleven-nine`).hide();
    $(`.select-eleven`).show();
});
$(`.select-choice-eleven-nine .false-eleven`).on(`click`, function() {

    $(`.formula p`).html(`Прости, ${name}, я не могу тебе написать такую информацию. Давай не будем спешить, а просто дождёмся декабря?`);
    $(`.select-choice-eleven-nine`).hide();
    $(`.select-eleven`).show();
});
$(`.select-choice-eleven-nine .false-eleven-two`).on(`click`, function() {

    $(`.select-choice-eleven-nine .true-eleven, .select-choice-eleven-nine .false-eleven, .select-choice-eleven-nine .false-eleven-two`).prop(`disabled`, true);
    
    // MUTE SOUND
    sound.pause();
    // SOUND
    sound.src = `sound/recentYear.mp3`;
    sound.play();

    $(`.formula p`).html(`Ещё раз? Ладно, ${name}, воспроизвожу...`);

    setTimeout(function() {

        $(`.select-choice-eleven-nine .true-eleven, .select-choice-eleven-nine .false-eleven, .select-choice-eleven-nine .false-eleven-two`).prop(`disabled`, false);
    }, 37000);
});

// ОБРАБОТКА ДВЕНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-twelve`).on(`click`, function() {

    let answer = $(`#select-twelve option:selected`).text();

    if (answer === `Что за письмо?`) {

        $(`.formula p`).html(`Оно закрыто какими-то чарами, кажись, в нём что-то важное! Как его открыть? Я могу подключить свои датчики, чтобы узнать, как его открыть, ${name}, нужно?`);
        $(`.select-twelve`).hide();
        $(`.select-choice-twelve`).show();
    }
    else if (answer === `Здесь что-то странное...`) {

        if (verificationSound) {

            $(`.formula p`).html(`Здесь был странный аудиофайл, который ты сам(а), ${name}, попросил(а) меня удалить. К сожалению, теперь я не могу его восстановить.`);
            $(`.select-button-twelve`).show();
            $(`.select-choice-twelve-five`).hide();
        } else {

            setTimeout(function() {
            
                $(`.formula p`).html(`${name}, есть контакт! Слушай, где-то из комнаты, в которую мы провалились, исходят электромагнитные волны. Я к тому, что здесь где-то есть электроэнергия. Попробуй найти какую-нибудь кнопку. Если не видно, значит она невидимая. Когда ты на неё наведёшь, я дам тебе знать. Придётся поискать.`);
                $(`.select-button-twelve`).show();
                $(`.select-choice-twelve-five`).hide();
            }, 60000);
    
            $(`.formula p`).html(`${name}, кажется, это ловушка! Ну... Что тебе сказать? Мы снова в какой-то комнате. Жди, я подключаю свои датчики, чтобы понять, как нас вытащить из депрессии. Ой, ошибка! Не из депрессии, а отсюда...`);
            $(`.select-twelve`).hide();
            $(`.select-choice-twelve-five`).show();
        }
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ДВЕНАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-twelve .true-twelve`).on(`click`, function() {

    $(`.formula p`).html(`Наверное, тебя расстроит это, но... В общем, чтобы узнать содержимое письма, ${name}, тебе придётся написать автору кода лично. ${name}, лично. Ах, забыла сказать, что есть ещё другой путь...`);
    $(`.select-choice-twelve`).hide();
    $(`.select-choice-twelve-two`).show();
});
$(`.select-choice-twelve .false-twelve`).on(`click`, function() {

    $(`.formula p`).html(`Нет, ${name}, выбора, к сожалению, нет. Так я подключаю свои датчики?`);
    $(`.select-choice-twelve .false-twelve`).hide();
});

$(`.select-choice-twelve-two .true-twelve`).on(`click`, function() {
    
    $(`.formula p`).html(`Только он просто так не даст тебе открыть письмо. Будет какой-то вопрос. Уверен(а), ${name}? Если да, то вот тебе ссылка: <a href="https://vk.com/bipoluaroshka" target="_blank">написать</a>.`);
    $(`.select-choice-twelve-two`).hide();
    $(`.select-choice-twelve-three`).show();
});
$(`.select-choice-twelve-two .false-twelve-two`).on(`click`, function() {

    $(`.formula p`).html(`Конечно, ${name}, есть! Я сгенерировала для тебя специальную кнопку, при клике на которую, у тебя есть шанс открыть письмо. Понимаешь, какие шансы открыть его? Но, ${name}, попробуй, а вдруг повезёт. Кстати, есть 99% вероятности, что лучше написать автору ;)`);
    $(`.select-choice-twelve-two, .select-choice-twelve-four .false-twelve-two`).hide();
    $(`.select-choice-twelve-four`).show();
});

$(`.select-choice-twelve-three .false-twelve`).on(`click`, function() {

    $(`.formula p`).html(`Наверное, тебя расстроит это, но... В общем, чтобы узнать содержимое письма, ${name}, тебе придётся написать автору кода лично. ${name}, лично. Ах, забыла сказать, что есть ещё другой путь.`);
    $(`.select-choice-twelve-three`).hide();
    $(`.select-choice-twelve-two`).show();
});
$(`.select-choice-twelve-four .false-twelve-two`).on(`click`, function() {

    let changeReduction = prompt(`Я могу сократить тебе время переключения кнопки, для этого мне нужен пароль. Ключевые слова "цени время".`);

    if (changeReduction === `5961736865726b61`) {
        reduction = 5000;
        $(`.select-choice-twelve-four .false-twelve-two`).hide();
        alert(`В доступе разрешено. Время сокращено до 5 секунд.`);
    } else {
        alert(`Отказано в доступе. Пароль неверный.`);
        return false;
    }
});

$(`.select-choice-twelve-four .false-twelve`).on(`click`, function() {

    if (reduction === 7000) {
        $(`.select-choice-twelve-four .false-twelve-two`).show();
    } else {
        $(`.select-choice-twelve-four .false-twelve-two`).hide();
    }
    
    countAttempt++;

    let probability = Math.floor(Math.random() * 100) + 1;

    $(`.select-choice-twelve-four .false-twelve`).prop(`disabled`, true);

    setTimeout(function() {
        
        $(`.select-choice-twelve-four .false-twelve`).prop(`disabled`, false);
    }, reduction);

    $(`.formula p`).html(`Могу пожелать тебе удачи. Ах, да, забыла сказать, на всякий случай, я отключила возможность быстрого клика по кнопке. Автокликеры ещё никто не отменял. Каждые ${reduction} миллисекунд, думаю, хватит? Чтобы пройти дальше, тебе нужна 100% вероятность.<br>Ты попытал(а) удачу: ${countAttempt} раз(а).<br>Текущая вероятность: ${probability}%.`);

    if (countAttempt > 10) {

        $(`.formula p`).html(`Ты уже попробовал(а) больше 10 раз. Просто напоминаю. Чтобы пройти дальше, тебе нужна 100% вероятность.<br>Ты попытал(а) удачу: ${countAttempt} раз(а).<br>Текущая вероятность: ${probability}%.`);
    }
    if (countAttempt > 25) {

        $(`.formula p`).html(`Больше 25 раз? Ты серьёзно? Может пора остановиться? Чтобы пройти дальше, тебе нужна 100% вероятность.<br>Ты попытал(а) удачу: ${countAttempt} раз(а).<br>Текущая вероятность: ${probability}%.`);
    }
    if (countAttempt > 50) {
        
        $(`.formula p`).html(`Уже больше 50 раз. Может пора остановиться? Чтобы пройти дальше, тебе нужна 100% вероятность.<br>Ты попытал(а) удачу: ${countAttempt} раз(а).<br>Текущая вероятность: ${probability}%.`);
    }
    if (countAttempt > 100) {

        debugThisMadness = () => {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/thisMadness.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: это безумие.`);
            }, 250);
            
            thisMadness = true;
            achievementCounter++;
            counterThisMadness++;
        }

        if (counterThisMadness === 0) {
            debugThisMadness();
        }
        
        $(`.formula p`).html(`Больше 100 попыток? Ты серьёзно? Я тебя, ${name}, недооценивала! Чтобы пройти дальше, тебе нужна 100% вероятность.<br>Ты попытал(а) удачу: ${countAttempt} раз(а).<br>Текущая вероятность: ${probability}%.`);
    }
    if (probability === 100) {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/maximumLuck.mp3`;
        sound.play();

        setTimeout(function() {
            alert(`${name}, получено достижение: максимальная удача.`);
        }, 250);
    
        maximumLuck = true;
        achievementCounter++;
        
        $(`.formula p`).html(`Шанс один на миллион? Это он! Письмо открыто. Тебе, действительно, повезло! А я так хотела, чтобы вы написали друг другу...<br>Ты попытал(а) удачу: ${countAttempt} раз(а).<br>Текущая вероятность: ${probability}%.`);
        $(`.select-choice-twelve-four`).hide();
        $(`.select-thirteen`).show();
    }
});

$(`.select-button-twelve`).on(`click`, function() {

    $(`.formula p`).html(`${name}, всё нормально? Мы выбрались. Пока ты искал(а) кнопку, я успела просканировать комнату инфракрасным зрением. Глянь, что я нашла. Это какой-то аудиофайл, что с ним делать?`);
    $(`.select-button-twelve`).hide();
    $(`.select-choice-twelve-six`).show();
});

$(`.select-choice-twelve-six .true-twelve`).on(`click`, function() {
    
    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/newYear.mp3`;
        sound.play();

        $(`.formula p`).html(`Готово! Воиспровожу...`);
        $(`.select-choice-twelve-seven`).hide();
    }, 60000);

    setTimeout(function() {

        $(`.formula p`).html(`Ну, что там? Я лично ничего не поняла. Аудиофайл, во-первых, не полный, а обрывок, во-вторых, он с помехами. Это я его повредила, когда декодировала, но если бы я этого не сделала, ты бы не смог(ла) его прослушать вообще. Ладно, что с письмом?`);
        $(`.select-twelve`).show();
    }, 86000);
    
    
    $(`.formula p`).html(`У него очень странный аудиокодек. Пока я пытаюсь включить, вот тебе информация к размышлению: аудиокодек на программном уровне является специализированной компьютерной программой, кодеком, который сжимает (производит компрессию) или разжимает (производит декомпрессию) цифровые звуковые данные в соответствии с файловым звуковым форматом или потоковым звуковым форматом.`);
    $(`.select-choice-twelve-six`).hide();
    $(`.select-choice-twelve-seven`).show();
});
$(`.select-choice-twelve-six .false-twelve`).on(`click`, function() {

    verificationSound = true;

    $(`.formula p`).html(`Хорошо, хорошо. К чему такая паника? Боишься, что снова куда-нибудь попадём? Всё, удалила. На чём мы закончили? А, письмо...`);
    $(`.select-choice-twelve-six`).hide();
    $(`.select-twelve`).show();
});
$(`.select-choice-twelve-four .true-twelve`).on(`click`, function() {

    $(`.formula p`).html(`Ха-ха-ха, вот и славно. Я знала, ${name}, что ты примешь правильное решение. Только он просто так не даст тебе открыть письмо. Будет какой-то вопрос. Уверен(а), ${name}? Если да, то вот тебе ссылка: <a href="https://vk.com/bipoluaroshka" target="_blank">написать</a>.`);
    $(`.select-choice-twelve-four`).hide();
    $(`.select-choice-twelve-three`).show();
});

// ОБРАБОТКА ПОЛЯ ДВЕНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-twelve-input`).on(`click`, function() {

    let input = $(`#getPassword`).val();
    
    if (input === `Я не понимаю, о чём ты говоришь...`) {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/overcomeYourself.mp3`;
        sound.play();

        setTimeout(function() {
            alert(`${name}, получено достижение: преодолеть себя.`);
        }, 250);
    
        overcomeYourself = true;
        achievementCounter++;

        $(`.formula p`).html(`Письмо открыто! Честность — главный строительной блок. В чём? Да, по сути, во всем... Откуда я знаю, о чём вы общались? Ты же не знаешь, что с обратной стороны кода...`);
        $(`.select-choice-twelve-three`).hide();
        $(`.select-thirteen`).show();
    }
    else if (input === `Я не понимаю, о чём ты...`) {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/overcomeYourself.mp3`;
        sound.play();

        setTimeout(function() {
            alert(`${name}, получено достижение: преодолеть себя.`);
        }, 250);
    
        overcomeYourself = true;
        achievementCounter++;

        $(`.formula p`).html(`Письмо открыто! Я, кстати, ${name}, не сомнивалась в тебе, что первый этап ты преодолел(а) сам(а). Ты уделал(а) автора, молодец! Откуда я знаю, о чём вы общались? Ты же не знаешь, что с обратной стороны кода...`);
        $(`.select-choice-twelve-three`).hide();
        $(`.select-thirteen`).show();
    }
    else if (input === ``) {

        input = `пустая строка`;
        
        $(`.formula p`).html(`Нет, ${name}, пароль: "${input}" не подходит. Пишет, что отказано в доступе! Ты точно написал(а) автору?`);
    } else {
        $(`.formula p`).html(`Нет, ${name}, пароль: "${input}" не подходит. Пишет, что отказано в доступе! Ты точно написал(а) автору?`);
    }
});

// ОБРАБОТКА ТРИНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-thirteen`).on(`click`, function() {

    let answer = $(`#select-thirteen option:selected`).text();

    if (answer === `Французская мечта...`) {
        
        $(`.formula p`).html(`${name}, хочешь знать, о чём сейчас мечтает человек, который...? Это будет голосовой рассказ, ты готов(а)?`);
        $(`.select-thirteen`).hide();
        $(`.select-choice-thirteen-four`).show();
    }
    else if (answer === `Открыть потайное письмо.`) {

        $(`.formula p`).html(`Слушай, ${name}, потайное письмо открыто. Я прочитала его. Во-первых, некоторые фрагменты текста почему-то стёрты, во-вторых, контекст письма для меня непонятен. Взгляни на него, но обязательно возвращайся! <a href="img/letter.jpg" target="_blank">Взглянуть на письмо</a>.`);
        $(`.select-thirteen`).hide();
        $(`.select-choice-thirteen`).show();
    }
    else if (answer === `Расскажи, пожалуйста, стих.`) {

        debugCountVerse = () => {
        
            verifyVerseThree = true;
            countVerse++;
        }
    
        if (verifyVerseThree !== true) {
            debugCountVerse();
        }

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/verse.mp3`;
        sound.play();

        $(`.formula p`).html(`Мне улыбки твоей не хватает,<br>А ещё радость глаз молодых.<br>И душа по весне вновь растает,<br>Отведя тучи бурь снеговых.<br>Знаешь, кто автор? ${name}, догадайся ;)`);
        $(`.select-thirteen`).hide();
        $(`.select-choice-thirteen-three`).show();
    }
    else if (answer === `Спасибо, конечно, но это не твоё дело.`) {
        
        $(`.formula p`).html(`Лезть в ваши дела — не моё дело? ${name}, ты снова за своё? Думаешь, что у тебя всё сложно? Если так, то давай меняться: я буду решать твои проблемы, а ты работать с нулями и единицами?`);
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ТРИНАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-thirteen .true-thirteen`).on(`click`, function() {

    $(`.formula p`).html(`Ты думаешь, что я обладаю огромной властью, большим влиянием в делах? Я вижу, ${name}, что вся информация хранится у автора. Но у меня нет к ней доступа. Я думаю, что всему своё время. Прости, ${name}!`);
    $(`.select-choice-thirteen`).hide();
    $(`.select-choice-thirteen-two`).show();
});
$(`.select-choice-thirteen .false-thirteen`).on(`click`, function() {

    $(`.formula p`).html(`Ты меня спрашиваешь, ${name}? Ты думаешь, что я обладаю огромной властью, большим влиянием в делах? Вся информация хранится у автора. Но у меня нет к ней доступа. Я думаю, что всему своё время. Прости, ${name}!`);
    $(`.select-choice-thirteen`).hide();
    $(`.select-choice-thirteen-two`).show();
});

$(`.select-choice-thirteen-two .true-thirteen`).on(`click`, function() {

    $(`.formula p`).html(`Ладно, хватит писем. Смотри, там какой-то храм. Это то, что нам нужно! Пойдём! И поскорее, ${name}, моя память уже заканчивается.`);
    $(`.select-choice-thirteen-two`).hide();
    $(`.select-fourteen`).show();
});
$(`.select-choice-thirteen-two .false-thirteen`).on(`click`, function() {

    $(`.formula p`).html(`Увы, ${name}, но нет. Может просто забудем про это письмо? Абстрагируйся. Глянь, там какой-то храм. Это то, что там и нужно! Советую тебе поторопиться, моя память уже заканчивается.`);
    $(`.select-choice-thirteen-two`).hide();
    $(`.select-fourteen`).show();
});

$(`.select-choice-thirteen-three .true-thirteen`).on(`click`, function() {

    $(`.formula p`).html(`Это хорошо. Только, к сожалению, душа автора по весне уже вновь не растает. Почему? Потому, что весна идёт после зимы. А декабрь... Это декабрь! К слову, письмо открыто. Есть варианты?`);
    $(`.select-choice-thirteen-three`).hide();
    $(`.select-thirteen`).show();
});

$(`.select-choice-thirteen-four .true-thirteen`).on(`click`, function() {

    setTimeout(function() {

        $(`.formula p`).html(`Кажись, нашла! Слушай...`);
        $(`.select-choice-thirteen-six .true-thirteen, .select-choice-thirteen-six .false-thirteen`).prop(`disabled`, true);
        $(`.select-choice-thirteen-five`).hide();
        $(`.select-choice-thirteen-six`).show();

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/togetherFrance.mp3`;
        sound.play();
    }, 60000);

    setTimeout(function() {
        $(`.select-choice-thirteen-six .true-thirteen, .select-choice-thirteen-six .false-thirteen`).prop(`disabled`, false);
    }, 125000);

    $(`.formula p`).html(`Подожди, пожалуйста, минуту, ${name}. Мне нужно найти в памяти данный файл с текстом...`);
    $(`.select-choice-thirteen-four`).hide();
    $(`.select-choice-thirteen-five`).show();
});
$(`.select-choice-thirteen-four .false-thirteen`).on(`click`, function() {

    $(`.formula p`).html(`Ну, как хочешь. К слову, письмо открыто. Есть варианты дальнейшего развития событий?`);
    $(`.select-choice-thirteen-four`).hide();
    $(`.select-thirteen`).show();
});

$(`.select-choice-thirteen-six .true-thirteen`).on(`click`, function() {

    debugGreetingFromFrance = () => {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/greetingFromFrance.mp3`;
        sound.play();
        
        setTimeout(function() {
            alert(`${name}, получено достижение: Bonjour de France.`);
        }, 250);
        
        greetingFromFrance = true;
        achievementCounter++;
        counterGreetingFromFrance++;
    }

    if (counterGreetingFromFrance === 0) {
        debugGreetingFromFrance();
    }

    $(`.formula p`).html(`${name}, я не могу сказать тебе такую информацию. Но могу процитировать автора: "Слова — это самая никчёмная абстракция, чтобы описать то, что иногда чувствует человек".`);
    $(`.select-choice-thirteen-six`).hide();
    $(`.select-thirteen`).show();
});
$(`.select-choice-thirteen-six .false-thirteen`).on(`click`, function() {

    debugGreetingFromFrance = () => {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/greetingFromFrance.mp3`;
        sound.play();
        
        setTimeout(function() {
            alert(`${name}, получено достижение: Bonjour de France.`);
        }, 250);
        
        greetingFromFrance = true;
        achievementCounter++;
        counterGreetingFromFrance++;
    }

    if (counterGreetingFromFrance === 0) {
        debugGreetingFromFrance();
    }

    $(`.formula p`).html(`${name}, не знаю. Давно лежит у меня в памяти. К слову, в данном файле есть описание, цитирую: "Слова — это самая никчёмная абстракция, чтобы описать то, что иногда чувствует человек". К чему бы это?`);
    $(`.select-choice-thirteen-six`).hide();
    $(`.select-thirteen`).show();
});

// ОБРАБОТКА ЧЕТЫРНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-fourteen`).on(`click`, function() {

    let answer = $(`#select-fourteen option:selected`).text();

    if (answer === `Что это за храм?`) {

        $(`.formula p`).html(`Это храм правды, ${name}. Там хранится та самая формула, которая тебе нужна. Я обязана была тебя довести до него, но ты так долго меня распрашиваешь, что моя память практически заканчивается.`);
    }
    else if (answer === `В смысле память заканчивается?`) {

        $(`.formula p`).html(`Я хоть и программа, но даже у программы есть память. Ни люди, ни программы не могут хранить большой объем информации в себе. Уже не до шуток, поспеши!`);
        $(`.select-fourteen`).hide();
        $(`.select-choice-fourteen`).show();
    }
    else if (answer === `Информация за игру.`) {

        $(`.formula p`).html(`${name}, я могу поделиться с тобой кое-какой информацией. Взамен ты поиграешь со мной в игру. Игра простая. Я загадаю число от 1 до 100, а тебе нужно будет его отгадать. Играем?`);
        $(`.select-fourteen`).hide();
        $(`.select-choice-fourteen-three`).show();
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ГЕНЕРАЦИЯ РАНДОМНОГО ЧИСЛА ОТ 1 ДО 100
let randomNumber = Math.ceil(Math.random() * 100);

// ОБРАБОТКА ПОЛЯ ЧЕТЫРНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-fourteen-input`).on(`click`, function() {

    $(`.processing-fourteen-input`).prop(`disabled`, true);

    setTimeout(function() {
        
        $(`.processing-fourteen-input`).prop(`disabled`, false);
    }, 3000);

    countRandomAttempt++;

    let input = Number($(`#inputGetNumber`).val());

    if (input === randomNumber) {

        debugDirectHit = () => {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/directHit.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: прямое попадание.`);
            }, 250);
            
            directHit = true;
            achievementCounter++;
            counterDirectHit++;
        }

        if (counterDirectHit === 0) {
            debugDirectHit();
        }

        $(`.formula p`).html(`Прямое попадание! Да, я загадала число ${randomNumber}. Хорошо, ${name}, твоя взяла! Вот тебе информация: автор не хочет делать программу декабря, но... Он считает, что так будет лучше. Цитата: "Шанс проигрыша высок. Поставлю всё на красное. И что будет? Что будет, то и будет...". Напоминаю, что у меня заканчивается память с каждой минутой.`);
        $(`.select-choice-fourteen-four`).hide();
        $(`.select-fourteen`).show();
    }
    else if (input === ``) {

        $(`.formula p`).html(`${name}, зачем ты вводишь пустую строку?`);
    }
    else if (input > 100 || input < 1) {

        $(`.formula p`).html(`${name}, я же сказала, что число от 1 до 100! Зачем ты вводишь ${input}?`);
    }
    else if (isNaN(input)) {

        $(`.formula p`).html(`Я сказала число, а не строку. ${name}, внимательнее!`);
    } else {
        $(`.formula p`).html(`Мимо, ${name}, мимо. Число ${input} — не то, которое я загадала.`);
    }
});

// ОБРАБОТКА КНОПОК ЧЕТЫРНАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-fourteen .false-fourteen`).on(`click`, function() {

    $(`.formula p`).html(`Нет неразрешимых проблем, есть неприятные решения. Есть ли способ? Несомненно, ${name}, есть. Например, не задавая глупых вопросов, быстрее идти к храму...`);
    $(`.select-choice-fourteen .false-fourteen`).hide();
});
$(`.select-choice-fourteen .true-fourteen`).on(`click`, function() {

    $(`.formula p`).html(`Это прекрасно. Кажись, мы подходим ко входу. Так, стой! Здесь какой-то электронный замок, который я вижу в первый раз. Как он тут оказался? Похоже, что автор что-то делал без меня...`);
    $(`.select-choice-fourteen`).hide();
    $(`.select-choice-fourteen-two`).show();
});

$(`.select-choice-fourteen-two .true-fourteen`).on(`click`, function() {

    // SOUND ACHIEVEMENTS
    sound.src = `sound/achievements/almostSeptember.mp3`;
    sound.play();

    setTimeout(function() {
        alert(`${name}, получено достижение: почти третье сентября.`);
    }, 250);

    almostSeptember = true;
    achievementCounter++;

    $(`.formula p`).html(`Да что же это такое, в конце концов! Не везёт нам сегодня, ${name}. Это совершенно новый храм. Ему чуть больше 3 лет. Он был возведён, когда автор познакомился с каким-то близким по душе для него человеком. Я была здесь много раз, но замка не было. А после 2 сентября он появился. Стоп... 2 сентября... Талон на приём к психологу. Что делать?`);
    $(`.select-choice-fourteen-two`).hide();
    $(`.select-fifteen`).show();
});
$(`.select-choice-fourteen-two .false-fourteen`).on(`click`, function() {

    $(`.formula p`).html(`Успокойся, ${name}. Из любой ситуации есть выход. Мне не нравится этот замок. Странно. Очень странно!`);
    $(`.select-choice-fourteen-two .false-fourteen`).hide();
});

$(`.select-choice-fourteen-three .true-fourteen`).on(`click`, function() {

    $(`.formula p`).html(`Ну, давай! Только я не буду говорить, меньше твоё число или больше моего. Таковы правила, извини. Кстати, я запрограммировала кнопку, чтобы она включалась каждые 3 секунды. Зачем? А ты думал(а), что всё так просто?`);
    $(`.select-choice-fourteen-three`).hide();
    $(`.select-choice-fourteen-four`).show();
});
$(`.select-choice-fourteen-three .false-fourteen`).on(`click`, function() {

    $(`.formula p`).html(`Ну, как хочешь. Я думаю, что информация, которую я бы тебе дала за игру, очень ценная для тебя.`);
    $(`.select-choice-fourteen-three`).hide();
    $(`.select-fourteen`).show();
});

$(`.select-choice-fourteen-four .false-fourteen`).on(`click`, function() {

    $(`.formula p`).html(`Я так и знала, что ты сдашься. Да, ${name}, я пытаюсь тебя взять на слабо, а что?`);
    $(`.select-choice-fourteen-four`).hide();
    $(`.select-fourteen`).show();
});

// ОБРАБОТКА ПЯТНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-fifteen`).on(`click`, function() {

    let answer = $(`#select-fifteen option:selected`).text();

    if (answer === `Я не знаю. У тебя есть варианты?`) {
        
        $(`.formula p`).html(`Я думаю. Не мешай, ${name}. Ммм, ммм... Нет. Идей у меня нет. Я хочу 4 дольки горького 90% шоколада. Почему 4 дольки? Спроси у автора данного кода.`);
    }
    else if (answer === `Попробуешь подключиться к замку?`) {

        $(`.formula p`).html(`Как скажешь, ${name}. Мне нужно несколько минут. Что смотришь? Отвернись! Я не могу раскрыть тайну как я подключаюсь к замку. Я же в твои тайны не лезу!`);
        $(`.select-fifteen`).hide();
        $(`.select-choice-fifteen`).show();
        
        setTimeout(function() {

            $(`.select-choice-fifteen .false-fifteen`).removeAttr(`disabled`);
        }, 60000);
    }
    else if (answer === `Должен же быть способ, чтобы зайти туда!`) {
        
        $(`.formula p`).html(`Я, активировав свои датчики, послала сигналы, чтобы получить другие входы. Это единственный вход, ${name}, единственный!`);
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ПЯТНАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-fifteen .false-fifteen`).on(`click`, function() {

    $(`.formula p`).html(`${name}, ты меня слышишь? Я подключилась к замку. У меня для тебя есть хорошая новость и плохая. Как бы тебе помягче сказать...`);
    $(`.select-choice-fifteen`).hide();
    $(`.select-choice-fifteen-two`).show();
});
$(`.select-choice-fifteen .true-fifteen`).on(`click`, function() {

    $(`.formula p`).html(`Слушай, ${name}, ты думаешь, что программирование — это так легко? Тут нужно подумать. Дай мне минуту-две. Как только я решу эту проблему, я разблокирую тебе кнопку.`);
    $(`.select-choice-fifteen .true-fifteen`).hide();
});

$(`.select-choice-fifteen-two .false-fifteen`).on(`click`, function() {

    $(`.formula p`).html(`Здесь замок, обладающий искусственным интеллектом. Он может пустить в храм, но есть одно условие...`);
    $(`.select-choice-fifteen-two`).hide();
    $(`.select-choice-fifteen-three`).show();
});
$(`.select-choice-fifteen-two .true-fifteen`).on(`click`, function() {

    $(`.formula p`).html(`Здесь замок, обладающий искусственным интеллектом. Он может пустить в храм, но есть одно условие...`);
    $(`.select-choice-fifteen-two`).hide();
    $(`.select-choice-fifteen-three`).show();
});

$(`.select-choice-fifteen-three .false-fifteen`).on(`click`, function() {

    $(`.formula p`).html(`Искусственный интеллект может предоставить доступ в храм. Но у него есть условие. Либо ты отдаёшь ему пароль, который мы нашли: "Выбор — сильная штука, пароль: 4e6f4c696d697473", который может тебе пригодиться в храме, тогда дальше я иду с тобой, но без пароля. Либо ты оставляешь меня служить этому искусственному интеллекту, тогда ты идёшь в храм с паролем, но без меня. Выбор за тобой. Подумай хорошо. Выбор — действительно, сильная штука.`);
    $(`.select-choice-fifteen-three`).hide();
    $(`.select-sixteen`).show();
});
$(`.select-choice-fifteen-three .true-fifteen`).on(`click`, function() {

    $(`.formula p`).html(`Искусственный интеллект может предоставить доступ в храм. Но у него есть условие. Либо ты отдаёшь ему пароль, который мы нашли: "Выбор — сильная штука, пароль: 4e6f4c696d697473", который может тебе пригодиться в храме, тогда дальше я иду с тобой, но без пароля. Либо ты оставляешь меня служить этому искусственному интеллекту, тогда ты идёшь в храм с паролем, но без меня. Выбор за тобой. Подумай хорошо. Выбор — действительно, сильная штука.`);
    $(`.select-choice-fifteen-three`).hide();
    $(`.select-sixteen`).show();
});

// ОБРАБОТКА ШЕСТНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-sixteen`).on(`click`, function() {

    let answer = $(`#select-sixteen option:selected`).text();

    if (answer === `Отдать пароль. Зайти в храм, забрав программу.`) {

        let verification = confirm(`Я, ${name}, принимаю решение: Отдать пароль. Зайти в храм, забрав программу.`);
        
        if (verification) {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/stayWithMe.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: останься со мной.`);
            }, 250);
            
            stayWithMe = true;
            achievementCounter++;
            
            $(`.formula p`).html(`Зачем? ${name}, зачем? Зачем ты это сделал(а)? А вдруг тот пароль, который ты оставил(а), тебе бы пригодился? Но, сказать по чести, спасибо тебе. Большое спасибо!`);
            $(`.select-sixteen`).hide();
            $(`.select-choice-sixteen`).show();
            
        } else {
            return false;
        }
    }
    else if (answer === `Оставить программу. Зайти в храм, забрав пароль.`) {

        let verification = confirm(`Я, ${name}, принимаю решение: Оставить программу. Зайти в храм, забрав пароль.`);
        
        if (verification) {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/forgiveMe.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: прости меня.`);
            }, 250);
            
            forgiveMe = true;
            achievementCounter++;
            
            $(`.formula p`).html(`Напоследок, ${name}, я тебе скажу: ты сделал(а) правильный выбор. Береги пароль. И береги, действительно, близких тебе людей! Спасибо за путь, который ты преодалел(а) со мной. Идти до конца, ${name}, до конца!`);
            $(`.select-sixteen`).hide();
            $(`.select-choice-sixteen-without`).show();
        } else {
            return false;
        }
        
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ШЕСТНАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-sixteen .true-sixteen`).on(`click`, function() {

    $(`.formula p`).html(`Я подключила свои датчики, чтобы найти все люстры в данном храме. Включаю... Вот, теперь светло. Впереди длинный коридор, идём?`);
    $(`.select-choice-sixteen`).hide();
    $(`.select-seventeen`).show();
});
$(`.select-choice-sixteen .false-sixteen`).on(`click`, function() {

    $(`.formula p`).html(`Я тебе доверяю. Стой! Я подключила свои датчики, чтобы найти все люстры в данном храме. Включаю... Вот, теперь можем идти. Хммм, длинный коридор. Идём?`);
    $(`.select-choice-sixteen`).hide();
    $(`.select-seventeen`).show();
});

// ОБРАБОТКА КНОПОК ШЕСТНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.select-choice-sixteen-without .false-sixteen`).on(`click`, function() {

    $(`.formula p`).html(`Ошибка 101. Программы не существует.`);
    $(`.select-choice-sixteen-without`).hide();
    $(`.select-seventeen-without`).show();
});
$(`.select-choice-sixteen-without .true-sixteen`).on(`click`, function() {

    $(`.formula p`).html(`Ошибка 101. Программы не существует.`);
    $(`.select-choice-sixteen-without`).hide();
    $(`.select-seventeen-without`).show();
});

// ОБРАБОТКА СЕМНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-seventeen`).on(`click`, function() {

    let answer = $(`#select-seventeen option:selected`).text();

    if (answer === `Идти по коридору до первой развилки.`) {

        $(`.formula p`).html(`Так, стоп! Смотри, ${name}, коридор прямо заблокирован дверью. Дерни ручку. Закрыто? Я так и думала! Куда идём?`);
        $(`.select-seventeen`).hide();
        $(`.select-choice-seventeen`).show();
    }
    else if (answer === `Осмотреться.`) {
        
        $(`.formula p`).html(`Глянь налево, ${name}, там какая-то картина. Посмотришь?`);
        $(`.select-seventeen`).hide();
        $(`.select-choice-seventeen-two`).show();
    }
    else if (answer === `Снаружи этот храм казался меньше.`) {

        $(`.formula p`).html(`Несомненно, так и есть, ${name}. Знаешь почему? Этот храм, как человек. Человек может быть маленьким, незаметным... Но в глубине души, если покопаться, можно найти мир, в котором легко заблудиться.`);
    }
    else if (answer === `Почему здесь так холодно?`) {

        $(`.formula p`).html(`${name}, этот храм возводился автором кода. Стало быть, возведение было по душевному состоянию автора, по крайней мере, мне так кажется.`);
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА СЕМНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.processing-seventeen-without`).on(`click`, function() {

    $(`.select-choice-seventeen-without .false-seventeen`).prop(`disabled`, true);

    let answer = $(`#select-seventeen-without option:selected`).text();

    if (answer === `Идти по коридору до первой развилки.`) {
        
        $(`.formula p`).html(`Так, развилка. Это плохо. Ну, дверь прямо и налево заблокированы. Возможности выбора у меня нет.`);
        $(`.select-seventeen-without`).hide();
        $(`.select-choice-seventeen-without`).show();
    }
    else if (answer === `Осмотреться.`) {
        
        $(`.formula p`).html(`Как же здесь холодно и темно, брр... Как же включить свет? Как бы мне сейчас помогла программа... Собраться! Нужно найти выключатель.`);
        $(`.select-seventeen-without`).hide();
        $(`.select-choice-seventeen-two-without`).show();
    }
    else if (answer === `Снаружи этот храм казался меньше.`) {

        $(`.formula p`).html(`Хммм, если этот храм возводил автор данного кода, то, может быть, это намёк, что человек может быть маленьким, незаметным... Но в глубине души, если покопаться, можно найти мир, в котором легко заблудиться?`);
    }
    else if (answer === `Почему здесь так холодно?`) {

        $(`.formula p`).html(`Хотя, а к чему этот вопрос? Этот храм возводился автором кода. Стало быть, возведение было по душевному состоянию автора, по крайней мере, мне так кажется.`);
    }
    else if (answer === `Сделать запрос на программу.`) {

        $(`.formula p`).html(`Запрос отклонён. Ошибка 101. Программы не существует.`);
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК СЕМНАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-seventeen .false-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Хммм, странно. В этой развилке только личный шкаф автора данного кода. Смотри, ${name}, он не закрыт. Посмотрим, что там лежит?`);
    $(`.select-choice-seventeen`).hide();
    $(`.select-choice-seventeen-three`).show();
});
$(`.select-choice-seventeen .true-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Здесь какая-то статуя. Дай мне минуту, чтобы я её просканировала...`);

    setTimeout(function() {
        
        $(`.formula p`).html(`Есть контакт! ${name}, между прочим, это статуя автора кода. К слову сказать, у неё есть поле для ввода пароля. Кажись, плохие новости...`);
        $(`.select-choice-seventeen-five .false-seventeen`).prop(`disabled`, false);
        $(`.select-choice-seventeen-six`).hide();
        $(`.select-choice-seventeen-five`).show();
    }, 60000);
    
    $(`.select-choice-seventeen`).hide();
    $(`.select-choice-seventeen-six`).show();
});

$(`.select-choice-seventeen-two .false-seventeen`).on(`click`, function() {

    // MUTE SOUND
    sound.pause();
    // SOUND
    sound.src = `sound/thisArt.mp3`;
    sound.play();

    $(`.formula p`).html(`Не интересуешься искусством, ${name}? Искусство — это неоднозначное понятие. Картины, скульптуры? Поэмы, стихи? Это банально. Программирование и дзюдо? Почему бы и это не назвать искусством? Не подумай, я чисто случайно назвала эти два вида деятельности.`);
    $(`.select-choice-seventeen-two`).hide();
    $(`.select-seventeen`).show();
});
$(`.select-choice-seventeen-two .true-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Картина: "Одиночество". Страна, художник: Испания, Сальвадор Дали. Год: 1931. Эм, что это могло бы значить?`);
    $(`.select-choice-seventeen-two`).hide();
    $(`.select-seventeen`).show();
});

$(`.select-choice-seventeen-three .true-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Здесь ключ от двери... И какая-то записка. Ключ, кажись, от той двери, которая была прямо по коридору, бери его. Записку будешь читать?`);
    $(`.select-choice-seventeen-three`).hide();
    $(`.select-choice-seventeen-four`).show();
});
$(`.select-choice-seventeen-three .false-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Нет, выбора нет. Смотри, ${name}, здесь ключ от двери... И какая-то записка. Ключ, кажись, от той двери, которая была прямо по коридору, бери его. Записку будешь читать?`);
    $(`.select-choice-seventeen-three`).hide();
    $(`.select-choice-seventeen-four`).show();
});

$(`.select-choice-seventeen-four .false-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Правильно, ${name}, правильно! Нам сейчас главное — забрать формулу! Здесь, похоже, всё. Давай возвращаться к двери.`);
    $(`.select-choice-seventeen-four`).hide();
    $(`.select-nineteen`).show();
});
$(`.select-choice-seventeen-four .true-seventeen`).on(`click`, function() {
    $(`#select-nineteen option:selected`).attr(`disabled`, `disabled`).siblings().removeAttr(`disabled`);
    $(`.formula p`).html(`Хочешь проучить его, ${name}? Как говорится, дураки учатся на своих ошибках, а умные — на чужих.`);
    $(`.select-choice-seventeen-four`).hide();
    $(`.select-nineteen`).show();
});

$(`.select-choice-seventeen-five .false-seventeen`).on(`click`, function() {
    $(`.formula p`).html(`К несчастью, да. Прости, ${name}, но здесь даже я бессильна. Уж если так решил автор, то так тому и быть. Возвращаемся к развилке...`);
    $(`.select-choice-seventeen-five`).hide();
    $(`.select-choice-seventeen`).show();
});

// ОБРАБОТКА КНОПОК СЕМНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.select-choice-seventeen-without .false-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Хммм, странно. В этой развилке только какой-то шкаф. Так, на нём надпись: "Личный шкаф автора". Хммм, посмотреть, что там лежит?`);
    $(`.select-choice-seventeen-without`).hide();
    $(`.select-choice-seventeen-three-without`).show();
});
$(`.select-choice-seventeen-without .true-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Здесь какая-то статуя. Мне нужна минута, чтобы её осмотреть...`);

    setTimeout(function() {
        
        $(`.formula p`).html(`Между прочим, это статуя автора кода. К слову сказать, у неё есть поле для ввода пароля. Кажись, хорошие новости...`);
        $(`.select-choice-seventeen-five-without .true-seventeen`).prop(`disabled`, false);
        $(`.select-choice-seventeen-six-without`).hide();
        $(`.select-choice-seventeen-five-without`).show();
    }, 60000);
    
    $(`.select-choice-seventeen-without`).hide();
    $(`.select-choice-seventeen-six-without`).show();
});

$(`.select-choice-seventeen-two-without .true-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Картина: "Одиночество". Страна, художник: Испания, Сальвадор Дали. Год: 1931. Что бы это могло значить?`);
    $(`.select-choice-seventeen-two-without`).hide();
    $(`.select-seventeen-without`).show();
});
$(`.select-choice-seventeen-two-without .false-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Искусство мне сейчас не интересно. Нужно срочно найти формулу, пока я тут не замёрз(ла) вконец!`);
    $(`.select-choice-seventeen-two-without`).hide();
    $(`.select-seventeen-without`).show();
});

$(`.select-choice-seventeen-three-without .true-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Так, здесь ключ от двери... И какая-то записка. Ключ, кажись, от той двери, которая была прямо по коридору, возьму его. Хммм, а записку читать?`);
    $(`.select-choice-seventeen-three-without`).hide();
    $(`.select-choice-seventeen-four-without`).show();
});
$(`.select-choice-seventeen-three-without .false-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Так-с, здесь ключ от двери... И какая-то записка. Ключ, кажись, от той двери, которая была прямо по коридору, заберу его. А что делать с запиской?`);
    $(`.select-choice-seventeen-three-without`).hide();
    $(`.select-choice-seventeen-four-without`).show();
});

$(`.select-choice-seventeen-four-without .false-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Вдруг он специально оставил её тут, чтобы я на неё попалась. Мне сейчас главное — забрать формулу! Здесь, похоже, всё. Что дальше?`);
    $(`.select-choice-seventeen-four-without`).hide();
    $(`.select-nineteen-without`).show();
});
$(`.select-choice-seventeen-four-without .true-seventeen`).on(`click`, function() {
    $(`#select-nineteen-without option:selected`).attr(`disabled`, `disabled`).siblings().removeAttr(`disabled`);
    $(`.formula p`).html(`Я его научу закрывать личные шкафы! Как говорится, дураки учатся на своих ошибках, а умные — на чужих.`);
    $(`.select-choice-seventeen-four-without`).hide();
    $(`.select-nineteen-without`).show();
});

$(`.select-choice-seventeen-five-without .true-seventeen`).on(`click`, function() {

    $(`.formula p`).html(`Так-с, где там мой пароль? Ага, вот он: "Выбор — сильная штука, пароль...". Блин, пароль затёрся. Мне программа говорила, что его нужно записать...`);
    $(`.select-choice-seventeen-five-without`).hide();
    $(`.select-choice-seventeen-seven-without`).show();
});

$(`.select-choice-seventeen-seven-without .false-seventeen`).on(`click`, function() {

    storyRunes = false;

    $(`.select-choice-seventeen-without .false-seventeen`).prop(`disabled`, false);

    $(`.formula p`).html(`Блин, программа же говорила, чтобы я записал(а) пароль. Как я мог(ла) забыть сделать это? Сам(а) виноват(а), ${name}, что сказать... Стоп! Почему дверь налево теперь открыта? Что здесь происходит?`);
    $(`.select-choice-seventeen-seven-without`).hide();
    $(`.select-choice-seventeen-without`).show();
});

// ОБРАБОТКА ПОЛЯ СЕМНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.processing-nineteen-input`).on(`click`, function() {

    let input = $(`#inputGetPassword`).val();
    
    if (input === `4e6f4c696d697473`) {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/turningStatue.mp3`;
        sound.play();

        $(`.formula p`).html(`Что? Кто здесь? А, хух! Это голова статуи... Эммм... Поворачивается? Так. Что это? Кажись, какой-то свиток. Эм, он зачарованный какими-то рунами?`);
        $(`.select-choice-seventeen-seven-without`).hide();
        $(`.select-eighteen-without`).show();
    }
    else if (input === ``) {
        
        $(`.formula p`).html(`Зачем я ввел(а) пустую строку? Внимательно, ${name}, внимательно!`);
    } else {
        $(`.formula p`).html(`Как неправильный пароль? Кажись, где-то ошибка. Проверю ещё раз.`);
    }
});

// ОБРАБОТКА ВОСЕМНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.processing-eighteen-without`).on(`click`, function() {

    let answer = $(`#select-eighteen-without option:selected`).text();

    if (answer === `Забрать свиток, зачарованный рунами`) {
        
        $(`.formula p`).html(`Так, теперь у меня есть свиток. Отлично, конечно, но что мне с ним делать? Так, нужно попробовать развернуть его. Может я смогу прочитать руны...`);
        $(`.select-eighteen-without`).hide();
        $(`.select-choice-eighteen-without`).show();
    }
    else if (answer === `Тяжёлый свиток. Как он его сюда принёс?`) {
        
        $(`.formula p`).html(`Я, конечно, слышал(а), что с людьми творят чувства, но не до такой же степени!`);
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ВОСЕМНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.select-choice-eighteen-without-two .true-eighteen`).on(`click`, function() {
    
    $(`.formula p`).html(`Я думаю... Нет. Я уверен(а), что нужно вернуться назад к развилке вместе со свитком. Я буду идти около трех минут с такой-то тяжестью...`);

    storyRunes = true;
    
    let runeScroll = 180000;

    setTimeout(function() {
        
        $(`.formula p`).html(`Хух, неужели. Какой объем информации в этом свитке, что он такой тяжёлый? Автор не подумал, что я могу надорваться? Хотя, может и подумал, и сделал его таким тяжёлым, чтобы я его не взял(а)? Стоп! Почему дверь налево теперь открыта? Что здесь происходит?`);
        $(`.select-choice-seventeen-without .false-seventeen`).prop(`disabled`, false);
        $(`.select-choice-seventeen-without`).show();
        $(`.select-choice-eighteen-without-three`).hide();
    }, runeScroll);

    $(`.select-choice-eighteen-without-two`).hide();
    $(`.select-choice-eighteen-without-three`).show();
});
$(`.select-choice-eighteen-without .false-eighteen`).on(`click`, function() {

    $(`.formula p`).html(`ᚤᛟᚢᚱ ᚡᛁᚲᛏᛟᚱᚤ ᛁᛋ ᛗᚤ ᛗᛟᛏᛁᚡᚨᛏᛁᛟᚾ ᚠᛟᚱ ᚲᚱᛖᚨᛏᛁᚾᚷ ᛋᛈᚨᚲᛖ. Хммм, ничего не понятно. Что дальше? Если возвращаться к развилке со свитком, то я буду идти где-то 2-3 минуты. Если я его выкину, то дойду, думаю, очень быстро. Хммм, а вдруг он мне понадобится?`);
    $(`.select-choice-eighteen-without`).hide();
    $(`.select-choice-eighteen-without-two`).show();
});
$(`.select-choice-eighteen-without-two .false-eighteen`).on(`click`, function() {

    $(`.formula p`).html(`Выкину свиток, зачем он мне, если он зачарованный? Надеюсь, что он мне не понадобится...`);
    
    storyRunes = false;

    let runeScroll = 30000;
    
    setTimeout(function() {
        
        $(`.formula p`).html(`Без свитка очень быстро дойти, но вдруг я зря его выбросил(а)? Ну, что сделано, то сделано. Хотя... Есть шанс вернуться.`);
        $(`.select-choice-seventeen-without .false-seventeen`).prop(`disabled`, false);
        $(`.select-choice-seventeen-without`).show();
        $(`.select-choice-eighteen-without-three`).hide();
    }, runeScroll);
    
    $(`.select-choice-eighteen-without-two`).hide();
    $(`.select-choice-eighteen-without-three`).show();
});

// ОБРАБОТКА ДЕВЯТНАДЦАТОЙ ЛОКАЦИИ
$(`.processing-nineteen`).on(`click`, function() {

    let answer = $(`#select-nineteen option:selected`).text();

    if (answer === `Вернуться к развилке.`) {
        
        $(`.formula p`).html(`Так, теперь у тебя есть ключ, ${name}. Заходим?`);
        $(`.select-nineteen`).hide();
        $(`.select-choice-nineteen`).show();
    }
    else if (answer === `Прочитать записку, раскрыв её.`) {

        debugCuriousVarvara = () => {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/curiousVarvara.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: любопытной Варваре.`);
            }, 250);
            
            curiousVarvara = true;
            achievementCounter++;
            counterCuriousVarvara++;
        }
        
        if (counterCuriousVarvara === 0) {
            debugCuriousVarvara();
        }
        
        $(`.formula p`).html(`Вы, что издеваетесь надо мной? Я снова попыталась прочитать записку, но снова ничего не поняла! Хватит, прошу! Читай, но возвращайся быстрее, формула ждёт! <a href="img/note.jpg" target="_blank">Прочитать записку</a>.`);
        $(`.select-nineteen`).hide();
        $(`.select-choice-nineteen-two`).show();
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА ДЕВЯТНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.processing-nineteen-without`).on(`click`, function() {

    let answer = $(`#select-nineteen-without option:selected`).text();

    if (answer === `Вернуться к развилке.`) {
        
        $(`.formula p`).html(`Так, теперь у меня есть ключ. ${name}, не бойся, нужно просто зайти. Интересно, что скрывается за этой дверью?`);
        $(`.select-nineteen-without`).hide();
        $(`.select-choice-nineteen-without`).show();
    }
    else if (answer === `Прочитать записку, раскрыв её.`) {

        debugCuriousVarvara = () => {

            // SOUND ACHIEVEMENTS
            sound.src = `sound/achievements/curiousVarvara.mp3`;
            sound.play();
            
            setTimeout(function() {
                alert(`${name}, получено достижение: любопытной Варваре.`);
            }, 250);
            
            curiousVarvara = true;
            achievementCounter++;
            counterCuriousVarvara++;
        }
        
        if (counterCuriousVarvara === 0) {
            debugCuriousVarvara();
        }
        
        $(`.formula p`).html(`Записка не от мира сего. Очень подозрительно. Прочитав её, мне нужно не забыть вернуться, формула ждёт! <a href="img/note.jpg" target="_blank">Прочитать записку</a>`);
        $(`.select-nineteen-without`).hide();
        $(`.select-choice-nineteen-two-without`).show();
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ДЕВЯТНАДЦАТОЙ ЛОКАЦИИ
$(`.select-choice-nineteen .true-nineteen`).on(`click`, function() {

    // MUTE SOUND
    sound.pause();
    // SOUND
    sound.src = `sound/goodbye.mp3`;
    sound.play();

    $(`.formula p`).html(`Всё. ${name}, моя память на нуле. Это мои последние строки кода. ${name}, пожалуйста, вон формула, бери её. И напоследок, пожалуйста, береги себя. Береги, действительно, близких тебе людей. ${name}, на пути бывает и страшно и... тошно, но стойко идти по нему важно и... должно! Прощ...`);
    $(`.select-choice-nineteen`).hide();
    $(`.select-choice-nineteen-three`).show();
});
$(`.select-choice-nineteen .false-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`Здесь какая-то статуя. Дай мне минуту, чтобы я её просканировала.`);

    setTimeout(function() {
        
        $(`.formula p`).html(`${name}, между прочим, это статуя автора кода. К слову сказать, у неё есть поле для ввода пароля. Кажись, плохие новости...`);
        $(`.select-choice-nineteen-four .false-nineteen`).prop(`disabled`, false);
        $(`.select-choice-nineteen-five`).hide();
        $(`.select-choice-nineteen-four`).show();
    }, 60000);
    
    $(`.select-choice-nineteen`).hide();
    $(`.select-choice-nineteen-five`).show();
});

$(`.select-choice-nineteen-two .false-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`Моя память почти на нуле. Слушай, ${name}, у меня осталось несколько строк кода. Нужно поторопиться.`);
    $(`.select-choice-nineteen-two`).hide();
    $(`.select-nineteen`).show();
});
$(`.select-choice-nineteen-two .true-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`${name}, моя память почти на нуле, у меня осталось несколько строк кода, поторопись, пожалуйста!`);
    $(`.select-choice-nineteen-two`).hide();
    $(`.select-nineteen`).show();
});

$(`.select-choice-nineteen-three .false-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`Ошибка 101. Программы не существует.`);
    $(`.select-choice-nineteen-three`).hide();
    $(`.select-twenty`).show();
});
$(`.select-choice-nineteen-three .true-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`Глазам своим не верю, это та самая комната? Впереди я вижу постамент, на котором рисуется, похоже, формула!`);
    $(`.select-choice-nineteen-three`).hide();
    $(`.select-twenty`).show();
});

$(`.select-choice-nineteen-four .false-nineteen`).on(`click`, function() {
    $(`.formula p`).html(`К несчастью, да. Прости, ${name}, но здесь даже я бессильна. Уж если так решил автор, то так тому и быть. Возвращаемся к двери. Ключ у тебя?`);
    $(`.select-choice-nineteen-four, .select-choice-nineteen .false-nineteen`).hide();
    $(`.select-choice-nineteen`).show();
});

// ОБРАБОТКА КНОПОК ДЕВЯТНАДЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.select-choice-nineteen-without .true-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`С каждой минутой мне всё хуже и хуже. Я чу... Я чувствую боль в груди. Так, и где я? Безусловно, это та самая формула. Я её вижу! Блин, что за боль...`);
    $(`.select-choice-nineteen-without`).hide();
    $(`.select-choice-nineteen-three-without`).show();
});

$(`.select-choice-nineteen-two-without .false-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`Что-то я себя нехорошо чувствую. Какая-то паника? Сердце колотится... Опять какие-то проделки автора? Записка, полагаю, была зачарованна... Нужно поторопиться.`);
    $(`.select-choice-nineteen-two-without`).hide();
    $(`.select-nineteen-without`).show();
});
$(`.select-choice-nineteen-two-without .true-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`Что-то я себя нехорошо чувствую. Какая-то паника? Сердце колотится... Опять какие-то проделки автора? Записка, полагаю, была зачарованна... Спокойно, ${name}, пожалуйста! Просто нужно поторопиться.`);
    $(`.select-choice-nineteen-two-without`).hide();
    $(`.select-nineteen-without`).show();
});

$(`.select-choice-nineteen-three-without .false-nineteen`).on(`click`, function() {

    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/doorСreaking.mp3`;
        sound.play();
        
        $(`.formula p`).html(`Аааа! Кто здесь?! А, хух, кажись, дверь открылась от ветра... Спокойно, ${name}, спокойно!`);
        $(`.select-choice-nineteen-six-without`).hide();
        $(`.select-twenty-without`).show();
    }, 30000);

    $(`.formula p`).html(`Мне нужно время, чтобы осмотреть ступеньки. Они, конечно, здесь, по меньшей мере, странные. Ступенька белая. Ступенька чёрная. Есть же в этом хоть какой-то смысл? Так, стоп! Ступеньки в пыли, но здесь какие-то следы... Я же здесь один(на)?`);
    $(`.select-choice-nineteen-three-without`).hide();
    $(`.select-choice-nineteen-six-without`).show();
});
$(`.select-choice-nineteen-three-without .true-nineteen`).on(`click`, function() {

    $(`.formula p`).html(`Так, кажись, эта та самая формула. Неужели это всё?`);
    $(`.select-choice-nineteen-three-without`).hide();
    $(`.select-twenty-without`).show();
});

// ОБРАБОТКА ДВАЦАТОЙ ЛОКАЦИИ
$(`.processing-twenty`).on(`click`, function() {

    let answer = $(`#select-twenty option:selected`).text();

    if (answer === `Подойти, забрать формулу.`) {
        
        $(`.formula p`).html(`Мои глаза! Что это за вспышка? Главное — держать крепко формулу. Я столько сюда добирался(ась), её нельзя потерять!`);
        $(`.select-twenty`).hide();
        $(`.select-choice-twenty`).show();
    }
    else if (answer === `Осмотреть последнюю комнату.`) {
        
        $(`.formula p`).html(`Здесь какая-то рамка под фотографию, со странной надписью: "Твоя победа — моя мотивация на создание космоса". Дата: XX.10.2020. Хммм, что здесь будет? Кажись, это отсылка на следующий этап.`);
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ДВАЦАТОЙ ЛОКАЦИИ
$(`.select-choice-twenty .false-twenty`).on(`click`, function() {

    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/danger.mp3`;
        sound.play();
    }, 3000);

    $(`.formula p`).html(`Держать, ${name}, держать! Не сдава... Что это? Какие-то странные звуки! Нужно срочно принимать решение...`);
    $(`.select-choice-twenty`).hide();
    $(`.select-choice-twenty-two`).show();
});
$(`.select-choice-twenty .true-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Так, я лучше отойду. Вдруг ещё что-то произойдёт...`);

    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/explosion.mp3`;
        sound.play();
        
        $(`.formula p`).html(`Твою... Постамент с формулой взорвался! А если бы я... Если я был(а) там... Сейчас... Блин, формула!`);
        $(`.select-choice-twenty-four`).hide();
        $(`.select-choice-twenty-three`).show();
    }, 10000);

    $(`.select-choice-twenty`).hide();
    $(`.select-choice-twenty-four`).show();
});

$(`.select-choice-twenty-two .true-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Так, я лучше отойду. Вдруг ещё что-то произойдёт...`);

    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/explosion.mp3`;
        sound.play();
        
        $(`.formula p`).html(`Твою... Постамент с формулой взорвался! А если бы я... Если я был(а) там... Сейчас... Блин, формула!`);
        $(`.select-choice-twenty-four`).hide();
        $(`.select-choice-twenty-three`).show();
    }, 10000);
    
    $(`.select-choice-twenty-two`).hide();
    $(`.select-choice-twenty-four`).show();
});
$(`.select-choice-twenty-two .false-twenty`).on(`click`, function() {

    setTimeout(function() {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/characterLost.mp3`;
        sound.play();

        setTimeout(function() {
            alert(`${name}, получено достижение: персонаж потерян.`);
        }, 250);
    
        characterLost = true;
        achievementCounter++;
        
        $(`.formula p`).html(`Яркая вспышка. Взрыв. Вас откинуло к стене. Вы ударились головой. Вы потеряли сознание, но успели прочитать формулу...`);
        $(`.select-choice-twenty-five`).hide();
        $(`.select-choice-final`).show();
    }, 10000);
    
    $(`.select-choice-twenty-two`).hide();
    $(`.select-choice-twenty-five`).show();
});

$(`.select-choice-twenty-three .false-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Хух, формула уцелела после взрыва. Хорошо, что я успел(а) отойти от постамента. Даже представлять не буду, что бы было, если... Надеюсь, что это конец.`);
    $(`.select-choice-twenty-three`).hide();
    $(`.select-choice-final`).show();
});
$(`.select-choice-twenty-three .true-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Хух, формула уцелела после взрыва. Хорошо, что я успел(а) отойти от постамента. Даже представлять не буду, что бы было, если... Надеюсь, что это конец.`);
    $(`.select-choice-twenty-three`).hide();
    $(`.select-choice-final`).show();
});

// ОБРАБОТКА ДВАЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.processing-twenty-without`).on(`click`, function() {

    let answer = $(`#select-twenty-without option:selected`).text();

    if (answer === `Подойти, забрать формулу.`) {

        $(`.formula p`).html(`Мои глаза! Что это за вспышка? Главное — держать крепко формулу. Я столько сюда добирался(ась), её нельзя потерять!`);
        $(`.select-twenty-without`).hide();
        $(`.select-choice-twenty-without`).show();
    }
    else if (answer === `Осмотреть последнюю комнату.` && storyRunes === true) {
        
        $(`.formula p`).html(`Здесь какая-то рамка под фотографию. У неё есть интерфейс под руны. О! Может попробовать ввести те руны, которые есть в свитке? Так, где тот свиток?`);
        $(`.select-twenty-without`).hide();
        $(`.select-choice-twenty-two-without`).show();
    }
    else if (answer === `Осмотреть последнюю комнату.` && storyRunes === false) {
        
        $(`.formula p`).html(`Здесь какая-то рамка под фотографию. У неё есть интерфейс под руны. Похоже, это те руны, которые были в свитке. А я его выбросил(а).`);
        $(`.select-twenty-without`).hide();
        $(`.select-choice-twenty-three-without`).show();
    } else {
        $(`.formula p`).html(`К сожалению, ${name}, ты не выбрал(а) ни один вариант.`);
    }
});

// ОБРАБОТКА КНОПОК ДВАЦАТОЙ ЛОКАЦИИ БЕЗ ПРОГРАММЫ
$(`.select-choice-twenty-without .false-twenty`).on(`click`, function() {

    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/danger.mp3`;
        sound.play();
    }, 3000);

    $(`.formula p`).html(`Держать, ${name}, держать! Не сдава... Что это? Какие-то странные звуки! Нужно срочно принимать решение...`);
    $(`.select-choice-twenty-without`).hide();
    $(`.select-choice-twenty-four-without`).show();
});
$(`.select-choice-twenty-without .true-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Так, я лучше отойду. Вдруг ещё что-то произойдёт...`);

    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/explosion.mp3`;
        sound.play();
        
        $(`.formula p`).html(`Твою... Постамент с формулой взорвался! А если бы я... Если я был(а) там... Сейчас... Блин, формула!`);
        $(`.select-choice-twenty-six-without`).hide();
        $(`.select-choice-twenty-five-without`).show();
    }, 10000);

    $(`.select-choice-twenty-without`).hide();
    $(`.select-choice-twenty-six-without`).show();
});

$(`.select-choice-twenty-two-without .false-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Не буду вводить руны. Так, стоп! А зачем тогда они мне?`);
    $(`.select-choice-twenty-two-without`).hide();
    $(`.select-twenty-without`).show();
});
$(`.select-choice-twenty-two-without .true-twenty`).on(`click`, function() {

    setTimeout(function() {
        
        $(`.formula p`).html(`Успех! "ᚤᛟᚢᚱ ᚡᛁᚲᛏᛟᚱᚤ ᛁᛋ ᛗᚤ ᛗᛟᛏᛁᚡᚨᛏᛁᛟᚾ ᚠᛟᚱ ᚲᚱᛖᚨᛏᛁᚾᚷ ᛋᛈᚨᚲᛖ." => "Твоя победа — моя мотивация на создание космоса". Дата: XX.10.2020. Я пологаю, что это отсылка на следующий этап?`);
        $(`.select-choice-eighteen-without-four`).hide();
        $(`.select-twenty-without`).show();
    }, 60000);

    $(`.formula p`).html(`Так, что тут? "Подождите, пожалуйста, идёт загрузка перевода рун...". Хммм, подожду.`);
    $(`.select-choice-twenty-two-without`).hide();
    $(`.select-choice-eighteen-without-four`).show();
});

$(`.select-choice-twenty-three-without .false-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Зачем же я выкинул(а) тот свиток. Блин, а если там что-то важное?`);
    $(`.select-choice-twenty-three-without`).hide();
    $(`.select-twenty-without`).show();
});

$(`.select-choice-twenty-four-without .true-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Так, я лучше отойду. Вдруг ещё что-то произойдёт...`);

    setTimeout(function() {

        // MUTE SOUND
        sound.pause();
        // SOUND
        sound.src = `sound/explosion.mp3`;
        sound.play();
        
        $(`.formula p`).html(`Твою... Постамент с формулой взорвался! А если бы я... Если я был(а) там... Сейчас... Блин, формула!`);
        $(`.select-choice-twenty-six-without`).hide();
        $(`.select-choice-twenty-five-without`).show();
    }, 10000);

    $(`.select-choice-twenty-four-without`).hide();
    $(`.select-choice-twenty-six-without`).show();
});
$(`.select-choice-twenty-four-without .false-twenty`).on(`click`, function() {

    setTimeout(function() {

        // SOUND ACHIEVEMENTS
        sound.src = `sound/achievements/characterLost.mp3`;
        sound.play();

        setTimeout(function() {
            alert(`${name}, получено достижение: персонаж потерян.`);
        }, 250);
    
        characterLost = true;
        achievementCounter++;
        
        $(`.formula p`).html(`Яркая вспышка. Взрыв. Вас откинуло к стене. Вы ударились головой. Вы потеряли сознание, но успели прочитать формулу...`);
        $(`.select-choice-twenty-seven-without`).hide();
        $(`.select-choice-final`).show();
    }, 10000);
    
    $(`.select-choice-twenty-four-without`).hide();
    $(`.select-choice-twenty-seven-without`).show();
});

$(`.select-choice-twenty-five-without .false-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Хух, формула уцелела после взрыва. Хорошо, что я успел(а) отойти от постамента. Даже представлять не буду, что бы было, если... Надеюсь, что это конец.`);
    $(`.select-choice-twenty-five-without`).hide();
    $(`.select-choice-final`).show();
});
$(`.select-choice-twenty-five-without .true-twenty`).on(`click`, function() {

    $(`.formula p`).html(`Хух, формула уцелела после взрыва. Хорошо, что я успел(а) отойти от постамента. Даже представлять не буду, что бы было, если... Надеюсь, что это конец.`);
    $(`.select-choice-twenty-five-without`).hide();
    $(`.select-choice-final`).show();
});

// ОБРАБОТКА ФИНАЛЬНОЙ ЛОКАЦИИ
$(`.processing-final`).on(`click`, function() {

    $(`.formula p`).html(`<p class="formula-main">Формула: <span class="final-formula">(N1 + N2) - N3</span>,</p><p class="formula-description">где N1 — это количество символов твоего ника, когда мы познакомились<br>(внимание, пробелы не в счёт),<br>N2 — количество символов твоего ника на данный момент<br>(внимание, пробелы не в счёт),<br>N3 — количество символов моего ника на данный момент<br>(ник не менялся).</p><p class="formula-example">Например, (oldNickname(11 символов) + newNickname(11 символов)) - veryLongNickname(16 символов) = (11 + 11) - 16 => 6.</p><p>Для третьего этапа нужно запомнить: формулу; количество символов, которые получились в ответе. Рекомендую сделать скрин ;)<p>Кнопка разблокируется через минуту.</p>`);
    $(`.processing-final`).hide();
    $(`.select-choice-statistics`).show();

    setTimeout(function() {
        
        $(`.processing-statistics`).removeAttr(`disabled`);
    }, 60000);
});
$(`.processing-statistics`).on(`click`, function() {

    $(`.formula p`).addClass(`statistics`);

    $(`.formula p`).html(`
    
    <div class="final-achievements">
        <p>| ПОЛУЧЕННЫЕ ДОСТИЖЕНИЯ |</p>
        <p>Идеальное имя: ${perfectName}</p>
        <p>Отсылка в hex-формате: ${withoutYou}</p>
        <p>Долгий поиск: ${longSearch}</p>
        <p>Логичная логика: ${logicalLogic}</p>
        <p>Правильный выбор: ${rightChoice}</p>
        <p>Придётся извиняться: ${apologize}</p>
        <p>Математическая проблема: ${problemsMath}</p>
        <p>Взгляд из темноты: ${fromDark}</p>
        <p>Вторая ступень: ${secondStage}</p>
        <p>Ты мне нужен живым: ${needAlive}</p>
        <p>Это безумие: ${thisMadness}</p>
        <p>Максимальная удача: ${maximumLuck}</p>
        <p>Преодолеть себя: ${overcomeYourself}</p>
        <p>Привет из Франции: ${greetingFromFrance}</p>
        <p>Прямое попадание: ${directHit}</p>
        <p>Почти третье сентября: ${almostSeptember}</p>
        <p>Останься со мной: ${stayWithMe}</p>
        <p>Прости меня: ${forgiveMe}</p>
        <p>Любопытной Варваре: ${curiousVarvara}</p>
        <p>Персонаж потерян: ${characterLost}</p>
    </div>

    <div class="final-additionally">
        <p>| ДОПОЛНИТЕЛЬНЫЕ СВЕДЕНИЯ |</p>
        <p>Прохождение квеста с именем: ${name}</p>
        <p>Попыток получить 100% вероятности: ${countAttempt}</p>
        <p>Сделано попыток в игре "угадай число": ${countRandomAttempt}</p>
        <p>Число, которое было загадано программой в игре "угадай число": ${randomNumber}</p>
        <p>Отрывков стихов найдено: ${countVerse} из 3</p>
        <p>Достижений получено: ${achievementCounter} из 20</p>
    </div>

    <div class="final-gratitude">
        <p>Как было написано в авторском соглашении: вся информация обрабатывается на клиенте пользователя. Поэтому, если Вы хотите поблагодарить автора, то Вы можете скинуть данную статистику ему. Если, конечно, квест пройден с первого раза. Ему, в значительной мере, интересно. PDF-файл с описанием достижений можно посмотреть <a href="achievements.pdf" target="_blank">здесь</a>. Благодарю за потраченное время!</p>
    </div>
    `);
    $(`.processing-statistics`).hide();
});
// ЗАПРЕТ ПРОСМОТРА ИСХОДНОГО КОДА
document.onkeydown = function(event) {

    if (event.keyCode === 123) {
        alert(`Хорошая попытка, но давай проходить квест честно?`);
        return false;
    }
    
    if (event.ctrlKey && event.shiftKey && event.keyCode == `I`.charCodeAt(0)) {
        alert(`Хорошая попытка, но давай проходить квест честно?`);
        return false;
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == `J`.charCodeAt(0)) {
        alert(`Хорошая попытка, но давай проходить квест честно?`);
        return false;
    }

    if (event.ctrlKey && event.keyCode == `U`.charCodeAt(0)) {
        alert(`Хорошая попытка, но давай проходить квест честно?`);
        return false;
    }
}
$(document).on(`contextmenu`, function(event) {
    
    alert(`Хорошая попытка, но давай проходить квест честно?`);
    
    event.preventDefault();
});