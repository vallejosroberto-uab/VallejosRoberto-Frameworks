
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/lab1-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lab1-angular"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YWACCYIZ.js"
    ],
    "route": "/lab1-angular/About"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6007, hash: '4c3b92771bc8c6fff67b06de88c90084585f948d15627703aaa308bdbcd0891b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6527, hash: '0e262bee8f2ecd5ea1480bae412528e3beb4e45ed9021abb898552127dc530d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'About/index.html': {size: 7633, hash: '1fbe6f0e39bdeea9b4730b32f8e5122f1425fc39fbcd192ddbf23bec423b5ae1', text: () => import('./assets-chunks/About_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13720, hash: '2f0477d5af8f6a1debd16542fb358dd08331aa99e8b62eb9cc892d7a7c640b22', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
