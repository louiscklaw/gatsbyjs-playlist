import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../utils/common'

function PaginationTest(props){


  return(
    <section className={active_style.section} id="pagination">
    <h1 className={active_style.title}>Pagination</h1>
    <hr />
    <nav className={active_style.pagination}>
      <a className={combineStyles([active_style.paginationPrevious, active_style.isDisabled])}>Previous</a>
      <a className={active_style.paginationNext}>Next page</a>
      <ul className={active_style.paginationList}>
        <li>
          <a className={active_style.paginationLink}>1</a>
        </li>
        <li>
          <span className={active_style.paginationEllipsis}>…</span>
        </li>
        <li>
          <a className={active_style.paginationLink}>45</a>
        </li>
        <li>
          <a className={combineStyles([active_style.paginationLink, active_style.isCurrent])}>46</a>
        </li>
        <li>
          <a className={active_style.paginationLink}>47</a>
        </li>
        <li>
          <span className={active_style.paginationEllipsis}>…</span>
        </li>
        <li>
          <a className={active_style.paginationLink}>86</a>
        </li>
      </ul>
    </nav>
    <br />
    <nav className={combineStyles([active_style.pagination, active_style.isRounded])} role="navigation" aria-label="pagination">
      <a className={active_style.paginationPrevious}>Previous</a>
      <a className={active_style.paginationNext}>Next page</a>
      <ul className={active_style.paginationList}>
        <li><a className={active_style.paginationLink} aria-label="Goto page 1">1</a></li>
        <li><span className={active_style.paginationEllipsis}>…</span></li>
        <li><a className={active_style.paginationLink} aria-label="Goto page 45">45</a></li>
        <li><a className={combineStyles([active_style.paginationLink, active_style.isCurrent])} aria-label="Page 46" aria-current="page">46</a></li>
        <li><a className={active_style.paginationLink} aria-label="Goto page 47">47</a></li>
        <li><span className={active_style.paginationEllipsis}>…</span></li>
        <li><a className={active_style.paginationLink} aria-label="Goto page 86">86</a></li>
      </ul>
    </nav>
  </section>
  )

}

export default PaginationTest