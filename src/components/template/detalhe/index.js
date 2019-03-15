import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import GlobalStyle from './style'

const LayoutDetail = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleDetalheQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Fragment >
          <GlobalStyle />
          <div>
            {children}
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </Fragment>
      )}
    />
  )
}

LayoutDetail.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDetail
