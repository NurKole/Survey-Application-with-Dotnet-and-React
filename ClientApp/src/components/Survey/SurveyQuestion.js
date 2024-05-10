import React from 'react';

const SurveyQuestion = ({ question, onAnswerChange }) => {
  switch (question.type) {
    case 'text':
      return <TextQuestion key={question.name} {...question} onAnswerChange={onAnswerChange} />;
    case 'radiogroup':
      return <RadioGroupQuestion key={question.name} {...question} onAnswerChange={onAnswerChange} />;
    case 'checkbox':
      return <CheckboxQuestion key={question.name} {...question} onAnswerChange={onAnswerChange} />;
    default:
      return <div>Unsupported question type: {question.type}</div>;
  }
};

const TextQuestion = ({ title, name, required, isReadOnly, answer, onAnswerChange }) => {
  return (
    <div>
      <label>
        {title}
        {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input type="text" name={name} disabled={isReadOnly} value={answer} onChange={(e) => onAnswerChange(name, e.target.value)} required={required} />
    </div>
  );
};

const RadioGroupQuestion = ({ title, name, required, isReadOnly, choices, answer, onAnswerChange }) => {
  return (
    <div>
      <label>
        {title}
        {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      {choices.map((choice, index) => (
        <div key={index}>
          <input
            type="radio"
            name={name}
            value={choice.value}
            disabled={isReadOnly}
            checked={answer === choice.value}
            onChange={(e) => onAnswerChange(name, e.target.value)}
            required={required}
          />
          <label>{choice.text}</label>
        </div>
      ))}
    </div>
  );
};

const CheckboxQuestion = ({ title, name, required, isReadOnly, choices, answer, onAnswerChange }) => {
  return (
    <div>
      <label>
        {title}
        {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      {choices.map((choice, index) => (
        <div key={index}>
          <input type="checkbox" name={name} value={choice.value} disabled={isReadOnly} checked={answer.includes(choice.value)} onChange={(e) => onAnswerChange(name, e.target.value)} required={required} />
          <label>{choice.text}</label>
        </div>
      ))}
    </div>
  );
};

export default SurveyQuestion;