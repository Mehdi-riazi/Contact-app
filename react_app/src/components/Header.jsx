
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact app</h1>
      <p>
        <a href="https://github.com/Mehdi-riazi">Github</a> | React project
      </p>
    </div>
  )
}

export default Header