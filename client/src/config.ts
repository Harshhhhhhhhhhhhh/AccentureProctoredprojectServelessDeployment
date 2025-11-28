// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
//apiId=9ih4uzidq2
const apiId = '9ih4uzidq2'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-xefkydzjxcypqpel.us.auth0.com',
  // clientId: 'x04Xy3hDh1rFmc4OVUfEfN2H193nXFAQ',         
  // callbackUrl: 'http://localhost:3000'
  domain: 'dev-xefkydzjxcypqpel.us.auth0.com',            // Auth0 domain
  clientId: 'x04Xy3hDh1rFmc4OVUfEfN2H193nXFAQ',          // Auth0 client id
  callbackUrl: 'http://localhost:3000'
}
 

//Matched every thing looks fine no need to re-check from Auth0