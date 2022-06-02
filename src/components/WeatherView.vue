<template>
<div>
</div>
</template>

<script>
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
window.myWidgetParam.push({
 id: 8,
 cityid: '390903',
 appid: '27fa632f4093b5a7c1d6571af41ef168',
units: 'metric',
containerid: 'openweathermap-widget-8',  });  

(function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";
script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();


</script>

<style scoped>
.weather {
  display: flex;
  justify-content: start;

}


</style>