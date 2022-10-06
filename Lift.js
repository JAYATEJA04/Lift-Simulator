let floorInput = document.querySelector('.floor-input');
let liftInput = document.querySelector('.lift-input');
let confirmButton = document.querySelector('.confirm-btn');
let countFloors = 0;

// Adding floors and preventDefault.
confirmButton.addEventListener('click', function(e){
        e.preventDefault();
        generateFloors(floorInput.value);
        generateLifts(liftInput.value);
    }
)

function generateFloors(numberOfFloors){
    document.querySelector('.lift-simulation').innerHTML = ``;
    for(let i = 0 ; i < numberOfFloors ; i++){
        let floorNo = `Level-${numberOfFloors - i - 1}`
        let currentFloor = document.createElement("div");
        currentFloor.setAttribute('id',floorNo)

        currentFloor.setAttribute("class", "floor");
        currentFloor.innerHTML = `
        <div class="upward-downward">
            <button class="UP-btn">UP</button>
            <button class="Down-btn">DOWN</button>
        </div>
        `
        document.querySelector('.lift-simulation').appendChild(currentFloor);
    }
}

function generateLifts(numberOfLifts){
    for(let i = 0 ; i < numberOfLifts ; i++){
        let liftCount = `Lift-${i}`
        const currentLift = document.createElement('div');
        currentLift.setAttribute('id',liftCount);

        // currentLift.setAttribute("class", "lifts");
        currentLift.innerHTML = `
            <div class="lifts">
                <div class="lift-left-door FLEX"></div>
                <div class="lift-right-door FLEX"></div>
            </div>
        `
        document.getElementById('Level-0').appendChild(currentLift);
    }
}