<template>
    <div>
        <NavigationBar />

        <router-view></router-view>

        <FooterRow />
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
</style>
