import './App.css';
import {ChangeEvent, useState} from "react";
import {calculateCost} from "./calculateCost.ts";

const App = () => {
    const [steps, setSteps] = useState<string[]>([]);
    const [attributes, setAttributes] = useState('');
    const [cost, setCost] = useState(0);
    const handleCalculate = () => {
        if (attributes.length !== 4) {
            alert('请输入四位数');
            return;
        }
        const result = calculateCost(attributes);
        setCost(result.cost);
        setSteps(result.steps);
    };

    return (
        <div className='min-h-screen p-6'>
            <h1 className='text-xl text-center my-2'>寻仙圣宠升级到 8888 计算器</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            steps.map((step, index) => (
                                <tr>
                                    <th>{index}</th>
                                    <td>{step}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <p role="alert" className="alert">共计所需{cost}仙玉</p>
                <div className="divider"></div>
                <input
                    placeholder={'宝宝四维，如6688'}
                    className='input input-bordered'
                    minLength={4}
                    maxLength={4}
                    value={attributes}
                    onInput={(event: ChangeEvent<HTMLInputElement>) => {
                        const attributes = event.target.value;
                        setAttributes(attributes);
                    }}
                    type='text'
                />
                <button
                    className='btn'
                    onClick={() => {
                        if (attributes.length !== 4) {
                            alert('请输入四位数');
                            return;
                        }
                        handleCalculate();
                    }}
                >
                    计算
                </button>
            </div>
            规则如下：
            <ul className='bg-amber-50'>
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
        </div>
    );
};

export default App;
