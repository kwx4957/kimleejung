import React, {useState } from 'react';

function InputSample(props) {
  const [getholdstock, setholdstock] = useState('');
  const [apis , setApi] = useState(props);
  const [divide ,setDivide] = useState(null);

  const onChange = (e) => {
    setholdstock(e.target.value);
  };

  const onClick = () => {
    setholdstock(getholdstock * props.api);  
  };

  const onReset = () => {
    setholdstock('');
  };

  const isNumber = (e) => {
      if(e.keyCode<48 || e.keyCode>57){
        e.returnValue=false;
      }
  };
  
  return (
    <div>
     <h4>예상 배당금 계산:</h4>  <input  type="number" onKeyPress={isNumber} onChange={onChange} value={getholdstock} />
      <button onClick={onClick}>조회</button>
      <button onClick={onReset}>초기화</button>
      <div>
        <h4> 값: {getholdstock} </h4>
      </div>
    </div>
  );
}

export default InputSample;