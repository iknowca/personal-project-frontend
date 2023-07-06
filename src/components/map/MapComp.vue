<template>
  <v-container id="map" fluid style="height: 100vh">
  </v-container>
</template>

<script>

import env from "../../../env";

export default {
  name: "MapComp",
  data() {
    return {
      map:''
    }
  },
  beforeMount() {
    (g => {
      var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document,
        b = window;
      b = b[c] || (b[c] = {});
      var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams,
        // eslint-disable-next-line no-async-promise-executor
        u = () => h || (h = new Promise(async (f, n) => {
          await (a = m.createElement("script"));
          e.set("libraries", [...r] + "");
          for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
          e.set("callback", c + ".maps." + q);
          a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
          d[q] = f;
          a.onerror = () => h = n(Error(p + " could not load."));
          a.nonce = m.querySelector("script[nonce]")?.nonce || "";
          m.head.append(a)
        }));
      d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
    })({
      key: env.api.MAP_API_KEY,
      v: "weekly",
      // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
      // Add other bootstrap parameters as needed, using camel case.
    });

    this.initMap();
  },
  methods: {
    async initMap() {
      // eslint-disable-next-line no-undef
      const { Map } = await google.maps.importLibrary("maps");
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