import React from 'react'
import {css} from 'aphrodite'
import {hot} from 'react-hot-loader'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {styles} from './styles'
import {AssetList} from './components/AssetList'
import {Header} from './components/Header'
import {Home} from './components/Home'
import {Data} from './components/Data'
import {configureStore} from './store'


const store = configureStore({})


const App = () =>
  <Router>
    <Provider store={store}>
    <div className={css(styles.root)}>
      <Header className={css(styles.header)}/>
      <AssetList className={css(styles.left)}/>
      <div className={css(styles.body)}>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/' component={Data}/>
        </Switch>
      </div>
    </div>
    </Provider>
  </Router>

export const Root = hot(module)(() => <App/>)
