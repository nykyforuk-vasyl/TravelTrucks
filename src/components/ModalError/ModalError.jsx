import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import Error from "../ErrorComponents/ErrorComponents";
import s from "../ModalError/mainModalStyles.module.css";

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
      <button
        onClick={() => onClose()}
        className="rounded-xl bg-red px-2 py-[2px] text-base text-darkWhite hover:bg-darkRed"
      >
        X
      </button>
      <Error close={onClose} text={text} />
    </ResponsiveModal>
  );
};

export default ModalError;
