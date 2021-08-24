import React from 'react';
import Select from 'react-select';

interface Props {
  loading?: boolean;
  options: any;
  default?: any;
  isMulti?: boolean;
  name: any;
  inputChange: (inputValue: any) => void;
}

const SelectForm = (props: Props) => {
  return (
    <>
      <Select
        placeholder={props.name}
        className="basic-single"
        classNamePrefix={props.name}
        // defaultValue={props.options[0]}
        //   isDisabled={isDisabled}
        isLoading={props.loading}
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name={props.name}
        options={props.options}
        label={props.name}
        onChange={props.inputChange}
        isMulti={props.isMulti ? props.isMulti : false}
      />
    </>
  );
};

export default SelectForm;
