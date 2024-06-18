"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85386],{54312:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-01fc81a8","path":"/devices/BTH-RA.html","title":"Bosch BTH-RA control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BTH-RA control via MQTT","description":"Integrate your Bosch BTH-RA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-12-01T15:07:19.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory resetting","slug":"factory-resetting","link":"#factory-resetting","children":[]},{"level":3,"title":"Using the manufacturer specific operation mode","slug":"using-the-manufacturer-specific-operation-mode","link":"#using-the-manufacturer-specific-operation-mode","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Operating mode (enum)","slug":"operating-mode-enum","link":"#operating-mode-enum","children":[]},{"level":3,"title":"Window detection (binary)","slug":"window-detection-binary","link":"#window-detection-binary","children":[]},{"level":3,"title":"Boost heating (binary)","slug":"boost-heating-binary","link":"#boost-heating-binary","children":[]},{"level":3,"title":"Remote temperature (numeric)","slug":"remote-temperature-numeric","link":"#remote-temperature-numeric","children":[]},{"level":3,"title":"Setpoint change source (enum)","slug":"setpoint-change-source-enum","link":"#setpoint-change-source-enum","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Display ontime (numeric)","slug":"display-ontime-numeric","link":"#display-ontime-numeric","children":[]},{"level":3,"title":"Display brightness (numeric)","slug":"display-brightness-numeric","link":"#display-brightness-numeric","children":[]},{"level":3,"title":"Display orientation (enum)","slug":"display-orientation-enum","link":"#display-orientation-enum","children":[]},{"level":3,"title":"Displayed temperature (enum)","slug":"displayed-temperature-enum","link":"#displayed-temperature-enum","children":[]},{"level":3,"title":"Valve adapt status (enum)","slug":"valve-adapt-status-enum","link":"#valve-adapt-status-enum","children":[]},{"level":3,"title":"Trigger adaptation process (binary)","slug":"trigger-adaptation-process-binary","link":"#trigger-adaptation-process-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1718711860000},"filePathRelative":"devices/BTH-RA.md"}')},327607:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var a=o(166252);const i=(0,a._)("h1",{id:"bosch-bth-ra",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bosch-bth-ra","aria-hidden":"true"},"#"),(0,a.Uk)(" Bosch BTH-RA")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"BTH-RA")],-1),n=(0,a._)("td",null,"Vendor",-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Radiator thermostat II")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"climate (local_temperature, local_temperature_calibration, occupied_heating_setpoint, system_mode, pi_heating_demand, running_state), battery, operating_mode, window_detection, boost_heating, remote_temperature, setpoint_change_source, child_lock, display_ontime, display_brightness, display_orientation, displayed_temperature, valve_adapt_status, valve_adapt_process, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BTH-RA.png",alt:"Bosch BTH-RA"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to &quot;Settings&quot; --&gt; &quot;Tools&quot; and click on &quot;Add install code&quot;. Paste the code you got from the QR-code and confirm by clicking &quot;OK&quot; which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.</p><h3 id="factory-resetting" tabindex="-1"><a class="header-anchor" href="#factory-resetting" aria-hidden="true">#</a> Factory resetting</h3><p>To factory reset the device remove one of the batteries. While pressing and holding the device&#39;s main button on the front, insert the battery back. As soon as the device&#39;s LED is starting to blink orange while showing &quot;RES&quot;, release the main button and press and hold it again until the device&#39;s LED is lighting up green. The device will then restart into the calibration process and look for a Zigbee network to join. In case something went wrong, the device&#39;s LED will start to blink red. The process has then to be start all over again.</p><h3 id="using-the-manufacturer-specific-operation-mode" tabindex="-1"><a class="header-anchor" href="#using-the-manufacturer-specific-operation-mode" aria-hidden="true">#</a> Using the manufacturer specific operation mode</h3><p>The <code>system_mode</code> exposed by the device according to zigbee specification is always &#39;heat&#39;. To set or read the actual operation mode of the device, use the manufacturer-specific feature &#39;operating mode&#39; (see below)</p>',7),h=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),p=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),m=(0,a.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>pi_heating_demand</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Temperature used by the heating algorithm. This is the temperature measured on the device (by default) or the remote temperature (if set within the last 30 min). (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-5</code> and the maximum value is <code>5</code> with a step size of <code>0.1</code>.</li></ul><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="operating-mode-enum" tabindex="-1"><a class="header-anchor" href="#operating-mode-enum" aria-hidden="true">#</a> Operating mode (enum)</h3><p>Bosch-specific operating mode (overrides system mode). Value can be found in the published state on the <code>operating_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operating_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operating_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>schedule</code>, <code>manual</code>, <code>pause</code>.</p><h3 id="window-detection-binary" tabindex="-1"><a class="header-anchor" href="#window-detection-binary" aria-hidden="true">#</a> Window detection (binary)</h3><p>Enable/disable window open (Lo.) mode. Value can be found in the published state on the <code>window_detection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_detection&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> window detection is ON, if <code>OFF</code> OFF.</p><h3 id="boost-heating-binary" tabindex="-1"><a class="header-anchor" href="#boost-heating-binary" aria-hidden="true">#</a> Boost heating (binary)</h3><p>Activate boost heating (5 min. on TRV). Value can be found in the published state on the <code>boost_heating</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;boost_heating&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> boost heating is ON, if <code>OFF</code> OFF.</p><h3 id="remote-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#remote-temperature-numeric" aria-hidden="true">#</a> Remote temperature (numeric)</h3><p>Input for remote temperature sensor. Required at least every 30 min. to prevent fallback to internal sensor!. Value can be found in the published state on the <code>remote_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;remote_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;remote_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="setpoint-change-source-enum" tabindex="-1"><a class="header-anchor" href="#setpoint-change-source-enum" aria-hidden="true">#</a> Setpoint change source (enum)</h3><p>Source of the current setpoint temperature. Value can be found in the published state on the <code>setpoint_change_source</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;setpoint_change_source&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>manual</code>, <code>schedule</code>, <code>externally</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child lock (binary)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="display-ontime-numeric" tabindex="-1"><a class="header-anchor" href="#display-ontime-numeric" aria-hidden="true">#</a> Display ontime (numeric)</h3><p>Sets the display on-time. Value can be found in the published state on the <code>display_ontime</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_ontime&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_ontime&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>s</code>.</p><h3 id="display-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#display-brightness-numeric" aria-hidden="true">#</a> Display brightness (numeric)</h3><p>Sets brightness of the display. Value can be found in the published state on the <code>display_brightness</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_brightness&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="display-orientation-enum" tabindex="-1"><a class="header-anchor" href="#display-orientation-enum" aria-hidden="true">#</a> Display orientation (enum)</h3><p>Sets orientation of the display. Value can be found in the published state on the <code>display_orientation</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_orientation&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_orientation&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>flipped</code>.</p><h3 id="displayed-temperature-enum" tabindex="-1"><a class="header-anchor" href="#displayed-temperature-enum" aria-hidden="true">#</a> Displayed temperature (enum)</h3><p>Temperature displayed on the TRV. Value can be found in the published state on the <code>displayed_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;displayed_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;displayed_temperature&quot;: NEW_VALUE}</code>. The possible values are: <code>target</code>, <code>measured</code>.</p><h3 id="valve-adapt-status-enum" tabindex="-1"><a class="header-anchor" href="#valve-adapt-status-enum" aria-hidden="true">#</a> Valve adapt status (enum)</h3><p>Specifies the current status of the valve adaptation. Value can be found in the published state on the <code>valve_adapt_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_adapt_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>ready_to_calibrate</code>, <code>calibration_in_progress</code>, <code>error</code>, <code>success</code>.</p><h3 id="trigger-adaptation-process-binary" tabindex="-1"><a class="header-anchor" href="#trigger-adaptation-process-binary" aria-hidden="true">#</a> Trigger adaptation process (binary)</h3><p>Trigger the valve adaptation process. Only possible when adaptation status is &quot;ready_to_calibrate&quot; or &quot;error&quot;.. Value can be found in the published state on the <code>valve_adapt_process</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_adapt_process&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_adapt_process&quot;: NEW_VALUE}</code>. If value equals <code>true</code> trigger adaptation process is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',33),g={},b=(0,o(983744).Z)(g,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[d,(0,a._)("tbody",null,[c,(0,a._)("tr",null,[n,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Bosch"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bosch")])),_:1})])]),s,r,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line "),h,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),p,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);