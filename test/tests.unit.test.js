const axios = require("axios");

const {
  addIndefinite,
  addTwoNumbers,
  divideTwoNumbers,
  gitHubGetRepo,
  multiplyIndifinite,
  twoNumbersDiffernce,
  twoStringsConcat
} = require("../src/allModules");

//FUNCTION TO ADD TWO NUMBERS
describe("Adding Two Numbers", () => {
  it("should return sum of two Integers", () => {
    expect(addTwoNumbers(1, 1)).toBe(2);
  });

  it("should return sum of two floating point numbers", () => {
    expect(addTwoNumbers(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it("should return 'invalid inputs, only numbers are allowed' if one argument is a string", () => {
    expect(addTwoNumbers("1", 1)).toMatch(
      /invalid input, only numbers are allowed/
    );
  });

  it("should return 'invalid inputs, only numbers are allowed' if both argument are strings", () => {
    expect(addTwoNumbers("1", "1")).toMatch(
      /invalid input, only numbers are allowed/
    );
  });
  it("should return 'insert a second arguement' if only one argument is parsed", () => {
    expect(addTwoNumbers(1)).toMatch(/insert a second arguement/);
  });
});

//FUNCTION TO ADD AN INDEFINITE AMOUNT OF NUMBERS
describe("Add An Indefinite Amount Of Numbers", () => {
  it("should return 'input cannot be empty' if no input", () => {
    expect(addIndefinite()).toMatch(/input cannot be empty/);
  });
  it("should return the same input value if only one input is provided", () => {
    expect(addIndefinite(10)).toBe(10);
  });
  it("should return the same input value if only one input is provided", () => {
    expect(addIndefinite(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });
  it("should return 'invalid' if non-number type(s) found", () => {
    expect(addIndefinite(1, 2, 3, 4, "hi", 5)).toMatch(
      /invalid, only numbers are allowed/
    );
  });
});

//FUNCTION TO CALCULATE THE DIFFERENCE BETWEEN TWO NUMBERS
describe("Difference Between Two Numbers", () => {
  it("should return 'input cannot be empty' if no input", () => {
    expect(twoNumbersDiffernce()).toMatch(/fill all fields/);
  });
  it("should return 'invalid inputs, only numbers are allowed' if one argument is a string", () => {
    expect(twoNumbersDiffernce(2, "2")).toMatch(
      /invalid input, only numbers are allowed/
    );
  });
  it("should return 'invalid inputs, only numbers are allowed' if one argument is a string", () => {
    expect(twoNumbersDiffernce(3, 2)).toBe(1);
  });
  it("should return 'insert a second arguement' if only one argument is parsed", () => {
    expect(twoNumbersDiffernce(1)).toMatch(/fill all fields/);
  });
});

//FUNCTION TO MULTIPLY AN INDEFINITE AMOUNT OF ARGUMENTS
describe("Multiply An Indefinite Amount Of Arguments", () => {
  it("should return 'input cannot be empty' if no input", () => {
    expect(multiplyIndifinite()).toMatch(/fill all fields/);
  });
  it("should return the same input value if only one input is provided", () => {
    expect(multiplyIndifinite(10)).toBe(10);
  });
  it("should return the sum of indefinite numbers", () => {
    expect(multiplyIndifinite(1, 2, 3, 4, 5)).toBe(120);
  });
  it("should return 'invalid' if non-number type(s) found", () => {
    expect(multiplyIndifinite(1, 2, 3, 4, "hi", 5)).toMatch(
      /invalid, only numbers are allowed/
    );
  });
});

//FIRST NUMBER DIVIDED BY THE SECOND NUMBER FUNCTION
describe("First Number Divided By The Second Number.", () => {
  it("should return 'input cannot be empty' if no input", () => {
    expect(divideTwoNumbers()).toMatch(/fill all fields/);
  });
  it("should return 'invalid inputs, only numbers are allowed' if one argument is a string", () => {
    expect(divideTwoNumbers(2, "2")).toMatch(/fill all fields/);
  });
  it("should return quotient", () => {
    expect(divideTwoNumbers(4, 2)).toBe(2);
  });
  it("should return 'insert a second arguement' if only one argument is parsed", () => {
    expect(divideTwoNumbers(1)).toMatch(/fill all fields/);
  });
});

//CONCATENATE TWO STRINGS FUNCTION
describe("Concatenate two strings", () => {
  it("should return 'input cannot be empty' if no input", () => {
    expect(twoStringsConcat()).toMatch(/invalid/);
  });
  it("should return 'all fields are required' if only one input available", () => {
    expect(twoStringsConcat("", "")).toMatch(/both fields are required/);
  });
  it("should return 'only letters are allowed' if one or both input are not strings", () => {
    expect(twoStringsConcat(22, "dd")).toMatch(/only letters are allowed/);
  });
  it("should return two strings concatenated", () => {
    expect(twoStringsConcat("hello", "world")).toBe("hello world");
  });
});

//GITHUB API MOCK CALL WITH AXIOS:GET METHOD
describe("GitHub API Mock Call", () => {
  it("should call gitHubGetRepo function", async () => {
    axios.get = jest.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 152319575,
            node_id: "MDEwOlJlcG9zaXRvcnkxNTIzMTk1NzU=",
            name: "my-tutorial-website"
          },
          {
            id: 167033612,
            node_id: "MDEwOlJlcG9zaXRvcnkxNjcwMzM2MTI=",
            name: "mydiary"
          }
        ]
      })
    );
    const repos = await gitHubGetRepo("AbetangJoseph");
    expect(repos.data.map(e => e.name)).toBeDefined();
  });
});
it("should call axios and loop through returned value to confirm the specific repo name exists", async () => {
  axios.get = jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 152319575,
          node_id: "MDEwOlJlcG9zaXRvcnkxNTIzMTk1NzU=",
          name: "my-tutorial-website"
        },
        {
          id: 167033612,
          node_id: "MDEwOlJlcG9zaXRvcnkxNjcwMzM2MTI=",
          name: "mydiary"
        }
      ]
    })
  );
  const repos = await gitHubGetRepo("AbetangJoseph");
  console.log(repos);

  expect(repos.data.map(e => e.name)).toContain("mydiary");
});
