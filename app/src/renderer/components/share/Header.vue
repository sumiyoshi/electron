<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
            <router-link to="/">Todo</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/editor">Editor</router-link>
        </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<style scoped>

</style>