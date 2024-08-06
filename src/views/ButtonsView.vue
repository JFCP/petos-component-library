<template>
    <section id="peto-buttons-view">
        <div class="sub-section examples">
            <h2 id="closed-buttons" class="sub-section-title">Closed Buttons</h2>
            <h3>Closed Solid</h3>
            <peto-button 
                type="closed-solid" 
                main-colour="rgb(111, 28, 243)" 
                text-colour="var(--colour-white)">
                    Click Me
            </peto-button>
            <h3>Closed Solid (Small)</h3>
            <peto-button 
                type="closed-solid" 
                button-size="small"
                main-colour="var(--colour-white)" 
                text-colour="var(--colour-black)">
                    Click Me
            </peto-button>
            <h3>Closed Solid with Coloured Shadow</h3>
            <peto-button 
                type="closed-solid-cshadow" 
                main-colour="#0576f0" 
                text-colour="var(--colour-white)">
                    Click Me
            </peto-button>
            <h3>Closed Border</h3>
            <peto-button 
                type="closed-border" 
                main-colour="#1cffac" 
                text-colour="var(--colour-white)">
                    Click Me
            </peto-button>
            <h3>Closed Border with Interactive Blob</h3>
            <peto-button 
                type="closed-border" 
                :blob="true"
                main-colour="#ed406b" 
                text-colour="var(--colour-white)">
                    Click Me
            </peto-button>
        </div>
        <div class="sub-section examples">
            <h2 id="open-buttons" class="sub-section-title">Open Buttons</h2>
            <h3>Open</h3>
            <peto-button 
                type="open" 
                main-colour="#ffb047" 
                text-colour="var(--colour-white)">
                    Click Me
            </peto-button>
            <h3>Open with Underline (Visible)</h3>
            <peto-button 
                type="open-underline"
                text-colour="var(--colour-white)">
                    Click Me
            </peto-button>
        </div>
    </section>
</template>

<script setup>

import PetoButton from '../components/PetoButton.vue';

</script>

<style scoped lang="scss"></style>