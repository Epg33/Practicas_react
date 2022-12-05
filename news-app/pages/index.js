import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import { useState, useEffect } from "react";

export default function Home({ articles }) {
  
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length=== 0 && <p>No tenemos articulos</p>}
        {articles.length > 0 && articles.map((article, index) => {
          return <article key={index}>
            <img alt={`Image for the article ${article.title}`} src={article.urlToImage} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </article>
        })}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-02&sortBy=published&apiKey=b5dbd67693af4df080df4680eb8b164b')
  const {articles} = await response.json()
  return {
    props: {
      articles
    }
  }
}

// export async function getServerSideProps() {
//   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-02&sortBy=published&apiKey=b5dbd67693af4df080df4680eb8b164b')
//   const {articles} = await response.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }