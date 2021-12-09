import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './redux/reducers'
import rootSaga from './redux/sagas'
const App = () => {

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()
  // mount it on the Store
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

  // then run the saga
  sagaMiddleware.run(rootSaga)
  // render the application

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Provider>
  )
}
export default App