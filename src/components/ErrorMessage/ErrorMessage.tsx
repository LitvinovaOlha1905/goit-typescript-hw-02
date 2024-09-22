import styles from "./ErrorMessage.module.css";

interface error {
  errorMessage: null | string;
}

const ErrorMessage: React.FC<error> = ({ errorMessage }) => {
  return (
		<div>
			<p className={styles.error}>
				{errorMessage}. Please, try again later...
			</p>
		</div>
	);
};

export default ErrorMessage;
