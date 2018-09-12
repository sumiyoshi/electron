<template>
    <div id="app">
        <headerView></headerView>
        <router-view></router-view>
        <footerView></footerView>
    </div>
</template>

<script>
  import headerView from './components/share/Header'
  import footerView from './components/share/Footer'

  export default {
    name: 'app',
    components: {
      headerView,
      footerView
    }
  }
</script>

<style>
    /* CSS */
</style>
