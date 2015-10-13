import generate from './palindrome-products';

describe("Palindrome", function() {

  it("largest palindrome from single digit factors", function() {
    var palindromes = generate({maxFactor: 9});
    var largest = palindromes.largest;

    expect(largest.value).toEqual(9);
    //expect([1, 9]).toEqual(largest.factors);
    expect([[3, 3], [1, 9]], [[1, 9], [3, 3]]).toContain(largest.factors);

  });

  it("largets palindrome from double digit factors", function() {
    var palindromes = generate({ maxFactor: 99, minFactor: 10 });
    var largest = palindromes.largest;

    expect(largest.value).toEqual(9009);
    expect(largest.factors).toEqual([91, 99]);
  });

  it("smallest palindrome from double digit factors", function() {
    var palindromes = generate({ maxFactor: 99, minFactor: 10 });
    var smallest = palindromes.smallest;

    expect(smallest.value).toEqual(121);
    expect(smallest.factors).toEqual([11, 11]);
  });

  it("largest palindrome from triple digit factors", function() {
    var palindromes = generate({ maxFactor: 999, minFactor: 100 });
    var largest = palindromes.largest;

    expect(largest.value).toEqual(906609);
    expect(largest.factors).toEqual([913, 993]);
  });

  it("smallest palindrome from triple digit factors", function() {
    var palindromes = generate({ maxFactor: 999, minFactor: 100 });
    var smallest = palindromes.smallest;

    expect(smallest.value).toEqual(10201);
    expect(smallest.factors).toEqual([101, 101]);
  });

});
