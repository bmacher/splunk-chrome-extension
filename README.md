# Cancelled...

I tried to make a chrome extension, that reloads a selected config or view of Splunk Enterprsie. Unfortunately I was not able to connect to Splunks backend. I tried the following things:

**1. Request to Splunks management port (default: 8089)**
* This fails because you can only connect to the management port via https (default), which is denied by the browser if you do not have a valid certificate.

**2. Request to /splunkd/__raw/, which will forward the request to the Splunk deamon**
* There is no API for /configs/conf-XY or /data/ui/views.

**3. Via direct search request: <host>:8000/.../search?q=<| rest ...>** 
* Is denied by CORS.
