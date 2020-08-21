let female = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
let male = ['Kwasi','Kwadwoa','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let input = document.getElementById('input');
let gender = document.getElementById('gender');
let  submit = document.getElementById('submit');


submit.addEventListener('click',(e) => {
    e.preventDefault();     
    let  data = input.value;
    //century
    let c = data.slice(0, 2);
    let cc = parseInt(c);
    //year
    let y = data.slice(2, 4);
    let yy = parseInt(y);
    //month
    let m = data.slice(8, 10);
    let mm = parseInt(m);
    //date
    let ddd = data.slice(5, 7);
    let dd = parseInt(ddd)

    //CALCULATE THE DAY
    let d = Math.floor((((( cc/4 )- 2 )* (cc - 1 ))+(( (5 * yy) / 4 ))+(( (26 * ( mm + 1 ) )/ 10)) + dd) % 7);