import { useGetPhoto } from 'entities/photo/queries';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { Loader } from 'shared/ui/loader';
import styles from './detail-page.module.scss';
import { useState } from 'react';

export const DetailPage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { id } = useParams();
  const { data, loading } = useGetPhoto(Number(id));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.avg_color);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  if (loading) return <Loader />;

  return (
    <section className={styles.detail_page}>
      <button className={styles.close} onClick={handleBack}>
        <IoIosArrowBack size={16} color="#727170" />
      </button>
      <div className={styles.detail_page_info}>
        <div className={styles.detail_page_image}>
          <img src={data.src.original} alt={data.alt} />
        </div>
        <div className={styles.detail_page_aside}>
          <h1>{data.photographer}</h1>
          <p>{data.alt}</p>
          <div
            className={styles.color}
            style={{ backgroundColor: data.avg_color }}
            onClick={handleCopy}
          >
            {data.avg_color}
          </div>
        </div>
      </div>
      <div
        className={styles.notification}
        style={{ display: showNotification ? 'block' : 'none' }}
      >
        <p>Color copied to clipboard</p>
      </div>
    </section>
  );
};
