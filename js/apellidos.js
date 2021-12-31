
const groupNames = apellidos => {
   const map = apellidos.reduce((acc, val) => {
      let char = val.charAt(0).toUpperCase();
      acc[char] = [].concat((acc[char] || []), val);
      return acc;
   }, {});
   const res = Object.keys(map).map(el => ({
      letter: el,
      names: map[el]
   }));
   return res;
};
//console.log(groupNames(apellidos));

// Genera las Iniciales de los apellidos.
// var x=[];
// for (var i in groupNames(apellidos)) {
//   x.push('<li class=\"btn\" onclick=\"filterSelection(\''+groupNames(apellidos)[i].letter.toLowerCase()+groupNames(apellidos)[i].letter.toLowerCase()+'\')"> '+groupNames(apellidos)[i].letter+'</li>');
// };
// var letras = document.getElementById("iniciales");
// for (var i=0; i<x.length ; i++) {
//   var opt = x[i];
//   letras.innerHTML +=opt;
// };

//Crea Lista de Apellidos desde un array
var y=[];
for (var i in apellidos) {
    y.push(apellidos[i]);
};

var app=document.getElementById("apellidos");
for (var z=0; z<y.length; z++) {
  var op1 = y[z];
  app.innerHTML +=op1
};


filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  };
};

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    };
  };
};

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    };
  };
  element.className = arr1.join(" ");
};

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
};

