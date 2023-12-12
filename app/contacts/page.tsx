import React from 'react'
import { default as InstagramIcon } from "@/public/socials/instagram.svg";
import { default as GitHubIcon } from "@/public/socials/github.svg";
import { default as LinkenInIcon } from "@/public/socials/linkedin.svg";
import styles from "./styles.module.scss";
import Header from '@/components/header/header';



const Contacts = () => {
  return (
    <div className={styles.contact_us}>
    {/* <a className={styles.heading} href="/">
       HARASYMOVYCH
     </a> */}
     <Header
        title={"Halyna Harasymovych"}
        subtitle={"Check my contacts"} 
      />
   <div className={styles.container}>
     <div className={styles.content}>
       {/* <form action="">
         <h2>Lest`s get in touch</h2>

         <label>
           Your name
           <input type="text" />
         </label>
         <label>
           Your email
           <input type="text" />
         </label>
         <label>
           Waht can I do for you?
           <input type="text" />
         </label>

         <button>Send</button>
       </form> */}

       <div className={styles.contact_info}>
         <div className={styles.contact_items}>
           {/* <h2>Contacts</h2> */}
           <a href="mailto:hv.harasymovych@gmail.com">
             hv.harasymovych@gmail.com
           </a>
           <a href="tel:+380977090717">+3 (809) 77 09 0717</a>
         </div>
         <div className={styles.socials}>
           <h2>Follow</h2>
           <div className={styles.socials_items}>
             <a
               target="blank"
               href="https://www.linkedin.com/in/hv-harasymovych/"
             >
               <LinkenInIcon />
             </a>
             <a target="blank" href="https://github.com/hrsmvch">
               <GitHubIcon />
             </a>
             <a
               target="blank"
               href="https://www.instagram.com/harasymovych.hv/"
             >
               <InstagramIcon />
             </a>
           </div>
         </div>
       </div>
     </div>
   </div> 
 </div>
  )
}

export default Contacts