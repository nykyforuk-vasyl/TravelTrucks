import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import Loader from "../Loader/Loader";
import s from "./mainModalStyles.module.css";

const ModalLoader = ({ text }) => {
  return (
    <ResponsiveModal
      open={true}
      onClose={() => {}}
      focusTrapped={false}
      center
      showCloseIcon={false}
      classNames={{
        overlay: s.mainModalOverlay,
        modal: s.mainModalContent,
      }}
    >
      <Loader text={text} />
    </ResponsiveModal>
  );
};

export default ModalLoader;
