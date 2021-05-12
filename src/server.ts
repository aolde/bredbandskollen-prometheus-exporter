import fastify from "fastify";
import fastifyGracefulShutdown from "fastify-graceful-shutdown";
import { speedTest } from "./bbk";
import { getRegistryWithMetrics } from "./prometheus";
import { getIndexPage } from "./html";

const server = fastify({ logger: true });

server.register(fastifyGracefulShutdown);

server.get("/", (_, reply) => {
  reply.type("text/html");
  reply.send(getIndexPage());
});

server.get("/health", (_, reply) => {
  reply.send("ok");
});

server.get("/metrics", async () => {
  const result = await speedTest({ useMock: false });
  const registry = getRegistryWithMetrics(result);
  return registry.metrics();
});

const address = process.env.HTTP_ADDRESS || "127.0.0.1";
const port = process.env.HTTP_PORT || 3000;

const start = async () => {
  try {
    await server.listen(port, address);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
