import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    return {
      id: params.game_id
    };
  }
});
