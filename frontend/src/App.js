/*
@Date		:2023/10/29 17:22:40
@Author		:zono
@Description:根组件，大部分没什么用，保留是为了复习
*/

import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
//导入actionCreater
import {increment ,decrement,addToNum} from './store/modules/counterStore';
import { fetchChannlList } from './store/modules/channeelStore'

function App() {
  const { count } = useSelector((state) => state.counter);//于组合子组件对应
  const { channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();

  //使用useEffect触发异步请求
  useEffect(()=>{
    dispatch(fetchChannlList())
  },[dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>跳到10</button>
      <button onClick={() => dispatch(addToNum(20))}>跳到20</button>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
