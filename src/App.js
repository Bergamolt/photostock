import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import { unsplash } from "./services/unsplash"

import { Header } from './components/Header/Header'
import { Search } from './components/Search/Search'
import { Footer } from './components/Footer/Footer'
import { ImagesBlock } from './components/ImagesBlock/ImagesBlock'
import { Categories } from "./components/Categories/Categories"

import styles from './App.module.css'

function App() {

  const [error, setError] = useState(null)
  const [images, setImages] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [numberPage, setNumberPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    unsplash.getPhotos({
      page: numberPage,
      perPage: 30,
      orientation: 'landscape',
    },isSearch, searchValue)
      .then(
        (res) => {
          setImages([
            ...images,
            ...res.response.results
          ])

          setIsLoaded(true)
        },
        (error) => {
          setError(error)
        }
      )
      .catch((error) => setError(error))
  }, [ numberPage, searchValue ])

  const handlerSearch = (value) => {
    setIsSearch(true)
    setSearchValue(value)

    setIsLoaded(false)
    setNumberPage(1)
    setImages([])
  }

  let content

  if (error) {
    content = <div>{error}</div>
  } else if (!isLoaded) {
    content = (
      <Loader
        type="ThreeDots"
        color="#000000"
        height={80} width={80}/>
    )
  } else {
    content = (
      <ImagesBlock
        images={ images }
        handlerNumberPage={ () => setNumberPage((page) => page + 1) }
      />
    )
  }

  return (
    <div>
      <Header id="header">
        <Search handlerSearch={handlerSearch}/>
      </Header>
      <Categories/>
      <div className={styles.content}>
        {content}
      </div>
      <Footer/>
    </div>
  )
}

export default App
