import { useContext } from "react";
import useAudio from "../hooks/useAudio";
import { ThemeContext } from "../context/ThemeContext";

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  const { checked } = useContext(ThemeContext);

  return (
    <div>
      <button className="player__button" onClick={toggle}>
        {playing ? (
          <svg
            data-testid="pause-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Pause</title>
            <path
              fill={checked ? "#a147de" : "#a463d6"}
              d="M14,19H18V5H14M6,19H10V5H6V19Z"
            />
          </svg>
        ) : (
          <svg
            data-testid="play-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Play</title>
            <path
              fill={checked ? "#a147de" : "#a463d6"}
              d="M8,5.14V19.14L19,12.14L8,5.14Z"
            />
          </svg>
        )}
        <span className="sr-only purple-text">
          {playing ? "Pause" : "Play"}
        </span>
      </button>
    </div>
  );
};

export default Player;
