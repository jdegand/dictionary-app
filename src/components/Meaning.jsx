const Meaning = (props) => {
  return (
    <>
      {props.data?.map((el, index) => (
        <section key={index}>
          <h2 className="meaning__partOf">{el.partOfSpeech}</h2>
          <h3>Meaning</h3>
          <ul>
            {el.definitions.map((def, index) => (
              <li key={index}>{def.definition}</li>
            ))}
          </ul>
          {el.synonyms.length > 0 && (
            <div>
              <h4>Synonyms</h4>
              {el.synonyms.map((synonym, index) => (
                <span className="meaning__synonym" key={index}>
                  {synonym}
                </span>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default Meaning;
