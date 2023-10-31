import React, { Component } from 'react';

class Bai3 extends Component {
  
    render() {
        const a = new Date();
        return (
            <>
                <h2>Xin chào các bạn</h2>
                <h3>Bây giờ là: {a.toLocaleTimeString()}</h3>
            </>
        );
    }
}

export default Bai3;