// 'use strict';


var productName = [ 'chair','bag', , 'bathroom', 'boots',  'bubblegum',  'cthulhu', 'dog-duck', 'breakfast', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass' ,'banana']
var leftImage = document.getElementById('left-image');
var rightImage = document.getElementById('right-image');
var centerImage = document.getElementById('midlle-image');
let container = document.getElementById('section-one');
var productImage = [ 'chair.jpg' ,'bag.jpg',  'bathroom.jpg', 'boots.jpg',  'bubblegum.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'breakfast.jpg',  'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png','water-can.jpg' , 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif',  'wine-glass.jpg' , 'banana.jpg'];



let count = 0;
let maxAttempts = 25;
let lftIndex; 
let ritIndex;
let middleIndex;
let allImages = [];
let names = [];
let votes = [];
let shown = [];
var arrImages = [lftIndex,middleIndex,ritIndex ];


function imgProduct(name, pathe) {
    this.name = name;
    this.source = pathe;
    this.votes = 0;
    this.shown = 0;
    allImages.push(this);
    names.push(this.name);
}

console.log(allImages);

// new Product('wine-glass','../img/wine-glass.jpg' );

// new Product('unicorn','../img/unicorn.jpg' )
// new Product('bag','../img/bag.jpg' );
// new Product('banana','../img/banana.jpg' );
// new Product('bathroom','../img/bathroom.jpg' );
// new Product('cthulhu','../img/cthulhu.jpg' );
// new Product('boots','../img/boots.jpg' );
// new Product('bubblegum','../img/bubblegum.jpg' );
// new Product('chair','../img/chair.jpg' );

// new Product('dragon','../img/dragon.jpg' );
// new Product('pet-sweep','../img/pet-sweep.jpg' );

// new Product('shark','../img/shark.jpg' );
// new Product('bubblegum','../img/bubblegum.jpg' );
// new Product('dog-duck','../img/dog-duck.jpg' );
// new Product('sweep','../img/sweep.png' );
// new Product('tauntaun','../img/tauntaun.jpg' );

// new Product('usb','../img/usb.gif' );
// new Product('water-can','../img/water-can.jpg' );
// new Product('wine-glass','../img/wine-glass.jpg' );
// new Product('scissors','../img/scissors.jpg' );
for (var j = 0; j < productImage.length; j++) {
    new imgProduct(productName[j], `./img/${productImage[j]}`);
}


function renderImage() {
    lftIndex = genrateRndmIndex();
    ritIndex = genrateRndmIndex();
    middleIndex = genrateRndmIndex();


// to prevent the repetition 
    while(lftIndex === ritIndex || lftIndex === middleIndex || 
        middleIndex  === ritIndex ||arrImages.includes(lftIndex) || 
        arrImages.includes(middleIndex)||arrImages.includes(ritIndex)){
        lftIndex = genrateRndmIndex();
        middleIndex = genrateRndmIndex();
        ritIndex = genrateRndmIndex();

      };


//console.log(lftIndex,middleIndex,ritIndex)

   arrImages[0]=lftIndex;
   arrImages[1]=middleIndex;
   arrImages[2]=ritIndex;

console.log(arrImages)
    leftImage.src = allImages[lftIndex].source;
    allImages[lftIndex].shown++;
    rightImage.src = allImages[ritIndex].source;
    allImages[ritIndex].shown++;
    centerImage.src = allImages[middleIndex].source;
    allImages[middleIndex].shown++;
    console.log("shown" + allImages[middleIndex].shown)

}

renderImage();


container.addEventListener('click',handleClicking);

function handleClicking(event) {
    //   console.log(event.target.id);
    count++;
    if (maxAttempts > count) {
        // console.log(counts)
        // console.log(event.target)
        if (event.target.id === 'left-image') {
            allImages[lftIndex].votes++;
        } else if (event.target.id === 'right-image') {
            allImages[ritIndex].votes++;
        } else if (event.target.id === 'midlle-image') {
            allImages[middleIndex].votes++;
        }
        renderImage();
        console.log(allImages);
    } else if( maxAttempts== count){
    
       
       button.disabled= false ;

    container.removeEventListener('click',handleClicking)

    }
    
}

 let button = document .getElementById('button');
button.addEventListener('click',showList);
function showList(){
  renderforlist();
  chartnew() ;
  button.removeEventListener('click',showList);
}


function renderforlist() {
    let ul = document.getElementById('unordered');
    for (let j = 0; j< allImages.length; j++) {
        votes.push(allImages[j].votes);
        arrOfShown.push(allImages[j].shown);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${allImages[i].name} it has ${allImages[i].votes} Votes ${allImages[i].shown} shown`;
    }
    console.log(votes)
    console.log(arrOfShown)

}

function genrateRndmIndex() {
    return Math.floor(Math.random() * allImages.length);

}

function chartnew(){

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: [
                'rgb(255, 99, 132)',
             
            ],
            borderWidth: 1
         }, {
                label:'# of Shown',
                data: arrOfShown,
                backgroundColor:[
                   'rgb(155, 99, 132)',

                ],
                borderWidth: 1
              
        }]
    },
    

});
}
