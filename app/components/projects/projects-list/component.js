import Ember from 'ember';
const { Component, computed, inject } = Ember;

export default Component.extend({
  readDirectory: inject.service(),
  // TODO move to setting
  projectsRootPath: '/Users/dawidposlinski/Documents/apps/javascript',

  projects: computed('projectsRootPath', function() {
    return this.get('readDirectory').getDirectories(this.get('projectsRootPath'));
  })
});
