<template lang="pug">
  .loader-wrapper
    .loader
      div
      div
      div
</template>

<script>
  export default {
    name: 'Loader',
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  // https://connoratherton.com/loaders
  .loader-wrapper {
    margin: 35px 0;
    text-align: center;
  }

  .loader {
    display: inline-block;

    > div {
      background-color: #7a7aed;
      border-radius: 100%;
      margin: 2px;
      display: inline-block;
      width: 15px;
      height: 15px;

      &:nth-child(1) {
        animation: ball-pulse-sync .6s -.14s infinite ease-in-out;
      }

      &:nth-child(2) {
        animation: ball-pulse-sync .6s -70ms infinite ease-in-out;
      }

      &:nth-child(3) {
        animation: ball-pulse-sync .6s 0s infinite ease-in-out;
      }
    }
  }

  // animation key frames
  @keyframes ball-pulse-sync {
    33% {
      transform: translateY(10px);
    }
    66% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
