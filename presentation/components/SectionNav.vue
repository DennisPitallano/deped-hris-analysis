<script setup lang="ts">
defineProps<{ current?: string }>()

const sections = [
  { letter: 'A', alias: 'paper-a', label: 'Brief' },
  { letter: 'B', alias: 'paper-b', label: 'Response' },
  { letter: 'C', alias: 'paper-c', label: 'Architecture' },
  { letter: 'D', alias: 'paper-d', label: 'Value-Add' },
  { letter: 'E', alias: 'paper-e', label: 'Benchmarks' },
]
</script>

<template>
  <div class="section-nav">
    <Link to="toc" class="section-nav__home" title="Back to table of contents">
      <span>↖</span> TOC
    </Link>
    <Link
      v-for="s in sections"
      :key="s.alias"
      :to="s.alias"
      class="section-nav__item"
      :class="{ 'section-nav__item--active': current === s.letter }"
      :title="s.label"
    >
      {{ s.letter }}
    </Link>
  </div>
</template>

<style scoped>
.section-nav {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  display: flex;
  gap: 0.375rem;
  align-items: center;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.75rem;
  opacity: 0.75;
  z-index: 10;
}

.section-nav__home {
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: inherit;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;
}

.section-nav__home:hover {
  background: rgba(2, 132, 199, 0.15);
  color: #0284c7;
}

.section-nav__item {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.section-nav__item:hover {
  background: rgba(2, 132, 199, 0.15);
  color: #0284c7;
  border-color: #0284c7;
}

.section-nav__item--active {
  background: #0284c7;
  color: #fff !important;
  border-color: #0284c7;
}
</style>
