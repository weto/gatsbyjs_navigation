import styled from 'styled-components';

const HomeStyle = styled.div`

    h3 {
        width: 100%;
        color: #0d468a;
        font-size: bold;
        position: relative;
        height: 15px;
        font-weight: bold;
    }
    .container_noticia h3 {
        margin-left: 10px;
    }
    .alinhamento {
        margin-top: 50px;
    }
    .noticia {
        width: 325px;
        margin: 0;
    }
    .container_destaques, .container_semana {
        margin: 10px;
    }

    @media (min-width: 768px) {
        .geral {
            margin: 0 auto;
            width: 1280px;
        }
        h3 {
            margin-bottom: 10px!important;
            height: 19px!important;
        }
        .container {
            display: flex;
        }
        .container_semana, .container_noticia {
            display: flex;
            flex: 2;
            flex-wrap: wrap;
        }
        .container_destaques, .container_semana {
            margin: 0px!important;
        }
        .container_destaques {
            display: flex;
            flex: 4;
            flex-wrap: wrap;
        }
        .container_destaques h3,
        .container_noticia h3 {
            height: 19px;
            margin-left: 10px;
        }
    
    }
`;

const NoticiaStyle = styled.div`
    .container_noticia_left {
        margin: 0px!important;
    }

    @media (max-width: 767px) {
        .noticia {
            width: 100%;
        }

        .container_noticia_left {
            float: initial!important;
        }

        img {
            width: 100%!important;
            height: 271px!important;
            border-radius: initial!important;
        }
    }
`;

export default {
    HomeStyle: HomeStyle,
    NoticiaStyle: NoticiaStyle,
};
