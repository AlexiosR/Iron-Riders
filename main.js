"use strict"
let cont = document.getElementById('contant');

function selectseleOption(select) {
    let seleOption = Number(select);
    let result = "";
    
    for(let i = 1; i <= seleOption; i++){
        result += `
            <div class="container--js">
                <div class="container--picture__default">
                    <img class="randomPhotos"src="https://picsum.photos/142/100" alt="p">
                </div>
                <div class="container--text">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        `;

    }
    cont.innerHTML = result;
};
selectseleOption(10)


























// for (let i = 1; i < 21; i++) {
//     let src = i + '.jpg';
//     document.getElementById('contant').innerHTML += `
//     <div class="container--js">
//         <div class="container--picture__default">
//             <img class="randomPhotos"src="https://picsum.photos/142/100" alt="p">
//         </div>
//         <div class="container--text">
//             <h4>
//                 Lorem ipsum dolor sit.
//             </h4>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur.
//             </p>
//         </div>
//     </div>
//     `
// }