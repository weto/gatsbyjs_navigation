import styled from 'styled-components';

const HomeStyle = styled.div`
hr {
    width: 97%;
}
.capa {
    background-repeat: no-repeat;
    width: 100%;
    background-color: #696969;
    padding-top: 25%;
    background-size: 100%;
}
.descricao {
    background-color: #fff;
    padding: 10px;
    color: #7f0102;
}
h1, h2 {
    color: #0d468a;
    padding-left: 10px;
}
.linha {
    padding-bottom: 8px;
}
.container-capitulos-autor { }
.container-outras-obras {
    display: flex;
    flex-wrap: wrap;
}

.container {
    display: flex;
    flex-direction: column;
}

.container_noticia_capa {
    display: flex;
    flex-direction: row;
}

.container_noticia h2 {
    margin: 0px!important;
}    

@media (min-width: 768px) {
    .geral {
        margin: 0 auto;
        width: 1280px;
    }
    .container-capitulos-autor, .container-todos-capitulos {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
    }
    .container-capitulos-autor.container-outras-obras, 
    .container-capitulos-autor.container-ultimos-capitulos {}
    .descricao {
        background: #fff;
        height: 100%;
        margin: 0 auto;
        width: 75%;
        padding: 10px;
    }
}
@media (max-width: 767px) {
    .geral, .container_capituto_youtube {
        display: flex;
        flex-direction: column;
    }
    .coluna_youtube {
        width: 100%!important;
    }
    .capa {
        height: 100%;
        padding-top: 56%;
        background-size: 100%;
    }
    .container-outras-obras {
        flex-direction: column;
    }
    .container-capitulos {
        padding: 10px;
        width: 100%!important;
    }
    .container_noticia_capa {
        display: flex;
        flex-direction: column;
    }
}
`;

const NoticiaStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const YoutubeStyle = styled.div`

    .youtube-container {
        width: 100%;
    }

    iframe {
        width: 100%!important;
        height: 300px;
    }

    @media (min-width: 768px) {
        iframe {
            height: 249px;
        }
    }

`;

const PaginacaoStyle = styled.div`
    text-align: center;
    width: 100%;
    button {
        margin: 8px 5px;
        background-color: #7f0102!important;
        border-color: #fff!important;
        color: #fff!important;
    }
`;

export default {
    HomeStyle,
    NoticiaStyle,
    YoutubeStyle,
    PaginacaoStyle
};
