const icons_arr = ['<i class="fa fa-diamond"></i>', '<i class="fa fa-diamond"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-anchor"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-bolt"></i>', '<i class="fa fa-bolt"></i>', '<i class="fa fa-cube"></i>', '<i class="fa fa-cube"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-bomb"></i>'];
const box = document.getElementById('box')
let index;
let targetSquare;
const obj = new Square();

function Square() {

    this.draw = function() {
        if (!targetSquare.innerHTML) {
            targetSquare.innerHTML = icons_arr[index];
            targetSquare.firstChild.setAttribute('style', 'color: white; font-size: 35px; padding: 30% 0;')
            targetSquare.setAttribute('style', 'background: #02b3e4; text-align: center');
        }
    }

    this.animateIfFalse = function() {
        targetSquare.animate([
            { transform: 'translateX(0px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(0px)' }
            ],
            {
                duration: 200,
                iterations: 3
            });
    }

    this.animateIfTrue = function() {
        targetSquare.style.backgroundColor = '#02ccba';

    }
}

//     this.clear = funciton() {

//     }
// }


// function Game(object) {

//     this.shuffle = function() {

//     }

//     this.main = function() {

//     }

//     this.timer = function() {

//     }

//     this.getMoveCount = function() {

//     }

//     this.rating = function() {

//     }

//     this.reset() = function() {

//     }

// }



box.addEventListener('click', function(e) {
    if (e.target.classList[0] === 'icons') {
        index = e.target.classList[1] - 1;
        targetSquare = e.target;
        obj.draw();
        obj.animateIfTrue();
    }
    // e.target.innerHTML = '<i class="fa fa-paper-plane-o"></i>';
    // e.target.setAttribute('style', 'background: #02b3e4; font-size: 35px; color: white; text-align: center;')
    // console.log(e);
})
