import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>News App - Home</title>
      </Head>

      <h1>Aprendiendo Next js</h1>
      <Link href='/about'>about</Link>
      <button onClick={()=>router.push('/article/2')}>
        Navegacion programatica 
      </button>
    </div>
  );
}
