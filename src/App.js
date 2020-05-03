import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <TodoInput/>
      <TodoList/>
    </Provider>
  );
}

export default App;
