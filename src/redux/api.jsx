import { createAsyncThunk } from '@reduxjs/toolkit';

export const apiUrl = 'https://www.amiiboapi.com/api';

const amiiboData = (object) => {
  let amiibos = {};

  object.slice(0, 100).forEach((item) => {
    amiibos = {
      ...amiibos,
      [item.tail]:
      {
        series: item.amiiboSeries || null,
        character: item.character,
        game: item.gameSeries,
        image: item.image,
        name: item.name,
        type: item.type,
        id: item.tail,
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
