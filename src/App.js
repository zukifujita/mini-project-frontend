import React from 'react';
import './App.css';
import {Button, Input} from "antd";

function App() {
    return (
        <div>
            <Input size={"large"} placeholder={"20192410****"}/>
            <span>
                    <Button type={"primary"} size={"large"}>Book Now</Button>
                    <Button type={"danger"} size={"large"}>Cancel</Button>
                </span>
        </div>
    );
}

export default App;
