import requestManager from '@/requestManager/requestManager';

import { API_TOKEN, API_LIST_TYPE } from '@/utils/apiParams';

const GET_EVENTS = '/events/${sportId}/${tournamentId}/${listType}/${count}/${apiMode}/ru';

export const getEvents = (sportId, tournamentId, apiMode, count) => {
  return requestManager.get(GET_EVENTS
      .replace('${sportId}', sportId)
      .replace('${tournamentId}', tournamentId)
      .replace('${listType}', API_LIST_TYPE.SUB)
      .replace('${count}', count)
      .replace('${apiMode}', apiMode),
    {
      headers: {
        'Package': API_TOKEN,
      },
    },
  )
}