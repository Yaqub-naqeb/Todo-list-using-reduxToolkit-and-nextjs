
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { useDispatch,useSelector } from 'react-redux'

import { set_name } from '../redux/reducers/profille'




const inter = Inter({ subsets: ['latin'] })





export default function Home() {


  const {name}=useSelector(state=>state.profile)



const dsipatch=useDispatch();

  return (
    <>

<h1>the name is {name}</h1>
<br />
<input placeholder='Change the name here' type="text" onChange={(e)=>dsipatch(set_name(e.target.value))} />


         </>
  )
}