# Slot Machine (slotmachine)

![image](https://github.com/ccosse/slotmachine/assets/5249621/a2a1b590-4fc3-4b0b-8e72-9679b074e99e)

Simple Slot Machine (in progress)

The reels are currently running against a clock, such that if your cpu + clock + rendering-speeds are not up-to-speed (author's own mobile phone!) then the reels won't stop at the right places. Considering to implement a "snap-to" approach where rather than merely stopping after the computed (time) \* (d_theta/dt), it then calculates the rotation angle associated with that number and snaps-to that value.

6/20/2023 -- there was an issue with the reels' left css attribute being calculated via css calc function; the solution was according to post by larsjorg in Aug 2020 here: https://forum.freecodecamp.org/t/css-calc-function-not-working-in-chrome-but-works-in-firefox/413955/11 He pointed out that boiler plate meta info for viewport and device width were missing in op's post, and same with mine. Upon adding the layout is now corrected.

## Reusable demo

The default route remains the original five-reel, twenty-face application with
random clock-timed stops and confetti. Optional hash-route query parameters:

- `/#/?reels=7&preset=WELCOME&compact=1` — responsive seven-reel demo.
- `/#/?reels=3` — three reels with the original random stops.

`reels` accepts integers from 1 to 20; invalid values fall back to five. `preset`
accepts uppercase letters matching the reel count; otherwise random play remains
active. Each letter is a real SVG face installed at pane zero before spinning.
Preset play rotates the same CSS 3D reels through three complete turns with
staggered deceleration to face zero. No face is changed when stopping.

Vue consumers can depend on an immutable commit of this repository and import
its source component (their build must support Vue SFCs and register Quasar's
`QBtn` and `QImg`, plus Quasar CSS):

```vue
<script setup>
import SlotMachine from 'slotmachine'
</script>
<template>
  <SlotMachine compact :reel-count="7" preset="WELCOME" />
</template>
```

Omit all props for the full-page presentation. Compact mode scales the original
stage to its container while retaining a 44px Spin button. Artwork is bundled
from this repository rather than fetched at runtime. The homepage must consume
this component, not maintain a second implementation.

### Development and checks

```sh
npm install
npm run dev
npm run lint
npm test
```

`npm test` builds the app, starts an ephemeral local static server, and runs real
Chromium checks for five-reel play, changing reel count, all seven letter faces,
rotation and repeated WELCOME landings without symbol replacement, image loading,
and mobile overflow. Install Chromium with `npx playwright install chromium`, or
use `BROWSER_PATH=/usr/bin/chromium npm test` with an existing browser.
Node 24 was used for this change; the legacy package engine range still lists
Node 14–18 and npm emits a warning. No runtime engine migration is included.
