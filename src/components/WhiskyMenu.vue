<template>
  <section v-if="whiskies.length" class="whisky-menu" :id="id">
    <h2 class="whisky-menu-title">{{ title }}</h2>
    <table class="whisky-menu-table" cellspacing="0">
      <thead>
        <tr>
          <th class="whisky-description">
            <div class="whisky-name">Name</div>
            <div v-if="showRegion" class="whisky-region">Region</div>
          </th>
          <th class="whisky-mix">Mix</th>
          <th class="whisky-age">Age</th>
          <th class="whisky-abv">ABV</th>
          <th class="whisky-proof">Proof</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ age, mix, name, proof, region } of sortedWhiskies"
          :key="name"
          class="whisky"
        >
          <td class="whisky-description">
            <div class="whisky-name">{{ name }}</div>
            <div v-if="showRegion && region" class="whisky-region">{{ region }}</div>
          </td>
          <td class="whisky-mix">
            <MixIcon v-if="mix" />
          </td>
          <td class="whisky-age">
            <template v-if="age != null">
              {{ `${age} year${age === 1 ? '' : 's'}` }}
            </template>
          </td>
          <td class="whisky-abv">{{ proof / 2 }}%</td>
          <td class="whisky-proof">{{ proof }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import type { Whisky } from '../types/whisky';
import { computed } from 'vue';
import MixIcon from './MixIcon.vue';

const props = defineProps<{
  id: string;
  title: string;
  whiskies: readonly Whisky[];
}>();

const showRegion = computed(() => props.whiskies.some(w => !!w.region));
const sortedWhiskies = computed(() => {
  const collator = new Intl.Collator('en-US', { caseFirst: 'false', ignorePunctuation: true, usage: 'sort' });
  return props.whiskies.slice().sort((a, b) => collator.compare(a.name, b.name));
});
</script>
