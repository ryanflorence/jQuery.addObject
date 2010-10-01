jQuery.addObject
================

This method allows you to add a JavaScript constructor to the jQuery, and then manage the state of an instance with the jQuery API.  For example:

    var MyObject = function(selector, options){

    	this.jQuery = $(selector);
    	this.options = $.extend(this.defaults, options);

    }; MyObject.prototype = {

      defaults: {
        one: 1,
        two: 2
      },

    	foo: 'bar',

    	addArgs: function(arg, arg2, arg3){
    		return arg + arg2 + arg3;
    	},

    	returnThis: function(){
    		return this;
    	}

    };
    
    jQuery.addObject('myObject', MyObject);

Now you can use your object like this:

### Create an instance

    // Create an instance stored on #element
    $('#element').myObject({
      one: 'one',
      two: 'two'
    });

### Get properties

    $('#element').myObject('foo'); // => 'bar'

### Set properties

    $('#element').myObject('foo', 'baz');
    $('#element').myObject('foo'); // => 'baz'

### Call methods

    $('#element').addArgs(1,2,3); // => 6

### Chain

If the method returns `this`, then through the jQuery API it will return the jQuery.

    $('#element').myObject('returnThis').css().myObject('foo', 'bar').fadeOut();

### Get the object out of the jQuery API

    var instance = $('#element').myObject(); // called with no args, after already instantiated, returns the instance
    // or just get it from the data
    var instance = $('#element').data('myObject');
    instance.addArgs(1,1,1); // => 3
    instance.returnThis().foo; // => 'baz'

Running the tests
-----------------

QUnit is a submodule of this repo.  Run it as follows:

    git submodule init
    git submodule update

Then pop open Test/index.html

---

This chunk of code is [moo4q](http://moo4q.com)'s twin sister.  They both do the same thing, interact with JavaScript objects through jQuery's simple API; moo4q just get's 14k of the rockin' MooTools inheritance API and language extensions as well.
