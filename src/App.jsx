import { useContext, useState } from "react";
import NavBar from "./components/NavBar";
import { FontContext } from "./context/FontContext";
import { ThemeContext } from "./context/ThemeContext";
import Word from "./components/Word";
import axios from "./api/dictionary";
import useAxiosFunction from "./hooks/useAxiosFunction";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchTermDetails, error, loading, axiosFetch, setError] =
    useAxiosFunction();

  const { font } = useContext(FontContext);

  const { checked } = useContext(ThemeContext);

  const handleChange = (e) => {
    // {error && !loading ? <p>{searchTerm} not found</p> : null}
    // always true - updated searchTerm will be in the jsx
    // have to reset error or display a non-dynamic error message

    setError("");
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: `/${searchTerm}`,
    });
  };

  return (
    <main
      data-testid="main"
      data-theme={checked ? "dark" : "light"}
      className={`${font}`}
    >
      <div className="app__wrapper">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <input
            className="form__input"
            aria-label="Search for a word"
            name="search"
            type="text"
            placeholder="Search for a word"
            value={searchTerm}
            onChange={handleChange}
            maxLength={45}
            required={true}
          />
          <button data-testid="form-button" className="form__button">
            <svg
              aria-labelledby="search"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>search</title>
              <path
                fill="blueviolet"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
            <span className="sr-only">Submit</span>
          </button>
        </form>
        {loading ? (
          <p data-testid="loading" className="app__loading">
            Loading...
          </p>
        ) : null}
        {error && !loading ? (
          <p className="app__error">{searchTerm} not found</p>
        ) : null}
        {!loading && Object.keys(searchTermDetails).length ? (
          <Word data={searchTermDetails} />
        ) : null}
      </div>
    </main>
  );
}

export default App;
