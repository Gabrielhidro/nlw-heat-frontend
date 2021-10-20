import styles from './style.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList(){
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa numquam omnis ut in ea deserunt libero mollitia quidem laborum natus, qui nemo incidunt voluptatibus cumque laudantium aspernatur nobis odit!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/gabrielhidro.png" alt="user image" />
            </div>
            <span>Gabriel Freitas</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa numquam omnis ut in ea deserunt libero mollitia quidem laborum natus, qui nemo incidunt voluptatibus cumque laudantium aspernatur nobis odit!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/gabrielhidro.png" alt="user image" />
            </div>
            <span>Gabriel Freitas</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa numquam omnis ut in ea deserunt libero mollitia quidem laborum natus, qui nemo incidunt voluptatibus cumque laudantium aspernatur nobis odit!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/gabrielhidro.png" alt="user image" />
            </div>
            <span>Gabriel Freitas</span>
          </div>
        </li>
      </ul>
    </div>
  )
}