"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12040],{373470:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-e6fa69a0","path":"/devices/HS1SA.html","title":"HEIMAN HS1SA control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HEIMAN HS1SA control via MQTT","description":"Integrate your HEIMAN HS1SA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-01T12:47:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Reset","slug":"reset","link":"#reset","children":[]},{"level":3,"title":"Important","slug":"important","link":"#important","children":[]},{"level":3,"title":"Issue with regular (false) alarm notifications","slug":"issue-with-regular-false-alarm-notifications","link":"#issue-with-regular-false-alarm-notifications","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1718711860000},"filePathRelative":"devices/HS1SA.md"}')},100141:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var a=i(166252);const r=(0,a._)("h1",{id:"heiman-hs1sa",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#heiman-hs1sa","aria-hidden":"true"},"#"),(0,a.Uk)(" HEIMAN HS1SA")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"HS1SA")],-1),l=(0,a._)("td",null,"Vendor",-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Smoke detector")],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"smoke, battery_low, battery, linkquality")],-1),h=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HS1SA.png",alt:"HEIMAN HS1SA"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the side button of the device with a paper clip for more than 2 seconds. The main button led will flash rapidly. Then make sure the device is awake during pairing phase or the configuration may fail. To ensure device is awake press the side button every 2 seconds until configuration is done in Zigbee2MQTT logs.</p><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> Reset</h3><p>If you have trouble pairing, the device can be reset by pressing the side button with a paper clip for 5 seconds. The led will flash (slower than in pairing mode) 6 times to confirm. After that you can retry the normal pairing procedure.</p><h3 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> Important</h3><p>There are 3 versions of this device: Standalone, Zigbee and Z-wave. These are visually identical. Make sure to get the correct version that will work with Zigbee2MQTT:</p><p>Supported:</p><ul><li><strong>HS1SA-M : Zigbee</strong></li><li><strong>HS1SA-N : Zigbee</strong></li><li><strong>HS1SA-E : Zigbee 3.0</strong></li></ul><p>Unsupported:</p><ul><li>HS1SA : Standalone</li><li>HS1SA-Z : Z-wave</li></ul><p>The product code should end in <em>-M</em> for the Zigbee version. The label inside the battery compartment should also show the Zigbee logo.</p><h3 id="issue-with-regular-false-alarm-notifications" tabindex="-1"><a class="header-anchor" href="#issue-with-regular-false-alarm-notifications" aria-hidden="true">#</a> Issue with regular (false) alarm notifications</h3><p>If your smoke detector is regularily signalling an alarm over Zigbee (every 1-2 days), without actually making any alarm sound, it is probably affected by a firmware bug. This can be worked around as follows:</p><ol><li>Open the device in the Z2M web interface</li><li>Navigate to the Dev console</li><li>Select the cluster <code>ssIasZone</code> from the dropdown list</li><li>Select the attributes <code>zoneState</code>, <code>zoneType</code>, <code>zoneStatus</code> and <code>zoneId</code></li><li>Click the <em>Read</em> button</li><li>Wake the device immediately after pressing the <em>Read</em> button by pressing it&#39;s main button (test alarm button).</li></ol>',15),c={href:"https://github.com/dresden-elektronik/deconz-rest-plugin/issues/5824#issuecomment-1092089211",target:"_blank",rel:"noopener noreferrer"},p=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),m={},b=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink"),m=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[n,(0,a._)("tbody",null,[o,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=HEIMAN"},{default:(0,a.w5)((()=>[(0,a.Uk)("HEIMAN")])),_:1})])]),s,d,h])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a._)("p",null,[(0,a.Uk)("Timing is important here so you might need a fews tries. Once you have read these attributes successfully the false alarm messages should be gone. ("),(0,a._)("a",c,[(0,a.Uk)("Source"),(0,a.Wm)(m)]),(0,a.Uk)(")")]),(0,a.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);