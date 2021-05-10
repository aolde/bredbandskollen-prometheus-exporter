import { speedTest } from "./bbk";
import fastify from "fastify";
import { getRegistryWithMetrics } from "./prometheus";
import { getIndexPage } from "./html";

const server = fastify({ logger: true });

server.register(require("fastify-graceful-shutdown"));

server.get("/", async (request, reply) => {
    reply.type("text/html");
    reply.send(getIndexPage());
});

server.get("/metrics", async (request, reply) => {
    const result = await speedTest({ useMock: false });
    const registry = getRegistryWithMetrics(result);
    return await registry.metrics();
});

const address = process.env.HTTP_ADDRESS || "127.0.0.1";
const port = process.env.HTTP_PORT || 3000;

const start = async () => {
    try {
        await server.listen(port, address);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
