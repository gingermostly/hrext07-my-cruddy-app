
$(document).ready(function(){

  var alphabet = {0:'a', 1:'b', 2:'c', 3:'d', 4:'e', 5:'f', 6:'g', 7:'h', 8:'i', 9:'j', 10:'k', 11:'l', 12:'m', 13:'n', 14:'o', 15:'p', 16:'q', 17:'r', 18:'s', 19:'t', 20:'u', 21:'v', 22:'w', 23:'x', 24:'y'
  , 25:'z'};
  var letter = _.random(25); //alphabet array and letter variable used for getting random letters when generating a random, unique key for each new snippet
  var dataKeys = Object.keys(localStorage);

  if(dataKeys){
    dataKeys.forEach(key =>{
      var title = key.split(' ');
         $('.container-data').append(`<li><a class="code-link" data-keyValue="${key}" href="#">${title.slice(1).join(' ')}</a></li>`);

    //   $('.container-data').append(`<div class='data-wrapper'><textarea class="save-data-item" data-keyValue="${key}">${localStorage[key]}</textarea><button class="btn-delete">DELETE</button><button class="btn-update">UPDATE</button></div>`);
    });
  };

  var key = function(){
    var unique = alphabet[letter] + alphabet[letter] + _.random(300) + alphabet[letter].toUpperCase() + _.random(300) + alphabet[letter] + alphabet[letter].toUpperCase() + _.random(300) + alphabet[letter] + ' ' + $('.input-title').val();
    return unique;
  }; //Generate a random key for storing the code snippet

  $('.btn-clear').click(function(){
    $('.input-code').val('');
    $('.input-title').val('');
      $('.btn-update').remove();
      $('.btn-save').show();
  });

  $('.btn-save').click(function(){
    var codeData = $('.input-code').val();
    var keyData = key();
    var titleData = $('.input-title').val();

    if(titleData !== '' && codeData !== ''){
      localStorage.setItem(keyData, codeData);
      $('.container-data').append(`<li><a class="code-link" data-keyValue="${keyData}" href="#">${titleData}</a></li>`);
      $('.input-code').val('');
      $('.input-title').val('');
    }
    else if(titleData === ''){
      alert('PLEASE ENTER A TITLE!')
    }
    else if(codeData === ''){
      alert('PLEASE ENTER SOME CODE FIRST!')
    }
  });

$('.container-data').on('click', function(e){
   $('.input-code').val(`${localStorage[e.target.dataset.keyvalue]}`);
   $('.input-title').val(e.target.text);
   $('.btn-save').hide();
   $('.btn-update').remove();
   $('.btn-container').prepend('<button class="btn-update">UPDATE CODE</button>');
   $('.btn-update').on('click', function(){
    e.target.text = $('.input-title').val();
    var oldKey = e.target.dataset.keyvalue;
    var newKey = key();
    var newCode = $('.input-code').val();
    localStorage[newKey] = newCode;
    localStorage.removeItem(oldKey);
    e.target.dataset.keyvalue = newKey;
    $('.btn-update').remove();
    $('.btn-save').show();
    $('.input-code').val('');
    $('.input-title').val('');
   });
});


  // $('.container-data').on('click', function(e){
  //   if($(e.target).hasClass('btn-delete')){
  //     var itemKey = e.target.closest('.data-wrapper').querySelector('.save-data-item').dataset.keyvalue;
  //     localStorage.removeItem(itemKey);
  //     e.target.closest('.data-wrapper').remove();
  //   }
  // });
  // $('.container-data').on('click', function(e){
  //   if($(e.target).hasClass('btn-update')){
  //     var itemKey = e.target.closest('.data-wrapper').querySelector('.save-data-item').dataset.keyvalue;
  //     var itemData = e.target.closest('.data-wrapper').querySelector('.save-data-item').value;
  //     localStorage.setItem(itemKey, itemData)
  //   }
  // });
});