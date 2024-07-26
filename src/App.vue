<template>
  <div id="page-container">
    <h1>Peto's Component Library</h1>
    <section>
      <h2>Animated Heading</h2>
      <h3>Fade in</h3>
      <peto-heading
        :animation="'fade-in'"
        :split="false"
        :hidden-overflow="false">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Fade in (Hidden Overflow)</h3>
      <peto-heading
        :animation="'fade-in'"
        :split="false"
        :hidden-overflow="true">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Split Fade In</h3>
      <peto-heading
        :animation="'fade-in'"
        :split="true"
        :hidden-overflow="false">
          <h1>Hello World!</h1>
      </peto-heading>
      <h3>Split Fade In (Hidden Overflow)</h3>
      <peto-heading
        :animation="'fade-in'"
        :split="true"
        :hidden-overflow="true">
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