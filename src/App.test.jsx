import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { FontProvider } from "./context/FontContext";
import { ThemeProvider } from "./context/ThemeContext";

describe("App test", () => {
  test("Form handleChange", () => {
    render(
      <FontProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FontProvider>
    );

    const input = screen.getByPlaceholderText(/Search for a word/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "atlas" } });
    expect(input).toHaveValue("atlas");
  });
});
