import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MyComponents extends Component {
    //생성자
    // constructor(props) {
    //     super(props);
    //     //state 객체
    //     this.state = {
    //         //상태변수
    //         myValue: 0
    //     };
    // };
    // static defaultProps = {
    //         name: "리액트JS"
    //     }

    //state 객체
    state = {
        myValue: 0
    }

    render() {
        const { name, age } = this.props;
        const { myValue } = this.state;

        return (
            <div>
                <h3>Hello {name} / {age}</h3>
                <p>
                    상태변수 myValue = {myValue}
                </p>
                <button onClick={() => this.setState({myValue: myValue+1})}>증가</button>
                <button onClick={() => this.setState({myValue: myValue-1})}>감소</button>
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