![Logo bredbandskollen-prometheus-exporter](https://github.com/aolde/bredbandskollen-prometheus-exporter/blob/main/assets/logo.png?raw=true)

# bredbandskollen-prometheus-exporter
Export Internet speed tests from Bredbandskollen to Prometheus

## Exported Metrics

| Metric | Description | Labels |
|-|-|-|
| bredbandskollen_test_server_count | Times test has been performed against test server | test_server |
| bredbandskollen_latency_ms | Latency in milliseconds | test_server |
| bredbandskollen_download_mbps | Download speed in megaits per second | test_server |
| bredbandskollen_upload_mbps | Upload speed in megabits per second | test_server |

## Docker

```
docker pull aolde/bredbandskollen-prometheus-exporter
```

```
docker run --rm --name bbk-exporter \
    -p 3001:80 \
    aolde/bredbandskollen-prometheus-exporter
```

```
curl http://localhost:3001/metrics
```

## Helm

```console
helm repo add aolde https://aolde.github.com/helm
helm install -f values.yaml bbk-exporter aolde/bredbandskollen-prometheus-exporter
```

See more info in the [helm chart](https://github.com/aolde/helm/tree/main/charts/bredbandskollen-prometheus-exporter).
