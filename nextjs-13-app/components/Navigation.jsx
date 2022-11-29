import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

const Links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
},
{
  label: 'Posts',
  route: '/posts'
}]

export default function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {Links.map(({ label, route }) => {
            return (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
