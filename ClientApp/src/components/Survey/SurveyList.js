import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import surveyData from '../../surveydata.json';

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    setSurveys(surveyData.surveys);
  }, []);

  return (
    <ul>
      {surveys.map((survey) => (
        <li key={survey.id}>
          <Link to={`/survey/${survey.id}`}>{survey.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SurveyList;
