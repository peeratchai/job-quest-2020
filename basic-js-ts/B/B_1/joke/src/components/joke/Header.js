
import React from 'react'
import './Header.scss'
import { Button, Row, Col } from 'antd'
export default function Header(props) {
    return (
        <Row className="box">
            <Col className="text_title" style={{ width: '100%' }}>
                JOKE
            </Col>
            <Col className='details' style={{ marginTop: '30px', width: '100%' }}>
                {props?.jokeDetails}
            </Col>
            <Col style={{ marginTop: '30px', width: '100%' }}>
                <Button onClick={() => props.random()} loading={props.loading} type="primary">Random Joke</Button>
            </Col>
        </Row>
    )
}