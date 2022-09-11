import React from 'react'
import styles from "./Profile.module.css"
import Det from './Det';
export default function Profile() {

    const [age,setage] = React.useState(22);
    const [cond,setcond] = React.useState("show more detalis");
    const [flag,setflag] = React.useState(false)
    
    const inc=(val)=>{
        
        setage(age+val)
    
    }

    const show=()=>{

        if(flag===false){
            setflag(true)

        setcond(" hide more detalis")

        
        }
        else{
            setflag(false)

            setcond(" show more detalis") 

        }
        
        
        
    }
    


  return (
    <div className={styles.main}>

    <img className={styles.img} src="https://stylesatlife.com/wp-content/uploads/2019/06/Slick-and-Polished-Haircut-with-Fade.jpg.webp" alt="" srcset="" />
    <h2>Name: Sahid Jamal</h2>
    <h3>Age:{age}</h3>
        <div>
        <button onClick={()=>{inc(1)}} >inc age</button>
        <button onClick={()=>{inc(-1)}}>dec age</button>
        <button onClick={show} >{cond}</button>
        <div > {
        (flag)
          ? <div> <Det/> </div> 
          : <div>  </div> }</div>   
        </div>

        
    

    </div>
  )
}
