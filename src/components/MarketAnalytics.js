import React from "react";

function MarketAnalytics() {
  return (
    <div>
      <h4>Market Analytics</h4>
      <iframe
        name='ForexWidget'
        src='https://darqube.com/external-embedding/3?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ3aWRnZXQiOnsiZGVmYXVsdHMiOlsiUG9wdWxhciIsIk1ham9yIiwiTWlub3IiXSwiY3VzdG9tcyI6e319LCJ3X3R5cGUiOiJGb3JleFdpZGdldCIsImZlX2NmZyI6eyJjbW9kZSI6MCwiZmNsciI6InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLCJiZyI6InJnYmEoMjEsIDI1LCAzMCwgMSkiLCJoIjo0ODAsInciOjkwMCwiYXN6Ijp0cnVlLCJoZGljbiI6ZmFsc2UsInd0bSI6ZmFsc2V9LCJleHAiOjE2NjUzMTc4NDQsInN1YiI6ImFjY2VzcyJ9.s0FzCwqnC8QpTOaPS5A8JRGhD-NPO8PC60LoxvdnHb0'
        id='ForexWidget'
        width='100%'
        title='ForexWidget'
        height='500'></iframe>
    </div>
  );
}

export default MarketAnalytics;
