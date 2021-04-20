const NANOC_TMP = 'tmp/nanoc'

module.exports = {
  async onPreBuild({ constants, utils: { cache } }) {
    await cache.restore([constants.PUBLISH_DIR, NANOC_TMP])
  },
  async onPostBuild({ constants, utils: { cache } }) {
    await cache.save([constants.PUBLISH_DIR, NANOC_TMP])
  },
}
