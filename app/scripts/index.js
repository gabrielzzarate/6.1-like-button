
var $ = require('jQuery');
var handlebars = require('handlebars');
var LikeButtons = require('./models/likes');
//var PersonCollection = require('./models/person-collection');

$(function (){


var likeButton = new LikeButtons();



$('.main-content').on('click', '.like-button', function(evt){
  likeButton.like();
  likeButton.tagUpdate();
  doTemplate('.like-button', '#likes', likeButton);
});





  function doTemplate(target, source, context){
    var source = $(source).html();
    var template = handlebars.compile(source);
    $(target).html(template(context));

  }


}());
