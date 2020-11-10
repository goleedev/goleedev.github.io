import React from 'react';
import './Loading.css';

//Loading
//https://codepen.io/FlorinCornea/pen/JjXeyzz
const Loading = () => {
    return (
        <div className="page">
            <span>loading...</span>
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
        </div>
    );
};

export default Loading;
