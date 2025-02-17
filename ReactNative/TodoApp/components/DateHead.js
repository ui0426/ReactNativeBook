import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//{}을 사용하여 props을 사용하지않고 바로 파라미터를 가져온다.
function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // 각 모서리에 필요한 공백의 크기를 알 수 있다.
    const {top} = useSafeAreaInsets();

    const formatted = `${year}년 ${month}월 ${day}일`;

    return (
        <>
            <View Style={[styles.statusBarPlaceholder, {height : top}]} />
            {/* barStyle로 StatusBar 내용 색상 변경 가능 */}
            <StatusBar backgroundColor="#26a69a" barStyle={'light-content'}/>
            <View style={styles.block}>
                <Text style={styles.dateText}>{formatted}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    statusBarPlaceholder : {
        backgroundColor : '#26a69a',
    },
    block : {
        padding : 16,
        backgroundColor : '#26a69a',
    },
    dateText : {
        fontSize : 24,
        color : 'white',
    },
});

export default DateHead;