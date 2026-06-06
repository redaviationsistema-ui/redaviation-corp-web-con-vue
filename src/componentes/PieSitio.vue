<template>
  <footer class="pie">
    <div class="pie__interior">
      <p>Red Aviation Co. · Plataforma corporativa en español</p>
      <p>Las imágenes y videos quedan listos para implementarse en cada vista.</p>
    </div>
  </footer>
</template>

<style scoped>
.pie {
  padding: 0 0 28px;
}

.pie__interior {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  color: rgba(217, 217, 217, 0.62);
  font-size: 0.92rem;
}

@media (max-width: 720px) {
  .pie__interior {
    width: min(100%, calc(100% - 20px));
    flex-direction: column;
  }
}
</style>
