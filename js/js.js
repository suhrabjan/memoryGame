const icons_arr = ['<i class="fa fa-diamond"></i>', '<i class="fa fa-diamond"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-anchor"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-bolt"></i>', '<i class="fa fa-bolt"></i>', '<i class="fa fa-cube"></i>', '<i class="fa fa-cube"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-bomb"></i>'];
const box = document.getElementById('box')
const game = new Game();
let temp;


function Square() {

    this.draw = function(index, targetSquare) {
        if (!targetSquare.innerHTML) {
            targetSquare.innerHTML = icons_arr[index];
            targetSquare.firstChild.setAttribute('style', 'color: white; font-size: 35px; padding: 30% 0;')
            targetSquare.setAttribute('style', 'background: #02b3e4; text-align: center');
        }
    }

    this.animateIfFalse = function(targetSquare) {
        targetSquare.style.animation = 'shake 0.9s ease';
    }

    this.animateIfTrue = function(targetSquare) {
        targetSquare.style.backgroundColor = '#02ccba';
        targetSquare.style.animation = 'confirm 0.8s ease';
    }

    this.clear = function(targetSquare) {
        if (targetSquare.innerHTML) {
            setTimeout(function(){
                targetSquare.innerHTML = '';
                targetSquare.setAttribute('style', '');
            }, 900)
        }
    }
}



function Game(object) {

    this.counter = 0;
    this.obj_container = [];

    this.shuffle = function() {

    }

    this.start = function() {
        for (let i = 0; i < icons_arr.length; ++i) {
            const obj = new Square;
            this.obj_container.push(obj);
        }
    }

    this.main = function(idx, target) {
        if (!target.innerHTML) {
            this.counter += 1;
        }
        if (this.counter === 1) {
            this.obj_container[idx].draw(idx, target);
            temp1 = idx;
            temp2 = target;
        }
        else if (this.counter === 2) {
            this.counter = 0;
            this.obj_container[idx].draw(idx, target);
            if (icons_arr[temp1] === icons_arr[idx]) {
                this.obj_container[temp1].animateIfTrue(temp2);
                this.obj_container[idx].animateIfTrue(target);
            }
            else if (icons_arr[temp1] !== icons_arr[idx]) {
                this.obj_container[temp1].animateIfFalse(temp2);
                this.obj_container[idx].animateIfFalse(target);
                this.obj_container[temp1].clear(temp2);
                this.obj_container[temp1].clear(target);
            }
        }
    }

//     this.timer = function() {

//     }

//     this.getMoveCount = function() {

//     }

//     this.rating = function() {

//     }

//     this.reset() = function() {

//     }

}

game.start();
// console.log(game.obj_container[0] === game.obj_container[0]);

box.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.classList[0] === 'icons') {
        let index = e.target.classList[1] - 1;
        let targetSquare = e.target;
        game.main(index, targetSquare);
    }
})
