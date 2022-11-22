let btns1 = document.querySelectorAll('button[data-modal]')
let closebtns = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')




btns1.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('hide')
        modal.classList.add('show', 'fade')
    }

});
closebtns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('hide')
        modal.classList.remove('show', 'fade')
    }

});


let userinfo = {
    gender: "woman"
}
let getbtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let activeBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let result = document.querySelector('#result')

activeBtns.forEach(btn => {
    btn.onclick = () => {
        activeBtns.forEach(el =>
            el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let act = btn.getAttribute('data-py')
        if (userinfo.gender === 'woman') {
            let sum1 = 447.6 + (9.2 * userinfo.weight) + (3.1 * userinfo.height) - (4.3 * userinfo.age)
            result.innerHTML = Math.round(sum1 * act)
        } else {
            let sum = 88.36 + (13, 4 * userinfo.weight) + (4.8 * userinfo.height) - (5.7 * userinfo.age)
            result.innerHTML = Math.round(sum * act)
        }
    }
})
inputs.forEach(inp => {
    inp.onkeyup = () => {
        userinfo[inp.name] = inp.value
    }
})

getbtns.forEach(btn => {
    btn.onclick = () => {
        getbtns.forEach(el =>
            el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let gen = btn.getAttribute('data-g')
        userinfo.gender = gen
    }
})


let inpNeeds = document.querySelectorAll('.order__input')
let form = document.forms.reg
let allInps = document.querySelectorAll('form input')



let regex = {
    name: /^[a-z ,.'-]+$/g,
    phone: /^998[012345789][0-9]{8}$/g
}


function validate(regex, field) {
    if (regex.test(field.value)) {

        field.style.borderColor = "green"
    } else {

        field.style.borderColor = "red"
    }

}

allInps.forEach(inp => {
    inp.onkeyup = () => {
        validate(regex[inp.name], inp)

    }
});

form.onsubmit = (event) => {
    event.preventDefault();
    let errorss = 0

    inpNeeds.forEach(inp => {
        inp.classList.remove('invalid')
        if (inp.value.length < 1) {

            inp.classList.add('invalid')
            errorss++
        }
    })

    if (errorss > 0) {
        console.log('error');
    } else {
        submit(form)
    }

}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}



let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    slide_next--
    shou_slide(slide_next)
}


next.onclick = () => {
    slide_next++
    shou_slide(slide_next)
}


function shou_slide(nc) {
    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        slide_next = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
        slide.classList.remove('fade')
    })
    slide[slide_next].classList.add('fade')
    slide[slide_next].style.display = "block"

    text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()


let tabcontents = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontents.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontents[n].classList.add('fade')
    tabcontents[n].style.display = "block"
}


btns.forEach((btn, index) => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
})

const deadline = 'December 2022 31 23:59'


function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.round(t / (1000 * 60 * 60 * 24)),
        hours = Math.round((t / (1000 * 60 * 60)) % 24),
        minutes = Math.round((t / 1000 / 60) % 60),
        seconds = Math.round((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        updateInt = setInterval(updateTime, 1)


    function updateTime() {
        const t = getTime(endtime)

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t <= 0) {
            clearInterval(updateInt)
        }
    }

}

setTime('.timer', deadline)
showSlides(slide_next)

function showSlides(n) {
    slide.forEach(el => el.style.display = "none")

    slide[n].style.display = "block"
}

next.onclick = () => {
    idx++
    showSlides(slide_next)
}