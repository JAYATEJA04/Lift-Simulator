const floor = document.getElementById('floor');
const lift = document.getElementById('lift');
let count = 0;

function Floorbtn(){
    if(count > 10){
        alert('the maximum no.of floors should be <= 10');
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
        document.body.appendChild(floorsBTN)
        count++;
    }
}