 describe('The Greeting function', function () {

     it('it should greet Fidel in English', function () {
        var greet1 = Greeting();
        
        assert.equal("Hello, Fidel", greet1.greet("Fidel", "english"));
        assert.equal(1, greet1.counter());
        
        assert.equal("Hello, Fred", greet1.greet("Fred"));
        assert.equal(2, greet1.counter());
        assert.equal("Hello, Fred", greet1.greet("Fred"));
        assert.equal(3, greet1.counter());

    });

    it('it should greet Fidel in Xhosa', function () {
        var greet1 = Greeting();
        
        assert.equal("Molo, Fidel", greet1.greet("Fidel", "Xhosa"));
        assert.equal(1, greet1.counter());
    
    

    });
    it('it should greet Fidel in Afrikaans', function () {
        var greet1 = Greeting();

        assert.equal("Hallo, Fidel", greet1.greet("Fidel", "Afrikaans"));
        assert.equal(1, greet1.counter());



    });

   /* it('it should', function () {
        
        assert.equal(1,2);
    });*/

});