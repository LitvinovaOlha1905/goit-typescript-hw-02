import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { imageItem, Photo } from "../types";

interface imageGalleryProps {
  photos: imageItem[];
  openModal: () => void;
  setOnPhoto: (photo: Photo) => void;
}

const ImageGallery: React.FC<imageGalleryProps> = ({
  photos,
  openModal,
  setOnPhoto,
}) => {
  return (
		<ul className={styles.list}>
			{photos.map(photo => {
				return (
					<li key={photo.id}>
						<ImageCard
							url={photo.urls}
							alt={photo.alt_description}
							openModal={openModal}
							setOnPhoto={setOnPhoto}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ImageGallery;
