<template>
    <div id="page-container">
        <h1>Peto's Component Library</h1>
        <div id="router-container">
            <RouterView />
        </div>
    </div>
    <NavigationBar />
</template>

<script setup>

import { RouterView } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';

</script>

<style scoped lang="scss"></style>