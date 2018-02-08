# in progress...

As I work with Splunk in my company I know it is sometimes annoying to reload certain configs which I have done in the filesystem. Sure you can restart Splunk (well you can not if several people working on the same instance) or reload the config via a REST search. For Example:

```
| rest servicesNS/-/MySplunkApp/configs/conf-props/_reload splunk_server=local
```

This will reload all the configs available in the context of M MySplunkApp. 