$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
    $('.rename-button').click(clickedRenameButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Rex", weight: 10, happiness: 50, evolved: false, shiny: false};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness += 10;
      // Increase pet weight
      pet_info.weight += 2;

      $('.pet-comment').text("Thank you for the treat!");

      checkAndUpdatePetInfoInHtml();

      petAnimation('pet-bounce');
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness += 15;
      // Decrease pet weight
      pet_info.weight -= 1;

      $('.pet-comment').text("That was fun!")
      
      checkAndUpdatePetInfoInHtml();

      petAnimation('pet-bounce');
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness -= 10;
      // Decrease pet weight
      pet_info.weight -= 2

      $('.pet-comment').text("Im feeling exhausted.")

      checkAndUpdatePetInfoInHtml();

      petAnimation('pet-bounce');
    }

    function clickedSleepButton(){
      pet_info.happiness += 10;

      $('.pet-comment').text("Now I feel well rested!")

      checkAndUpdatePetInfoInHtml();

      petAnimation('pet-bounce');
    }

    function petAnimation(animationName){
      const petImage = document.querySelector('.pet-image');

      petImage.classList.remove('pet-bounce', 'pet-evolve');
      void petImage.offsetWidth;
      petImage.classList.add(animationName);
    }

    function clickedRenameButton(){
      //.val() is used to get values of form elements such as input
      // Here it gets the new name entered by the user with .val()
      var newName = $('.pet-name-input').val();

      // Checks to see if specific name is entered to show shiny form
      if(newName != ""){
        pet_info.name = newName;

        if (newName.toLowerCase() === "shiny"){
          pet_info.shiny = true;
          $('.pet-comment').text("Cool! Im a shiny Pokemon!");
        }else{
          pet_info.shiny = false;
          $('.pet-comment').text("My name has changed!");
        }
      }
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      if(pet_info.happiness >= 100 && !pet_info.evolved){
        pet_info.evolved = true;
        $('.pet-comment').text("I evolved into Tyrantrum!");

        updatePetInfoInHtml();

        petAnimation('pet-evolve');

        return;
      }
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.weight < 0){
        pet_info.weight = 0;
      }

      if(pet_info.happiness < 0){
        pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      // .attr() gets an element's html attribute.
      // Here, it changes the image's src attrubute to display a specific image depending on 
      // the value of the pet's eovlution.
      if(pet_info.evolved && pet_info.shiny){
        $('.pet-image').attr('src','images/shiny-tyrantrum.webp');
      }else if(pet_info.evolved){
        $('.pet-image').attr('src','images/tyrantrum.webp');
      }else if(pet_info.shiny){
        $('.pet-image').attr('src', 'images/shiny-tyrunt.webp');
      }else{
        $('.pet-image').attr('src', 'images/tyrunt.webp');
      }


      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  