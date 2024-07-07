import styles from './home-picture.module.scss';

interface HomePictureProps {
  data: {
    title: string;
    description: string;
    image: string;
  };
}

export const HomePicture = ({ data }: HomePictureProps) => {
  const { title, description, image } = data;

  return (
    <div className={styles.home_picture} style={{ background: image }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
