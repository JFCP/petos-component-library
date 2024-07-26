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

onMounted( () => {

    const headingContent = heading.value.children[0];

    if(props.split) {

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

        const splitLetters = headingContent.querySelectorAll('span');

        switch(props.animation) {

            case 'fade-in':
                gsap.fromTo(splitLetters, {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.3,
                    stagger: 0.03
                });
                break;
            
            default:
                break;

        }

    } else {

        switch(props.animation) {

            case 'fade-in':
                gsap.fromTo(headingContent, {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.3
                });
                break;
            
            default:
                break;

        }
    }
});

</script>

<style lang="scss" scoped>

:slotted(h1), :slotted(h2), :slotted(h3), :slotted(h4), :slotted(h5), :slotted(h6) {
    margin: 0;
    color: #8db8cc;
}

.heading-container {

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