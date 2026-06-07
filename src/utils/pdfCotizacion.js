import jsPDF from 'jspdf'

const dinero = (valor) =>
  `$${Math.round(Number(valor || 0)).toLocaleString('en-US')} USD`

const cargarImagen = (ruta) =>
  new Promise((resolve) => {
    const imagen = new Image()
    imagen.src = ruta
    imagen.onload = () => resolve(imagen)
    imagen.onerror = () => resolve(null)
  })

export async function generarPdfCotizacion({
  contacto,
  aeronave,
  rutas,
  desgloses,
  totales,
  internacional,
}) {
  const pdf = new jsPDF({ compress: true })
  const logo = await cargarImagen('/LOGO.png')

  pdf.setFillColor(8, 8, 8)
  pdf.rect(0, 0, 210, 297, 'F')
  pdf.setFillColor(200, 16, 46)
  pdf.rect(0, 0, 210, 8, 'F')

  if (logo) {
    pdf.addImage(logo, 'PNG', 18, 14, 52, 30)
  }

  pdf.setTextColor(255, 255, 255)
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(22)
  pdf.text('Cotización ejecutiva de vuelo', 18, 56)
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor(190, 190, 190)
  pdf.text('Red Aviation Company · Estimación sujeta a confirmación operativa', 18, 64)

  pdf.setDrawColor(60, 60, 60)
  pdf.line(18, 71, 192, 71)

  const datos = [
    ['Cliente', contacto.nombre],
    ['Correo', contacto.correo],
    ['Teléfono', contacto.telefono],
    ['Tipo de vuelo', contacto.tipoVuelo],
    ['Operación', internacional ? 'Internacional' : 'Nacional'],
    ['Aeronave', aeronave?.name || '-'],
  ]

  let y = 82
  datos.forEach(([etiqueta, valor], indice) => {
    const x = indice % 2 === 0 ? 18 : 108
    if (indice % 2 === 0 && indice > 0) y += 17
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(7)
    pdf.setTextColor(255, 113, 135)
    pdf.text(etiqueta.toUpperCase(), x, y)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(9)
    pdf.setTextColor(245, 245, 245)
    pdf.text(String(valor || '-'), x, y + 6)
  })

  y += 25
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(13)
  pdf.setTextColor(255, 255, 255)
  pdf.text('Itinerario', 18, y)
  y += 9

  rutas.forEach((ruta, indice) => {
    if (y > 220) {
      pdf.addPage()
      pdf.setFillColor(8, 8, 8)
      pdf.rect(0, 0, 210, 297, 'F')
      y = 22
    }

    pdf.setFillColor(indice % 2 === 0 ? 18 : 14, 18, 18)
    pdf.roundedRect(18, y, 174, 23, 3, 3, 'F')
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(8)
    pdf.setTextColor(255, 113, 135)
    const tipo = ruta.positioning
      ? ruta.positioningType === 'return_to_base'
        ? 'REGRESO A BASE'
        : 'REPOSICIONAMIENTO'
      : `RUTA ${indice + 1}`
    pdf.text(tipo, 24, y + 7)
    pdf.setFontSize(11)
    pdf.setTextColor(255, 255, 255)
    pdf.text(`${ruta.fromAirport || '-'}  →  ${ruta.toAirport || '-'}`, 24, y + 15)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.setTextColor(190, 190, 190)
    pdf.text(
      `${Number(desgloses[indice]?.millas || 0).toFixed(0)} nm · ${Number(
        desgloses[indice]?.horas || 0,
      ).toFixed(1)} h · ${ruta.passengers || 0} pasajero(s)`,
      186,
      y + 15,
      { align: 'right' },
    )
    y += 28
  })

  y += 4
  const filas = [
    ['Costo de vuelo', totales.flight],
    ['Pernocta', totales.overnight],
    ['Gastos operativos', totales.expenses],
    ['Impuestos', totales.iva],
  ]

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(13)
  pdf.setTextColor(255, 255, 255)
  pdf.text('Desglose comercial', 18, y)
  y += 10

  filas.forEach(([etiqueta, valor]) => {
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(9)
    pdf.setTextColor(190, 190, 190)
    pdf.text(etiqueta, 22, y)
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor(255, 255, 255)
    pdf.text(dinero(valor), 188, y, { align: 'right' })
    y += 8
  })

  pdf.setFillColor(200, 16, 46)
  pdf.roundedRect(18, y + 2, 174, 22, 3, 3, 'F')
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(10)
  pdf.setTextColor(255, 255, 255)
  pdf.text('TOTAL ESTIMADO', 24, y + 15)
  pdf.setFontSize(17)
  pdf.text(dinero(totales.total), 186, y + 16, { align: 'right' })

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(7.5)
  pdf.setTextColor(150, 150, 150)
  pdf.text(
    'La disponibilidad, permisos, servicios aeroportuarios y tarifa final se confirman con un asesor.',
    18,
    285,
  )

  return pdf.output('blob')
}
