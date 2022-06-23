import React from 'react'
import classnames from 'classnames/bind'

import * as styles from './index.module.scss'

const cx = classnames.bind(styles)

export default function Home() {
  return (
    <h1 className={"text-3xl font-bold " + cx("home")}>
      Hello world!
    </h1>
  )
}
