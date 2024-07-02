let display = document.querySelector(".display");
const add = document.querySelector("#plus").blur();
const seven = document.querySelector("#seven");
const four = document.querySelector("#four");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const subtract = document.querySelector("#minus");
const eight = document.querySelector("#eight");
const five = document.querySelector("#five");
const two = document.querySelector("#two");
const dot = document.querySelector("#dot");
const multiply = document.querySelector("#multiply");
const nine = document.querySelector("#nine");
const six = document.querySelector("#six");
const three = document.querySelector("#three");
const clear = document.querySelector("#clear");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#Equal");
const form1 = document.querySelector('.form')


clear.addEventListener('click',function(){
    form1.answer.value = ''
})

equal.addEventListener('click',function(){
    
    if(form1.answer.value === ''){
        form1.answer.value = '0'
    }



    let data = form1.answer.value
    let sol = eval(data)

    form1.answer.value = sol;
})


