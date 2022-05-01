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

function getCurrentUrl() {
  let url = window.location.href;
  let urlArray = url.split('/');
  return urlArray[3], urlArray[4];
}

function Stream() {
  console.log(getCurrentUrl());
  const VODID = 1;
  const streamType = 'test';
  [VODID, streamType] = getCurrentUrl();
  const url = '';
  if (streamType == 'Reddit') {
    const url = 'https://www.reddit.com/rpan/r/RedditSessions/' + VODID;
  } else if (streamType == 'Twitch') {
    const url = 'https://www.twitch.tv/' + VODID;
  } else if (streamType == 'Youtube') {
    const url = 'https://www.youtube.com/watch?v=' + VODID;
  }

  const RequestURL =
    'https://streamalyzer.herokuapp.com/stats/?VOD=' + url + '&format=json';
  // fetch request url
  axios.get(RequestURL).then(response => {
    dict.VOD = response.data[0].VOD;
    dict.streamerName = response.data[0].streamerName;
    dict.positiveComments = response.data[0].positiveComments;
    dict.negativeComments = response.data[0].negativeComments;
    dict.neutralComments = response.data[0].neutralComments;
    dict.streamerThumbnail = response.data[0].streamerThumbnail;
    dict.mostCommonWord = response.data[0].mostCommonWord;
    dict.mostPositiveUser = response.data[0].mostPositiveUser;
    dict.mostNegativeUser = response.data[0].mostNegativeUser;
  });

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
