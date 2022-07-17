import React, { useState } from 'react';
// import DatePicker2 from 'react-datepicker2';

interface Props {}

const DatePicker = (props: Props) => {
  const [state, setState] = useState();
  return (
    <div>
      {/* <DatePicker2
        onChange={(value) => setState(value)}
        timePicker={false}
        value={state}
        isGregorian={false}
      /> */}
    </div>
  );
};

export default DatePicker;
