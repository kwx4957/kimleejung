import React, {useState } from 'react';

function InputSample(props) {
  const [getholdstock, setholdstock] = useState('');
  const [apis , setApi] = useState(props.api);
  const [divide ,setDivide] = useState({apis}.apis.response.body.items.item[18]);
  console.log({apis}.apis.response.body.items.item[18]);

  const onChange = (e) => {
    setholdstock(e.target.value);
  };

  const onClick = () => {
    setholdstock(getholdstock * divide.stckGenrDvdnAmt);  
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
      <input  type="number" onKeyPress={isNumber} onChange={onChange} value={getholdstock} />
      <button onClick={onClick}>조회</button>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {getholdstock}</b>
      </div>
    </div>
  );
}

export default InputSample;