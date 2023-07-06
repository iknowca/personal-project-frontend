<template>
  <div id="map" style="height: calc(100vh - 64px); width:100vw; margin-left: 0; padding-top: 0px">
  </div>
</template>

<script>


export default {
  name: "MapComp",
  data() {
    return {
      map:''
    }
  },
  beforeMount() {

    this.initMap();
  },
  methods: {
    async initMap() {
      // eslint-disable-next-line no-undef
      const {Map} = await google.maps.importLibrary("maps");
      this.map = new Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 9
      })
    }
  }
}
</script>

<style scoped>

</style>