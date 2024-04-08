import React, { useState } from 'react'
import { data } from './data';
import QNA from './QNA';
import style from './qnas.module.css'

const QNAS = () => {
  const [qnas, setqnas] = useState(data);
  // console.log(data);

  return (
    <main className={style.container}>
      <section>
        <h1 style={{ textAlign: "center" }}>QUESTION AND ANSWER SEESSION</h1>
        {qnas.map((qna)=>(
          <QNA key={qna.id} {...qna}/>
        ))}
      </section>
    </main>
  )
}

export default QNAS;
