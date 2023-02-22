import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

import React from 'react'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Sejam bem-vindos ao meu site oficial! Aqui vocês poderão acompanhar minha jornada como sobrevivente do apocalipse zumbi e descobrir novidades sobre The Last of Us. Vamos juntos explorar esse mundo pós-apocalíptico e enfrentar novos desafios!
                    <br />
                    <br />
                    Abraços,
                    <br />
                    Ellie
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="Circulo colorido" />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto da Ellie" />
            </div>
        </div>
    )
}
