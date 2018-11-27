var app = {
  init: function() {
    var form = document.querySelector('#login-form');
    form.addEventListener('submit', app.getItem); 
  },

  getItem : function(event){
    

    event.preventDefault();
    var items = app.getItemValue();
    app.content;
    
    for (let j = 0; j < items.length; j += 1) {
    
       
      if (items[j].value.length < 3) {
        var message = "Le champ" + app.fields[j] + " doit faire plus de trois caractères.";
        app.addItem(message);

    
      }else{
            console.log('ça marche');
      }

    }
  },
      

  getItemValue : function(){
      var inputs = document.querySelectorAll('.field-input');

      return inputs;
  },

  fields: [
    'Identifiant',
    'Mot de passe'
  ],

  addItem: function(messageError){
      var divElement = document.querySelector('#errors');
      var itemP = document.createElement('p');

      itemP.textContent = messageError;
      divElement.appendChild(itemP);
  },

  colorChange: function(){
    var input = document.querySelectorAll('#field-username');
    input.addEventListener("focus", function( event ) {
      event.target.style.border = "blue"; 
    }, true);
    form.addEventListener("blue", function( event ) {
      event.target.style.border = "";
    }, true);
    }
    
  
};


document.addEventListener('DOMContentLoaded', app.init);