import Main from '../component/main/Main'
import { Poppins } from '@next/font/google'
const poppins = Poppins({ subsets: ['bold'],weight: '800' })

export default function Home() {
  return (
    <div className='bg-gray-100 index relative '>

<div >

<Main/>

</div>
         </div>
  )
}