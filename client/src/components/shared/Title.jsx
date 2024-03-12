import React from 'react'
import {Helmet} from 'react-helmet-async'
const Title = ({
    title="Chat",
    description='BATAE RUKNI NHI CHAHIYE'
}) => {
  return (
   <Helmet>
<title>{title}</title>
<meta name="description" comtent={description}/>
   </Helmet>
  )
}

export default Title