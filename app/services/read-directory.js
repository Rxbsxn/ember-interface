import Ember from 'ember';

const fs = requireNode('fs')
const path = requireNode('path')

export default Ember.Service.extend({
  /**
   * Get list of the directories for the given path
   * @param  {String} absolutePath absolute path
   * @return {Array} List of directories in the given path
   */
  getDirectories(absolutePath) {
    return fs.readdirSync(absolutePath)
      .filter(file => fs.lstatSync(path.join(absolutePath, file)).isDirectory());
  }
});
