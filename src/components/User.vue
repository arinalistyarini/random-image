<template lang="pug">
  .user-info-wrapper
    .info-left
      .img-wrapper
        img(:src="userData.picture.large" :alt="userData.name.first")
    .info-right
      .item-info
        span {{ userData.name.title }} {{ userData.name.first }} {{ userData.name.last }}
      .item-info
        span Registered date: {{ getDate(userData.registered.date) }}
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'User',
    components: {
    },
    props: {
      userData: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
      }
    },
    methods: {
      getDate(date) {
        return moment(String(date)).format('D MMMM YYYY');
      },
    },
  }
</script>

<style lang="scss" scoped>
  .user-info-wrapper {
    background-color: #7a7aed;
    padding: 0 10px;
    height: 120px;
    display: flex;
    align-items: center;

    .info-left {
      width: 100px;

      .img-wrapper {
        border: 1px solid #ffffff;
        box-sizing: border-box;
        width: 100px;
        padding-bottom: calc(100% - 2px); // minus by border
        height: 0;
        overflow: hidden;
        margin: 10px 0;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .info-right {
      width: calc(100% - 100px);

      .item-info {
        background-color: #ffffff;
        width: 300px;
        margin-left: auto;
        padding: 3px 10px;
        text-transform: capitalize;

        span {

        }

        +.item-info {
          margin-top: 10px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .user-info-wrapper {
      flex-direction: column;
      height: auto;

      .info-right {
        width: 100%;

        .item-info {
          width: auto;

          &:last-child {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
