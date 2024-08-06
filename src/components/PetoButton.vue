<template>
    <div class="peto-button-container">
        <template v-if="props.blob">
            <div class="button-blob" ref="buttonBlob" :class="{'focused': isHovering}"></div>
            <a class="peto-button" ref="button" :class="buttonClasses" @mousemove="blobHover" @mouseleave="isHovering = false">
                <span class="button-text"><slot></slot></span>
            </a>
        </template>
        <template v-else-if="props.type === 'open-underline'">
            <a class="peto-button" ref="button" :class="buttonClasses" @mouseenter="underlineAnimation('start')" @mouseleave="underlineAnimation('end')">
                <span class="button-text"><slot></slot></span>
            </a>
            <div class="button-underline" ref="buttonUnderline">
                <div class="button-underline-accent"></div>
            </div>
        </template>
        <template v-else>
            <a class="peto-button" ref="button" :class="buttonClasses">
                <span class="button-text"><slot></slot></span>
            </a>
        </template>
    </div>
</template>

<script setup>

import { ref } from 'vue';

/* PROPS */

const props = defineProps({
    type: {
        type: String,
        default: 'closed-solid',
    },
    buttonSize: {
        type: String,
        default: 'medium'
    },
    mainColour: {
        type: String,
        default: 'rgb(111, 28, 243)'
    },
    textColour: {
        type: String,
        default: 'white'
    },
    blob: {
        type: Boolean,
        default: false
    }
});

/* DATA INITIALISATION */

const button = ref(null);       // Button reference.
let buttonRect = null;          // Button element rect.

/* DATA - Blob settings */

const buttonBlob = ref(null);   // Button blob reference.
let isHovering = ref(false);    // Hover state.

/* DATA - Underline settings */

const buttonUnderline = ref(null);

const buttonClasses = {
    'small': props.buttonSize === 'small',
    'medium': props.buttonSize === 'medium'
};

switch(props.type) {

    default:
    case 'closed-solid':
        buttonClasses['closed'] = true;
        buttonClasses['solid'] = true;
        break;

    case 'closed-solid-cshadow':
        buttonClasses['closed'] = true;
        buttonClasses['solid'] = true;
        buttonClasses['cshadow'] = true;
        break;

    case 'closed-border':
        buttonClasses['closed'] = true;
        buttonClasses['border'] = true;
        break;

    case 'open':
        buttonClasses['open'] = true;
        break;
    
    case 'open-underline':
        buttonClasses['open'] = true;
        buttonClasses['underline'] = true;
        break;

}

/* FUNCTIONS */

/**
 * blobHover()
 */

function blobHover(e) {
    isHovering.value = true;

    buttonRect = button.value.getBoundingClientRect();

    buttonBlob.value.style.transform = `translate(${e.clientX - buttonRect.x - (buttonBlob.value.offsetWidth / 2)}px, ${e.clientY - buttonRect.y - (buttonBlob.value.offsetHeight / 2)}px)`;
}

/**
 * activateUnderline() 
 */

function underlineAnimation(step) {

    switch(step) {
        case 'start':
            buttonUnderline.value.querySelector('.button-underline-accent').style.width = '100%';
            buttonUnderline.value.querySelector('.button-underline-accent').style.left = '0';
            break;
        case 'end':
            buttonUnderline.value.querySelector('.button-underline-accent').style.width = '0';
            buttonUnderline.value.querySelector('.button-underline-accent').style.left = '100%';

            setTimeout(() => {
                buttonUnderline.value.querySelector('.button-underline-accent').style.left = '0';
            }, 150);
            break;
    }

}

</script>

<style scoped lang="scss">

.peto-button-container {    // Container.
    display: inline-block;
}

.peto-button {              // Button.
    display: inline-block;
    text-decoration: none;
    color: v-bind(textColour);
}

.peto-button:hover {        // Hover state.
    cursor: pointer;
}

/* CLOSED BUTTON TYPES */

.peto-button-container:has(>.peto-button.closed) {
    border-radius: 0.5rem;
}

.peto-button.closed {
    border-radius: 0.5rem;
}

.peto-button.closed.small {    // Small button.
    padding: 0.5rem 1rem;
    font-size: 1rem;
}

.peto-button.closed.medium {   // Medium button
    padding: 1rem 2rem;
    font-size: 1.125rem;
}

/* closed-solid */

.peto-button.closed.solid {
    background-color: v-bind(mainColour);
    transition: background-color 150ms;
}

.peto-button.closed.solid:hover {
    background-color: hsl(from v-bind(mainColour) h s calc(l - 15));
}

/* closed-solid-cshadow */

.peto-button.closed.solid.cshadow {
    transition: background-color 150ms, box-shadow 150ms;
}

.peto-button.closed.solid.cshadow:hover {
    background-color: v-bind(mainColour);
    box-shadow: 0px 0px 12px 6px rgba(from v-bind(mainColour) r g b / 0.8);
}

/* closed-border */

.peto-button.closed.border {
    background-color: hsl(from v-bind(mainColour) h s l / 0.05);
    border: 0.067rem solid v-bind(mainColour);
    transition: background-color 150ms;
}

.peto-button.closed.border:hover {
    background-color: hsl(from v-bind(mainColour) h s l / 0.2);
}

/* CLOSED BUTON - Blob */

.peto-button-container:has(>.button-blob) {
    overflow: hidden;
}

.peto-button-container > .button-blob {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0.3043418050814075) 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%);
    opacity: 0;
    filter: blur(0.067rem);
    transition: transform 100ms, opacity 1000ms;
}

.peto-button-container > .button-blob.focused {
    opacity: 0.6;
}

/* OPEN BUTTON TYPES */

.peto-button.open {
    border-radius: 0.5rem;
}

.peto-button.open.small {    // Small button.
    font-size: 1.125rem;
}

.peto-button.open.medium {   // Medium button
    font-size: 1.5rem;
}

/* open */

.peto-button.open {
    transition: color 100ms;
}

.peto-button.open:hover {
    color: v-bind(mainColour);
}

/* open-underline */

.peto-button.open.underline {
    padding: 0 0 0.5rem 0;
    transition: color 100ms;
}

.peto-button.open.underline:hover {
    color: hsl(from v-bind(textColour) h s calc(l - 15));
}

/* OPEN BUTTON - Underline */

.peto-button-container > .button-underline {
    display: block;
    width: 100%;
    height: 0.067rem;
    background-color: rgb(from v-bind(textColour) r g b / 0.2);
}

.peto-button-container > .button-underline > .button-underline-accent {
    width: 0;
    height: 100%;
    background-color: v-bind(textColour);
    transition: width 150ms, left 150ms;
}

/* TEXT */

.peto-button > .button-text {
    font-weight: 600;
}

</style>
