<template>
  <div>
    <map
      id="map"
      :longitude="longitude"
      :latitude="latitude"
      scale="14"
      :controls="controls"
      bindcontroltap="controltap"
      :markers="markers"
      bindmarkertap="markertap"
      bindregionchange="regionchange"
      show-location
      style="width: 100%; height: 300px;"
      clickable
      show-compass
    ></map>
  </div>
</template>
<script>
export default {
  data() {
    return {
        longitude:'',
        latitude:'',
      markers: [
        {
          id: 0,
          latitude: 23.099994,
          longitude: 113.32452,
          width: 50,
          height: 50
        }
      ],
      polyline: [
        {
          points: [
            {
              longitude: 113.3245211,
              latitude: 23.10229
            },
            {
              longitude: 113.32452,
              latitude: 23.21229
            }
          ],
          color: "#FF0000DD",
          width: 2,
          dottedLine: true
        }
      ],
      controls: [
        {
          id: 1,
          iconPath: "/resources/location.png",
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }
      ]
    };
  },
  mounted() {
    this.getadriss();
  },
  methods: {
    regionchange(e) {
      console.log(e.type);
    },
    markertap(e) {
      console.log(e.markerId);
    },
    controltap(e) {
      console.log(e.controlId);
    },
    getadriss() {
      wx.getLocation({
        type: "wgs84",
        success: res => {
            this.longitude = res.longitude
            this.latitude = res.latitude
          console.log(res);
        }
      });
    }
  }
};
</script>
