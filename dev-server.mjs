import { dev } from 'astro';

async function start() {
  const server = await dev({
    root: '.',
    server: {
      host: '127.0.0.1',
      port: 4321
    }
  });
  console.log('Astro dev server running in foreground on http://127.0.0.1:4321');
}

start().catch(err => {
  console.error('Failed to start Astro server:', err);
  process.exit(1);
});
