function NumCard(val) {
    "use strict";
    this.value = val;
    this.locationVal = 0;
}
function OpCard(operator) {
    "use strict";
    this.op = operator;
    this.loc = 0;
}
function GameDataPanel() {
    "use strict";
    this.targetNum = 0;
    this.score = 0;
    this.timeInit = Date.getTime();
    this.time = Date.getTime() - this.timeInit;
    this.addPoints = function (newPts) {
        this.score = this.score + newPts;
    };
    this.update = function () {
        this.time = Date.getTime() - this.timeInit;
    };
}
function GameView() {
    "use strict";
    this.c1 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.c2 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.c3 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.c4 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.c5 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.c6 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.c7 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.c8 = new NumCard(Math.floor((Math.random(Date.getTime()) * 50)));
    this.temp = new NumCard(0);
    this.dataPanel = new GameDataPanel();
    this.dataPanel.targetNum = randomOps(this.c1.val, this.c2.val, this.c3.val, this.c4.val, this.c5.val, this.c6.val, this.c7.val, this.c8.val);
}
