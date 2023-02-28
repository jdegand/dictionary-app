import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Word from "./Word";
import { ThemeProvider } from "../context/ThemeContext";

const wordData = {
  word: "exam",
  phonetic: "/ɛɡˈzæm/",
  phonetics: [
    {
      text: "/ɛɡˈzæm/",
      audio:
        "https://api.dictionaryapi.dev/media/pronunciations/en/exam-uk.mp3",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9014250",
      license: {
        name: "BY 3.0 US",
        url: "https://creativecommons.org/licenses/by/3.0/us",
      },
    },
  ],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition: "The act of examining.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "Particularly, an inspection by a medical professional to establish the extent and nature of any sickness or injury.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A formal test involving answering written or oral questions under a time constraint and usually without access to textbooks.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "Interrogation.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: [],
      antonyms: [],
    },
    {
      partOfSpeech: "verb",
      definitions: [
        {
          definition: "To observe or inspect carefully or critically",
          synonyms: [],
          antonyms: [],
          example: "He examined the crime scene for clues.",
        },
        {
          definition:
            "To check the health or condition of something or someone",
          synonyms: [],
          antonyms: [],
          example: "The doctor examined the patient.",
        },
        {
          definition:
            "To determine the aptitude, skills or qualifications of someone by subjecting them to an examination",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To interrogate",
          synonyms: [],
          antonyms: [],
          example: "The witness was examined under oath.",
        },
      ],
      synonyms: ["pore over", "undersee"],
      antonyms: [],
    },
  ],
  license: {
    name: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  sourceUrls: [
    "https://en.wiktionary.org/wiki/exam",
    "https://en.wiktionary.org/wiki/examination",
    "https://en.wiktionary.org/wiki/examine",
  ],
};

const wordData2 = {
  word: "atlas",
  phonetic: "/ˈætləs/",
  phonetics: [
    {
      text: "/ˈætləs/",
      audio: "",
    },
    {
      text: "/ˈætləs/",
      audio: "",
    },
  ],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition:
            "A bound collection of maps often including tables, illustrations or other text.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A bound collection of tables, illustrations etc. on any given subject.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "(especially of the human body) A detailed visual conspectus of something of great and multi-faceted complexity, with its elements splayed so as to be presented in as discrete a manner as possible whilst retaining a realistic view of the whole.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A collection of top-dimensional subspaces, called charts, each homeomorphic to Euclidean space, which comprise the entirety of a manifold, such that intersecting charts' respective homeomorphisms are compatible in a certain way.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "The uppermost vertebra of the neck.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "One who supports a heavy burden; mainstay.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "A figure of a man used as a column; telamon.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "A sheet of paper measuring 26 inches by 34 inches.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: [],
      antonyms: [],
    },
  ],
  license: {
    name: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  sourceUrls: ["https://en.wiktionary.org/wiki/atlas"],
};

describe("Word test", () => {
  test("Word renders with audio", () => {
    render(
      <ThemeProvider>
        <Word data={wordData} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("article-h1")).toHaveTextContent(/Exam/i);
    expect(screen.getByTestId("play-svg")).toBeInTheDocument();
  });

  test("Word renders without audio", () => {
    render(
      <ThemeProvider>
        <Word data={wordData2} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("article-h1")).toHaveTextContent(/Atlas/i);
    expect(screen.getByTestId("player-div")).toHaveTextContent("");
  });
});
