const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        const plus = e.currentTarget.querySelector('.qIconPlus');
        const minus = e.currentTarget.querySelector('.qIconMinus');
        plus.classList.toggle('hide');
        minus.classList.toggle('hide');
        console.log(plus);
    })
})