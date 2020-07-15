async function createIdentity(client) {
    var identity;

    try {
        const platform = client.platform;
        identity = await platform.identities.register();
        //return identity;
  } catch (e) {
        console.error('Something went wrong:', e);
  }

  console.log('balbal');
  return identity;
}

module.exports = createIdentity;