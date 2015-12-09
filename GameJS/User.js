function User() {
    "use strict";
    this.username = "";
    this.password = "";
    this.setUserDetails = function (u, p) {
        this.username = u;
        this.password = CryptoJS.SHA1(p);
    };
}