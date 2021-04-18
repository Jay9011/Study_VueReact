<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <TodoHeader></TodoHeader>
        <!-- TodoInput -->
        <TodoInput v-on:addTodo="addTodo"> </TodoInput>
        <!-- TodoList -->
        <TodoList
            v-bind:todoItems="todoItems"
            v-on:doneToggle="doneToggle"
            v-on:removeTodo="removeTodo"
        >
        </TodoList>
        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from "@/components/todo/TodoHeader";
import TodoInput from "@/components/todo/TodoInput";
import TodoList from "@/components/todo/TodoList";
import TodoFooter from "@/components/todo/TodoFooter";
export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        return {
            todoItems: [
                { id: 1, todo: "영화보기", done: false },
                { id: 2, todo: "주말 산책", done: true },
                { id: 3, todo: "ES6 학습", done: false },
                { id: 4, todo: "잠실 야구장", done: false }
            ]
        };
    },
    //template: ``,
    methods: {
        addTodo: function (newTodoItem) {
            if (newTodoItem && newTodoItem.trim() !== "") {
                /* max 를 id 를 찾는방법
                    1. array.reduce() 사용
                    2. array.map()과 Math.max()를 사용하는 방법
                */
                // 1. array.reduce() 를 사용하여 newId를 구하는 방법
                var maxObj = null;
                if (this.$data.todoItems.length === 0) {
                    maxObj = {
                        id: 0,
                        todo: "",
                        done: false
                    };
                } else {
                    maxObj = this.$data.todoItems.reduce(function (
                        prevItem,
                        nextItem
                    ) {
                        // 최대 id 값을 갖고있는 item을 찾는다.
                        return prevItem.id > nextItem.id ? prevItem : nextItem; //
                    });
                }

                var newid = maxObj.id + 1;
                // 2. map()과 Math.max()를 사용하여 newId를 구하는 방법
                // var arrIds = this.$data.todoItems.map(function (el) {
                //     return el.id;
                // });
                // newid = Math.max(...arrIds) + 1;

                // todoItems 에 Item 등록
                this.$set(this.$data.todoItems, this.$data.todoItems.length, {
                    id: newid,
                    todo: newTodoItem,
                    done: false
                });
            }
        },
        doneToggle: function (id, index) {
            if (this.$data.todoItems[index]["id"] !== id) {
                return;
            }
            this.$set(
                this.$data.todoItems[index],
                "done",
                !this.$data.todoItems[index]["done"]
            );
        },
        removeTodo: function (id, index) {
            window.event.preventDefault();
            window.event.stopPropagation();
            if (this.$data.todoItems[index]["id"] !== id) {
                return;
            }
            this.$data.todoItems.splice(index, 1);
        },
        clearAll: function () {
            this.$set(this.$data, "todoItems", []);
        }
    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
        TodoHeader: TodoHeader,
        TodoInput: TodoInput,
        TodoList: TodoList,
        TodoFooter: TodoFooter
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>
