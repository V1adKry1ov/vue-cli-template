<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="(link, index) in links" :key="index">
                <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </header>
    <router-view></router-view>
  </div>
  
</template>

<script>



export default { 
  data() {
    return {
      links: [
        {title: 'Home', url: '/'},
        {title: 'About', url: '/about'},
      ]
     }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7 
  }
}
</style>
