/**
 * NSPanel HAUI - Panel preview: clockthree.
 *
 * Auto-generated stub — replace the placeholder content with actual
 * visual layout using primitives from primitives.js.
 *
 * Available Nextion components:
 *   bFncLPri (id=3) — button
 *   bFncLSec (id=4) — button
 *   bFncRPri (id=5) — button
 *   bFncRSec (id=6) — button
 *   tTime (id=3) — text
 *   tDate (id=4) — text
 *   tMainIcon (id=5) — text
 *   tMainText (id=6) — text
 *   tSubText (id=7) — text
 *   f1Icon (id=17) — other
 *   f2Icon (id=18) — other
 *   f3Icon (id=19) — other
 *   f4Icon (id=20) — other
 *   f5Icon (id=21) — other
 *   f1Val (id=22) — other
 *   f2Val (id=23) — other
 *   f3Val (id=24) — other
 *   f4Val (id=25) — other
 *   f5Val (id=26) — other
 * Panel options:
 *   background (text)
 *   show_time_time (toggle)
 *   show_time_date (toggle)
 *   show_time_outside_temp (toggle)
 *   show_time_inside_temp (toggle)
 *   item (entity)
 *   show_weather (toggle)
 *   show_temp (toggle)
 *   show_home_temp (toggle)
 *   weather_icons (text)
 *   items (entity)
 *   show_notifications (toggle)
 */
import { html } from '../lit-import.js';
import { getItems, backgroundClass } from './utils.js';
// import {
//   simTile, simItemTile, simSlider, simButtonRow, simItemGrid, simTimeDisplay, simTempDisplay
// } from './primitives.js';

export function renderClockThreePreview(host, panel, _pIdx, _pt) {
  return {
    content: html`
      <div class="pg-preview-content-top">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <div class="pg-card-preview-line"></div>
      </div>`,
    containerClass: backgroundClass(panel),
  };
}
