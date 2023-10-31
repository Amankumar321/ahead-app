// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
    }));
} catch(e) {}


// call this to Disable
export function disableScroll(ele) {    
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    ele.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    ele.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    ele.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    ele.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
export function enableScroll(ele) {
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    ele.removeEventListener('DOMMouseScroll', preventDefault, false);
    ele.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    ele.removeEventListener('touchmove', preventDefault, wheelOpt);
    ele.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}