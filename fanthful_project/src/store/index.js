import Vue from 'vue';
import Vuex, {
    Store
} from 'vuex';
import state from './state';
Vue.use(Vuex);
const store = new Store({
    // 公共数据
    state,
    mutations: {
        changeGoodsListName(state, playload) {
            state.goodsListName = playload;
        },
        addGoodsQty(state, playload) {
            state.goodsQty = playload;
        }
    }
});

export default store;