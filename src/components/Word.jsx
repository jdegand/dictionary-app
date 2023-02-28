import { useContext, useEffect, useState } from "react";
import Meaning from "./Meaning";
import { ThemeContext } from "../context/ThemeContext";
import Player from "./Player";

const Word = (props) => {
  const [audio, setAudio] = useState("");

  const { checked } = useContext(ThemeContext);

  useEffect(() => {
    //const allAudioPropertyValues = props.data?.phonetics?.map(el => el.audio).filter(Boolean);

    const allAudioPropertyValues = props.data?.phonetics?.reduce(
      (acc, curr) => {
        if (curr.audio) {
          acc.push(curr.audio);
        }
        return acc;
      },
      []
    );

    if (allAudioPropertyValues.length) {
      setAudio(allAudioPropertyValues[0]);
    } else {
      setAudio("");
    }
  }, [props]);

  /*
    <div className="article__heading__right">
      {audio ? <audio key={audio} controls autoPlay={false}>
      <source src={audio} />
      </audio> : null}
    </div>
  */

  return (
    <article>
      <div className="article__heading">
        <div className="article__heading__left">
          <h1 data-testid="article-h1">{props.data.word}</h1>
          <p className="article__phonetic">{props.data.phonetic}</p>
        </div>
        <div data-testid="player-div" className="article__heading__right">
          {audio ? <Player key={audio} url={audio} /> : null}
        </div>
      </div>
      <div className="article__word__props">
        <Meaning data={props.data.meanings} />
      </div>
      <div className="article__source">
        <h4>Source</h4>
        <div>
          {props.data.sourceUrls?.map((el) => (
            <div key={el} className="article__source__row">
              <a
                className="article__source__row__link"
                href={el}
                target="_blank"
                rel="no-referrer"
              >
                {el}
              </a>
              <span className="article__external__link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>open-in-new</title>
                  <path
                    fill={checked ? "#fff" : "#000"}
                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Word;

/*
import { useContext, useEffect, useState } from "react";
import Meaning from "./Meaning";
import { ThemeContext } from "../context/ThemeContext";

const Word = (props) => {

    const [audio, setAudio] = useState('')

    const {checked} = useContext(ThemeContext)

    useEffect(()=> {
      
      //const allAudioPropertyValues = props.data?.phonetics?.map(el => el.audio).filter(Boolean);

      const allAudioPropertyValues = props.data?.phonetics?.reduce((acc, curr)=> {
        if(curr.audio){
          acc.push(curr.audio)
        }
        return acc;
      }, []);


      if(allAudioPropertyValues.length) {
        setAudio(allAudioPropertyValues[0])
      } else {
        setAudio('');
      }

    }, [props])

    return (
        <article>
            <div className="article__heading">
                <div className="article__heading__left">
                    <h1>{props.data.word}</h1>
                    <p className="article__phonetic">{props.data.phonetic}</p>
                </div>
                <div className="article__heading__right">
                    {audio ? <audio key={audio} controls autoPlay={false}>
                    <source src={audio} />
                  </audio> : null}
                </div>
            </div>
            <div className="article__word__props">
              <Meaning data={props.data.meanings} />
            </div>
            <div className="article__source">
                <h4>Source</h4>
                <div>
                {props.data.sourceUrls?.map(el => (
                    <div key={el} className="article__source__row">
                        <a href={el} target="_blank" rel="no-referrer">{el}</a>
                        <span className="article__external__link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <title>open-in-new</title>
                          <path fill={checked ? "#fff": "#000"} d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                        </svg>
                        </span>
                    </div>
                ))}
                </div>
            </div>
        </article>
    )
}

export default Word
*/
