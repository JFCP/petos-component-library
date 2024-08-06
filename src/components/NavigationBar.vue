<template>
    <nav id="peto-library-navbar">
        <ul class="navbar-links">
            <li>
                <router-link to="/headings">Headings</router-link>
                <ul class="navbar-submenu">
                    <li>
                        <router-link to="/headings#animated-heading">Animated Heading</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link to="/buttons">Buttons</router-link>
                <ul class="navbar-submenu">
                    <li>
                        <router-link to="/buttons#closed-buttons">Closed Buttons</router-link>
                    </li>
                    <li>
                        <router-link to="/buttons#open-buttons">Open Buttons</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="navbar-controls" :style="`width: ${settingsButton}px;`">
            <peto-icon :name="'settings'" :colour="'var(--colour-black)'"></peto-icon>
            <div class="submenu">
                <button class="font-bigger" :style="`height: ${settingsButton}px;`">
                    <peto-icon :name="'text-increase'" :colour="'var(--colour-black)'"></peto-icon>
                </button>
                <button class="font-smaller" :style="`height: ${settingsButton}px;`">
                    <peto-icon :name="'text-decrease'" :colour="'var(--colour-black)'"></peto-icon>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import PetoIcon from './PetoIcon.vue';

const settingsButton = ref(0);

onMounted( () => {
    settingsButton.value = document.querySelector('.navbar-controls').offsetHeight;
});

</script>

<style scoped lang="scss">

#peto-library-navbar {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 0.5rem 0.5rem;
    max-width: 90%;
    padding: 0.5rem;
    background: white;
    border-radius: 0.5rem;
    z-index: 10;

    & > ul.navbar-links {
        display: flex;
        list-style: none;
        gap: 0.5rem 0.5rem;

        & > li {

            &:hover {   // Hover state.
                & > ul.navbar-submenu {
                    visibility: visible;
                    bottom: 99%;
                    opacity: 1;
                    clip-path: inset(0 0 0 0);
                }
            }

            & > a {
                display: block;
                padding: 1rem;
                color: var(--colour-black);
                font-size: 1.2rem;
                font-weight: 600;
                border: 0.0661rem solid var(--colour-grey);
                border-radius: 0.5rem;
            }

            & > ul.navbar-submenu {
                position: absolute;
                bottom: 70%;
                left: 0;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 0 0 1.125rem 0;
                visibility: hidden;
                list-style: none;
                opacity: 0;
                clip-path: inset(100% 0 0 0);
                transition: 150ms opacity, 150ms bottom, 150ms clip-path;

                & > li {
                    & > a {
                        display: block;
                        padding: 0.5rem 0.75rem;
                        font-size: 1rem;
                        font-weight: 600;
                        border-radius: 0.5rem;
                        background: var(--colour-grey);
                        color: var(--colour-black);
                        text-align: center;
                    }
                }
            }
        }
    }

    & > .navbar-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.0661rem solid var(--colour-grey);
        border-radius: 0.5rem;

        &:hover {   // Hover state.
            & > .submenu {
                visibility: visible;
                bottom: 99%;
                opacity: 1;
                clip-path: inset(0 0 0 0);
            }
        }

        & .peto-icon {
            width: 1.5rem;
            height: 1.5rem;
        }

        & > .submenu {
            position: absolute;
            bottom: 70%;
            left: 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            padding: 0 0 1.125rem 0;
            visibility: hidden;
            opacity: 0;
            clip-path: inset(100% 0 0 0);
            transition: 150ms opacity, 150ms bottom, 150ms clip-path;

            & > button {

            } 
        }
    }
}

</style>