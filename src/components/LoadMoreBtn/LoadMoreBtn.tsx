import styles from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
		<div className={styles.content}>
			<button onClick={onLoadMore} className={styles.loadmore_btn} type='button'>
				Load more
			</button>
		</div>
	);
};

export default LoadMoreBtn;
