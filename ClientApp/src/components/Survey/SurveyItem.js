import React from 'react';
import { useParams } from 'react-router-dom';
import SurveyForms from './SurveyForms';
import surveyData from '../../surveydata.json';

const SurveyItem = () => {
  const { id } = useParams(); // URL'den anket ID'sini al

  const survey = surveyData.surveys.find((survey) => survey.id === parseInt(id));

  // ID'ye göre ilgili form bileşenini seçin
  const SurveyForm = SurveyForms[`form${id}`];

  if (!SurveyForm) {
    return <div>Form bulunamadı.</div>;
  }

  return (
    <div>
      <h2>{survey.name}</h2>
      {/* Anket formunu göster */}
      <SurveyForm />
    </div>
  );
};

export default SurveyItem;
