// Question #3.5: Bindless binding.

function bind(context) {
  const that = this;
  return function() {
    that.apply(context, arguments);
  }
}

Function.prototype.bind = Function.prototype.bind ?? bind;
