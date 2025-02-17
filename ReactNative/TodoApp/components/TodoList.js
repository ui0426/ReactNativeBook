import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

function TodoList({todos, onToggle, onRemove}) {
    return (
        <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />} // 렌더되는 각 엘리먼트들에 뒤에 반복적으로 추가되는 작업을 해준다.
            style={styles.list}
            data={todos}
            //배열 안의 각 원소들 데이터를 가리키는 뷰를 보여줌
            renderItem={({item}) => (
                <TodoItem
                    id={item.id}
                    text={item.text}
                    done={item.done}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    />
            )}
            keyExtractor={item => item.id.toString()} // 각 항목의 고유값 추출 (고유 값은 문자열이여야한다)
        />
    );
}

const styles = StyleSheet.create({
    list : {
        flex : 1,
    },
    separator : {
        backgroundColor : '#e0e0e0',
        height : 1,
    },
});

export default TodoList;