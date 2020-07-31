async function createIdentity(client) {
    var identity;

    try {
        const platform = client.platform;
        identity = await platform.identities.register();
  } catch (e) {
        throw(e);
  }

  console.log('uidentity');
  return identity;
}

module.exports = createIdentity;