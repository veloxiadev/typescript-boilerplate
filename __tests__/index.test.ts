import { hello, Delays } from "../src";

describe("hello world function", () => {
  jest.useFakeTimers();

  // Define some testing data
  const name = "Typescript";
  let message: string;

  // Act before assertions
  beforeAll(async () => {
    const p: Promise<string> = hello(`${name}`);
    jest.runOnlyPendingTimers();
    message = await p;
  });

  // Assert if timeout actually occurred
  it("delays the message by 0.5 seconds", () => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      Delays.Short,
    );
  });

  // Assert correct message
  it("responds with `Hello, {name}`!", () => {
    expect(message).toBe(`Hello, ${name}!`);
  });
});
