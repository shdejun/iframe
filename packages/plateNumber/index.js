import plateNumber from './src/plateNumber.vue';

plateNumber.install = function (Vue) {
  Vue.component(plateNumber.name, plateNumber);
};

export default plateNumber;