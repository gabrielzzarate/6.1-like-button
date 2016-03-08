var Backbone = require('backbone');


var LikeButton = Backbone.Model.extend({
  defaults: {
        liked: 0,
        tag: "Likes"
    },
  like: function(){
    var likeValue= this.get('liked');
    this.set({"liked" :likeValue + 1});

  },

  tagUpdate: function(){
    var likeValue= this.get('liked');
    var tagValue = this.get('tag');
    if(likeValue === 1) {
      this.set({"tag": 'Like'});
      return this.get('tag');
    } else if (likeValue > 1) {
      this.set({"tag": 'Likes'});
      return this.get('tag');
    }
  }

});






module.exports = LikeButton;
