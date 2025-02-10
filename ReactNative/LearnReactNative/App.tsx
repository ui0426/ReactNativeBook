import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import Greeting from './component/Greeting';
import Box from './component/Box';
import Counter from './component/Counter';

//SafeAreaView 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지
//View 레이아웃 및 스타일 담당하는 기본 컴포넌트
//Text 텍스트를 보여주는 컴포넌트

const App = () => {

  // visible은 상태 값, setVisible은 상태 값을 변경할 수 있는 함수. useState(초기값)
  // useState는 두 가지를 가진 배열을 반환 / 상태 값 / 상태 값 변경 함수 
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <View>
        {/* Greeting에서 props.name 으로 app에서 넘겨준 값을 사용할 수 있다. */}
        {/* <Greeting name={name}/> */}

        <Button title="토글" onPress={onPress} />

        {/* rounded={true} , boolean 값일 때는 >> rounded 간소화 가능 */}
        {visible && <Box rounded size="large" color="blue"/>}
      </View>
    </SafeAreaView>
  );
}

const countApp = () => {

    const [count, setCount] = useState(0);

    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    return (
      <SafeAreaView style={styles.full}>
          <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  full : {
    flex : 1, //자신이 위치한 곳의 영역을 모두 차지하겠다는 의미
  },
});

export default countApp;