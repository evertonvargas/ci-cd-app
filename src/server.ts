import fastify from 'fastify';

const server = fastify({
  logger: true // Habilita o logger nativo do Fastify
});

server.get('/', async (request, reply) => {
  return 'evertondev';
});

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
