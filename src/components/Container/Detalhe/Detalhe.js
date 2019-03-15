import React, { Component } from 'react'
import { Link } from 'gatsby'
import style from './style'
const { HomeStyle } = style

class Detalhe extends Component {

    state = {
        listImage: []
    }

    componentDidMount() {
        console.log('[[[[Detalhe]]]]')
    }

    render () {
        return (
            <HomeStyle>
                <div className="geral">
                    <div className="container">
                        <img src="https://c7.uihere.com/files/622/92/875/emoji-heart-emoticon-eye-emojis.jpg" alt="success" style={{width: 100}} />
                        <Link to="/">Back</Link>
                    </div>
                </div>
            </HomeStyle>
        )
    }
}

export default Detalhe;
