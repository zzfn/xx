import './App.css';
import {ChangeEvent, useState} from "react";
import {calculateCost} from "./calculateCost.ts";

const App = () => {
    const [attributes, setAttributes] = useState('');
    const [cost, setCost] = useState(0);
  return (
      <div>
          <h5>寻仙圣宠升级到 8888 计算器</h5>
          <div>
              规则如下：
              <ul>
                  <li>6以下属性免费</li>
                  <li>第三个6升7 10Z <em>5500仙玉</em></li>
                  <li>第四个6升7 12Z <em>6600仙玉</em></li>
                  <li>
                      第二个7升8 2个融魄 <em>2800仙玉</em>
                  </li>
                  <li>
                      第三个7升8 4个融魄 <em>5600仙玉</em>
                  </li>
                  <li>
                      第四个7升8 16个融魄 <em>22400仙玉</em>
                  </li>
              </ul>
              <p className='text-red-900'>共计所需{cost}仙玉</p>
              <input
                  className='border-2 border-slate-300'
                  minLength={4}
                  maxLength={4}
                  value={attributes}
                  onInput={(event:ChangeEvent<HTMLInputElement>) => {
                      const attributes = event.target.value;
                      setAttributes(attributes);
                  }}
                  type='text'
              />
              <button
                  onClick={() => {
                      if (attributes.length !== 4) {
                          alert('请输入四位数');
                          return;
                      }
                      setCost(calculateCost(attributes));
                  }}
              >
                  计算
              </button>
          </div>
      </div>
  );
};

export default App;
