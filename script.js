// Make the sun's face point in the user's mouse direction
document.addEventListener("mousemove", move_face);

var height = document.body.clientHeight;
var width = document.body.clientWidth

function move_face(e){
  document.querySelectorAll(".follow").forEach(function(move){
    mx = e.clientX - (width / 2);
    my = e.clientY - (height / 4);


    var x = mx / 15;
    var y = my / 7;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}


// Change certain images on hover
// This requires the image have a 'data-hover' field
var hoverables = ['.sun', '.pink-planet', '.moon', '.sattelite'];

hoverables.forEach(function (item, index) {
  var img = document.querySelector(item);
  var start = img.src;
  var hover = img.getAttribute('data-hover'); //specified in img tag
  
  img.onmouseover = () => { img.src = hover; }
  img.onmouseout = () => { img.src = start; } //to revert back to start
});


// Show opo-up is user is using a mobile device
const deviceType = () => {
  const agent = navigator.userAgent;
  if ( /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(agent) ) {
      return 'tablet';
  }
  else if ( /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(agent) ) {
      return 'mobile';
  }
  return 'desktop';
};

if ( deviceType != 'desktop' ) {
  popup = document.querySelector('#popup');
  popup.style.display = 'block';
}

