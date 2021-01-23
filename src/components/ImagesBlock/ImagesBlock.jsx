import { useEffect, useRef, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ImageItem } from './ImageItem/ImageItem';
import styles from './ImagesBlock.module.css';

export const ImagesBlock = ({images, onUpdatePage}) => {

  const [height, setHeight] = useState(0)
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  const [numberPage, setNumberPage] = useState(2);
  const [activeModal, setActiveModal] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const switchPages = (direction) => {
    if (direction === 'prev') {
      setNumberPage(numberPage - 1);
    } else if (direction === 'next') {
      setNumberPage(numberPage + 1);
    } else {
      onUpdatePage(numberPage);
    }
    onUpdatePage(numberPage);
  };
  console.log(window.scrollY)
  const openModal = (url) => {
    setActiveModal(true);
    setImageURL(url)
  };

  const content = images.map(item => (<ImageItem url={item.urls.regular} key={item.id} onModal={openModal}/>));

  return (
    <div id='content' className={styles.content} ref={ref} onScroll={() => {}}>
      {content}
      <div>
        <button onClick={() => {
          switchPages('prev')
        }}>Prev</button>
        <button onClick={() => {
          switchPages('next')
        }}>Next</button>
      </div>
      <Modal active={activeModal} onActive={setActiveModal}>
        <img src={imageURL} alt=""/>
      </Modal>
    </div>
  )
}