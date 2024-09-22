import styles from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface modal {
  onPhoto: {
    url: string;
    alt: string;
  };
  isOpenModal: boolean;
  closeModal: () => void;
}

const ImageModal: React.FC<modal> = ({ isOpenModal, closeModal, onPhoto }) => {
  return (
		<Modal
			isOpen={isOpenModal}
			onRequestClose={closeModal}
			style={{
				overlay: {
					backgroundColor: 'rgba(112, 211, 221, 0.3)',
				},
				content: {
					borderRadius: '8px',
					width: '50%',
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					background: 'transparent',
					transform: 'translate(-50%, -50%)',
				},
			}}
			closeTimeoutMS={200}
			className={styles.content}
		>
			<img className={styles.photo} src={onPhoto.url} alt={onPhoto.alt} />
		</Modal>
	);
};

export default ImageModal;
