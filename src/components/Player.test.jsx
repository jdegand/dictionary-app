import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Player from "./Player";
import { ThemeProvider } from "../context/ThemeContext";

// exam
const playerData =
  "https://api.dictionaryapi.dev/media/pronunciations/en/exam-uk.mp3";

describe("Player test", () => {
  test("Player renders and toggles buttons", () => {
    render(
      <ThemeProvider>
        <Player data={playerData} />
      </ThemeProvider>
    );

    const playButton = screen.getByTestId("play-svg");
    expect(playButton).toBeInTheDocument();

    fireEvent.click(playButton);

    const pauseButton = screen.getByTestId("pause-svg");

    expect(pauseButton).toBeInTheDocument();
  });
});
