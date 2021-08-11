import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section id="notFound" className="w-screen mb-48 overflow-hidden">
      <div className="mt-32">
        <div className="text-center">
          <h1>404</h1>
          <h3 className="mt-24">Page Not Found</h3>
        </div>
        <div className="text-black w-3/5 mt-24 mx-auto">
          <p>For general information please email <strong><a href="mailto:info@rehearsingphiladelphia.org" target="_blank">info@rehearsingphiladelphia.org</a></strong> or call us at <strong>215-895-ARTS</strong>, Monday-Friday 10am-6pm.</p>
          <p className="mt-8">All press and media inquiries please email <strong><a href="mailto:tbarnes@a-g.com" target="_blank">tbarnes@a-g.com</a></strong>.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
