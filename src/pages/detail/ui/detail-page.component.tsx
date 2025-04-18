import { useState } from 'react';
import { Loader } from 'shared/ui/loader';
import { IoIosArrowBack } from 'react-icons/io';
import { useGetPhoto } from 'entities/photo/queries';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './detail-page.module.scss';

export const DetailPage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { id } = useParams();
  const { data, loading } = useGetPhoto(Number(id));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color);
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
        <div className={styles.image}>
          <img src={data.src.original} alt={data.alt} />
        </div>
        <div className={styles.aside}>
          <h1>{data.photographer}</h1>
          <p>{data.alt}</p>
          <div className={styles.colors}>
            {[data.avg_color].map((color, idx) => (
              <span
                key={color + idx}
                className={styles.color}
                style={{ backgroundColor: color }}
                onClick={() => handleCopy(color)}
                title={color}
              >
                {color}
              </span>
            ))}
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
