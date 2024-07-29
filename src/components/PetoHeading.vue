<template>
    <div class="heading-container" ref="heading" :class="headingClasses">
        <slot></slot>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import gsap from 'gsap';

/* PROPS */

const props = defineProps({
    animation: {
        type: String,
        default: 'fade-in'
    },
    split: {
        type: Boolean,
        default: false
    },
    hiddenOverflow: {
        type: Boolean,
        default: false
    }
});

/* DATA INITIALISATION */

const heading = ref(null);
const headingClasses = {
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

const gsapFrom = {};    // Object to store the initial values of the heading.
const gsapTo = {};      // Object to store the final values of the heading.

onMounted( () => {

    let headingContent = heading.value.children[0];

    /** 
     * SWITCH STATEMENT
     * Switch statement that determines the animation to be applied to the heading. The available animations are:
     * >> fade-in: Fades in the heading.
     * >> skew-in: Includes fade-in and adds a skew effect.
     * >> skew-in-3d: Includes skew-in and adds a 3D rotation effect.
     */

    switch(props.animation) {

        case 'fade-in':

            if(props.split) {   // If true, split the heading into individual letters.

                const headingText = headingContent.textContent;
                const splitText = [...headingText];

                const splitHeading = splitText.map( ( letter ) => {
                    if(letter === ' ') {
                        return `<span style="display: inline-block;">&nbsp;</span>`;
                    } else {
                        return `<span style="display: inline-block;">${ letter }</span>`;
                    }
                });

                headingContent.innerHTML = splitHeading.join('');
                headingContent = headingContent.querySelectorAll('span');

                /* Animation setup */

                gsapFrom.opacity = gsapTransform.opacity.from;
                gsapFrom.y = gsapTransform.y.from;

                gsapTo.opacity = gsapTransform.opacity.to;
                gsapTo.y = gsapTransform.y.to;
                gsapTo.duration = gsapDuration;
                gsapTo.delay = gsapDelay;
                gsapTo.stagger = gsapStagger;

            } else {    // For everything else, animate the heading as a whole.

                gsapFrom.opacity = gsapTransform.opacity.from;
                gsapFrom.y = gsapTransform.y.from;

                gsapTo.opacity = gsapTransform.opacity.to;
                gsapTo.y = gsapTransform.y.to;
                gsapTo.duration = gsapDuration;
                gsapTo.delay = gsapDelay;

            }

            break;

        case 'skew-in':

            gsapFrom.opacity = gsapTransform.opacity.from;
            gsapFrom.y = gsapTransform.y.from;
            gsapFrom.skewY = gsapTransform.skewY.from;

            gsapTo.opacity = gsapTransform.opacity.to;
            gsapTo.y = gsapTransform.y.to;
            gsapTo.skewY = gsapTransform.skewY.to;
            gsapTo.duration = gsapDuration;
            gsapTo.delay = gsapDelay;

            break;

        case 'skew-in-3d':

            gsapFrom.opacity = gsapTransform.opacity.from;
            gsapFrom.y = gsapTransform.y.from;
            gsapFrom.skewY = gsapTransform.skewY.from;
            gsapFrom.rotateX = gsapTransform.rotateX.from;

            gsapTo.opacity = gsapTransform.opacity.to;
            gsapTo.y = gsapTransform.y.to;
            gsapTo.skewY = gsapTransform.skewY.to;
            gsapTo.rotateX = gsapTransform.rotateX.to;
            gsapTo.duration = gsapDuration;
            gsapTo.delay = gsapDelay;

            break;

        default:
            break;

    }

    gsap.fromTo(headingContent, gsapFrom, gsapTo);  // Apply the animation to the heading.

});

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

</style>