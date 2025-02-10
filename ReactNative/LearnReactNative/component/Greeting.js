import React from "react";
import { View, Text } from "react-native";

//props 파라미터를 받아서 동적으로 구성 가능
function Greeting(props) {
    return (
        <>
            <View>
                <Text>안녕하세요 {props.name}</Text>
            </View>
            <Text>Extra Text!</Text>
        </>
    );
}

//넘어오는 값이 없을 때 보여줄 디폴트값을 설정할 수 있다.
Greeting.defaultProps = {
    name : '리액트 네이티브',
};

export default Greeting;