import React from 'react'
import Head from 'next/head';

function SetHeaders({title='Crudeon', description='Crudeon Global, a sap based company to provide asap solutions to be at top in this world' }) {
  return (
    <>
       <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
          <meta name="description" content={description}></meta>
          <meta name="author" content="Crudeon, Subburaman R"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="canonical" href="https://sapocom.vercel.app" />
       </Head>
    </>
  )
}

export default SetHeaders
