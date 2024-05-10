import React from 'react';

const RadioButton = ({ question }) => {
  return (
    <div>
      <label>{question.text}</label>
      <div>
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={question.name}
              value={option.value}
              checked={option.value === question.answer}
              onChange={() => question.onChange(option.value)}
            />
            <label>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;