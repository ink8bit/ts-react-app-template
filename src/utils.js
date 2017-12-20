export default function logServerMessage(serverInstance) {
  console.log(`server is running on port: ${serverInstance.address().port}`); // eslint-disable-line
}
