import React, { useState } from 'react'
import style from './qna.module.css'

const QNA = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className={style.qna}>
      <div>
        <h4>{title}</h4>
        <button style={{ margin: "5px 5px 5px 5px" }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  )
}

export default QNA
