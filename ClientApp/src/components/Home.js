import React, { Component } from 'react';
import SurveyList from './Survey/SurveyList';


export class Home extends Component {
  static displayName = Home.name;

  render() {
 

    return (
      <div>
        <h1>Hello, world!</h1>
        <SurveyList />
      </div>
    );
  }
}