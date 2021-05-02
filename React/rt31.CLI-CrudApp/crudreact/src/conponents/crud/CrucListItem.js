import React, {Component, PureComponent, Fragment} from "react";
//import Redux from "redux";
//import ReactRedux, {Provider} from "react-redux";
//import {BrowserRouter,Switch,Router,Route,IndexRoute,Link,IndexLink,NavLink} from "react-router-dom";
//import ReactDOM from "react-dom";
class CrudListItem extends React.Component {
    constructor(props) {
        super()
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();
    }
    state = {
        isEditMode: false,
    }
    doDel = (event) => {
        // 부모 콜백 메서드 호출.
        const {item} = this.props;  // const item = this.props.item;
        this.props.doDel(item);
    }
    doUp = (event) => {
        // 부모 콜백 메서드 호출.
        const {item} = this.props;  // const item = this.props.item;
        if (this.state.isEditMode) {
            this.refUserPower.current.value = Number(this.refUserPower.current.value) + 100;
        } else {
            this.props.doUp(item);
        }
    }
    doDown = (event) => {
        // 부모 콜백 메서드 호출.
        const {item} = this.props;  // const item = this.props.item;
        if (this.state.isEditMode) {
            this.refUserPower.current.value = Number(this.refUserPower.current.value) - 50;
        } else {
            this.props.doDown(item);
        }
    }
    doEdit = (event) => {
        this.setState({
            isEditMode: true,
        })
    }
    doSave = (event) => {
        // 부모 콜백 메서드 호출.
        const {item} = this.props;  // const item = this.props.item;
        const newitem = {
            id: item.id,
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value),
        }

        this.props.doSave(newitem);

        this.setState({
            isEditMode: false,
        })
    }
    render() { // JSX로 화면 만들기
        const {item} = this.props;  // const item = this.props.item;
        let strong = "";
        if ( item.power >= 300 ) {
            strong = "strong";
        }

        let formEdit = (
            <tr key={item.id} className={strong}>
                <td>{item.id}</td>
                <td>
                    <input
                        type="text"
                        name="name"
                        ref={this.refUserName }
                        defaultValue={item.name}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="power"
                        ref={this.refUserPower }
                        defaultValue={item.power}
                    />
                </td>
                <td>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                </td>
            </tr>
        )

        let formView = (
            <tr className={strong}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.power}</td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        )

        if (this.state.isEditMode) {
            return formEdit;
        } else {
            return formView;
        }
    }
};

export default CrudListItem;