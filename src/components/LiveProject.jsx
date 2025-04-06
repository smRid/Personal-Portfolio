import React from 'react'
import { useParams } from 'react-router-dom'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'

export default function LiveProject() {
  let {heading}=useParams()
  return (
    <div>
      <h1>{heading}</h1>
      <button>lsdfjls</button>
    </div>
  )
}
