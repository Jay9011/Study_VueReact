import React, {Component, PureComponent, Fragment} from "react";
import CrudInput from "./CrudInput";
import CrudList from "./CrucList";
//import Redux from "redux";
//import ReactRedux, {Provider} from "react-redux";
//import {BrowserRouter,Switch,Router,Route,IndexRoute,Link,IndexLink,NavLink} from "react-router-dom";
//import ReactDOM from "react-dom";
class CrudApp extends React.Component {
    static defaultProps = {  /*  props의 디폴트 값 설정 */  }
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ }
    state = {
        // 상태값(변수)을 정의한다.
        items: [
            { id:1, name: "슈퍼맨", power: 100 },
            { id:2, name: "아쿠아맨", power: 300 },
            { id:3, name: "스파이더맨", power: 500 },
            { id:4, name: "배트맨", power: 30 },
        ]
    }
    style = {
        // 컴포넌트 내부에서 사용할 인라인 스타일을 정의한다.
        // getter 를 사용하면 객체 내부 참조가 가능하다.
        strong: {
            color:"red",
            fontWeight:"bold",
            fontSize:"1.2em",
        },
        label: {
            display: "inline-block",
            width: "80px",
        },
        appDiv: {
            margin: "5px 0",
        }
    }
    func = {
        // func에 정의된 메서드는 반드시 constructor에서 this를 bind() 처리해야 한다.
        // func에는 자식 컴포넌트에 넘길 메서드만 작성한다.
        // 왜 자식에게 부모 메서드를 넘기나? 부모의 상태값을 변경하기 위해서.
        doIns(item){
            let newId = 1;
            if( this.state.items.length > 0 ){
                const newIndex = this.state.items.reduce((prev, current) => prev > current ? prev : current);
                newId = newIndex.id + 1;
            }
            const newItem = [
                ...this.state.items,
                {
                    id: newId,
                    name: item.name,
                    power: item.power,
                }
            ];
            this.setState({
                ...this.state,
                items: newItem,
            });
        },
        doDel(item){
            const newitems = this.state.items.filter((element, index)=>{
                return element.id !== item.id;
            });
            this.setState({
                ...this.state,
                items: newitems
            });
        },
        doUp(item){
            // item.power = item.power + 100
            const newitems = this.state.items.filter((element, index)=>{
                if (element.id === item.id) {
                    element.power = element.power + 100;
                }
                return element;
            });
            this.setState({
                ...this.state,
                items: newitems
            });
        },
        doDown(item){
            // item.power = item.power - 50
            const newitems = this.state.items.filter((element, index)=>{
                if (element.id === item.id) {
                    element.power = element.power - 50;
                }
                return element;
            });
            this.setState({
                ...this.state,
                items: newitems
            });
        },
        doSave(item){
            const newitems = this.state.items.map((element, index)=>{
                if (element.id === item.id) {
                    return item;
                }
                return element;
            });
            this.setState({
                ...this.state,
                items: newitems
            });
        },
    }
    constructor(props) {
        super()
        // this 바인딩. 예시) this.handler = this.handler.bind(this)
        // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.
        this.func.doIns = this.func.doIns.bind(this);
        this.func.doDel = this.func.doDel.bind(this);
        this.func.doUp = this.func.doUp.bind(this);
        this.func.doDown = this.func.doDown.bind(this);
        this.func.doSave = this.func.doSave.bind(this);
        // ref 만들기. 예시) this.inputref = React.createRef()

    }
    render() { // JSX로 화면 만들기
        return (
            <div id="app">
                <h1>Creat Read Update Delete</h1>
                <CrudInput {...this.state} {...this.func} style={this.style.appDiv}></CrudInput>
                <hr/>
                <CrudList {...this.state} {...this.func} style={this.style.appDiv}></CrudList>
            </div>
        )
    }
};

export default CrudApp;