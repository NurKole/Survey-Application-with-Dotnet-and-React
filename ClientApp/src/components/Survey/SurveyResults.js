import React from 'react';

const SurveyResults = ({ survey }) => {
  const resultData = [];
  for (const key in survey.data) {
    const question = survey.getQuestionByName(key);
    if (!!question) {
      const item = {
        name: key,
        title: question.displayValue,
        value: question.value,
        displayValue: question.displayValue
      };
      resultData.push(item);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((item) => (
          <tr key={item.name}>
            <td>{item.title}</td>
            <td>{item.displayValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SurveyResults;