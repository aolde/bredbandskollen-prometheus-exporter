import client from "prom-client";
import { SpeedResult } from "./bbk";

export function getRegistryWithMetrics(result: SpeedResult) {
  const registry = new client.Registry();
  const labelNames = ["test_server"];

  registry.setDefaultLabels({
    test_server: result.server,
  });

  new client.Counter({
    name: "bredbandskollen_test_server_count",
    help: "Times test has been performed against test server",
    labelNames,
    registers: [registry],
  }).inc();

  new client.Gauge({
    name: "bredbandskollen_latency_ms",
    help: "Latency in milliseconds",
    labelNames,
    registers: [registry],
  }).set({}, result.latency);

  new client.Gauge({
    name: "bredbandskollen_download_mbps",
    help: "Download speed in megabits per second",
    labelNames,
    registers: [registry],
  }).set({}, result.download);
  new client.Gauge({
    name: "bredbandskollen_upload_mbps",
    help: "Upload speed in megabits per second",
    labelNames,
    registers: [registry],
  }).set({}, result.upload);

  return registry;
}
