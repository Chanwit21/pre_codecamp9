import React, { Component } from 'react'
import Card from './Card';

function CardList() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Card     featureImage="https://picsum.photos/id/237/200/300"
            title="How To Make Interactive ReactJS Form"
            description="Let's write some interactive form with React"
            link="https://sebhastian.com/interactive-react-form"
          />
        </div>
        <div className="col-sm-4">
          <Card featureImage="https://picsum.photos/id/237/200/300"
            title="How To Make Interactive ReactJS Form"
            description="Let's write some interactive form with React"
            link="https://sebhastian.com/interactive-react-form"
          />
        </div>
        <div className="col-sm-4">
          <Card featureImage="https://picsum.photos/id/237/200/300"
            title="How To Make Interactive ReactJS Form"
            description="Let's write some interactive form with React"
            link="https://sebhastian.com/interactive-react-form"
          />
        </div>
      </div>
    );
  }

export default CardList
