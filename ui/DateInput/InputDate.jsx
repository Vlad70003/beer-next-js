import React from "react";
import DateInput from 'date-input';
import moment from 'moment';

export const InputDate = () => {
  return (
    <DateInput maxDate={moment().format('YYYY-MM-DD')} />
  );
};