!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("stimulus"),require("slim-select")):"function"==typeof define&&define.amd?define(["stimulus","slim-select"],t):(e=e||self).StimulusSlimSelect=t(e.Stimulus,e.slimSelect)}(this,function(e,t){return t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,function(e){var o,n;function i(){return e.apply(this,arguments)||this}n=e,(o=i).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n;var s=i.prototype;return s.connect=function(){this.slimselect=new t({select:this.element})},s.disconnect=function(){this.slimselect.destroy()},i}(e.Controller)});
//# sourceMappingURL=stimulus-slimselect.umd.js.map