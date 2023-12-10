import Header from '@/components/header/header'
import styles from './home.module.css'
import Footer from '@/components/footer/footer'
import HomeNav from '@/components/homeNav/homeNav'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header 
        title={"Halyna Harasymovych"}
        subtitle={"Creative Developer & Designer"}
        isHome={true}
      />
      <HomeNav />
     
       Home page
       <Footer />
    </main>
  )
}
