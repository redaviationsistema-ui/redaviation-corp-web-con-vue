<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  pagina: {
    type: Object,
    required: true,
  },
})

const empresasSuperiores = [
  {
    nombre: 'GESA',
    ruta: '/gesa',
    imagen: '/imagenes/LOGOS/Logo%20GESA.png',
    alt: 'Logotipo de GESA',
    especialidad: 'Aviónica e interiores',
  },
  {
    nombre: 'CESA',
    ruta: '/cesa',
    imagen: '/imagenes/LOGOS/Logo%20CESA.png',
    alt: 'Logotipo de CESA',
    especialidad: 'Mantenimiento estructural',
  },
  {
    nombre: 'Excel Turbines',
    ruta: '/excel-turbines',
    imagen: '/imagenes/LOGOS/Logo%20EXCEL.png',
    alt: 'Logotipo de Excel Turbines',
    especialidad: 'Motores de turbina',
  },
]
</script>

<template>
  <section class="ecosistema">
    <header class="encabezado">
      <p>Ecosistema</p>
      <h1>{{ pagina.titulo }}</h1>
      <span>{{ pagina.descripcion }}</span>
    </header>

    <section class="diagrama" aria-label="Estructura del ecosistema Red Aviation">
      <div class="matriz">
        <article class="red-aviation">
          <img src="/LOGO.png" alt="Red Aviation Company" />
          <div>
            <span>Firma central</span>
            <h2>Red Aviation</h2>
            <p>Estrategia, coordinación y representación aeronáutica.</p>
          </div>
        </article>

        <div class="conector conector--principal" aria-hidden="true" />

        <div class="empresas-superiores">
          <RouterLink
            v-for="empresa in empresasSuperiores"
            :key="empresa.nombre"
            :to="empresa.ruta"
            class="empresa"
          >
            <img :src="empresa.imagen" :alt="empresa.alt" />
            <strong>{{ empresa.nombre }}</strong>
            <span>{{ empresa.especialidad }}</span>
          </RouterLink>
        </div>

        <div class="conector conector--inferior" aria-hidden="true" />

        <RouterLink to="/sky-group" class="empresa empresa--sky">
          <img src="/imagenes/LOGOS/Logo%20SKYGROUP.png" alt="Logotipo de Sky Group" />
          <strong>Sky Group</strong>
          <span>Comercialización y consultoría</span>
        </RouterLink>
      </div>
    </section>

    <section class="resumen">
      <article>
        <strong>Comercial</strong>
        <span>Compra, venta y representación de activos.</span>
      </article>
      <article>
        <strong>Técnico</strong>
        <span>Estructura, aviónica, motores y componentes.</span>
      </article>
      <article>
        <strong>Operativo</strong>
        <span>Coordinación integral durante el ciclo de vida.</span>
      </article>
    </section>
  </section>
</template>

<style scoped>
.ecosistema {
  display: grid;
  gap: 18px;
}

.encabezado,
.diagrama,
.resumen article {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.04);
}

.encabezado {
  padding: clamp(28px, 5vw, 58px);
  text-align: center;
}

.encabezado p,
.red-aviation span {
  margin: 0 0 10px;
  color: #ff7187;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

h1,
h2,
strong {
  color: #fff;
  font-family: var(--fuente-titulo);
}

h1 {
  margin: 0 auto 16px;
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.94;
}

.encabezado > span,
.red-aviation p,
.empresa span,
.resumen span {
  color: rgba(217, 217, 217, 0.74);
}

.diagrama {
  padding: clamp(24px, 5vw, 56px);
  overflow: hidden;
  background:
    radial-gradient(circle at center, rgba(200, 16, 46, 0.12), transparent 48%),
    rgba(255, 255, 255, 0.03);
}

.matriz {
  display: grid;
  justify-items: center;
}

.red-aviation {
  display: flex;
  align-items: center;
  gap: 24px;
  width: min(100%, 600px);
  padding: 24px 30px;
  border: 1px solid rgba(255, 77, 104, 0.38);
  border-radius: 26px;
  background: rgba(200, 16, 46, 0.12);
}

.red-aviation img {
  width: 120px;
  height: 76px;
  object-fit: contain;
}

.red-aviation h2 {
  margin: 0;
  font-size: 2rem;
}

.red-aviation p {
  margin-bottom: 0;
}

.conector {
  position: relative;
  width: min(72%, 700px);
  height: 72px;
}

.conector::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 50%;
  background: rgba(255, 77, 104, 0.55);
}

.conector--principal::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(255, 77, 104, 0.55);
}

.empresas-superiores {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  width: 100%;
}

.empresa {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 260px;
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 26px;
  text-align: center;
  background: rgba(5, 5, 5, 0.54);
  transition: transform 180ms ease, border-color 180ms ease;
}

.empresa:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 77, 104, 0.5);
}

.empresa::before {
  content: "";
  position: absolute;
  top: -37px;
  left: 50%;
  width: 1px;
  height: 37px;
  background: rgba(255, 77, 104, 0.55);
}

.empresa img {
  width: 150px;
  height: 130px;
  padding: 14px;
  object-fit: cover;
  border-radius: 18px;
  background: #fff;
}

.empresa strong {
  margin-top: 18px;
  font-size: 1.35rem;
}

.empresa span {
  margin-top: 5px;
}

.conector--inferior {
  height: 52px;
}

.conector--inferior::before {
  height: 100%;
}

.empresa--sky {
  width: min(100%, 360px);
}

.empresa--sky::before {
  top: -53px;
  height: 53px;
}

.resumen {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.resumen article {
  padding: 24px;
}

.resumen strong,
.resumen span {
  display: block;
}

.resumen strong {
  font-size: 1.4rem;
}

.resumen span {
  margin-top: 7px;
}

@media (max-width: 760px) {
  .red-aviation {
    flex-direction: column;
    text-align: center;
  }

  .conector {
    display: none;
  }

  .empresas-superiores,
  .resumen {
    grid-template-columns: 1fr;
    margin-top: 18px;
  }

  .empresa--sky {
    margin-top: 18px;
  }

  .empresa::before {
    display: none;
  }

}
</style>
