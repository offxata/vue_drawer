import MUTATIONS from './mutations.type';
// import { DRAW as ACTIONS } from './actions.type';

const state = {
  draw: [],
  redoArray: [],
  tool: '#df4b26',
};

const getters = {
  getDraw(context) {
    return context.draw;
  },
  getRedoArray(context) {
    return context.redoArray;
  },
  getTool(context) {
    return context.tool;
  },
};

const mutations = {
  [MUTATIONS.DRAW](context, payload) {
    const that = context;
    const newArray = that.draw.push(payload);

    that.draw = newArray;
  },
  [MUTATIONS.REDO_ARRAY](context, payload) {
    const that = context;
    const newArray = that.redoArray.push(payload);

    that.newArray = newArray;
  },
  [MUTATIONS.TOOL](context, payload) {
    const that = context;

    that.tool = payload;
  },
};

const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions,
};
