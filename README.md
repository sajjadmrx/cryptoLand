**cryptoland**

Get the current price of a cryptocurrency

# Installation

  **Node.js 12 or newer is required.**
  
```bash
 npm install cryptoland
```
## Example usage
get Dogecoin information
```js
const  cryptoLand  = require('cryptoland')

cryptoLand.getCrypto('dogecoin')
	.then(data  =>  {
		console.log(data)
	})
	.catch(err  =>  {
		console.log(err)
	})
```
