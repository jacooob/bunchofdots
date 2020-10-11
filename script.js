const bg = document.querySelector('#bg');
const pages = 4;
var active = [0,0,0,0];

const fx_in_input = document.querySelector('#a_in');
var fx_in = fx_in_input.value;

fx_in_input.onchange = function() {
  fx_in = fx_in_input.value;
}

const fx_out_input = document.querySelector('#a_out');
var fx_out = fx_out_input.value;

fx_out_input.onchange = function() {
  fx_out = fx_out_input.value;
}

function openPage(v) {
  if(active[v]) {
    active[v] = 0;
    animateCSS('#page'+v, fx_out).then((message) => {
      document.querySelector('#page'+v).classList.add('hidden');
    });
  } else {
    for(i=0;i<pages;i++){
      if(active[i]) {
        active[i] = 0;
        var t = i;
        animateCSS('#page'+i, fx_out).then((message) => {;
          document.querySelector('#page'+t).classList.add('hidden');
        });
      }
        if( (i) == v ) {
          active[i] = 1;
          document.querySelector('#page'+v).classList.remove('hidden');
          animateCSS('#page'+v, fx_in);
        }
      
    }
  }
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });