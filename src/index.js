
exports.min = function min (array) {
  if(array === undefined) return 0;
  if(array.length === 0) return [];
  array.sort((a, b) => a - b);

  return array[0];
};

exports.max = function max (array) {
    if(array === undefined) return 0;
    if(array.length === 0) return [];
    array.sort((a, b) => a - b);
    return array[array.length - 1];
};

exports.avg = function avg (array) {
    if(array === undefined) return 0;
    if(array.length === 0) return [];
    let sum = array.reduce((summ, current) => {
        return summ+= current;
    });
    return sum / array.length;
};
