import React from "react";
import Search from "./index";
import { render, waitForElement, fireEvent } from "@testing-library/react";

describe("Fire search events", () => {
  it("should fire click", async () => {
    const mockClick = jest.fn();
    const { getByTestId } = render(<Search onClick={mockClick} />);

    const searchIcon = await waitForElement(() => getByTestId("search-icon"));

    fireEvent.click(searchIcon);

    expect(mockClick.mock.calls.length).toBe(1);
  });

  it("should fire onchange", async () => {
    const mockChange = jest.fn();
    const { getByTestId } = render(<Search onChange={mockChange} />);

    const searchInput = await waitForElement(() => getByTestId("search-input"));

    fireEvent.change(searchInput, { target: { value: "a" } });

    expect(mockChange.mock.calls.length).toBe(1);
  });

  it("should set value", async () => {
    const searchValue = "value";
    const { getByTestId } = render(
      <Search value={searchValue} onChange={jest.fn()} />
    );

    const searchInput = await waitForElement(() => getByTestId("search-input"));

    expect(searchInput.value).toBe(searchValue);
  });
});
