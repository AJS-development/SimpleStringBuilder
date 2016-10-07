"use strict";

module.exports = class StringBuilder {
constructor(string) {
this.t = [];
this.t.push(string)
}
append(/**/) {
if (!arguments) return false;
arguments.forEach((str)=>{
this.t.push(str)
})
return true;
}
toString() {
return this.t.join("")
}
}
