let floorInput = document.querySelector('.floor-input');
let liftInput = document.querySelector('.lift-input');
let confirmButton = document.querySelector('.confirm-btn');
let destinationArr = [];
let liftQueue = [];
let liftPosition = [];

// Adding floors and preventDefault.
confirmButton.addEventListener('click', function(e){
        e.preventDefault();
        generateFloors(floorInput.value);
        generateLifts(liftInput.value);
        floorButtons();
    }
)

function generateFloors(numberOfFloors){
    if(numberOfFloors <= 0 || numberOfFloors > 10){
        alert(`The number of floors should be in the range of 1 to 10`);
    } else {
        document.querySelector('.lift-simulation').innerHTML = ``;
        for(let i = 0 ; i < numberOfFloors ; i++){
        let floorNumber = `Floor-${numberOfFloors - i - 1}`
        let currentFloor = document.createElement("div");
        currentFloor.setAttribute('id',floorNumber)

        currentFloor.setAttribute("class", "floor");
        currentFloor.innerHTML = `
        <div class="upward-downward">
            <button id=${currentFloor} class="floor-btn UP-btn">UP</button>
            <button id=${currentFloor} class="floor-btn Down-btn">DOWN</button>
            <p class="Floor-number"> ${floorNumber} </p>
        </div>
        `
        document.querySelector('.lift-simulation').appendChild(currentFloor);
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
    
            // currentLift.setAttribute("class", "lifts");
            currentLift.innerHTML = `
                <div class="lifts">
                    <div class="lift-left-door FLEX"></div>
                    <div class="lift-right-door FLEX"></div>
                </div>
            `
            document.getElementById('Floor-0').appendChild(currentLift);
            liftPosition[i] = 0;
        }
    }
}

function floorButtons(){
    let floorsButton = document.querySelector('.floor-btn');
    floorsButton.forEach(f => {
        f.addEventListener('click', () => {
            let targetFloor = parseInt(f.id.slice(-1));
            if(!destinationArr.includes(targetFloor)){
                destinationArr.push(targetFloor);
                liftQueue.push(targetFloor);
            }
        })
    })
}