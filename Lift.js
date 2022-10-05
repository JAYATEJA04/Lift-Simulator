let floorInput = document.querySelector('.floor-input');
let liftInput = document.querySelector('.lift-input');
let confirmButton = document.querySelector('.confirm-btn');
let countFloors = 0;

// Adding floors and preventDefault.
confirmButton.addEventListener('click', function(e){
        e.preventDefault();
    }
)
function confirmClick(e){
    for(let i = 0 ; i < floorInput.value ; i++){
        if(floorInput.value > 10){
            alert(`Enter the no.of floors in the range of 1 to 10.`)
            break;
        } else {
            
            let floorsBTN = document.createElement("div");
            floorsBTN.setAttribute("class", "floors");

            floorsBTN.innerHTML = `
                <div class="floor" >
                    <div id="lift-buttons">
                        <button id="call-up">UP</button>
                        <button id="call-down">DOWN</button>
                    </div>
                </div>
            `
            document.body.appendChild(floorsBTN);
            countFloors++;
        }
    }
}