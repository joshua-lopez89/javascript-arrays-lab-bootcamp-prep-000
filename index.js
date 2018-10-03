// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendKitten(kitty){
  kittens.push(kitty);
}

 function destructivelyPrependKitten(kitty){
  kittens.unshift(kitty);
}

 function destructivelyRemoveLastKitten(kitty){
  kittens.pop();
}

 function destructivelyRemoveFirstKitten(kitty){
  kittens.shift();
}

 function appendKitten(kitty){
  var cats = kittens.concat(kitty);
  return cats;
}

 function prependKitten(kitty){
  cat= [cat];
  var cats = cat.concat(kittens);
  return cats;
}

 function removeLastKitten(kitty){
  var cats = kittens.slice(0, -1);
  return cats;
}

 function removeFirstKitten(kitty){
  var cats= kittens.slice(1);
  return cats;
}




