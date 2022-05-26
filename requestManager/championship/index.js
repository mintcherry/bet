import requestManager from '@/requestManager/requestManager';

import { API_TOKEN } from '@/utils/apiParams';

const GET_CHAMPIONSHIP = '/tournaments/${sportId}/${countryId}/${mode}/ru';

export const getChampionship = (sportId, countryId, mode) => {
  return requestManager.get(GET_CHAMPIONSHIP
      .replace('${sportId}', sportId)
      .replace('${countryId}', countryId)
      .replace('${mode}', mode),
    {
      headers: {
        'Package': API_TOKEN,
      },
    },
  )
}