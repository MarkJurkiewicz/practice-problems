var oves = ['Wigglers', 'High Life', 'East Wing', 'Chapparosa', 'From DOWNTOWN', 'Silver Lantern'];

function reverseOves (oves) {
  for(var i = oves.length - 1; i >= 0; i--) {
     console.log(oves[i]);
    }
  return oves;
}
reverseOves(oves);


var arr = ['Wigglers', 'High Life', 'East Wing', 'Chapparosa', 'From DOWNTOWN', 'Silver Lantern'];

function reverseArray(arr) {
    var len = arr.length;
    var halfLen = Math.floor(len/2);
    for (var i = 0; i < halfLen; i++) {
        var swap = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i] = swap;
    }
    return arr;
}