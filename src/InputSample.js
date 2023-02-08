import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  //e.target 이벤트 발생 DOM인 input DOM의 value는 입력된 값

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}
// input의 value값을 설정해주어야 상태가 바뀌었을 때 input의 내용이 업데이트 됨.
export default InputSample;
