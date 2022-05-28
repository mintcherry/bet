<template>
  <div class="index-page"></div>
</template>

<script>
export default {
  name: 'IndexPage',

  created() {
    this.$router.push({
      path: '/line'
    })
  },
}
</script>

