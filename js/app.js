var app = {
  init: function() {
    var form = document.querySelector('#login-form');
    var inputUsername = document.querySelector('#field-username');
    var inputPassword = document.querySelector('#field-password');
    form.addEventListener('submit', app.getItem);
    inputUsername.addEventListener('blur', app.colorChange);
    inputPassword.addEventListener('blur', app.colorChange);    
  },

  getItem : function(event){
    

    event.preventDefault();
    var items = app.getItemValue();
    
    document.querySelector('#errors').innerHTML = null;
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
    var items = app.getItemValue();
    //var input = document.querySelectorAll('.field-input');

    for (let j = 0; j < items.length; j += 1) {
      if (items[j].value.length < 3) {
        items[j].style.borderColor = "red";
      }else {
        items[j].style.borderColor = "green";
      }
    }; 
  },
    
  
};

// Pour pouvoir changer la couleur peu importe le nombre de Input qu'on ajoute sur notre page :
// idInput : [
//   'username',
//   'password',
// ],

// colorChange2: function(){
//   for (let i = 0; i < app.idInput.length; i++) {
//     var input = document.querySelector('#field-'+ app.idInput[i]);
//     input.addEventListener('blur',app.colorChange);
//   }
// }

document.addEventListener('DOMContentLoaded', app.init);