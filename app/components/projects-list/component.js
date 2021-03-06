import Ember from 'ember';
const { Component, inject, computed } = Ember;

export default Component.extend({
  tagName: '',
  store: inject.service(),

  projects: computed(function() {
    return this.get('store').findAll('project');
  }),
});
