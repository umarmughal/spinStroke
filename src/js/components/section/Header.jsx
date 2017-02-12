import React, { Component } from 'react'

export default class Header extends Component {
    render () {
        return (
            <header id="header" className="alt">
                <span className="logo"><img src="images/logo.svg" alt="" /></span>
                <h1>SpinStroke</h1>
                <p>A spining stroke animation with morphing effect!<br />
                built by <a href="https://github.com/Tocknicsu">@tocknicsu</a> and <a href="https://github.com/lichin-lin">@lichin-lin</a></p>
            </header>
        )
    }
}