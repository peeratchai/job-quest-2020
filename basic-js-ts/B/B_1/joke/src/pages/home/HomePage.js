import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import './HomePage.scss';
import Navbar from '../../components/navbar/Navbar'
import { Row, Col, Button, Spin } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { JOKE_FETCH_REQUESTED } from '../../redux/actions'
import Header from '../../components/joke/Header';
import Form from '../../components/joke/Form';


let HomePage = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingButton, setIsLoadingButton] = useState(false)
    const [jokeDetails, setJokeDetails] = useState()
    const [formData, setFormData] = useState({})

    useEffect(() => {
        setIsLoading(true)
        getJokeData()
    }, [])

    useEffect(() => {
        if (state.joke?.value?.joke) {
            console.log('state', state)
            setJokeDetails(state.joke.value.joke)
            if (isLoading) setIsLoading(false)
            if (isLoadingButton) setIsLoadingButton(false)
        }
    }, [state])

    const getJokeData = () => {
        dispatch({
            type: JOKE_FETCH_REQUESTED
        })
    }

    const randomJoke = () => {
        setIsLoadingButton(true)
        console.log('formData',formData)
        dispatch({
            type: JOKE_FETCH_REQUESTED,
            payload: formData
        })
    }

    return (
        <Navbar>
            <Spin spinning={isLoading}>
                <Header jokeDetails={jokeDetails} random={randomJoke} loading={isLoadingButton} />
                <Form formData={formData} setFormData={setFormData} />
            </Spin>
        </Navbar>
    );
}

export default HomePage