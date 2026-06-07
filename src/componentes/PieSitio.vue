<script setup>
import { pieSitio } from '../datos/sitio'
</script>

<template>
  <footer class="pie">
    <div class="pie__interior">
      <section class="pie__columna">
        <img src="/LOGO.png" alt="Red Aviation Co." class="pie__logo" />
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
      <span>Todos los derechos reservados © Red Aviation Co.</span>
    </div>
  </footer>
</template>

<style scoped>
.pie {
  padding: 48px 0 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.28);
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
  padding: 0 22px;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(217, 217, 217, 0.72);
}

.pie__columna:first-child {
  padding-left: 0;
  border-left: 0;
}

.pie__titulo {
  display: block;
  margin-bottom: 12px;
  color: #ffffff;
  font-family: var(--fuente-titulo);
  font-size: 1.15rem;
}

.pie__logo {
  display: block;
  width: 150px;
  height: 92px;
  margin: -12px 0 2px;
  object-fit: cover;
  object-position: center;
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

  .pie__columna {
    padding: 22px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-left: 0;
  }

  .pie__legal {
    flex-direction: column;
  }
}
</style>
