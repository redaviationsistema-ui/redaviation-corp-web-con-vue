<script setup>
import { pieSitio } from '../datos/sitio'
</script>

<template>
  <footer class="pie">
    <div class="pie__interior">
      <section class="pie__columna">
        <span class="pie__titulo">Red Aviation Co.</span>
        <p>{{ pieSitio.descripcion }}</p>
      </section>

      <section class="pie__columna">
        <span class="pie__titulo">Navegación rápida</span>
        <ul>
          <li v-for="item in pieSitio.navegacionRapida" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="pie__columna">
        <span class="pie__titulo">Servicios</span>
        <ul>
          <li v-for="item in pieSitio.servicios" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="pie__columna">
        <span class="pie__titulo">Contacto</span>
        <ul>
          <li v-for="item in pieSitio.contacto" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>

    <div class="pie__legal">
      <div class="pie__legal-enlaces">
        <span v-for="item in pieSitio.legales" :key="item">{{ item }}</span>
      </div>
      <span>Copyright © Red Aviation Co.</span>
    </div>
  </footer>
</template>

<style scoped>
.pie {
  padding: 24px 0 28px;
}

.pie__interior,
.pie__legal {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
}

.pie__interior {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 18px;
}

.pie__columna {
  padding: 22px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(217, 217, 217, 0.72);
}

.pie__titulo {
  display: block;
  margin-bottom: 12px;
  color: #ffffff;
  font-family: var(--fuente-titulo);
  font-size: 1.15rem;
}

.pie ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.pie__legal {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  color: rgba(217, 217, 217, 0.58);
  font-size: 0.92rem;
}

.pie__legal-enlaces {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

@media (max-width: 960px) {
  .pie__interior,
  .pie__legal {
    width: min(100%, calc(100% - 20px));
  }

  .pie__interior {
    grid-template-columns: 1fr;
  }

  .pie__legal {
    flex-direction: column;
  }
}
</style>
