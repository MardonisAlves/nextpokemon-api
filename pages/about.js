import Image from 'next/image';
import styles from './../styles/About.module.css'
export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>
                There are many variations of passages of
                Lorem Ipsum available, but the majority have 
                suffered alteration in some form, by injected humour
            </p>
            <Image 
            src="/images/charizard.png" 
            width="300"
            height="300"
            alt="Charizard" />
        </div>
    )
}