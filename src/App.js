import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ImagesBlock } from './components/ImagesBlock/ImagesBlock';
import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';

const ACCESS_KEY = 'M_5WdNK_Uk1FFlPtMnpid_VwcvAZrUGmlVukxEOFs1A';

const unsplash = createApi({
  accessKey: ACCESS_KEY,
});

function App() {
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPhotos = (page = 1) => {
    unsplash.photos
      .list({
        page: page,
        perPage: 30,
      })
      .then(
        (res) => {
          setIsLoaded(true);
          const imagesList = res.response;
          setImages([...images, ...imagesList.results]);
        },
        (error) => {
          setError(error);
        }
      )
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  let content;

  if (error) {
    content = <div>{error}</div>;
  } else if (!isLoaded) {
    content = (
      <Loader type="ThreeDots" color="#000000" height={80} width={80} />
    );
  } else {
    content = <ImagesBlock images={images} onUpdatePage={getPhotos} />;
  }

  return (
    <div>
      <Header id="header" />
      <div className={styles.content}>{content}</div>
      <Footer />
    </div>
  );
}

export default App;
