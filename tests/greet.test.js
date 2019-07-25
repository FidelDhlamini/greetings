 describe('The Greeting function', function () {

     it('it should greet the name entered in English and count it once', function () {
         var greet1 = Greetings();

         assert.equal("Hello, Fidel", greet1.greet("Fidel", "English"));

         assert.equal(1, greet1.numberOfGreetedNames());

         //assert.equal("Hello, Fred", greet1.greet("Fred"));
         // assert.equal(2, greet1.counter());
         // assert.equal("Hello, Fred", greet1.greet("Fred"));
         // assert.equal(3, greet1.counter());

     });

     it('it should greet the name entered in Xhosa and count it once', function () {
         var greet1 = Greetings();

         assert.equal("Molo, Fidel", greet1.greet("Fidel", "Xhosa"));
         assert.equal(1, greet1.numberOfGreetedNames());




     });
     it('it should greet the name entered in Afrikaans and count it once', function () {
         var greet1 = Greetings();

         assert.equal("Hallo, Fidel", greet1.greet("Fidel", "Afrikaans"));
         assert.equal(1, greet1.numberOfGreetedNames());




     });
     it('it should clear spaces if name is typed with spaces', function () {
         var greet1 = Greetings();

         assert.equal("Hallo, Fidel", greet1.greet("F i del", "Afrikaans"));
        




     });
    it('it should cut off numbers if name is entered with a number ', function () {
          var greet1 = Greetings();

          assert.equal("Hallo, Fidel", greet1.greet("Fidel96", "Afrikaans"));





    });

     /* it('it should', function () {
          
          assert.equal(1,2);
      });*/

 });