import React, { Component } from 'react';

class Bai1 extends Component {

    render() {
        const course = ["HTML", "Javascrip", "Python", "C#"]
        return (
            <>
                <h2>DANH SÁCH KHOÁ HỌC</h2>
                <ul>
                    {course.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Bai1;