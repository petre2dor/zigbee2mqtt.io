"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37319],{614688:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-5a813236","path":"/devices/ZG-205ZL.html","title":"TuYa ZG-205ZL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ZG-205ZL control via MQTT","description":"Integrate your TuYa ZG-205ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-19T09:25:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Motion state (enum)","slug":"motion-state-enum","link":"#motion-state-enum","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Large motion detection distance (numeric)","slug":"large-motion-detection-distance-numeric","link":"#large-motion-detection-distance-numeric","children":[]},{"level":3,"title":"Large motion detection sensitivity (numeric)","slug":"large-motion-detection-sensitivity-numeric","link":"#large-motion-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Small motion detection distance (numeric)","slug":"small-motion-detection-distance-numeric","link":"#small-motion-detection-distance-numeric","children":[]},{"level":3,"title":"Small motion detection sensitivity (numeric)","slug":"small-motion-detection-sensitivity-numeric","link":"#small-motion-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Static detection distance (numeric)","slug":"static-detection-distance-numeric","link":"#static-detection-distance-numeric","children":[]},{"level":3,"title":"Static detection sensitivity (numeric)","slug":"static-detection-sensitivity-numeric","link":"#static-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Alarm volume (enum)","slug":"alarm-volume-enum","link":"#alarm-volume-enum","children":[]},{"level":3,"title":"Alarm time (numeric)","slug":"alarm-time-numeric","link":"#alarm-time-numeric","children":[]},{"level":3,"title":"Light mode (binary)","slug":"light-mode-binary","link":"#light-mode-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1718711860000},"filePathRelative":"devices/ZG-205ZL.md"}')},382929:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var o=i(166252);const n=(0,o._)("h1",{id:"tuya-zg-205zl",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-zg-205zl","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa ZG-205ZL")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZG-205ZL")],-1),c=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"24Ghz/5.8GHz human presence sensor")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"presence, motion_state, illuminance_lux, fading_time, large_motion_detection_distance, large_motion_detection_sensitivity, small_motion_detection_distance, small_motion_detection_sensitivity, static_detection_distance, static_detection_sensitivity, mode, alarm_volume, alarm_time, light_mode, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-205ZL.png",alt:"TuYa ZG-205ZL"})])],-1),r=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),m=(0,o._)("h3",{id:"pairing",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing")],-1),h=(0,o._)("p",null,"To start pairing, press the button (pinhole on the side of the device) using a pin/paperclip for approx. 5 seconds. The led will turn on, then start blinking while the pairing process is in progress.",-1),p=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),v=(0,o.uE)('<ul><li><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="motion-state-enum" tabindex="-1"><a class="header-anchor" href="#motion-state-enum" aria-hidden="true">#</a> Motion state (enum)</h3><p>Motion state. Value can be found in the published state on the <code>motion_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>large</code>, <code>small</code>, <code>static</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric" aria-hidden="true">#</a> Fading time (numeric)</h3><p>Presence keep time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="large-motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#large-motion-detection-distance-numeric" aria-hidden="true">#</a> Large motion detection distance (numeric)</h3><p>Large motion detection distance. Value can be found in the published state on the <code>large_motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;large_motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="large-motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#large-motion-detection-sensitivity-numeric" aria-hidden="true">#</a> Large motion detection sensitivity (numeric)</h3><p>Large motion detection sensitivity. Value can be found in the published state on the <code>large_motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;large_motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="small-motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#small-motion-detection-distance-numeric" aria-hidden="true">#</a> Small motion detection distance (numeric)</h3><p>Small motion detection distance. Value can be found in the published state on the <code>small_motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="small-motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#small-motion-detection-sensitivity-numeric" aria-hidden="true">#</a> Small motion detection sensitivity (numeric)</h3><p>Small motion detection sensitivity. Value can be found in the published state on the <code>small_motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;small_motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="static-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#static-detection-distance-numeric" aria-hidden="true">#</a> Static detection distance (numeric)</h3><p>Static detection distance. Value can be found in the published state on the <code>static_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;static_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="static-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#static-detection-sensitivity-numeric" aria-hidden="true">#</a> Static detection sensitivity (numeric)</h3><p>Static detection sensitivity. Value can be found in the published state on the <code>static_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;static_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>x</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum" aria-hidden="true">#</a> Mode (enum)</h3><p>Working mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>arm</code>, <code>alarm</code>, <code>doorbell</code>.</p><h3 id="alarm-volume-enum" tabindex="-1"><a class="header-anchor" href="#alarm-volume-enum" aria-hidden="true">#</a> Alarm volume (enum)</h3><p>Alarm volume. Value can be found in the published state on the <code>alarm_volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>mute</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-time-numeric" aria-hidden="true">#</a> Alarm time (numeric)</h3><p>Alarm time. Value can be found in the published state on the <code>alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>m</code>.</p><h3 id="light-mode-binary" tabindex="-1"><a class="header-anchor" href="#light-mode-binary" aria-hidden="true">#</a> Light mode (binary)</h3><p>LED indicator mode. Value can be found in the published state on the <code>light_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> light mode is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),g={},_=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[a,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),l,s,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,m,h,(0,o.kq)(" Notes END: Do not edit below this line "),p,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);