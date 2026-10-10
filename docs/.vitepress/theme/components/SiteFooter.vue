<template>
  <footer class="site-footer" aria-label="Site information">
    <p>I use AI tools to help maintain this site. Dependencies are annoying. The robot can handle them.</p>
    <p>
      Released under the
      <a href="https://github.com/tobybaratta/tobybaratta.github.io/blob/main/LICENSE">MIT License</a>.
    </p>
    <p>Copyright © 2023-present Toby Baratta</p>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;
  flex-shrink: 0;
  border-top: 1px solid var(--vp-c-divider);
  padding: 1.5rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.7;
}

.site-footer p + p {
  margin-top: 0.5rem;
}
</style>
