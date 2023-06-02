const boxPhotosnap = document.querySelector('.box-photosnap')
window.addEventListener('DOMContentLoaded', () => {
   
    showBoxes()
 
});

function showBoxes(){
    fetch("data.json")
    .then((data) => {
        return data.json()
    })
    .then((item) => {
        let displayBox = item.map((info) => {
            return ` <div class="box-photosnap">
            <div class="p-1"> <img src=${info.logo}>
              <div class="names">
               <div class="ft"> <p class="photo">${info.company}</p>
                <p class="new">New!</p>
                <p class="fea"> Featured </p></div>
                <p class="senior"> ${info.position}</p>
                <ul class="lista">
                  <p>${info.postedAt}</p>  
                  <li> ${info.contract} </li> 
                  <li>${info.location}</li> 
                </ul>
              </div>
            </div>
            <div class="button">
              <button>${info.role}role</button>
              <button>${info.level}</button>
              <button> ${info.languages}</button>
              <button>${info.languages} </button>
              <button>${info.languages}</button>
            </div>
          </div>`
        });
        displayBox = displayBox.join("")
        boxPhotosnap.innerHTML = displayBox
        console.log(displayBox);
    })
}
