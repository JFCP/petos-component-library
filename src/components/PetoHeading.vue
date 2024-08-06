<template>
    <div class="heading-container" ref="heading" :class="headingClasses">
        <slot></slot>
        <button class="repeat-button" v-if="props.devMode" @mousedown="gsapTween.restart()">
            <peto-icon name="replay" :colour="'rgb(224, 100, 42)'"></peto-icon>
        </button>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import PetoIcon from './PetoIcon.vue';

/* PROPS */

const props = defineProps({
    animation: {                // Determines the animation to be applied to the heading.
        type: String,
        default: 'fade-in'
    },
    split: {                    // Determines whether the heading should be split into individual letters.
        type: Boolean,
        default: false
    },
    hiddenOverflow: {           // Determines whether the heading should have hidden overflow.
        type: Boolean,
        default: false
    },
    devMode: {
        type: Boolean,          // Determines whether the component is in development mode, enabling tools like the repeat button.
        default: false
    }
});

/* DATA INITIALISATION */

const heading = ref(null);                      // Reference to the heading element.
let headingInnerElement = null;                 // Reference to the inner element of the heading (the slotted content).

const headingClasses = {                        // Object to store the classes to be applied to the heading.
    'hidden-overflow': props.hiddenOverflow
};

/** 
 *  ANIMATION DATA INITIALISATION
 *  These variables are used to store the different transformations that the heading will undergo. 
 *  Change the values according to your needs.
 */

const gsapDuration = 0.5;
const gsapDelay = 0.3;
const gsapStagger = 0.03;   // Valid when the headline is split.

const gsapTransform = {
    opacity: {
        from: 0,
        to: 1
    },
    y: {
        from: 20,
        to: 0
    },
    skewY: {
        from: -4,
        to: 0
    },
    rotateX: {
        from: -45,
        to: 0
    }
}

const gsapFrom = {};        // Object to store the initial values of the heading.
const gsapTo = {};          // Object to store the final values of the heading.

let gsapTween = null;       // Reference to the GSAP tween.

/* LIFECYCLE HOOKS */

onMounted( () => {

    headingInnerElement = heading.value.children[0];                        // When mounted, get the element from the slot.

    setAnimation();                                                         // Set the animation to be applied to the heading.

    if(props.devMode) {                                                     // If the component is in dev mode, a reference will be stored to access the different twwen functions.
        gsapTween = gsap.fromTo(headingInnerElement, gsapFrom, gsapTo);     
    } else {                                                                // Otherwise, the tween will be just played.
        gsap.fromTo(headingInnerElement, gsapFrom, gsapTo);                 
    }

});

/* FUNCTIONS */

/** 
 * setAnimation()
 * Function declaration that contains a SWITCH, which sets and determines the animation to be applied to the heading. The available animations are:
 * >> fade-in: Fades in the heading.
 * >> skew-in: Includes fade-in and adds a skew effect.
 * >> skew-in-3d: Includes skew-in and adds a 3D rotation effect.
 */
function setAnimation() {

    // Basic animation options present in all cases.
    gsapFrom.opacity = gsapTransform.opacity.from;
    gsapFrom.y = gsapTransform.y.from;

    gsapTo.opacity = gsapTransform.opacity.to;
    gsapTo.y = gsapTransform.y.to;
    gsapTo.duration = gsapDuration;
    gsapTo.delay = gsapDelay;

    switch(props.animation) {

        default:
        case 'fade-in':                                         // Fade in animation.

            if(props.split) {   // If the heading needs to be split.

                splitHeading();
                
                gsapTo.stagger = gsapStagger;

            }

            break;

        case 'skew-in':                                         // Skew in animation.

            gsapFrom.skewY = gsapTransform.skewY.from;

            gsapTo.skewY = gsapTransform.skewY.to;

            break;

        case 'skew-in-3d':                                      // Skew in 3D animation.

            gsapFrom.skewY = gsapTransform.skewY.from;
            gsapFrom.rotateX = gsapTransform.rotateX.from;

            gsapTo.skewY = gsapTransform.skewY.to;
            gsapTo.rotateX = gsapTransform.rotateX.to;

            break;

        }
}

/**
 * splitHeading()
 * Function declaration that splits the heading into individual letters, and wraps each letter in a span element. This is used to animate each letter individually.
 */
function splitHeading() {
    const headingText = headingInnerElement.textContent;
    const splitText = [...headingText];

    const splitHeading = splitText.map( ( letter ) => {
        if(letter === ' ') {
            return `<span style="display: inline-block;">&nbsp;</span>`;
        } else {
            return `<span style="display: inline-block;">${ letter }</span>`;
        }
    });

    headingInnerElement.innerHTML = splitHeading.join('');
    headingInnerElement = headingInnerElement.querySelectorAll('span');
} 

</script>

<style lang="scss" scoped>

:slotted(h1), :slotted(h2), :slotted(h3), :slotted(h4), :slotted(h5), :slotted(h6) {

    display: inline-block;
    margin: 0;
    color: var(--colour-blue);

}

.heading-container {

    display: block;

    &:has(> h1) {
        margin: 0 0 2rem 0;
    }

    &:has(> h2) {
        margin: 0 0 1.5rem 0;
    }

    &:has(> h3) {
        margin: 0 0 1rem 0;
    }

}

.hidden-overflow {
    overflow: hidden;
}

.repeat-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    border: 0.067rem solid rgb(224, 100, 42);
    background: transparent;
    border-radius: 50%;
    transition: background 150ms;
    cursor: pointer;

    &:hover {   // Hover state.
        background: rgb(224, 100, 42, 0.18);
    }
    
    & > .peto-icon {
        width: 1rem;
        height: 1rem;
    }
}

</style>