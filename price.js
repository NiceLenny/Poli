//плюс
let  res1 = $('.res1').html();
let  res2 = $('.res2').html();
let  res3 = $('.res3').html();
let  res4 = $('.res4').html();
let  res5 = $('.res5').html();
let  res6 = $('.res6').html();

let price1 = $('.price1').html();
let price2 = $('.price2').html();
let price3 = $('.price3').html();
let price4 = $('.price4').html();
let price5 = $('.price5').html();
let price6 = $('.price6').html();

let priceI1 = parseInt(price1.match(/\d+/));
let priceI2 = parseInt(price2.match(/\d+/));
let priceI3 = parseInt(price3.match(/\d+/));
let priceI4 = parseInt(price4.match(/\d+/));
let priceI5 = parseInt(price5.match(/\d+/));
let priceI6 = parseInt(price6.match(/\d+/));

console.log(res1)
console.log(priceI1)
console.log(priceI2)
console.log(priceI3)
console.log(priceI4)
console.log(priceI5)
console.log(priceI6)


function plus1() {
    if (res1 == 0) {
        res1++;
        $('.res1').html(res1);
        // console.log(res1)
    } else {
        res1++;
        $('.res1').html(res1);
        // $('.price1').html(priceI1 * res1 + ' ₽');
        // console.log(res1)
        // console.log(priceI1 * res1)
    }
}

$('.pn500').on('click', plus1);

function plus2() {
    if (res2 == 0) {
        res2++;
        $('.res2').html(res2);
    } else {
        res2++;
        $('.res2').html(res2);
        // $('.price2').html(priceI2 * res2 + ' ₽');
    }
}

$('.pn2_500').on('click', plus2);

function plus3() {
    if (res3 == 0) {
        res3++;
        $('.res3').html(res3);
    } else {
        res3++;
        $('.res3').html(res3);
        // $('.price3').html(priceI3 * res3  + ' ₽');
    }
}

$('.pn1000').on('click', plus3);

function plus4() {
    if (res4 == 0) {
        res4++;
        $('.res4').html(res4);
    } else {
        res4++;
        $('.res4').html(res4);
        // $('.price4').html(priceI4 * res4  + ' ₽');
    }    
}

$('.pn2_1000').on('click', plus4);

function plus5() {
    if (res5 == 0) {
        res5++;
        $('.res5').html(res5);
    } else {
        res5++;
        $('.res5').html(res5);
        // $('.price5').html(priceI5 * res5  + ' ₽');
    }     
}

$('.pn700').on('click', plus5);

function plus6() {
    if (res6 == 0) {
        res6++;
        $('.res6').html(res6);
    } else {
        res6++;
        $('.res6').html(res6);
        // $('.price6').html(priceI6 * res6  + ' ₽');
    }  
}

$('.pn8000').on('click', plus6);

//минус

function minus1() {
    if (res1 > 1) {
        res1--;
        $('.res1').html(res1);
        // $('.price1').html(priceI1 * res1  + ' ₽');
    } else {
        res1--;
        $('.res1').html(res1);
        // $('.price1').html(priceI1  + ' ₽');
    } 
    
}

$('.mn500').on('click', minus1);

function minus2() {
    if (res2 > 1) {
        res2--;
        $('.res2').html(res2);
        // $('.price2').html(priceI2 * res2  + ' ₽');
    } else {
        res2--;
        $('.res2').html(res2);
        // $('.price2').html(priceI2  + ' ₽');
    } 
    
}

$('.mn2_500').on('click', minus2);

function minus3() {
    if (res3 > 1) {
        res3--;
        $('.res3').html(res3);
        // $('.price3').html(priceI3 * res3  + ' ₽');
    } else {
        res3--;
        $('.res3').html(res3);
        // $('.price3').html(priceI3  + ' ₽');
    } 
    
}

$('.mn1000').on('click', minus3);

function minus4() {
    if (res4 > 1) {
        res4--;
        $('.res4').html(res4);
        // $('.price4').html(priceI4 * res4  + ' ₽');
    } else {
        res3--;
        $('.res4').html(res4);
        // $('.price4').html(priceI4  + ' ₽');
    } 
    
}

$('.n2_1000').on('click', minus4);

function minus5() {
    if (res5 > 1) {
        res5--;
        $('.res5').html(res5);
        // $('.price5').html(priceI5 * res5  + ' ₽');
    } else {
        res5--;
        $('.res5').html(res5);
        // $('.price5').html(priceI5  + ' ₽');
    } 
    
}

$('.mn700').on('click', minus5);

function minus6() {
    if (res6 > 1) {
        res6--;
        $('.res6').html(res6);
        // $('.price6').html(priceI6 * res6  + ' ₽');
    } else {
        res6--;
        $('.res6').html(res6);
        // $('.price6').html(priceI6  + ' ₽');
    } 
    
}

$('.mn8000').on('click', minus6);

let itogo = 0;

function itog() {
    itogo = Number(priceI1 * res1) + Number(priceI2 * res2) + Number(priceI3 * res3) + Number( priceI4 * res4) + Number(priceI5 * res5) + Number(priceI6 * res6);
    $('.itog').html('Итого: ' + itogo + ' ₽');
}

$('.btn').on('click', itog);

document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('loader-wrapper');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    
    }, 1000);
}