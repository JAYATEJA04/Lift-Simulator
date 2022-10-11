let floorInput = document.querySelector('.floor-input');
let liftInput = document.querySelector('.lift-input');
let confirmButton = document.querySelector('.confirm-btn');


// Adding floors and preventDefault.
confirmButton.addEventListener('click', function(e){
        e.preventDefault();
        generateFloors(floorInput.value);
        generateLifts(liftInput.value);
        let UPbutton = document.querySelector('.UP-btn');
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
            <button class="UP-btn">UP</button>
            <button class="Down-btn">DOWN</button>
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
        }
    }
}

function clickButton(){
    
}
