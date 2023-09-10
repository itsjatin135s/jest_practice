const sum = require("./var_matching");

// describe is used to group teste of smae function or same  family test case
describe("testing sum function with it and test method", () => {
  // you can use either test or it function they works same
  test("testing sum function", () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
    expect(result).toBeGreaterThan(3);
    expect(result).toBeGreaterThanOrEqual(4);
    expect(result).toBeLessThan(5);
    expect(result).toBeLessThanOrEqual(4);
    expect(result).toBeCloseTo(3.9999);
  });

  it("testing sum function", () => {
    const result = sum(1, 3);
    expect(result).not.toBe(5);
  });
});

// to test object we need to use toEqual insted of toBe.
describe("testing on different object", () => {
  test("testing objects", () => {
    const myObj = {};
    expect(myObj).toEqual({});
  });
  test("testing objects", () => {
    const myObj = [];
    expect(myObj).toEqual([]);
  });
  test("testing objects", () => {
    const myObj = ["jatin", "saini", "master"];
    expect(myObj).toContain("jatin");
    expect(myObj).not.toContain("satin");
  });
});

// testing against truthy and falsy
describe("testing truthy and falsy", () => {
  test("testing truthy", () => {
    const name = "jatin";
    expect(name).toBeTruthy();
    // regEx matcher
    expect(name).toMatch(/j/);
    expect(name).not.toMatch(/z/);
  });
  test("testing truthy", () => {
    const name = "saini";
    // you can have t expect in same test but it's not best practice
    expect(name).not.toBeFalsy();
    expect(name).not.toBeNull();
    expect(name).not.toBeUndefined();
    expect(name).toEqual("saini");
  });
});

// functional testing
function compileError() {
  throw new Error("wrong JDK error");
}
test("testing above function", () => {
  expect(() => compileError()).toThrowError(); //throw testing
  expect(() => compileError()).toThrowError("wrong JDK error"); //throw error message testing
  expect(() => compileError()).toThrow("wrong JDK error"); //testing message without specifying type of error
});
