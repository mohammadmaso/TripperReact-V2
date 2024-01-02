import { DatePicker as DatePicker2 } from 'fixed-persian-datepicker';
import { useState } from 'react';

// interface Props {
//   onDateChange: (date: Moment) => void;
// }

const DatePicker = (props) => {
  const [state, setState] = useState();
  return (
    <div>
      <DatePicker2
        onChange={(value) => {
          props.onDateChange(value);
          setState(value);
        }}
        timePicker={false}
        value={state}
        isGregorian={false}
        className={"datepicker"}
      />
    </div>
  );
};

export default DatePicker;
