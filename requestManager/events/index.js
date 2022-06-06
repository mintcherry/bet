import requestManager from '@/requestManager/requestManager';

import { API_TOKEN, API_LIST_TYPE } from '@/utils/apiParams';

const GET_EVENTS = '/events/${sportId}/${tournamentId}/${listType}/${count}/${apiMode}/ru';
const GET_EVENTS_BY_SPORT = '/events/${sportId}/0/${listType}/${count}/${apiMode}/ru';

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

export const getEventsBySport = (params) => {
  return requestManager.get(GET_EVENTS_BY_SPORT
      .replace('${sportId}', params.sportId)
      .replace('${listType}', API_LIST_TYPE.SUB)
      .replace('${count}', params.count)
      .replace('${apiMode}', params.apiMode),
    {
      headers: {
        'Package': API_TOKEN,
      },
    },
  )
}
