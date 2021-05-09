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

const start = async () => {
    try {
        await server.listen(process.env.PORT || 3000);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
