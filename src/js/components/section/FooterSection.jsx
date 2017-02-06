import React, { Component } from 'react'

export default class FooterSection extends Component {
    render () {
        return (
            <footer id="footer">
                <section>
                    <h2>What is SpinStroke</h2>
                    <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">Codepen example</a></li>
                        <li><a href="#" className="button">view my blog post about it</a></li>
                    </ul>
                </section>
                <section>
                </section>
                <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </footer>
        )
    }
}