import { motion } from "framer-motion" 

export interface BackdropI {
  children: string,
  onClick: () => void
}

const Backdrop:React.FC<BackdropI> = ({children, onClick}) => {
  return (
    <motion.div onClick={onClick}>
      {children}
    </motion.div>
  )
}

export default Backdrop