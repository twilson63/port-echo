# README

hyper63 echo port

This port is used in hyper63 to support echo adapters

## Example

``` js
import echoPort from 'hyper63-port-echo'
import greetingsAdapter from 'hyper63-adapter-greetings'

export default {
  app: express,
  adapters: [
    { port: echoPort, plugins: [greetingsAdapter()] }
  ]
}
```




