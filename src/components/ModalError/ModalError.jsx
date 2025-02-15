import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import Loader from "../Loader/Loader";
import s from "../ModalLoader/mainModalStyles.module.css";

const ModalError = ({ text, onClose }) => {
  return (
    <ResponsiveModal
      open={!!text}
      onClose={onClose}
      focusTrapped={false}
      center
      showCloseIcon={false}
      classNames={{
        overlay: s.mainModalOverlay,
        modal: s.mainModalContent,
      }}
    >
      <button className="absolute right-1/2 top-4 rounded-xl bg-red px-8 py-[2px] text-base text-darkWhite hover:bg-darkRed">
        X
      </button>
      <Loader close={onClose} text={text} />
    </ResponsiveModal>
  );
};

export default ModalError;
