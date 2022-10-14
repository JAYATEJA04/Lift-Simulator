let floorInput = document.querySelector('.floor-input');
let liftInput = document.querySelector('.lift-input');
let confirmButton = document.querySelector('.confirm-btn');

function generateFloors(numberOfFloors){
    if(numberOfFloors <= 0 || numberOfFloors > 10){
        alert(`The number of floors should be in the range of 1 to 10`);
    } else {
        document.querySelector('.simulation-play').innerHTML = ``;
        for(let i = 0 ; i < numberOfFloors ; i++){
        let floorNumber = `Floor-${numberOfFloors - i - 1}`;
        let currentFloor = document.createElement("div");
        currentFloor.setAttribute('id',floorNumber)

        currentFloor.setAttribute("class", "floor");
        currentFloor.innerHTML = `
        <div class="upward-downward">
            <button class="toggle floor-btn UP-btn" data-floorInfo=${numberOfFloors - i - 1}>UP</button>
            <button class="toggle floor-btn Down-btn" data-floorInfo=${numberOfFloors - i - 1}>DOWN</button>
            <p class="Floor-number"> ${floorNumber} </p>
        </div>
        `
        document.querySelector('.simulation-play').appendChild(currentFloor);
    }
    }
}

function generateLifts(numberOfLifts){
    if(numberOfLifts <=  0 || numberOfLifts > 10){
        alert(`The number of lifts should be in the range of 1 to 10`);
    } else {
        for(let i = 0 ; i < numberOfLifts ; i++){
            let liftCount = `Lift-${i}`
            const currentLift = document.createElement('div');
            currentLift.setAttribute('id',liftCount);
            currentLift.setAttribute('listPostion',"0");
            currentLift.setAttribute('class',"lifts");
    
            liftMotionDetail = false;
            liftNumberDetail = liftCount;
            // currentLift.setAttribute("class", "lifts");
            currentLift.innerHTML = `
                <div class="lift-left-door FLEX"></div>
                <div class="lift-right-door FLEX"></div>
            `
            document.getElementById('Floor-0').appendChild(currentLift);
        }
    }
}

// function startSimulation(){
    
// }

function getLift(destinationFloor){
    const activeLift = Array.from(document.querySelector('.lifts'));
    for(let i = 0 ; i < activeLift.length ; i++){
        if(!activeLift[i].classList.contains('engaged')){
            // alert('yep.')
            moveLift(destinationFloor, activeLift[i]);
            return;
        }
    }
}

function moveLift(destinationFloor, liftToMove){
    let position = liftToMove.dataset.liftposition;
    let time = Math.abs(position - destinationFloor);
    liftToMove.style.transition = `transform${time * 2}s linear`;
    liftToMove.style.transform = `translateY(${-100}px)`;
    liftToMove.classList.add('engaged');
    liftToMove.dataset.liftPosition = destinationFloor;

    setTimeout(() => {
        liftToMove.children[0].classList.add('left-move');
        liftToMove.children[0].classList.add('right-move');
    }, time * 3000);

    setTimeout(() => {
        liftToMove.children[0].classList.remove('left-move');
        liftToMove.children[0].classList.remove('right-move');
    }, time * 5000);

    setTimeout(() => {
        liftToMove.classList.remove("engaged");
    }, time * 7000);
}

// Adding floors and preventDefault.
confirmButton.addEventListener('click', function(e){
    e.preventDefault();
    generateFloors(floorInput.value);
    generateLifts(liftInput.value);

    let presentFloor = 0;
    document.addEventListener('click', (event) => {
        if(event.target.classList.contains('toggle')){
            if(event.target.dataset.floorInfo !== presentFloor){
                // alert('you reached here.')
                getLift(event.target.dataset.floorInfo);
            } else {
                return;
            }
            presentFloor = event.target.dataset.floorInfo;
        }
    });
})