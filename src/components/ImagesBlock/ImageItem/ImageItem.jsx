import styles from './ImageItem.module.css';

export const ImageItem = ({ url, onModal }) => {
  
  const bg = {
    backgroundImage: `url('${url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return <div onClick={() => onModal(url)} style={bg} className={styles.card}></div>;
};
