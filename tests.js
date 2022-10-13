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
}
)




