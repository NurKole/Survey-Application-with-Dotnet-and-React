import React from 'react';

const Checkbox = ({ question }) => {
  return (
    <div>
      <label>{question.text}</label>
      <div>
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={question.name}
              value={option.value}
              checked={question.answer.includes(option.value)}
              onChange={() => question.onChange(option.value)}
            />
            <label>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;