export const state = () => ({
  coupons: [],
});

export const getters = {};

export const mutations = {
  SET_COUPON(state, coupon) {
    let isExistCouponByGame = Boolean(state.coupons.find(loopCoupon => loopCoupon.id === coupon.id));
    let isExistCouponByBet = Boolean(state.coupons.find(loopCoupon => loopCoupon.bet === coupon.bet));

    if (!isExistCouponByGame) {
      state.coupons.push(coupon);
      this.$cookies.set('coupons', state.coupons, {
        maxAge: 86400,
      });
    } else
      if (isExistCouponByGame && !isExistCouponByBet) {
        let removeIndex = state.coupons.findIndex(loopCoupon => loopCoupon.id === coupon.id);
        state.coupons.splice(removeIndex, 1);
        state.coupons.push(coupon);
        this.$cookies.set('coupons', state.coupons, {
          maxAge: 86400,
        });
      }
  },
  SET_ALL_SELECTED_COUPON(state, coupons) {
    if (coupons.length) {
      state.coupons = coupons;
    }

    return state.coupons;
  },
  REMOVE_COUPON(state, couponId) {
    let removeIndex = state.coupons.findIndex(loopCoupon => loopCoupon.id === couponId);
    state.coupons.splice(removeIndex, 1);
    this.$cookies.remove('coupons');
    this.$cookies.set('coupons', state.coupons, {
      maxAge: 86400,
    });
  },
};

export const actions = {};
