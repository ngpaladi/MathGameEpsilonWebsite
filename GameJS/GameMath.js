function randomOps(a, b, c, d, e, f, g, h) {
    "use strict";
    var valArray = [ a, b, c, d, e, f, g, h], total = 0, i = 0;
    for (i = 0; i < 8; i++) {
        var rand = Math.floor((Math.random(Date.getTime()) * 4));
        if (rand == 0) {
            total = total + valArray[i];
        } else if (rand == 1) {
            total = total - valArray[i];
        } else if (rand == 2){
            total = total * valArray[i];
        } else {
            total = total / valArray[i];
        }
    }
    return total;
}