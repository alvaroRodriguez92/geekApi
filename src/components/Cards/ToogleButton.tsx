import { motion, AnimatePresence } from "framer-motion";
import { ToogleProps } from "../../types";
import EditIcon from '@mui/icons-material/Edit';

export default function ToogleButton({ isEditing, edit, item }: ToogleProps) {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div
      className="switch"
      data-isOn={isEditing[item.id]}
      onClick={() => edit(isEditing, item.id)}
    >
      {" "}
      <AnimatePresence>
        <motion.div
          layout="position"
          className="handle"
          initial={{ x: 15, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 1 }}
          transition={{ duration: 0.5}}
        ><motion.i initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1.5 }}><EditIcon sx={{mt:0.3, color:"rgba(60,58,55,1)"}}/></motion.i></motion.div>
      </AnimatePresence>
    </div>
  );
}
