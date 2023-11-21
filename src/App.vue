<template>
    <div>
        <div v-if="loading" class="loader-center">
            <div class="loader"></div>
        </div>
        <div v-else>
            <NavigationBar />

            <router-view></router-view>

            <FooterRow />
        </div>
    </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import FooterRow from "@/components/FooterRow";
export default {
  name: 'App',
  components: {
      FooterRow,
      NavigationBar
  },
  data() {
      return {
          loading: true
      }
  },
  mounted() {
      window.onload = () => {
          this.loading = false
      }
  }
}
</script>

<style>
@import "styles/style.css";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.loader-center {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader {
    border: 5px solid #f3f3f3; /* Light grey border */
    border-top: 5px solid #3498db; /* Blue border */
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
