import React from 'react'
import {Input, Button} from 'antd'

export default class BookAPickUp extends React.Component {
    render() {
        return (
            <div>
                <Input size={"large"} placeholder={"20192410****"} />
                <span>
                    <Button type={"primary"} size={"large"}>Book Now</Button>
                    <Button type={"danger"} size={"large"}>Cancel</Button>
                </span>
            </div>
        )
    }
}