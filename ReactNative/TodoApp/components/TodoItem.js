import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
// 벡터 아이콘 사용하기 위해 yarn add react-native-vector-icons 다운로드
// android는 android/app/build.gradle에 벡터 아이콘 추가 설정
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({id, text, done, onToggle, onRemove}) {
    const remove = () => {
        //Alert.alert 함수의 파라미터는 제목, 내용, 버튼 배열, 옵션 객체 순서
        // 버튼 배열에 넣는 버튼 객체는 text 값을 통해 버튼 이름 지정, onPress로 눌렀을 때 호출 함수 지정 가능
        // style은 cancel, default, destructive 값 설정 가능 (ios만)
        // 4번째 옵션 객체는 cancelable 값을 통해 안드로이드에서 Alert 박스 바깥 영역이나 Back 버튼 눌렀을 때 Alert 창이 닫히도록 설정
        // onDismiss는 Alert이 닫힐 때 호출되는 함수
        Alert.alert(
            '삭제',
            '정말로 삭제하시겠어요?',
            [
                {text: '취소', onPress: () => {}, style : 'cancel'},
                {
                    text : '삭제',
                    onPress : () => {
                        onRemove(id);
                    },
                    style : 'destructive',
                },
            ],
            {
                cancelable : true,
                onDismiss : () => {},
            },
        );
    };
    return (
        <View style={styles.item}>
            {/* onPress={onToggle(id)} 이런 식으로 사용하면 안된다 (컴포넌트가 렌더링될 때마다 onToggle이 호출되게 됨) */}
            <TouchableOpacity onPress={() => onToggle(id)}>
                <View style={[styles.circle, done && styles.filled]}>
                    {done && (
                        <Image
                            source={require('../assets/icons/check_white/check_white.png')}
                        />
                    )}
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
            {done ? (
                <TouchableOpacity onPress={remove}>
                    <Icon name="delete" size={32} color="red" />
                </TouchableOpacity>
            ) : (
                <View Style={styles.removePlaceholder} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        padding : 16,
        alignItems : 'center',
    },
    circle : {
        width : 24,
        height : 24,
        borderRadius : 12,
        borderColor : '#26a69a',
        borderWidth : 1,
        marginRight : 16,
    },
    text : {
        flex : 1,
        fontSize : 16,
        color : '#212121',
    },
    filled : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#26a69a',
    },
    lineThrough : {
        color : '#9e9e9e',
        textDecorationLine : 'line-through',
    },
    removePlaceholder : {
        width : 32,
        height: 32,
    },
});

export default TodoItem;