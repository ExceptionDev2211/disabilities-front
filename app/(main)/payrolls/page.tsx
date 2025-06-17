'use client'

import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { TabView, TabPanel } from 'primereact/tabview'

const dummyData = [
  {
    cedula: '123456789',
    nombre: 'Juan Pérez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-06-01',
        fechaRetiro: null,
        centroCosto: 'Ventas',
        eps: 'SURA',
        salario: 2500000,
        tipoContrato: 'Indefinido',
        cargo: 'Vendedor',
        nit: '800123456-1'
      },
      {
        estado: 'Activo',
        fechaCargue: '2024-05-01',
        fechaRetiro: null,
        centroCosto: 'Ventas',
        eps: 'SURA',
        salario: 2400000,
        tipoContrato: 'Indefinido',
        cargo: 'Vendedor',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '987654321',
    nombre: 'Ana Gómez',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2023-12-01',
        fechaRetiro: '2023-11-15',
        centroCosto: 'RRHH',
        eps: 'Sanitas',
        salario: 3200000,
        tipoContrato: 'Fijo',
        cargo: 'Analista',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1122334455',
    nombre: 'Carlos Ruiz',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-15',
        fechaRetiro: null,
        centroCosto: 'Producción',
        eps: 'Compensar',
        salario: 2900000,
        tipoContrato: 'Temporal',
        cargo: 'Operario',
        nit: '900987654-2'
      }
    ]
  }
]

const estados = [
  { label: 'Todos', value: null },
  { label: 'Activo', value: 'Activo' },
  { label: 'Retirado', value: 'Retirado' },
  { label: 'En licencia', value: 'Licencia' }
]

const centrosCosto = [
  { label: 'Todos', value: null },
  { label: 'Ventas', value: 'Ventas' },
  { label: 'RRHH', value: 'RRHH' },
  { label: 'Producción', value: 'Producción' },
  { label: 'Contabilidad', value: 'Contabilidad' }
]

const epsList = [
  { label: 'Todas', value: null },
  { label: 'SURA', value: 'SURA' },
  { label: 'Sanitas', value: 'Sanitas' },
  { label: 'Compensar', value: 'Compensar' },
  { label: 'Salud Total', value: 'Salud Total' }
]

const Payrolls = () => {
  const [filtroNIT, setFiltroNIT] = useState('')
  const [cedula, setCedula] = useState('')
  const [estado, setEstado] = useState(null)
  const [centroCosto, setCentroCosto] = useState(null)
  const [eps, setEps] = useState(null)

  const handleExport = () => {
    alert('Exportando a Excel...')
  }

  const filteredByCompany = filtroNIT
    ? dummyData
        .flatMap(e =>
          e.historial
            .filter(h =>
              h.nit === filtroNIT &&
              (!estado || h.estado === estado) &&
              (!centroCosto || h.centroCosto === centroCosto) &&
              (!eps || h.eps === eps)
            )
            .map(h => ({
              ...h,
              nombre: e.nombre,
              cedula: e.cedula
            }))
        )
    : []

  const empleadoSeleccionado = dummyData.find(e => e.cedula === cedula)
  const historialEmpleado = empleadoSeleccionado?.historial.map(h => ({
    ...h,
    nombre: empleadoSeleccionado.nombre,
    cedula: empleadoSeleccionado.cedula
  })) || []

  return (
    <div className="card">
      <h5>Consulta de Nómina</h5>
      <TabView>

        <TabPanel header="Por NIT de Compañía">
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-3">
              <label htmlFor="nit">NIT de la Compañía</label>
              <InputText id="nit" value={filtroNIT} onChange={(e) => setFiltroNIT(e.target.value)} />
            </div>
            <div className="field col-12 md:col-3">
              <label>Estado</label>
              <Dropdown value={estado} options={estados} onChange={(e) => setEstado(e.value)} placeholder="Seleccionar" />
            </div>
            <div className="field col-12 md:col-3">
              <label>Centro de Costo</label>
              <Dropdown value={centroCosto} options={centrosCosto} onChange={(e) => setCentroCosto(e.value)} placeholder="Seleccionar" />
            </div>
            <div className="field col-12 md:col-3">
              <label>EPS Afiliada</label>
              <Dropdown value={eps} options={epsList} onChange={(e) => setEps(e.value)} placeholder="Seleccionar" />
            </div>
          </div>

          <DataTable value={filteredByCompany} paginator rows={5} stripedRows emptyMessage="Ingrese un NIT para consultar nómina.">
            <Column field="nombre" header="Empleado" />
            <Column field="cedula" header="Cédula" />
            <Column field="estado" header="Estado" />
            <Column field="fechaCargue" header="Fecha de Cargue" />
            <Column field="fechaRetiro" header="Fecha de Retiro" />
            <Column field="centroCosto" header="Centro de Costo" />
            <Column field="eps" header="EPS" />
            <Column field="salario" header="Salario" />
            <Column field="tipoContrato" header="Tipo Contrato" />
            <Column field="cargo" header="Cargo" />
          </DataTable>

          <div className="col-12 mt-3">
            <Button label="Exportar a Excel" icon="pi pi-file-excel" onClick={handleExport} />
          </div>
        </TabPanel>

        {/* TAB POR CEDULA */}
        <TabPanel header="Por Cédula de Empleado">
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <label htmlFor="cedula">Número de Cédula</label>
              <InputText id="cedula" value={cedula} onChange={(e) => setCedula(e.target.value)} />
            </div>
          </div>

          {empleadoSeleccionado ? (
            <>
              <h5>Historial de Nómina: {empleadoSeleccionado.nombre}</h5>
              <DataTable value={historialEmpleado} paginator rows={5} stripedRows>
                <Column field="fechaCargue" header="Fecha de Cargue" />
                <Column field="estado" header="Estado" />
                <Column field="fechaRetiro" header="Fecha de Retiro" />
                <Column field="centroCosto" header="Centro de Costo" />
                <Column field="eps" header="EPS" />
                <Column field="salario" header="Salario" />
                <Column field="tipoContrato" header="Tipo de Contrato" />
                <Column field="cargo" header="Cargo" />
                <Column field="nit" header="Empresa (NIT)" />
              </DataTable>
            </>
          ) : (
            <p>No se encontró ningún registro con esa cédula.</p>
          )}
        </TabPanel>
      </TabView>
    </div>
  )
}

export default Payrolls
