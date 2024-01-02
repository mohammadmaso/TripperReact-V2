import { DatePicker as DatePicker2 } from 'fixed-persian-datepicker';
import moment from "moment-jalaali";
import { useState } from 'react';

// interface Props {
//   onDateChange: (date: Moment) => void;
// }

const DatePicker = (props) => {
  const [state, setState] = useState("");
  return (
      <DatePicker2
      
        onChange={(value) => {
          const date = moment(value).format('YYYY-MM-DD')
          props.onDateChange(date);
          setState(value);
        }}
        timePicker={false}
        value={state}
        isGregorian={false}
        className={"datepicker"}
        

      />
  );
};

export default DatePicker;
