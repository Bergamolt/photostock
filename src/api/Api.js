import { createApi } from 'unsplash-js';

const ACCESS_KEY = 'M_5WdNK_Uk1FFlPtMnpid_VwcvAZrUGmlVukxEOFs1A';

const unsplash = createApi({
  accessKey: ACCESS_KEY,
});

let imagesList = {};

async unsplash.photos
  .list({
    page: 32,
    orderBy: 'popular'
  })
  .then((res) => {
    imagesList = await res.response;
    console.log(imagesList);
  });