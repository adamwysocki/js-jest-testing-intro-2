import { render, fireEvent, cleanup } from "react-testing-library";

import Index from "../../pages";

afterEach(cleanup);

describe("RTL tests", () => {
  it("should render and match snapshot", () => {
    const IndexPage = render(<Index />);
    expect(IndexPage.container).toMatchSnapshot();
  })

  it("should change the language to spanish when the checkbox is checked", () => {
    const IndexPage = render(<Index />);

    const checkbox = IndexPage.getByLabelText("español");

    fireEvent.click(checkbox);

    expect(IndexPage.container).toMatchSnapshot();
  });

  it("should update the welcome message when something is typed", () => {
    const IndexPage = render(<Index />);

    const input = IndexPage.container.querySelector("input#name");
    expect(input).not.toBeNull();

    fireEvent.change(input, {target: { value: "testy timothy" } });

    expect(IndexPage.container).toMatchSnapshot();
  });

  it("should update the welcome message when something is typed and the checkbox is checked", () => {
    const IndexPage = render(<Index />);

    const input = IndexPage.container.querySelector("input#name");
    expect(input).not.toBeNull();

    fireEvent.change(input, {target: { value: "testy timothy" } });

    const checkbox = IndexPage.getByLabelText("español")
    fireEvent.click(checkbox);

    expect(IndexPage.container).toMatchSnapshot();
  });
});