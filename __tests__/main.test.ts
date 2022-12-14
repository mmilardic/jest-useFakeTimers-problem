import { add } from "../src/main";

describe("test add", () => {

  beforeEach(() => {
    jest.useFakeTimers({})
    jest.setSystemTime(new Date('2020-10-01T12:00:00Z'))
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
