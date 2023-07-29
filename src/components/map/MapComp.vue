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


import {mapActions, mapMutations, mapState} from "vuex";
// eslint-disable-next-line no-unused-vars
import router from "@/router";
const MapModule = 'MapModule'
const BoardModule = "BoardModule"
// import {EventBus} from "@/plugins/EventBus";
export default {
  name: "MapComp",
  data() {
    return {
      map: '',
    }
  },
  beforeMount() {
      if(typeof google !== 'undefined') {
          this.initMap()
      }
    // this.initMap();
  },
  methods: {
    async initMap() {
        // eslint-disable-next-line no-undef
      const {Map} = await google.maps.importLibrary("maps");
        // eslint-disable-next-line no-undef
      this.map = new Map(document.getElementById('map'), {
        center: {lat: this.currentLocation.lat, lng: this.currentLocation.lng},
          zoom: 17,
          mapId: 'ff40b7d118b879c0',
          disableDefaultUI: true
      })

        //get Location button
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
        this.map.addListener("zoom_changed", this.getBoard)
        this.map.setZoom(16)

    },
      async getBoard() {
          this.DELETE_ALL_MARKERS()

          let level
          let zoomLevel = this.map.getZoom()
          if(zoomLevel >= 16) level=1
          else if(zoomLevel >= 14) level=2
          else if(zoomLevel >= 12) level=3
          else if(zoomLevel >= 10) level=4
          else level=5
          await this.requestGetBoardWithLocation({...this.currentArea, level: level})
          for(let  i=0; i<this.boards.length; i++) {
              let board = this.boards[i]
              // eslint-disable-next-line no-undef
              let marker = new google.maps.Marker({
                  // eslint-disable-next-line no-undef
                  position: new google.maps.LatLng(board.location?.lat, board.location?.lng),
                  title: board.title,
                  optimized: false,
                  map: this.map,
                  draggable: true,
              })
              const contentString = '<div>'+board.title+'</div>'
              // eslint-disable-next-line no-undef
              const infowindow = new google.maps.InfoWindow({content: contentString, ariaLabel: "Uluru"})
              marker.addListener("mouseover", ()=> infowindow.open({anchor: marker, map: this.map}))
              marker.addListener("click", ()=> router.push({name: 'BoardView', params: {boardId: board.id}}))

              this.ADD_MARKER(marker)
          }
      },

    ...mapActions(MapModule, ['getCurrentLocation']),
      ...mapMutations(MapModule, ["SET_ZOOM_LEVEL", "ADD_MARKER", "DELETE_ALL_MARKERS"]),
      ...mapActions("BoardModule", ["requestGetBoardWithLocation"])
  },
  computed: {
    ...mapState(MapModule, ['currentLocation', "currentArea", "markers"]),
      ...mapState(BoardModule, ["boards"]),
      modalOpen() {
        return this.currentArea == false;

      }
  },

    mounted() {
    },
    updated() {
      if(this.map && this.currentArea) {
          // current Area box
          let currentArea = document.getElementById("currentAreaBox");
          if (!currentArea) {
              currentArea = document.createElement("div");
              currentArea.id = "currentAreaBox";
              currentArea.className = "custom-map-control-button bitbit";
              // eslint-disable-next-line no-undef
              this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(currentArea);
          }
          currentArea.textContent = this.currentArea.dong;
          this.getBoard()
      }
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
    font: 400 20px sans-serif;
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
.currentAreaBox {
    background-color: white;
    border-radius: 2px;
    margin: 10px;
}
</style>