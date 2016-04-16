var optimusPrime = function(number){
   var x = 2
   while (x < number) {
      if (number%x===0){
         return "This number is not prime"
      }
      else {
         return "This number is Optimus Prime!"
      }
      x++;
   }
}