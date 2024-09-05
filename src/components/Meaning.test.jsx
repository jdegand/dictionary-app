import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Meaning from "./Meaning";

// exam
const meaningData = [
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
        definition: "To check the health or condition of something or someone",
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
];

describe("Meaning test", () => {
  test("Meaning renders props", () => {
    render(<Meaning data={meaningData} />);

    const meaning1 = screen.getByText("The act of examining.");

    const synonym1 = screen.getByText("undersee");

    expect(meaning1).toBeInTheDocument();
    expect(synonym1).toBeInTheDocument();
  });
});
