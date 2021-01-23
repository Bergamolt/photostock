import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ImagesBlock } from './components/ImagesBlock/ImagesBlock';
import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

const ACCESS_KEY = 'M_5WdNK_Uk1FFlPtMnpid_VwcvAZrUGmlVukxEOFs1A';

const unsplash = createApi({
  accessKey: ACCESS_KEY,
});

function App() {

  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPhotos = (page = 1) => {
    console.log(page);
    unsplash.photos
      .list({
        page: page,
        perPage: 30
      })
      .then((res) => {
        setIsLoaded(true);
        const imagesList = res.response;
        setImages(imagesList.results);
      }, (error) => {
        debugger
        setError(error);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  let content;

  if (error) {
    content = (<div>{error}</div>);
  } else if (!isLoaded) {
    content = (<div>Loading</div>);
  } else {
    content = (<ImagesBlock images={images} onUpdatePage={getPhotos}/>)
  }
  console.log('done');

  return (
    <div>
      <Header />
      {content}
      <Footer />
    </div>
  );
}

export default App;
