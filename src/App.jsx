import './App.css';
import TodoList from './components/TodoList';
import { Switch } from 'antd'
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import styled from "styled-components"


const Div = styled.div`

  margin-left: 50%;
`

function App() {
  const {theme, handleToggle} = useContext(ThemeContext)

  if(theme===false){
  return (
    
    <div className='todowhole'>
    <div className='todo-app' style={{'backgroundColor': 'white', marginTop: '15px'}}>
      <Div>
      <span style={{fontSize: '25px', marginRight: '10px', color: theme ? 'yellow' : 'red'}}>☀</span><Switch style={{marginTop: '-8px'}} onClick={handleToggle}/><span style={{fontSize: '25px',marginTop: '5px', marginLeft: '10px', color: theme ? 'white' : 'black'}}>☽</span>
      </Div>
      <TodoList />
    </div>
    </div>
  );
  }
  return (
    <div className='todowhole'>
    <div className='todo-app' style={{'backgroundColor': 'black', marginTop: '15px'}}>
      <Div>
        <span style={{fontSize: '25px', marginRight: '10px', color: theme ? 'yellow' : 'red'}}>☀</span><Switch style={{marginTop: '-8px'}} onClick={handleToggle}/><span style={{fontSize: '25px', marginLeft: '10px', marginTop: '5px', color: theme ? 'white' : 'black'}}>☽</span>
    </Div>
      <TodoList />
    </div>
    </div>
  );

}

export default App;