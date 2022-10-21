let floorInput = document.querySelector('.floor-input');
let liftInput = document.querySelector('.lift-input');
let confirmButton = document.querySelector('.confirm-btn');
let refresh;

// function startSimulation(){
    
// }

function openLift(liftToMove){
    setTimeout(() => {
        liftToMove.children[0].classList.add("left-move");
        liftToMove.children[1].classList.add("right-move");
    }, 2500);
}

function closeLift(liftToMove){
    setTimeout(() => {
        liftToMove.children[0].classList.remove ("left-move");
        liftToMove.children[1].classList.remove("right-move");
    }, 5000);
}

function moveLift(destinationFloor, liftToMove){

    liftToMove.style.transition = `transform 2s linear`;
    liftToMove.style.transform = `translateY(${-8.3 * destinationFloor}rem)`;
    liftToMove.classList.add('busy');
    liftToMove.dataset.liftInfo = destinationFloor;

    openLift(liftToMove);
    closeLift(liftToMove);
    setTimeout(() => {
        liftToMove.classList.remove("busy");
    }, 7000);
}

function getLift(destinationFloor){
    const activeLift = Array.from(document.getElementsByClassName('lifts'));
    console.log(destinationFloor);
    for(let i = 0 ; i < activeLift.length ; i++){
        if(!activeLift[i].classList.contains('busy')){
            moveLift(destinationFloor, activeLift[i]);
            return;
        }
    }
}

function startSimulation(){
    let presentFloor = 0;
    document.addEventListener('click', (i) => {
        if(i.target.classList.contains("toggle")){
            if(i.target.dataset.information == presentFloor){
                return;
            } else {
                getLift(i.target.dataset.information);
            }
            presentFloor = i.target.dataset.information;
        }
    });
}

function generateLifts(numberOfLifts){
    for(let i = 0 ; i < numberOfLifts ; i++){
        let liftsClass = document.createElement("div");
        liftsClass.setAttribute("class", "lifts");
        liftsClass.setAttribute("data-liftInfo", "0");
        liftsClass.innerHTML =
        `
            <div class="lift-left-door FLEX"></div>
            <div class="lift-right-door FLEX"></div>
        `
        document.getElementById('Floor-0').appendChild(liftsClass);
    }
}

function generateFloors(numberOfFloors){
    let playArea = document.querySelector('.floor-direction');
    let temp;
    for(let i = numberOfFloors - 1 ; i >= 0 ; i--){
        let floorNum = `Floor-${i}`;
        let floorContainer = document.createElement("div");
        floorContainer.setAttribute("class", "floor-container");

        let floorWrapper = document.createElement("div");
        floorWrapper.setAttribute("class", "floor-wrapper");

        let liftButtons = document.createElement("div");
        liftButtons.setAttribute("class", "upward-downward");

        // not sure whether it is = or +=, check later.
        liftButtons.innerHTML = 
        `
        <button class="toggle UP-btn" data-information="${i}">UP</button>
        <button class="toggle Down-btn" data-information="${i}">DOWN</button>
        `
        floorWrapper.appendChild(liftButtons);

        //lift container
        let liftContainer = document.createElement("div");
        liftContainer.setAttribute("id", floorNum);
        liftContainer.setAttribute("class", "lift-flex");
        floorWrapper.appendChild(liftContainer);


        floorContainer.appendChild(floorWrapper);
        playArea.appendChild(floorContainer);
    }
}

function checkInput(numberOfFloors, numberOfLifts){
    if(numberOfFloors <= 0 || numberOfFloors > 10){
        alert("The number of floors should be in the range of 1 to 10");
        return false;
    } else if (numberOfLifts <= 0 || numberOfLifts > 10){
        alert("The number of lifts should be in the range of 1 to 10");
        return false;
    } 
    
    return true;
}

// Adding floors and preventDefault.
confirmButton.addEventListener('click', function(e){
    e.preventDefault();
    if(checkInput(floorInput.value, liftInput.value)){
        // generateFloors
        generateFloors(floorInput.value);
        generateLifts(liftInput.value);
        refresh = setInterval(startSimulation(), 1000);
    }
})