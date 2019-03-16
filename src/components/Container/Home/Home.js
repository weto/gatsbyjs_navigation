import React, { Component } from 'react'
import { Link } from 'gatsby'
import style from './style'
const { HomeStyle } = style

class Home extends Component {

    state = {
        listImage: []
    }

    componentDidMount() {
        this.setState({listImage: [
            'https://us.123rf.com/450wm/yayayoy/yayayoy1607/yayayoy160700013/63970642-it-is-too-small-emoticon-showing-small-size-with-fingers-.jpg?ver=6',
        ]})
    }

    render () {
        return (
            <HomeStyle>
                <div className="geral">
                    <div className="container">
                        {this.state.listImage ? this.state.listImage.map((item, index) => {
                            return <img src={item} alt={`${index}_imagem`} style={{width: 100}} />
                        }):[]}
                        <Link to="/detail/1">Detail</Link>
                    </div>
                </div>
            </HomeStyle>
        )
    }
}

export default Home;
