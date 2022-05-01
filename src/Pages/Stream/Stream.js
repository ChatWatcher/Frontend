import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Stream.css';

var dict = {
  VOD: '',
  streamerName: '',
  positiveComments: 0,
  negativeComments: 0,
  neutralComments: 0,
  streamerThumbnail: '',
  mostCommonWord: '',
  mostPositiveUser: '',
  mostNegativeUser: '',
};

function getCurrentUrl(n) {
  let url = window.location.href;
  let urlArray = url.split('/');
  return urlArray[n];
}

function Stream() {
  console.log(getCurrentUrl());
  const ID = getCurrentUrl(3);
  const Type = getCurrentUrl(4);
  if (Type == "twitch") {
    const url = "https://streamalyzer.herokuapp.com/stats/?VOD=" + "https://www.twitch.tv/videos/" + ID + '&format=json';
    axios.get(url).then(response => {
      console.log(response);
      // set dict to response
      dict = response.data[0];
      console.log(dict);

    });
  }
  if (Type == "youtube") {
    const url = "https://streamalyzer.herokuapp.com/stats/?VOD=" + "https://www.youtube.com/watch?v=" + ID + '&format=json';
    axios.get(url).then(response => {
      console.log(response);
    });
  }
  if(Type == "reddit") {
    const url = "https://www.reddit.com/rpan/r/RedditSessions/" + ID + '&format=json';
    axios.get(url).then(response => {
      console.log(response);
    });
  }

  return (
      <div>
        <div className="Full">
          <div className="Left Column">
            <div className="stream-Info">Streamer Name: {dict.streamerName}</div>
            <div className="stream-Thumbnail">
              <img src={dict.streamerThumbnail}></img>
            </div>
          </div>

          <div className="Right Column">
            <div className="stream-InfoR">
              Positive Comments: {dict.positiveComments}
            </div>
            <div className="stream-InfoR">
              Negative Comments: {dict.negativeComments}
            </div>
            <div className="stream-InfoR">
              Neutral Comments: {dict.neutralComments}
            </div>
            <div className="stream-InfoR">
              Most Common Word: {dict.mostCommonWord}
            </div>
            <div className="stream-InfoR">
              Most Positive User: {dict.mostPositiveUser}
            </div>
            <div className="stream-InfoR">
              Most Negative User: {dict.mostNegativeUser}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Stream;
