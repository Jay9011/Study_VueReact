import React, {Component, PureComponent, Fragment} from "react";
import CrudListItem from "./CrucListItem"
//import Redux from "redux";
//import ReactRedux, {Provider} from "react-redux";
//import {BrowserRouter,Switch,Router,Route,IndexRoute,Link,IndexLink,NavLink} from "react-router-dom";
//import ReactDOM from "react-dom";

class CrudList extends React.Component {
    constructor(props) {
        super()
        // this 바인딩. 예시) this.handler = this.handler.bind(this)
        // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

        // ref 만들기. 예시) this.inputref = React.createRef()

    }
    render() { // JSX로 화면 만들기
        const items = this.props.items;
        const arrs = items.map((item, index)=>{
            return (
                <CrudListItem key={index} item={item} {...this.props}></CrudListItem>
            )
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    { arrs }
                </tbody>
            </table>
        )
    }
};

export default CrudList;