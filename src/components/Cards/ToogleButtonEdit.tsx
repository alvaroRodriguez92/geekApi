import { motion, AnimatePresence } from "framer-motion";
import { ToogleProps } from "../../types";
import DoneIcon from '@mui/icons-material/Done';

export default function ToogleButtonEdit({ isEditing, edit, item,values }: ToogleProps) {
  
  return (
    <div
      className="switch"
      data-isOn={isEditing[item.id]}
      onClick={() => edit(isEditing, item.id, values)}
    >
      {" "}
      <AnimatePresence>
        <motion.div
          layout="position"
          className="handle"
          initial={{ x: -15, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 1 }}
          transition={{ duration: 0.5}}
        ><DoneIcon sx={{color:"rgba(60,58,55,1)", fontSize:"1.9rem"}}/></motion.div>
      </AnimatePresence>
    </div>
  );
}
