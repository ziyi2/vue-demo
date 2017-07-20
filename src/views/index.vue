<template>
  <div class="all">
      <div class="header">
        <h1>Vue Element Plugin</h1>
      </div>
      <div class="nav">
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

<style>
  .header{
    padding:10px;
  }
  .nav {
    padding: 50px;
  }
</style>

