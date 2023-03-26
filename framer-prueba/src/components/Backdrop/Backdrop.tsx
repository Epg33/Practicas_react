import { motion } from "framer-motion" 

export interface BackdropI {
  children: React.ReactNode,
  onClick: () => void
}

const Backdrop:React.FC<BackdropI> = ({children, onClick}) => {
  return (
    <motion.div 
      onClick={onClick} 
      className='absolute top-0 left-0 w-full h-full bg-[#000000e1] flex justify-center items-center'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      {children}
    </motion.div>
  )
}

export default Backdrop