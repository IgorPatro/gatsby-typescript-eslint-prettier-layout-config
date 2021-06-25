import React from 'react'
import Layout from 'layout/Layout'

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
