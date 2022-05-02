import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponents.css';
class MyComponents extends Component {
    //생성자
    // constructor(props) {
    //     super(props);
        //state 객체
        // this.state = {
        //     //상태변수
        //     myValue: 0
        // };
        //event handler함수가 this를 사용할 수 있도록 this객체를 binding해주기
    //    this.handleMinus = this.handleMinus.bind(this);
    // };
    // static defaultProps = {
    //         name: "리액트JS"
    //     }

    //state 객체
    state = {
        //상태변수
        myValue: 0,
        message: '',
        username: '',
        isValid: false
    }
    //Event Handler함수선언
    // handleMinus() {    
    handleMinus = () => {
        const { myValue } = this.state;
        this.setState({myValue: myValue - 1});
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleEnter = (e) => {
        //enter key
        if(e.keyCode === 13){
            this.setState({
                message: '',
                isValid: true,
            });
        }

    };

    render() {
        const { name, age } = this.props;
        const { myValue, message, username, isValid } = this.state;
        const { handleMinus, handleChange, handleEnter } = this;

        return (
            <div>
                <h3>Hello {name} / {age}</h3>
                <p>
                    상태변수 myValue = {myValue}
                </p>
                <button onClick={() => this.setState({myValue: myValue+1})}>증가</button>
                <button onClick={handleMinus}>감소</button>
                <p>
                    상태변수 message = {message}
                </p>
                <input type="text" name="message" value={message} onChange={handleChange} onKeyDown={handleEnter} />
                <button>추가</button>
                <button onClick={() => this.setState({message: ''})}>초기화</button>
                <p>
                    상태변수 username = {username}
                </p>
                <input type="text" name="username" value={username} onChange={handleChange} 
                    className={isValid ? 'success':'failure'} />

            </div>
        );
    }
}
MyComponents.defaultProps = {
    name: "리액트JS"
};
MyComponents.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponents;