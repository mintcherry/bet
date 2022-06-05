import requestManager from '@/requestManager/requestManager';

import { API_TOKEN } from '@/utils/apiParams';

const GET_SPORTS = '/sports/${apiMode}/ru';

export const getSports = (apiMode) => {
  return requestManager.get(GET_SPORTS
      .replace('${apiMode}', apiMode),
    {
      headers: {
        'Package': API_TOKEN,
      },
    },
  )
}
