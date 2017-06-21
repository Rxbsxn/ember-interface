import Ember from 'ember';
const { Component, inject, computed } = Ember;

export default Component.extend({
  terminal: inject.service(),
  projectPath: '',
  rootPath: '',

  // TODO add some caching later on - it is very heavy operation
  version: computed('projectPath', 'rootPath', function() {
    let fullPath = `${this.get('rootPath')}/${this.get('projectPath')}`;
    let versionCommand = 'npm list ember-cli | grep ember-cli@ | cut -d"@" -f2';
    return this.get('terminal').execute(`cd ${fullPath} && ${versionCommand}`);
  })
});
