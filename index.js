module.exports = function(context) {
  return {
    hello: function(req, res) {
      return res.text('Hello World!').send();
    }
  }
};
