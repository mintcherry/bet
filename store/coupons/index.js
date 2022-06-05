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
    } else
      if (isExistCouponByGame && !isExistCouponByBet) {
        let removeIndex = state.coupons.findIndex(loopCoupon => loopCoupon.id === coupon.id);
        state.coupons.splice(removeIndex, 1);
        state.coupons.push(coupon);
      }
  },
  REMOVE_COUPON(state, couponId) {
    let removeIndex = state.coupons.findIndex(loopCoupon => loopCoupon.id === couponId);
    state.coupons.splice(removeIndex, 1);
  },
};

export const actions = {};
