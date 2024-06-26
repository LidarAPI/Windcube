define({
  "name": "Lidar API",
  "version": "1.0.0",
  "description": "Lidar API documentation",
  "title": "Lidar API documentation",
  "url": "http://host/lidar_api/v1",
  "header": {
    "title": "Introduction",
    "content": "<h2>Leosphere Web API architecture</h2>\n<p>Based on simple REST principles, the Leosphere Web API is organized around 5 categories of actions:</p>\n<ul>\n<li>Authentication : Connection management.</li>\n<li>Data : Wind and aerosols data retrieval.</li>\n<li>Monitoring : Lidar's monitoring through status , activities environmental data and logs retrieval.</li>\n<li>Configuration : scans, settings and resolution management.</li>\n<li>Control :  Lidar's acquisition control and programming.</li>\n</ul>\n<p>The Leosphere Web API is based on REST principles. Data resources are accessed via standard HTTP requests in UTF-8 encoding to a server hosted in the PC of the Lidar.\nThe base address of Leosphere Web API is http://host, where “host” is your Lidar IP address. All requests to Leosphere Web API require authentication. This is achieved by sending a valid access token in the request header. Only standard users or more have the right to use the API.\nDespite our efforts on creating, reviewing and validating this API and its documentation, should you notice any bug, typo error, or have any feedback, please contact our technical support team at support@leosphere.com.</p>\n<h2>Syntax generic principles</h2>\n<p>Most of the requests respond with JSON data, but some respond with binary data (files).\nIn this documentation, all parameters in URL ending with an interrogation mark, are optional.\nAn object is a dataset of both properties and values. It is represented in JSON by { “property1”: “value1”, “property2”:”value2”}. An object[] is an array of this kind of object, represented in JSON by [{“commonProperty”:”value1”}, {“commonProperty”:”value2”}].</p>\n<h2>HTTPS</h2>\n<p>The web server hosted by the Lidar is able to use HTTPS or unsecured HTTP. Use of HTTPS is recommended. Shall you use HTTP, we highly recommend you to use this API on protected network or behind a HTTPS protected reverse proxy, to avoid any man-in-the-middle security breach. Leosphere can in no manner be held responsible in case of loss and/or leakage of data.</p>\n"
  },
  "sampleUrl": null,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-12-08T14:00:30.772Z",
    "url": "https://apidocjs.com",
    "version": "0.28.1"
  }
});
