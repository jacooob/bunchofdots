var wX = window.innerWidth;
var wY = window.innerHeight;

const boxColor = 'red';
const boxWidth = 5;
const boxHeight = 5;
const boxPadding = 5;
const borderColor = 'blue';
const boxBorder = 5;
const boxMargin = 1;

var styles = document.createElement('style');
styles.innerHTML = '.myBox {background-color:'+boxColor+';width:'+boxWidth+'px;height:'+boxHeight+'px;padding:'+boxPadding+'px;border:'+borderColor+' solid '+boxBorder+'px;margin:'+boxMargin+'px;display:inline-block;}';
document.body.appendChild(styles); 

var w = boxWidth + (boxPadding * 2) + (boxBorder * 2) + (boxMargin * 2);

console.log(wX,wY);
console.log(wX/w,wY/w);

var x = Math.round(wX/w);
var y = Math.round(wY/w);

console.log(x,y);

var howManyBoxes = x * (y-1);
console.log(howManyBoxes);

for(i=0;i<howManyBoxes;i++) {
  var myBox = document.createElement('div');  
  myBox.setAttribute('class','myBox');
  myBox.setAttribute('id','box'+i  )
  document.body.appendChild(myBox);

}