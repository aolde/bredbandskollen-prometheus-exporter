import { SpeedResult } from "./bbk";
import client from "prom-client";

export function getRegistryWithMetrics(result: SpeedResult) {
    const registry = new client.Registry();
    const labelNames = ["test_server"];

    registry.setDefaultLabels({
        test_server: result.server,
    });

    new client.Counter({
        name: `bredbandskollen_test_server_count`,
        help: "Times test has been performed against test server",
        labelNames: labelNames,
        registers: [registry],
    }).inc();

    new client.Gauge({
        name: "bredbandskollen_latency_ms",
        help: "Latency in milliseconds",
        labelNames: labelNames,
        registers: [registry],
    }).set({}, result.latency);

    new client.Gauge({
        name: "bredbandskollen_download_ms",
        help: "Download speed in megaits per second",
        labelNames: labelNames,
        registers: [registry],
    }).set({}, result.download);
    new client.Gauge({
        name: "bredbandskollen_upload_mbps",
        help: "Upload speed in megaits per second",
        labelNames: labelNames,
        registers: [registry],
    }).set({}, result.upload);

    return registry;
}
