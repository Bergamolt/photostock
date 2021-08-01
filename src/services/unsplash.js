import { createApi } from "unsplash-js"

const ACCESS_KEY = 'M_5WdNK_Uk1FFlPtMnpid_VwcvAZrUGmlVukxEOFs1A'

export const unsplash = {
  _unsplash: createApi({
    accessKey: ACCESS_KEY,
  }),

  getPhotos(options, isSearch = false, query = '') {
    const opts = options || {
      page: 1,
      perPage: 30,
      orientation: 'landscape',
    }

    const request = !isSearch
      ? this._unsplash.photos.list(opts)
      : this._unsplash.search.getPhotos({...opts, query})

    return  request
  }
}