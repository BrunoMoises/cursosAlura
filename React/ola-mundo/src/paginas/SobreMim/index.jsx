import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>Olá, eu sou Ellie Williams!</h3>

      <img src={fotoSobreMim} alt="Ellie Williams" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Oi pessoal, meu nome é Ellie e eu sou uma sobrevivente no mundo pós-apocalíptico devastado por uma pandemia que transformou a maioria da população em criaturas monstruosas. Eu nasci e cresci nesse mundo, então eu sei que a vida aqui é difícil e perigosa, mas eu sou uma lutadora.
      </p>
      <p className={styles.paragrafo}>
        Eu sou uma adolescente de 14 anos e embora tenha enfrentado coisas horríveis nessa vida, eu nunca desisto. Eu sou forte, corajosa e determinada, e eu luto pelo que acredito. Quando eu conheci o Joel, eu sabia que ele era um tipo diferente de sobrevivente, mas eu também sabia que ele precisava de mim tanto quanto eu precisava dele.
      </p>
      <p className={styles.paragrafo}>
        Ao longo de nossa jornada juntos, eu aprendi muito sobre mim mesma e sobre o mundo ao meu redor. Eu vi coisas que me assombram até hoje, mas também encontrei algumas pessoas boas ao longo do caminho. Ainda assim, eu sei que não posso confiar em ninguém completamente, exceto em mim mesma.
      </p>
      <p className={styles.paragrafo}>
        Eu tenho uma personalidade forte e às vezes posso ser teimosa, mas eu nunca desisto e sempre luto pelo que acho que é certo. Eu tenho muitos sonhos e esperanças para o futuro, mas, por enquanto, eu só tenho que sobreviver e lutar por cada dia. Eu sei que o caminho à frente será difícil, mas eu estou pronta para enfrentá-lo com determinação e coragem.
      </p>
      <p className={styles.paragrafo}>
        Bom, acho que é isso. Espero que vocês tenham gostado de conhecer um pouco mais sobre mim!
      </p>

    </PostModelo>
  )
}
