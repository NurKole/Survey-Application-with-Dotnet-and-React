import React from 'react';
import QuestionType from '../Shared/QuestionType';
import Checkbox from '../Shared/CheckBox';
import RadioButton from '../Shared/RadioButton';
import Select from '../Shared/Select';
import TextInput from '../Shared/TextInput';

const Survey = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => {
        switch (question.type) {
          case QuestionType.RADIO:
            return <RadioButton key={index} {...question} />;
          case QuestionType.CHECKBOX:
            return <Checkbox key={index} {...question} />;
          case QuestionType.SELECT:
            return <Select key={index} {...question} />;
          case QuestionType.TEXT:
            return <TextInput key={index} {...question} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Survey;