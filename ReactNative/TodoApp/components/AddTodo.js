/* eslint-disable no-return-assign */
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, TouchableNativeFeedback, Platform, Keyboard } from "react-native";

function AddTodo({onInsert}) {
    const [text, setText] = useState('');

    const  onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss();
    };

    const button = (
        <View style={styles.buttonStyle}>
            <Image source={require('../assets/icons/add_white/add_white.png')}/>
        </View>
    );

    return (
        <View style={styles.block}>
            {/*인풋에 패딩 값을 넣어서 터치 영역을 늘렸다*/}
            <TextInput
                placeholder="할일을 입력하세요."
                style={styles.input}
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress} //Enter를 눌렀을 때 호출됨
                returnKeyType="done" // Enter의 타입 지정 Enter부분에 설명 또는 아이콘이 변경됨
            />
            {Platform.select({
                ios : (
                        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                            {button}
                        </TouchableOpacity>
                        ),
                android : (
                    <View style={styles.circleWrapper}>
                        <TouchableNativeFeedback activeOpacity={0.5} onPress={onPress}>
                            {button}
                        </TouchableNativeFeedback>
                    </View>
                ),
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    block : {
        backgroundColor : 'white',
        height : 64,
        paddingHorizontal : 16, // 좌우 패딩값 설정
        borderColor : '#bdbdbd',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        alignItems : 'center',
        flexDirection : 'row',
    },
    input : {
        flex : 1,
        fontSize : 16,
        paddingVertical : 8, // 상하 패딩값 설정
    },
    buttonStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        width : 48,
        height : 48,
        backgroundColor : '#26a69a',
        borderRadius : 24,
    },
    circleWrapper : {
        overflow : 'hidden',
        borderRadius : 24,
    },
});

export default AddTodo;