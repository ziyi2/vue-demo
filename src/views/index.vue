<template>
  <div class="all">
      <div class="header">
        <h1>Vue Element Plugin</h1>
      </div>
      <div class="nav">
         <router-link to="/icon">Icon</router-link>
         <router-link to="/button">Button</router-link>
      </div>
      <div class="content">   
        <router-view></router-view> 
      </div>
  </div>    
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
  .header{
    padding:10px;
  }
  .nav {
    padding: 50px;
  }

  .nav a {
    margin-left: 10px;
  }
</style>

