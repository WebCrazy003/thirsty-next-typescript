import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Header } from "../../src/components";

describe("Header", () => {
  it("renders Header title", () => {
    render(<Header title="thirsty" showNav={false} />);

    expect(screen.getByText("thirsty")).toBeInTheDocument();
  });
});
