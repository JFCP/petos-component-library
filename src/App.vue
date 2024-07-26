<template>
  <div id="page-container">
    <h1>Peto's Component Library</h1>
    <section>
      <h2>Animated Heading</h2>
      <h3>Fade in</h3>
      <peto-heading
        :animation="'fade-in'">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Fade in (Hidden Overflow)</h3>
      <peto-heading
        :animation="'fade-in'"
        :hidden-overflow="true">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Split Fade In</h3>
      <peto-heading
        :animation="'fade-in'"
        :split="true">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Split Fade In (Hidden Overflow)</h3>
      <peto-heading
        :animation="'fade-in'"
        :split="true"
        :hidden-overflow="true">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Skew in</h3>
      <peto-heading
        :animation="'skew-in'">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Skew in (Hidden Overflow)</h3>
      <peto-heading
        :animation="'skew-in'"
        :hidden-overflow="true">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Skew in 3D</h3>
      <peto-heading
        :animation="'skew-in-3d'">
          <h1>Hello World!</h1>
      </peto-heading>
    </section>
  </div>
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';
import PetoHeading from './components/PetoHeading.vue';

</script>

<style scoped lang="scss">
</style>