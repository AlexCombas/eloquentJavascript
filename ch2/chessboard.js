var grid = 8;

var makeLine = function(size, x_i) {
    var line = '';
    var x = x_i; 
    for (var i = 0; i < size; i++) {
        if (x % 2 === 0){
            line = line + ' ';
            x++;
        } else {
            line = line + '#';
            x++;
        }
    }
    return line;
}

for (var i = 0; i < grid; i++){
    console.log(makeLine(grid, i));
}
