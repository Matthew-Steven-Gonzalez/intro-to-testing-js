// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be a defined function.', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
            expect(typeof sayHello()).toBe('string');
        });
    it('should return "Hello, Jane!" when called with Jane.', function () {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when called with Alex.', function () {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" when called with Alex.', function () {
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when called.', function () {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when called with true.', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when called with false.', function () {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it('should return "null" when called with null data type.', function () {
        expect(sayHello(null)).toBe('null data was input!');
    });
    it('should return "empty string!" when called with "".', function () {
        expect(sayHello("")).toBe('empty string!');
    });
//   it('should return "you have entered a number!" when called with number type data.', function () {
//      expect(sayHello(2)).toBe("you have entered a number!");
//  });

});

describe ("isFive", function(){
    it('should be a defined function.', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof isFive()).toBe('string');
    });
    it('should return a string when called.', function () {
        expect(isFive(true)).toBe('you have entered a boolean!');
    });
    it('should return "false!" when called with false.', function () {
        expect(isFive(false)).toBe('you have entered a boolean!');
    });
    it('should return "True" when called with "5".', function () {
        expect(isFive("5")).toBe('True');
    });
    it('should return "True" when called with "5".', function () {
        expect(isFive(5)).toBe('True');
    });
});

describe('isEven',function(){
    it('should be a defined function.', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof isEven()).toBe('string');
    });
    it('should return a string when called a Boolean "true".', function () {
        expect(isEven(true)).toBe("You have not entered a number!");
    });
    it('should return a string when called a Boolean "false".', function () {
        expect(isEven(false)).toBe("You have not entered a number!");
    });
    it('should return "the number is even! string when input is "2".', function () {
        expect(isEven(2)).toBe('the number is even!');
    });
    it('should return "the number is odd!" when called with "-4".', function () {
        expect(isEven(-4)).toBe('the number is even!');
    });
    it('should return "the number is odd!" when called with "3".', function () {
        expect(isEven(3)).toBe('the number is odd!');
    });
    it('should return "You have not entered a number!" when called with "Banana".', function () {
        expect(isEven("Banana")).toBe('You have not entered a number!');
    });
    it('should return "You have not entered a number!" when called with "Infinity".', function () {
        expect(isEven(Infinity)).toBe('You have not entered a number!');
    });
    it('should return "the number is even!" when called with "8".', function () {
        expect(isEven("8")).toBe('the number is even!');
    });
})
describe('isVowel', function(){
    it('should be a defined function.', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof isVowel()).toBe('string');
    });
    it('should return false when called with "true":.', function () {
        expect(isVowel(true)).toBe('false');
    });
    it('should return false when called with "false".', function () {
        expect(isVowel(false)).toBe('false');
    });
    it('should return false when called with "Banana".', function () {
        expect(isVowel("Banana")).toBe(false);
    });
    it('should return "true" when called with "a" or "A".', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return "true" when called with "e" or "E".', function () {
        expect(isVowel("e")).toBe(true);
    });
});
describe('add', function(){
    it('should be a defined function.', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number when called.', function () {
        expect(typeof add()).toBe('number');
    });
    it('should return 5 when called with 2 and 3.', function () {
        expect(add(2 , 3)).toBe(5);
    });
    it('should return -12 when called with -3 and -9.', function () {
        expect(add(-3 , -9)).toBe(-12);
    });
    it('should return 11 when called with "5" and 6.', function () {
        expect(add("5" , 6)).toBe(11);
    })
    it('should return 6 when called with -3 and -9.', function () {
        expect(add("-4" , 10)).toBe(6);
    });
    it('should return NaN when called with "banana" and "split".', function () {
        expect(add("banana" , "split")).toBe(NaN);
    });
});



