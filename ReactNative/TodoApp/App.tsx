import React, { useState } from 'react';
// ios의 statusBar는 컴포넌트를 통해 배경색을 지정할 수 없다. SafeAreaView는 상단과 하단에 여백을 설정해 안전한 영역에만 UI 콘텐츠가 노출되기 때문에
// ios는 여백 부분을 색상을 가지는 View로 채워야 함.
// 특정 부분의 여백만 비활성화할 때 쓰이는 서드 파티 라이브 러리 - react-native-safe-area-context
import { SafeAreaView, View, Text, StyleSheet, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import DateHead from './components/DateHead';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id : 1, text : '작업환경 설정', done : true},
    {id : 2, text : '리액트 네이티브 기초 공부', done : false},
    {id : 3, text : '투두리스트 만들어보기', done : false},
  ]);

  const onInsert = text => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id : nextId,
      text,
      done : false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo => 
      todo.id === id ? {...todo, done : !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <>
      {/* 앱 최상단에 노출되는 상태바 */}
      {/* <StatusBar backgroundColor="#26a69a" /> */}
      <SafeAreaProvider>
        {/* edges는 SafeArea를 적용할 모서리를 배열로 전달. bottom, top, left, right 존재 */}
        <SafeAreaView edges={['bottom']} style={styles.block}>
        {/* KeyboardAvoidingView 키보드가 화면을 가리지 않게 해줌 */}
          <KeyboardAvoidingView
            behavior={Platform.select({ios : 'padding'})}
            style={styles.avoid}>
            <DateHead date={today}/>
            {todos.length === 0 ? (
                <Empty/>
              ) : (
                <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
                )}
            <AddTodo onInsert={onInsert}/>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  block : {
    flex : 1,
    backgroundColor : 'white',
  },
  avoid : {
    flex : 1,
  },
});

export default App;


// 195page