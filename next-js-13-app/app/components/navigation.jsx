import Link from 'next/link'

const Links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
}]

export default function Navigation () {
  return (
    <header>
      <nav>
        <ul>
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
