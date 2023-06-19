# Slot Machine (slotmachine)

![image](https://github.com/ccosse/slotmachine/assets/5249621/a2a1b590-4fc3-4b0b-8e72-9679b074e99e)

Simple Slot Machine (in progress)

The reels are currently running against a clock, such that if your cpu + clock are not up-to-speed then the reels won't stop at the right places. Considering to implement a "snap-to" approach where rather than merely stopping after the computed (time) \* (d_theta/dt), it then calculates the rotation angle associated with that number and snaps-to that value.
