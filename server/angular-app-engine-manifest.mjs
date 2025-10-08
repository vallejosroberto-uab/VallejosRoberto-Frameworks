
export default {
  basePath: 'https://vallejosroberto-uab.github.io/VallejosRoberto-Frameworks',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
