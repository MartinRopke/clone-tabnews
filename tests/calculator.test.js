const calculator = require("../models/calculator.js")

test("Add 2 + 2 should return 4", () => {
  const result = calculator.add(2,2)
  expect(result).toBe(4)
})

test("Add 5 + 100 should return 105", () => {
  const result = calculator.add(5,100)
  expect(result).toBe(105)
})

test("Add -5 + 100 should return 95", () => {
  const result = calculator.add(-5,100)
  expect(result).toBe(95)
})

test("Add -5 + (-100) should return -105", () => {
  const result = calculator.add(-5,-100)
  expect(result).toBe(-105)
})

test("Add 'Banana' + 100 should return 'Error'", () => {
  const result = calculator.add("Banana", 100)
  expect(result).toBe("Error")
})

test("Add 100 + 'Banana' should return 'Error'", () => {
  const result = calculator.add(100, "Banana")
  expect(result).toBe("Error")
})

test("Add null + 1 should return 'Error'", () => {
  const result = calculator.add(null, 1)
  expect(result).toBe("Error")
})

test("Add 1 + null should return 'Error'", () => {
  const result = calculator.add(1, null)
  expect(result).toBe("Error")
})