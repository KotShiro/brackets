module.exports = function check(str, bracketsConfig) {
  let indexNum = 0;
  bracketsConfig.forEach(function(item, i) {
      bracketsConfig[i] = String(item[0] + item[1])
    });
    console.log(bracketsConfig);
  while (true){
    bracketsConfig.forEach(function(item, i) {
      str = str.replace(item,'')
    });
    if (str === '') return true;
    if (indexNum === str.length) return false;
    indexNum = str.length;
  }
}
