import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Home/Home'
//Work Themme
import JoinWork from './components/Work/Join/Join'
import ChatWork from './components/Work/Chat/Chat'
//Original Themme
import JoinOriginal from './components/Original/Join/Join'
import ChatOriginal from './components/Original/Chat/Chat'
//Speaking Themme
import JoinSpeak from './components/Speak/Join/Join'
import ChatSpeak from './components/Speak/Chat/Chat'
// Attak of titan Theme
import JoinMikassa from './components/Mikassa/Join/Join'
import ChatMikassa from './components/Mikassa/Chat/Chat'
//
//Dark Theme
import JoinDark from './components/Dark/Join/Join'
import ChatDark from './components/Dark/Chat/Chat'

const App = () => (

    <Router>
        <Route path="/" exact component={Home} />
       <Route path="/join-work" component={JoinWork} />
       <Route path="/chatWork" component={ChatWork} />
       <Route path="/join-original" component={JoinOriginal} />
       <Route path="/chatOriginal" component={ChatOriginal} />
       <Route path="/join-speak" component={JoinSpeak} />
       <Route path="/chatSpeak" component={ChatSpeak} />

       <Route path="/join-mikassa" component={JoinMikassa} />
       <Route path="/chatMikassa" component={ChatMikassa} />
       <Route path="/join-dark" component={JoinDark} />
       <Route path="/chatDark" component={ChatDark} />
    </Router>
)

export default App