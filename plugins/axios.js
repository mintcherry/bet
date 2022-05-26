// import requestManager from '@/requestManager/requestManager';
//
// import { TOKEN } from '@/utils/accessToken';
//
// export default function ({ $cookies }) {
//   requestManager.interceptors.request.use(config => {
//     // if ($cookies.get('accessToken')) {
//     //   config.headers.Authorization = 'Bearer ' + $cookies.get('accessToken');
//     // }
//     config.headers.Package = TOKEN;
//
//     return config;
//   });
// };