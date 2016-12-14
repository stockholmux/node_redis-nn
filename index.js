function addNeuralNetworkModule(redis) {
  redis.addCommand('nr.run');
  redis.addCommand('nr.create');
  redis.addCommand('nr.observe');
  redis.addCommand('nr.train');
  redis.addCommand('nr.class');
  redis.addCommand('nr.info');
  redis.addCommand('nr.reset');
  redis.addCommand('nr.threads')
}
module.exports = addNeuralNetworkModule