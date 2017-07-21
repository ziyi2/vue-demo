<template>
  <div class="all">
      <div class="views-header">
        <h1>Vue Element Plugin</h1>
      </div>
      <div class="views-nav">
         <router-link to="/button">Button</router-link>
         <router-link to="/icon">Icon</router-link>
      </div>
      <div class="views-content">   
        <router-view></router-view> 
      </div>
  </div>    
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
  .views-header{
    padding:10px;
  }
  .views-nav {
    padding: 50px;
  }

  .views-nav a {
    margin-left: 10px;
  }
</style>

