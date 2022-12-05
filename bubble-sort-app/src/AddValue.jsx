import React, {useRef} from 'react';

const AddValue = ({submitHandler, newValue}) => {


    return (
        <form className="box">
        <input name="addValue" id="addValue" value={newValue} autoComplete="off"></input>	
      <button type="submit" onSubmit={submitHandler}><span className="icon">add</span></button>
        </form>
    );
};

export default AddValue;