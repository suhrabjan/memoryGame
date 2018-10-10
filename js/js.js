const icons_arr = ['<i class="fa fa-diamond"></i>', '<i class="fa fa-diamond"></i>', '<i class="fa fa-paper-plane-o"></i>', '<i class="fa fa-paper-plane-o"></i>','<i class="fa fa-anchor"></i>', '<i class="fa fa-anchor"></i>', '<i class="fa fa-bolt"></i>', '<i class="fa fa-bolt"></i>', '<i class="fa fa-cube"></i>', '<i class="fa fa-cube"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-leaf"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-bicycle"></i>', '<i class="fa fa-bomb"></i>', '<i class="fa fa-bomb"></i>'];
const box = document.getElementById('box');
const timer = document.querySelector('.timer');
const mover = document.querySelector('.moves');
const restart = document.querySelector('.restart');
const game = new Game();
let time = 0;
let moves = 0;


box.addEventListener('touchstart', function(e) {
    e.preventDefault();
    if (e.target.classList[0] === 'icons') {
        let index = e.target.classList[1] - 1;
        let targetSquare = e.target;
        if (!targetSquare.innerHTML) {
            game.main(index, targetSquare);
        }
    }
})
box.addEventListener('touchend', function(e) {
    e.preventDefault();
    if (e.target.classList[0] === 'icons') {
        let index = e.target.classList[1] - 1;
        let targetSquare = e.target;
        if (!targetSquare.innerHTML) {
            game.main(index, targetSquare);
        }
    }
})
box.addEventListener('touchcancel', function(e) {
    e.preventDefault();
    if (e.target.classList[0] === 'icons') {
        let index = e.target.classList[1] - 1;
        let targetSquare = e.target;
        if (!targetSquare.innerHTML) {
            game.main(index, targetSquare);
        }
    }
})
box.addEventListener('touchmove', function(e) {
    e.preventDefault();
    if (e.target.classList[0] === 'icons') {
        let index = e.target.classList[1] - 1;
        let targetSquare = e.target;
        if (!targetSquare.innerHTML) {
            game.main(index, targetSquare);
        }
    }
})

box.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.classList[0] === 'icons') {
        let index = e.target.classList[1] - 1;
        let targetSquare = e.target;
        if (!targetSquare.innerHTML) {
            game.main(index, targetSquare);
        }
    }
})


restart.addEventListener('click', function(){
    game.reset();
});


function Square() {

    this.draw = function(index, targetSquare) {
        targetSquare.innerHTML = icons_arr[index];
        targetSquare.firstChild.setAttribute('style', 'color: white; font-size: 35px; padding: 30% 0;')
        targetSquare.setAttribute('style', 'background: #02b3e4; text-align: center');
    }

    this.animateIfFalse = function(targetSquare) {
        targetSquare.style.animation = 'shake 0.8s linear';
    }

    this.animateIfTrue = function(targetSquare) {
        targetSquare.style.backgroundColor = '#02ccba';
        targetSquare.style.animation = 'confirm 0.7s linear';
    }

    this.clear = function(targetSquare) {
        if (targetSquare.innerHTML) {
            setTimeout(function(){
                targetSquare.innerHTML = '';
                targetSquare.setAttribute('style', '');
            }, 800)
        }
    }
}



function Game(object) {

    this.counter = 0;
    this.temp1;
    this.temp2;
    this.obj_container = [];
    this.randIdx;


    this.shuffle = function() {
        for (let i = 0; i < icons_arr.length; ++i) {
            this.randIdx = Math.floor(Math.random() * icons_arr.length);
            temp = icons_arr[i];
            icons_arr[i] = icons_arr[this.randIdx];
            icons_arr[this.randIdx] = temp;
        }
    }

    this.start = function() {
        for (let i = 0; i < icons_arr.length; ++i) {
            const obj = new Square;
            this.obj_container.push(obj);
        }
        this.shuffle();
        this.setTimer();
    }

    this.main = function(idx, target) {
            this.counter += 1;
        if (this.counter === 1) {
            this.obj_container[idx].draw(idx, target);
            this.temp1 = idx;
            this.temp2 = target;
        }
        else if (this.counter === 2) {
            this.moveCounter();
            this.counter = 0;
            this.obj_container[idx].draw(idx, target);
            if (icons_arr[this.temp1] === icons_arr[idx]) {
                this.obj_container[this.temp1].animateIfTrue(this.temp2);
                this.obj_container[idx].animateIfTrue(target);
            }
            else if (icons_arr[this.temp1] !== icons_arr[idx]) {
                this.obj_container[this.temp1].animateIfFalse(this.temp2);
                this.obj_container[idx].animateIfFalse(target);
                this.obj_container[this.temp1].clear(this.temp2);
                this.obj_container[this.temp1].clear(target);
            }
        }
    }

    this.setTimer = function() {
        setInterval(function(){
            if (time === 1) {
                timer.innerHTML = '1 Second';
            } else {
            timer.innerHTML = time.toString() + ' Seconds';
            }
            time += 1;
        }, 1000);
    }

    this.moveCounter = function() {
        moves += 1;
        if (moves === 1) {
            mover.innerHTML = '1 Move';
        } else {
            mover.innerHTML = moves.toString() + ' Moves';
        }
    }

    this.reset = function() {
        time = 0;
        moves = 0;
        mover.innerHTML = '0 Moves';
        timer.innerHTML = '0 Seconds';
    }

}

game.start();


