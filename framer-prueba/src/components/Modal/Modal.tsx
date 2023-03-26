import { motion } from "framer-motion"
import { Backdrop } from "../Backdrop"

export interface ModalI {
  handleClose: () => void,
  text: string
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffnes: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const Modal:React.FC<ModalI> = ({handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        className='m-auto p-[0 2rem] rounded-lg flex flex-col items-center w-[700px] h-96 bg-[#ff9d00]'
        drag
        
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <p>{text}</p>
          <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  )
}

export default Modal