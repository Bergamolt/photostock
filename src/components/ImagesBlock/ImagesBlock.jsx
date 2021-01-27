import { useState } from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Modal } from '../Modal/Modal';
import { TopButton } from '../TopButton/TopButton';
import { ImageItem } from './ImageItem/ImageItem';
import styles from './ImagesBlock.module.css';

export const ImagesBlock = ({images, onUpdatePage}) => {
  
  const [numberPage, setNumberPage] = useState(2);
  const [activeModal, setActiveModal] = useState(false);
  const [imageURL, setImageURL] = useState('');


  const switchPages = () => {
    onUpdatePage(numberPage);
    setNumberPage(numberPage + 1);
  };
  
  const openModal = (url) => {
    setActiveModal(true);
    setImageURL(url);
  };

  const content = images.map((item, index) => (<ImageItem url={item.urls.regular} key={index} onModal={openModal}/>));

  return (
    <div id='content' className={styles.content}>
      {content}
      <div className={styles.navigation}>
        <button className={styles.btn} onClick={() => switchPages()}>more</button>
      </div>
      <TopButton onClick={() => {scroll.scrollToTop({smooth: true})}} />
      <Modal active={activeModal} onActive={setActiveModal}>
        <img src={imageURL} alt=""/>
      </Modal>
    </div>
  )
}