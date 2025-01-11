import { useGetPhoto } from 'entities/photo/queries';
import { useNavigate, useParams } from 'react-router-dom';
// import { BsInfoCircle } from 'react-icons/bs';
// import { BsThreeDots } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { GoPlus } from 'react-icons/go';
import { Loader } from 'shared/ui/loader';
import styles from './detail-page.module.scss';

export const DetailPage = () => {
  const { id } = useParams();
  const { data, loading } = useGetPhoto(Number(id));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  if (loading) return <Loader />;

  return (
    <section className={styles.detail_page}>
      <button className={styles.close} onClick={handleBack}>
        <IoCloseOutline size={24} />
      </button>
      <div className={styles.detail_page_info}>
        <div className={styles.detail_page_image}>
          <img src={data.src.original} alt={data.alt} />
        </div>
        <div className={styles.detail_page_aside}>
          <div className={styles.headline}>
            {/* TODO then add settings */}
            {/* <div className={styles.settings}>
              <button>
                <BsThreeDots size={24} />
              </button>
              <button>
                <BsInfoCircle size={24} />
              </button>
            </div> */}
            <button className={styles.save}>
              <GoPlus size={24} />
            </button>
          </div>
          <h1>{data.photographer}</h1>
          <p>{data.alt}</p>
          <div
            className={styles.color}
            style={{ backgroundColor: data.avg_color }}
          ></div>
        </div>
      </div>
    </section>
  );
};
