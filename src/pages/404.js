import React from 'react'

import Layout from '../components/template/completo'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" style={{background: 'red'}}/>
    <h1>NOT FOUND</h1>
    <img src="http://recalculandoarota.com.br/wp-content/uploads/2015/07/Unknown.jpeg" alt="Unknown" style={{width: 100}} />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
