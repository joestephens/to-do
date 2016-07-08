(function(exports) {
  function ಠ_ಠ(id) {
    if(this === window) {
      return new ಠ_ಠ(id);
    }

    this.e = document.getElementById(id);
    return this;
  };

  ಠ_ಠ.prototype = {
    set: function(body) {
      this.e.innerHTML = body;
    }
  };

  exports.ಠ_ಠ = ಠ_ಠ;
})(this);
