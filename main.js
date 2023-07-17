const submit = document.querySelector('.submit');
const btnRating = document.querySelectorAll('.btnRating');
const ratingScore = document.querySelector('#rating_score');
const ratingContainer = document.querySelector('.rating_container');
const resultContainer = document.querySelector('.result_container');
let rating=0;

btnRating.forEach((btn)=>{
    btn.addEventListener('click',function(){
        rating = btn.value;
    })
})
// adding eventlistener on the button using arrow functions
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    resultContainer.style.display="block";
    ratingContainer.style.display="none";
    ratingScore.innerHTML=`${rating}`;
})