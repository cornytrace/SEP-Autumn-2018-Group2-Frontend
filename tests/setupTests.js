Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
})

jest.mock("plotly.js", () => jest.fn())
