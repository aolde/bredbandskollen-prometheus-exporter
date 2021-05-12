export function getIndexPage() {
  return `
  <html>
  <head>
    <title>bredbandskollen-prometheus-exporter</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@700&display=swap');

      html {
        font-size: 20px;
        height: 100%;        
      }

      body {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to bottom, #155799, #159957);
        background-attachment: fixed;
        color: #fff;
        display: flex;
        justify-content: center;
        padding: 1em;
        box-sizing: border-box;
        margin: 0;
        height: 100%;
      }

      @media (min-width: 500px) {
        body {
          align-items: center;
        }
      }
      
      svg { fill: currentColor; }

      h1, h2 {font-family: 'Roboto Condensed', sans-serif;}
      h2 { font-size: 1.2rem; }

      a { color: currentColor; }
      p { line-height: 1.6; }

      header h1 {
        margin-bottom: 0;
      }
      header p {
        font-style: italic;
        margin-top: .5em;
      }

      main {
        max-width: 700px;
        margin: 50px auto 20px;
        border: 1px solid rgba(255,255,255, 0.3);
        border-radius: 10px;
        padding: 1em;
        box-sizing: border-box;
      }

      footer {
        padding: 1rem 0;
        font-size: 1rem;
      }
    </style>
  </head>
  <body>
    <div>
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" height="100">
          <path d="M255.4 326c-1.6 1.5-2.3 4-1.4 6.2.9 2.3 2.9 3.6 5.1 3.6h151.8l-.4 258.2c0 4.4 1.6 8.7 4.8 12.1 3.2 3.3 7.3 5 11.5 5h148.6c4.2 0 8.4-1.7 11.5-5 3.2-3.3 4.8-7.7 4.8-12.1l-.3-258.2h151.8c2.2 0 4.3-1.3 5.1-3.6.9-2.3.3-4.7-1.4-6.2L512.3 99.7c-2.9-2.8-6.8-4.5-11.2-4.5-4.3 0-8.1 1.7-11.1 4.5L255.4 326z"/>
          <path d="M979.6 667.8L832.4 549.6c-8.3-6.7-23.8-12.3-34.4-12.3h-85.2l141.8 146.9H713.3l-72 106.3H358l-68.9-106.4H147.7l140.9-146.9h-86.8c-10.6 0-26 5.5-34.4 12.3L20.3 667.8c-8.3 6.8-12.4 20.8-9.2 31.3l58.7 186.8c3.3 10.4 14.7 19 25.2 19h811.1c10.6 0 21.9-8.6 25.1-19l57.7-186.7c3.2-10.5-1-24.6-9.3-31.4z"/>
        </svg>
        <h1>bredbandskollen-prometheus-exporter</h1>
        <p>Export Internet speed tests from Bredbandskollen to Prometheus</p>
      </header>
      
      <main>
        <h2>Setup</h2>
        <p>
          Configure Prometheus to scrape this service at path <code>/metrics</code>.
          Make sure the Prometheus scraper does not timeout before a test is completed.
        </p>

        <p><a href="metrics">View metrics</a></p>
      </main>

      <footer>
        Report issues at <a href="https://github.com/aolde/bredbandskollen-prometheus-exporter">Github</a>
      </footer>
    <div>
  </body>
  </html>`;
}
