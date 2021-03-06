// snippet 확인
new Vue({
    /* edtmc^2w */
    el: "",
    data: {

    },
    //template: ``,
    methods: {

    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */

    },
    computed: {

    },
    watch: {

    },
    mounted: function() {
        console.log("mounted");
    },
    updated: function() {
        console.log("updated");
    },
});

Vue.component("index", {
    /* pdtmc^2w */
    props: [] ,
    data: function() {
        return {

        }
    },
    template: `

    `,
    methods: {

    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */

    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */

    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */

    },
    mounted: function() {
        console.log("mounted");
    },
    updated: function() {
        console.log("updated");
    },
});


var index = {
    /* pdtmc^2w */
    props: [] ,
    data: function() {
        return {

        }
    },
    template: `

    `,
    methods: {

    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */

    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */

    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */

    },
    mounted: function() {
        console.log("mounted");
    },
    updated: function() {
        console.log("updated");
    },
};

<style scoped>

</style>

<template>

</template>

// import axios from "axios";

axios({
    url: "item",  // 호출되는 서버 주소.
    method: "get",       // request method: get, post, delete, put
    params: { },  // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
    timeout: 30000,    // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
    responseType: "json",  // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
})
.then( (res) => {
    console.log(res.data);
    this.message1 = res.data;
})
.catch((error) => {
    console.log(error);
});