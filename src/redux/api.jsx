import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://www.amiiboapi.com/api';

const amiiboData = (object) => {
  let amiibos = {};

  object.forEach((item) => {
    amiibos = {
      ...amiibos,
      [item.tail]:
      {
        series: item.amiiboSeries,
        character: item.character,
        game: item.gameSeries,
        image: item.image,
        name: item.name,
        type: item.type,
      },
    };
  });
  return amiibos;
};

const getAmiibos = createAsyncThunk(
  'amiibos/getAmiibos',
  async () => {
    const response = await fetch(`${apiUrl}/amiibo/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return amiiboData(data.amiibo);
  },
);

export default getAmiibos;
