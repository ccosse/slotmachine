# Slot Machine (slotmachine)

![image](https://github.com/ccosse/slotmachine/assets/5249621/a2a1b590-4fc3-4b0b-8e72-9679b074e99e)

Simple Slot Machine (in progress)

The reels are currently running against a clock, such that if your cpu + clock + rendering-speeds are not up-to-speed (author's own mobile phone!) then the reels won't stop at the right places. Considering to implement a "snap-to" approach where rather than merely stopping after the computed (time) \* (d_theta/dt), it then calculates the rotation angle associated with that number and snaps-to that value.

6/20/2023 -- there was an issue with the reels' left css attribute being calculated via css calc function; the solution was according to post by larsjorg in Aug 2020 here: https://forum.freecodecamp.org/t/css-calc-function-not-working-in-chrome-but-works-in-firefox/413955/11 He pointed out that boiler plate meta info for viewport and device width were missing in op's post, and same with mine. Upon adding the layout is now corrected.
