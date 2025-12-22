globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_COjg8n66.mjs';
import './chunks/astro/server_DOo1hSJ6.mjs';
import { s as sequence } from './chunks/index_zRmD81ip.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
