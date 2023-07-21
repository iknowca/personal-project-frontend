<template>
    <div>
    <v-dialog v-model="modalOpen">
        <v-card>
            <v-card-title class="text-center bitbit">
                현재 위치를 가져와 주세요
            </v-card-title>
            <v-card-actions class="bitbit">
                <v-btn color="primary" block @click="getCurrentLocation(map)">Get Area</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <div id="map" style="height: calc(100vh - 64px); width:100vw; margin-left: 0; padding-top: 0px">
    </div>
    </div>
</template>

<script>


import {mapActions, mapState} from "vuex";
import CurrentAreaModal from "@/components/map/CurrentAreaModal.vue";

const MapModule = 'MapModule'
export default {
  name: "MapComp",
  data() {
    return {
      map: '',
        modalClose: false
    }
  },
  beforeMount() {
      console.log(this.currentArea)
    this.initMap();
  },
  methods: {
    async initMap() {
      // eslint-disable-next-line no-undef
      const {Map} = await google.maps.importLibrary("maps");
      this.map = new Map(document.getElementById('map'), {
        center: {lat: this.currentLocation.lat, lng: this.currentLocation.lng},
          zoom: 17,
          mapId: 'ff40b7d118b879c0',
          disableDefaultUI: true
      })

        const locationButton = document.createElement("button")
        locationButton.textContent = "get Location";
        locationButton.className = 'custom-map-control-button bitbit'
        // eslint-disable-next-line no-undef
        this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(locationButton);
        await locationButton.addEventListener("click",
          () => {
              this.getCurrentLocation(this.map)

          }
        )


    },

    ...mapActions(MapModule, ['getCurrentLocation'])
  },
  computed: {
    ...mapState(MapModule, ['currentLocation', "currentArea"]),
      modalOpen() {
        return this.currentArea == false;

      }
  },
    mounted() {
      console.log(this.currentArea)
    }
}
</script>

<style>
.custom-map-control-button {
    background-color: white;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
    margin: 10px;
    padding: 0 0.5em;
    font: 400 18px Roboto, Arial, sans-serif;
    overflow: hidden;
    height: 40px;
    cursor: pointer;
}
.custom-map-control-button:hover {
    background: grey;
}
.bitbit {
    font-family:'bitbit'
}
</style>