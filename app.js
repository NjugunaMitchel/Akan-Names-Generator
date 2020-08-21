let female = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
let male = ['Kwasi','Kwadwoa','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let input = document.getElementById('input');
let gender = document.getElementById('gender');
let submit = document.getElementById('submit');


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

    let name = document.getElementById('name');
    let day = document.getElementById('day');
    let greeting = document.getElementById('greeting');
    
    //match day to number
   if (gender.value == 'male'){
       if( d == 0){
           greeting.innerHTML=`Hello ${male[0]}`;
           name.innerHTML = `Your Akan name is ${male[0]}`
           day.innerHTML = `you where born on a ${days[0]}`
       }else if (d == 1){
           greeting.innerHTML=`Hello ${male[1]}`;
           name.innerHTML = `Your Akan name is ${male[1]}`;
           day.innerHTML = `you where born on a ${days[1]}`
       }else if (d == 2){
           greeting.innerHTML=`Hello ${male[2]}`;
           name.innerHTML = `Your Akan name is ${male[2]}`;
           day.innerHTML = `you where born on a ${days[2]}`
       }else if (d == 3){
           greeting.innerHTML=`Hello ${male[3]}`;
           name.innerHTML = `Your Akan name is ${male[3]}`;
           day.innerHTML = `you where born on a ${days[3]}`
       }else if (d == 4){
           greeting.innerHTML=`Hello ${male[4]}`;
           name.innerHTML = `Your Akan name is ${male[4]}`;
           day.innerHTML = `you where born on a ${days[4]}`
       }else if (d == 5){
           greeting.innerHTML=`Hello ${male[5]}`;
           name.innerHTML =`Your Akan name is ${male[5]}`;
           day.innerHTML = `you where born on a ${days[5]}`
       }else 
       {
           greeting.innerHTML=`Hello ${male[6]}`;
           name.innerHTML = `Your Akan name is ${male[6]}`;
           day.innerHTML = `you where born on a ${days[6 ]}`
       } }else
       {
        if( d == 0){
            greeting.innerHTML=`Hello ${female[6]}`
            name.innerHTML = `Your Akan name is ${female[0]}`;
            day.innerHTML = `you where born on a ${days[0]}`;
        }else if (d == 1){
            greeting.innerHTML=`Hello ${female[1]}`
            name.innerHTML = `Your Akan name is ${female[1]}`;
            day.innerHTML = `you where born on a ${days[1]}`;
        }else if (d == 2){
            greeting.innerHTML=`Hello ${female[2]}`
            name.innerHTML = `Your Akan name is ${female[2]}`;
            day.innerHTML = `you where born on a ${days[2]}`;
        }else if (d == 3){
            greeting.innerHTML=`Hello ${female[3]}`
            name.innerHTML = `Your Akan name is ${female[3]}`;
            day.innerHTML = `you where born on a ${days[3]}`;
        }else if (d == 4){
            greeting.innerHTML=`Hello ${female[4]}`
            name.innerHTML = `Your Akan name is ${female[4]}`;
            day.innerHTML = `you where born on a ${days[4]}`;
        }else if (d == 5){
            greeting.innerHTML=`Hello ${female[5]}`
            name.innerHTML = `Your Akan name is ${female[5]}`;
            day.innerHTML = `you where born on a ${days[5]}`;
        }else 
        {
            greeting.innerHTML=`Hello ${female[6]}`
            name.innerHTML = `Your Akan name is ${female[6]}`;
            day.innerHTML = `you where born on a ${days[6]}`;
        }
    
       }
    
       display.className="oerlay"
       
})
    