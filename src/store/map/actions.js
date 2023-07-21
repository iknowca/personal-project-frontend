import env from "../../../env";
import {SET_CURRENT_AREA, SET_CURRENT_LOCATION} from "@/store/map/mutation_types";

export default {
  requestMap() {
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
      d[l] ? console.warn(p + " only loads once. Ignoring:") : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
    })({
      key: env.api.MAP_API_KEY,
      v: "weekly",
      // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
      // Add other bootstrap parameters as needed, using camel case.
    });
  },
  async getCurrentLocation(context, map) {
    return navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        context.commit(SET_CURRENT_LOCATION, pos)
        // eslint-disable-next-line no-undef
        let geocoder = new google.maps.Geocoder({result_type: "street_address"});
        return geocoder.geocode({location: pos,  region: "kr", language: "ko"})
          .then((res)=>{
            const currentLocation = res.results.filter((cod)=>cod.types[0]==="street_address")[0].address_components.map((comp)=>comp.short_name)
            const currentLocationObj = {dong: currentLocation[1], gu: currentLocation[2], si: currentLocation[3], d_o: currentLocation[4], lat: pos.lat, lng: pos.lng}
            if(currentLocationObj.si === "서울특별시")
            {
              currentLocationObj.d_o = "경기도";
            }
            console.log(currentLocationObj)
            context.commit(SET_CURRENT_AREA, currentLocationObj)
            map.setCenter(pos)
          })
          .catch(()=>{console.log('geocode error')})

      }, ()=>alert('faild to get current location')
    )
  }
}