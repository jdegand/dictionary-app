import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";
import { ThemeProvider } from "../context/ThemeContext";
import { FontProvider } from "../context/FontContext";

describe("Navbar test", () => {
  test("Navbar select handleChange", () => {
    render(
      <FontProvider>
        <ThemeProvider>
          <NavBar />
        </ThemeProvider>
      </FontProvider>
    );

    expect(screen.getByTestId("font")).toHaveValue("serif");
    fireEvent.change(screen.getByTestId("font"), {
      target: { value: "sans-serif" },
    });
    expect(screen.getByTestId("font")).toHaveValue("sans-serif");
  });

  test("Navbar theme toggle", () => {
    render(
      <FontProvider>
        <ThemeProvider>
          <NavBar />
        </ThemeProvider>
      </FontProvider>
    );

    fireEvent.click(screen.getByTestId("mode"));

    expect(screen.getByTestId("mode")).toBeChecked();
  });
});
