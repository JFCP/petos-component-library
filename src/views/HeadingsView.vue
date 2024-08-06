<template>
    <section id="peto-headings-view">
        <div class="sub-section examples">
            <h2 id="animated-heading" class="sub-section-title">Animated Heading</h2>
            <h3>Fade in</h3>
            <peto-heading
                animation="fade-in"
                :dev-mode="true">
                    <h1>Hello World!</h1>
            </peto-heading>
            <h3>Fade in (Hidden Overflow)</h3>
            <peto-heading
                animation="fade-in"
                :hidden-overflow="true"
                :dev-mode="true">
                    <h1>Hello World!</h1>
            </peto-heading>
            <h3>Split Fade In</h3>
            <peto-heading
                animation="fade-in"
                :split="true"
                :dev-mode="true">
                <h1>Hello World!</h1>
            </peto-heading>
            <h3>Split Fade In (Hidden Overflow)</h3>
            <peto-heading
                animation="fade-in"
                :split="true"
                :hidden-overflow="true"
                :dev-mode="true">
                <h1>Hello World!</h1>
            </peto-heading>
            <h3>Skew in</h3>
            <peto-heading
                animation="skew-in"
                :dev-mode="true">
                <h1>Hello World!</h1>
            </peto-heading>
            <h3>Skew in (Hidden Overflow)</h3>
            <peto-heading
                animation="skew-in"
                :hidden-overflow="true"
                :dev-mode="true">
                <h1>Hello World!</h1>
            </peto-heading>
            <h3>Skew in 3D</h3>
            <peto-heading
                animation="skew-in-3d"
                :dev-mode="true">
                <h1>Hello World!</h1>
            </peto-heading>
        </div>
    </section>
</template>

<script setup>

import PetoHeading from '../components/PetoHeading.vue';

</script>

<style scoped lang="scss"></style>