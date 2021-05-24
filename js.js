const option = document.querySelector('#option1');
const submit = document.querySelector('.sbmt');


submit.addEventListener('click', function() {
    if(option.value === 'my'){
        document.querySelector(".true").style.display = "flex";
        document.querySelector(".false").style.display = "none"

    } else {
        document.querySelector("#false1").style.display = "flex"
        document.querySelector("#true1").style.display = "none";
    }
});
                //Second option
const option2 = document.querySelector('#option2');

submit.addEventListener('click', function() {
    if(option2.value === 'how'){
        document.querySelector("#true2").style.display = "flex";
        document.querySelector("#false2").style.display = "none"

    } else {
        document.querySelector("#false2").style.display = "flex"
        document.querySelector("#true2").style.display = "none";
    }
});

                //#3rd option
const option3 = document.querySelector('#option3');

submit.addEventListener('click', function() {
    if(option3.value === 'thanks'){
        document.querySelector("#true3").style.display = "flex";
        document.querySelector("#false3").style.display = "none"
    } else {
        document.querySelector("#false3").style.display = "flex"
        document.querySelector("#true3").style.display = "none";
    }
});

                //option 4
const option4 = document.querySelector('#option4');

submit.addEventListener('click', function() {
    if(option4.value === 'this'){
        document.querySelector("#true4").style.display = "flex";
        document.querySelector("#false4").style.display = "none"
    } else {
        document.querySelector("#false4").style.display = "flex"
        document.querySelector("#true4").style.display = "none";
    }
});

                //option 5
const option5 = document.querySelector('#option5');

submit.addEventListener('click', function() {
    if(option5.value === 'it'){
        document.querySelector("#true5").style.display = "flex";
        document.querySelector("#false5").style.display = "none"
    } else {
        document.querySelector("#false5").style.display = "flex"
        document.querySelector("#true5").style.display = "none";
    }
});

                //option 6
const option6 = document.querySelector('#option6');

submit.addEventListener('click', function() {
    if(option6.value === 'this is'){
        document.querySelector("#true6").style.display = "flex";
        document.querySelector("#false6").style.display = "none"
    } else {
        document.querySelector("#false6").style.display = "flex"
        document.querySelector("#true6").style.display = "none";
    }
});