import React, {Component, PureComponent, Fragment} from "react";
//import Redux from "redux";
//import ReactRedux, {Provider} from "react-redux";
//import {BrowserRouter,Switch,Router,Route,IndexRoute,Link,IndexLink,NavLink} from "react-router-dom";
//import ReactDOM from "react-dom";

class CrudInput extends React.Component {
    constructor(props) {
        super()
        // this 바인딩. 예시) this.handler = this.handler.bind(this)
        // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

        // ref 만들기. 예시) this.inputref = React.createRef()
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();
    }
    doIns = (event)=>{
        if( this.refUserName.current.value.trim() === "" ){
            alert("이름을 입력하세요");
            this.refUserName.current.focus();
            event.preventDefault();
            return false;
        }

        const newItem = {
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value),
        }
        // CrudApp.func.doIns() 호출
        this.props.doIns(newItem);

        // 입력값 초기화
        this.refUserName.current.value = "";
        this.refUserPower.current.value = 0;
    }
    render() { // JSX로 화면 만들기
        return (
            <div>
                <div>
                    <div>
                        <label htmlFor="">Name : </label>
                        <input type="text" name="name"
                            placeholder="이름을 입력하세요"
                            ref={this.refUserName}
                            defaultValue={""}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Power : </label>
                        <input type="number" name="power"
                            placeholder="숫자를 입력하세요"
                            ref={this.refUserPower}
                            defaultValue={0}
                        />
                    </div>
                    <button onClick={this.doIns}>Add</button>
                </div>
            </div>
        )
    }
};
export default CrudInput;