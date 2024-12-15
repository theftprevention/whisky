<template>
  <main>
    <h1>Jacob's Whisky Menu</h1>
    <p>
      If a whisky has the <MixIcon /> icon, then it can be used in cocktails. Otherwise, I recommend
      enjoying it by itself (whether that's neat or on the rocks)!
    </p>
    <WhiskyMenu
      v-for="category of categories"
      :key="category.title"
      v-bind="category"
    />
  </main>
</template>

<script setup lang="ts">
import MixIcon from './components/MixIcon.vue';
import WhiskyMenu from './components/WhiskyMenu.vue';
import type { Whisky } from './types/whisky';

import blendedScotch from './data/blendedScotch';
import bourbon from './data/bourbon';
import japanese from './data/japanese';
import rye from './data/rye';
import singleMaltScotch from './data/singleMaltScotch';

const categories: {
  title: string;
  whiskies: readonly Whisky[];
  id: string;
}[] = [
  {
    title: 'Single Malt Scotch',
    whiskies: singleMaltScotch,
    id: 'single-malt-scotch',
  },
  {
    title: 'Blended Scotch',
    whiskies: blendedScotch,
    id: 'blended-scotch',
  },
  {
    title: 'Bourbon',
    whiskies: bourbon,
    id: 'bourbon',
  },
  {
    title: 'Rye Whisky',
    whiskies: rye,
    id: 'rye',
  },
  {
    title: 'Japanese Whisky',
    whiskies: japanese,
    id: 'japanese',
  },
];
</script>
