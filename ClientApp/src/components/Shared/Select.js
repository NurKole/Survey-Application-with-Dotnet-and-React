import React from 'react';

const Select = ({ question }) => {
  return (
    <div>
      <label>{question.text}</label>
      <select name={question.name} value={question.answer} onChange={(e) => question.onChange(e.target.value)}>
        {question.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;