var imagesMemory = [
'pain.jpg', 
'itachi.png', 
'kisame.jpg', 
'orochimaru.jpg', 
'obito.jpg',
'deidara.png',
'sasori.jpg',
'nagato.png',
'konan.jpg',
'kakuzo.png',
'zetsu.png',
'hidan.jpg'
];

var imagesChoice1 = [];
var imagesChoice2 = [];
var imageCheck = [];

function checkEqualsImage(images){
    var srcCard1 = images[0].querySelector('.flip-card-back');
    var srcCard2 = images[1].querySelector('.flip-card-back');
    
    var image1 = imagesChoice1.indexOf(srcCard1.firstElementChild.src.substring(22));
    var image2 = imagesChoice2.indexOf(srcCard2.firstElementChild.src.substring(22));

    console.log('IMAGEM1 '+imagesChoice1[image1]);
    console.log('IMAGEM2 '+imagesChoice2[image2]);
    
    if(imagesChoice1[image1] == imagesChoice2[image2]){

        var card = document.createElement('div');
        // images[0].querySelector('.flip-card-back').classList.add('fade-out');
        // images[1].querySelector('.flip-card-back').classList.add('fade-out');
        setTimeout(() => { 
            card.appendChild(images[0]);
            card.appendChild(images[1]);   
         }, 1000);


    }else{
        setTimeout(() => { 
            images.forEach((card)=>{
            card.classList.toggle('is-flipped');
        });       
         }, 1000);

    }

    imageCheck = [];

}

function generateRandomNumber(length){
    return Math.floor(Math.random() * length);
}


function setImage(){
    var image = imagesMemory[generateRandomNumber(imagesMemory.length)]
    if(imagesChoice1.includes(image)){
       if(imagesChoice2.includes(image)){
         return setImage();
       }else{
        imagesChoice2.push(image);
        return image;
       }
    }else{  
        imagesChoice1.push(image);
        return image;
    }
}

function creatCart(){
    var card = document.createElement('div');
    card.classList.add(('flip-card-inner') );

    var cardFront = document.createElement('div');
    cardFront.classList.add('flip-card-front');

    var cardBack = document.createElement('div');
    cardBack.classList.add('flip-card-back');

    var image = document.createElement('img');
    image.src = setImage();

    cardBack.appendChild(image);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    return card;
}

function addCard(){
    imagesChoice = [];

    var row = document.querySelectorAll('.row');
    
    row.forEach((element)=>{
        for (let index = 0; index < 6; index++) {
            element.appendChild(creatCart())

        }
    });
}

addCard();

//Para cada cartao adiciona a função de clique para ele virar
var cards = document.querySelectorAll('.flip-card-inner');
cards.forEach((itemCard) => {
    itemCard.addEventListener( 'click', function() {
        itemCard.classList.toggle('is-flipped');

        // var srcCard = itemCard.querySelector('.flip-card-back');
        // imageCheck.push(srcCard.firstElementChild.src.substring(22))
        imageCheck.push(itemCard)
        
        if(imageCheck.length == 2){
            checkEqualsImage(imageCheck);
        }
       
    });
});
