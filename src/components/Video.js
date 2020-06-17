import React from 'react';
import DateTimePretty from './DateTimePretty';
import DateTime from './DateTime';

export default function Video(props) {
  const NewDateTime = DateTimePretty(DateTime);
  return (
    <div className="video">
      <iframe title="video" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <NewDateTime date={props.date} />
    </div>
  )
};
