function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var myRanks = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < myRanks.length; i++){
  myRanks[i].innerHTML = (parseInt(myRanks[i].innerHTML)) + n;
  }
}

function deepestChild(){
  var mobDeep = document.getElementById('grand-node').querySelectorAll('div');
  var x = mobDeep.length-1;
  return mobDeep[x];
}