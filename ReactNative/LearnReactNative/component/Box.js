import React from "react";
import { View, StyleSheet } from "react-native";

//Props 객체 구조 분해 할당
function Box({rounded, size, color}) {
    // 컴포넌트 스타일을 여러개 적용하고 싶을 때 배열로 넣는다.
    return <View style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {
            backgroundColor : color,
        },
        ]}
        />;
}

Box.defaultProps = {
    size : 'medium',
    color : 'black',
};

const styles = StyleSheet.create({
    box : {
        width : 64,
        height : 64,
        backgroundColor : 'black',
    },
    rounded : {
        borderRadius : 16,
    },
    small : {
        width : 32,
        height : 32,
    },
    medium : {
        width : 64,
        height : 64,
    },
    large : {
        width : 128,
        height : 128,
    },
});

const sizes = {
    small : styles.small,
    medium : styles.medium,
    large : styles.large,
};

export default Box;