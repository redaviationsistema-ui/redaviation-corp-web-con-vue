<script setup>
const categoriasDatos = [
  'Datos de identificación.',
  'Datos de contacto.',
  'Datos de facturación y financieros.',
  'Información contenida en pasaportes, visas y otros documentos de viaje o migratorios requeridos para vuelos nacionales o internacionales.',
]

const finalidadesPrimarias = [
  'Coordinar, organizar, administrar y/o facilitar servicios aeronáuticos, transporte aéreo y servicios relacionados.',
  'Determinar la entidad responsable de prestar y, en su caso, facturar los servicios contratados, según el lugar de compra y de ejecución del vuelo.',
  'Gestionar procesos de facturación, pago y cobranza en cumplimiento de obligaciones fiscales y legales aplicables.',
  'Realizar la gestión operativa, administrativa y logística de los vuelos.',
  'Verificar que los pasajeros cuenten con la documentación requerida para viajes nacionales e internacionales.',
  'Permitir el acceso a aeronaves e instalaciones aeroportuarias.',
  'Atender solicitudes o requerimientos de autoridades nacionales o internacionales competentes.',
  'Administrar bitácoras de vuelo, reportes aduanales y migratorios.',
  'Mantener comunicaciones y notificaciones relacionadas con los vuelos.',
  'Prevenir, detectar y mitigar posibles fraudes.',
  'Cumplir con obligaciones legales, regulatorias y aeronáuticas aplicables.',
]

const transferencias = [
  'Proveedores de servicios que apoyen operaciones aeronáuticas, administrativas, tecnológicas o financieras, sujetos a obligaciones de confidencialidad.',
  'Autoridades gubernamentales nacionales o internacionales, incluidas autoridades aeronáuticas, aeroportuarias, aduanales, migratorias y fiscales, cuando exista requerimiento legal.',
]
</script>

<template>
  <section class="aviso">
    <header class="aviso__hero">
      <p class="aviso__etiqueta">Marco legal</p>
      <h1>Aviso de Privacidad</h1>
      <p class="aviso__resumen">
        Tratamiento de datos personales por parte de RED AVIATION COMPANY en relación con este
        sitio web y la coordinación de servicios aeronáuticos.
      </p>
    </header>

    <div class="aviso__contenido">
      <section>
        <h2>Identidad del Responsable</h2>
        <p>
          RED AVIATION COMPANY actúa como responsable del tratamiento respecto de los datos
          personales recabados a través de este sitio web y en relación con la coordinación y
          gestión de servicios aeronáuticos.
        </p>
        <p>
          RED AVIATION COMPANY opera internacionalmente y coordina servicios que pueden llevarse a
          cabo en distintas jurisdicciones, incluyendo México. Este Aviso de Privacidad se emite
          de conformidad con la normativa aplicable en materia de protección de datos,
          particularmente cuando los servicios, vuelos o pasajeros se relacionan con territorio
          mexicano.
        </p>
      </section>

      <section>
        <h2>Categorías de Datos Personales Tratados</h2>
        <p>
          Para cumplir con las finalidades descritas en este Aviso de Privacidad, RED AVIATION
          COMPANY puede recabar y tratar las siguientes categorías de datos personales:
        </p>
        <ul>
          <li v-for="item in categoriasDatos" :key="item">{{ item }}</li>
        </ul>
        <p>RED AVIATION COMPANY no recaba ni trata intencionalmente datos personales sensibles.</p>
      </section>

      <section>
        <h2>Finalidades Primarias del Tratamiento</h2>
        <p>Los datos personales serán tratados para las siguientes finalidades primarias:</p>
        <ul>
          <li v-for="item in finalidadesPrimarias" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section>
        <h2>Base Legal del Tratamiento</h2>
        <p>
          RED AVIATION COMPANY trata los datos personales con base en el consentimiento expreso del
          titular, el cual se entenderá otorgado cuando proporcione información personal con el fin
          de contratar servicios, realizar pagos o viajar en aeronaves coordinadas o administradas
          por RED AVIATION COMPANY.
        </p>
      </section>

      <section>
        <h2>Transferencias de Datos Personales</h2>
        <p>
          RED AVIATION COMPANY podrá compartir datos personales, sin requerir consentimiento
          adicional del titular, con terceros independientes con quienes mantenga relaciones
          comerciales o de colaboración, exclusivamente cuando ello sea necesario para la
          coordinación, prestación o facturación de los servicios contratados.
        </p>
        <p>
          En esos casos, cada entidad será responsable del tratamiento de los datos personales bajo
          su control, conforme a la legislación aplicable y a las finalidades de la relación
          jurídica que mantenga con el titular.
        </p>
        <p>Los datos personales también podrán transferirse a:</p>
        <ul>
          <li v-for="item in transferencias" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section>
        <h2>Derechos del Titular</h2>
        <p>
          Dependiendo de la jurisdicción aplicable, los titulares podrán ejercer sus derechos de
          acceso, rectificación, cancelación, oposición o sus equivalentes reconocidos por la
          normativa de protección de datos aplicable. Las solicitudes podrán presentarse a través
          de los canales de contacto designados por RED AVIATION COMPANY.
        </p>
      </section>

      <section>
        <h2>Autoridad de Protección de Datos</h2>
        <p>
          Cuando resulte aplicable, los titulares podrán acudir ante la autoridad mexicana de
          protección de datos, el Instituto Nacional de Transparencia, Acceso a la Información y
          Protección de Datos Personales (INAI), si consideran que sus derechos han sido vulnerados.
        </p>
      </section>

      <section>
        <h2>Ley Aplicable</h2>
        <p>
          Este Aviso de Privacidad se rige por la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares en México, sin perjuicio de la aplicación de otras
          disposiciones legales que pudieran resultar aplicables, considerando la naturaleza
          internacional de las operaciones de RED AVIATION COMPANY.
        </p>
      </section>

      <section>
        <h2>Cambios a este Aviso de Privacidad</h2>
        <p>
          RED AVIATION COMPANY se reserva el derecho de modificar o actualizar este Aviso de
          Privacidad en cualquier momento derivado de cambios legislativos, políticas internas,
          nuevos requerimientos de servicio o prácticas del mercado.
        </p>
        <p>
          Este Aviso de Privacidad y sus actualizaciones estarán disponibles a través de los
          canales oficiales de RED AVIATION COMPANY.
        </p>
      </section>

      <footer class="aviso__cierre">
        <p>Última actualización: marzo 2026</p>
        <p>© 2026 RED AVIATION COMPANY. Todos los derechos reservados.</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.aviso {
  width: min(980px, calc(100% - 32px));
  margin: 0 auto;
  padding: 132px 0 84px;
}

.aviso__hero,
.aviso__contenido,
.aviso__contenido section {
  display: grid;
  gap: 18px;
}

.aviso__hero {
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.aviso__etiqueta {
  margin: 0;
  color: var(--rojo-brillo);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
}

.aviso h1,
.aviso h2,
.aviso p,
.aviso li {
  margin: 0;
}

.aviso h1,
.aviso h2 {
  font-family: var(--fuente-titulo);
}

.aviso h1 {
  font-size: clamp(2.4rem, 5vw, 4.4rem);
}

.aviso__resumen,
.aviso__contenido p,
.aviso__contenido li,
.aviso__cierre {
  color: rgba(217, 217, 217, 0.82);
}

.aviso__contenido {
  padding-top: 32px;
}

.aviso__contenido section {
  padding: 22px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.aviso__contenido ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 10px;
}

.aviso__cierre {
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .aviso {
    width: min(100%, calc(100% - 20px));
    padding-top: 110px;
    padding-bottom: 64px;
  }
}
</style>
