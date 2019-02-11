/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){

  var alphabet = {0:'a', 1:'b', 2:'c', 3:'d', 4:'e', 5:'f', 6:'g', 7:'h', 8:'i', 9:'j', 10:'k', 11:'l', 12:'m', 13:'n', 14:'o', 15:'p', 16:'q', 17:'r', 18:'s', 19:'t', 20:'u', 21:'v', 22:'w', 23:'x', 24:'y'
, 25:'z'};
  var letter = _.random(25); //alphabet array and letter variable used for getting random letters when generating a random, unique key for each new snippet

  var key = function(){
    var unique = alphabet[letter] + alphabet[letter] + _.random(300) + alphabet[letter].toUpperCase() + _.random(300) + alphabet[letter] + alphabet[letter].toUpperCase() + _.random(300) + alphabet[letter];
    return unique;
  }; //Generate a random key for storing the code snippet

  $('.btn-save').on('click', function(e){

    var codeData = $('.input-code').val();
    var valueData = $('.input-value').val();
    var keyData = key();

    localStorage.setItem(keyData, codeData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.container-data').append('<textarea class="save-data-item" data-keyValue="'+ keyData +'">'+codeData+'</textarea>');
    $('.input-code').val('');
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  // $('.container-data').on('click', '.display-data-item', function(e){
  //   var keyData = e.currentTarget.dataset.keyvalue;
  //   localStorage.removeItem(keyData);
  //   $('.container-data').text('');
  // });
  // // delete all?
  $('.btn-clear').click(function(){
    $('.input-code').val('');
  });
});