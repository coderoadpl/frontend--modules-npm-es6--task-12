"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var x = 5;
x = (_readOnlyError("x"), 10);
