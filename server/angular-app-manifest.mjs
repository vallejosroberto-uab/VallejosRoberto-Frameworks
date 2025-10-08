
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://vallejosroberto-uab.github.io/VallejosRoberto-Frameworks/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/VallejosRoberto-Frameworks"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 515, hash: '7f2413ab8283b03ecfdbf2bab13421d0e758ed300211d8621f901ae570e83559', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: 'f1edb3a450d9aa51b76a594c03ad69c232274695b1945f3a46f18edd532d9415', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24689, hash: 'bb376851d36b5293348a60d86747d13a44c8253d09ac4f40b428aad1b9df871b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
