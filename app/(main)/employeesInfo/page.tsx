'use client'
import React, { useState, useRef } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'
import { MultiSelect } from 'primereact/multiselect'
import { Tag } from 'primereact/tag'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
import { ProgressBar } from 'primereact/progressbar'
import { Calendar } from 'primereact/calendar'
import { Message } from 'primereact/message'

const EmployeesInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [assignDialog, setAssignDialog] = useState(false)
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [searchId, setSearchId] = useState('')
  const [employeeFound, setEmployeeFound] = useState<any>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  
  const [newAnalyst, setNewAnalyst] = useState<{
    numeroIdentificacion: string
    tipoDocumento: string
    nombre: string
    email: string
    telefono: string
    fechaNacimiento: Date | null
    fechaInicio: Date | null
    fechaFin: Date | null
    empresas: string[]
  }>({
    numeroIdentificacion: '',
    tipoDocumento: 'CC',
    nombre: '',
    email: '',
    telefono: '',
    fechaNacimiento: null,
    fechaInicio: null,
    fechaFin: null,
    empresas: []
  })
  
  const toast = useRef<Toast>(null)
  
  // Base de datos simulada de empleados existentes
  const [employeesDatabase] = useState([
    {
      numeroIdentificacion: '12345678',
      tipoDocumento: 'CC',
      nombre: 'Juan Pérez',
      email: 'juan.perez@empresa.com',
      telefono: '+57 300 111 2222',
      fechaNacimiento: new Date('1990-05-15')
    },
    {
      numeroIdentificacion: '87654321',
      tipoDocumento: 'CC', 
      nombre: 'María González',
      email: 'maria.gonzalez@empresa.com',
      telefono: '+57 301 333 4444',
      fechaNacimiento: new Date('1985-08-20')
    }
  ])
  
  const [employees, setEmployees] = useState([
    {
      id: 1,
      numeroIdentificacion: '12345678',
      tipoDocumento: 'CC',
      nombre: 'Ana García',
      email: 'ana.garcia@empresa.com',
      telefono: '+57 300 123 4567',
      fechaNacimiento: new Date('1988-03-10'),
      fechaInicio: new Date('2024-01-15'),
      fechaFin: new Date('2024-12-31'),
      empresas: ['Empresa A', 'Empresa B', 'Empresa C'],
      incapacidadesProcesadas: 45,
      promedioTiempo: 2.3,
      eficiencia: 92
    },
    {
      id: 2,
      numeroIdentificacion: '87654321',
      tipoDocumento: 'CC',
      nombre: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@empresa.com',
      telefono: '+57 301 234 5678',
      fechaNacimiento: new Date('1992-07-22'),
      fechaInicio: new Date('2024-02-01'),
      fechaFin: new Date('2024-11-30'),
      empresas: ['Empresa D', 'Empresa E'],
      incapacidadesProcesadas: 28,
      promedioTiempo: 3.1,
      eficiencia: 85
    }
  ])

  const tiposDocumento = [
    { label: 'Cédula de Ciudadanía', value: 'CC' },
    { label: 'Cédula de Extranjería', value: 'CE' },
    { label: 'Pasaporte', value: 'PA' },
    { label: 'Tarjeta de Identidad', value: 'TI' }
  ]

  const companies = [
    { label: 'Empresa A - Construcción', value: 'Empresa A' },
    { label: 'Empresa B - Manufactura', value: 'Empresa B' },
    { label: 'Empresa C - Servicios', value: 'Empresa C' },
    { label: 'Empresa D - Retail', value: 'Empresa D' },
    { label: 'Empresa E - Tecnología', value: 'Empresa E' },
    { label: 'Empresa F - Salud', value: 'Empresa F' },
    { label: 'Empresa G - Educación', value: 'Empresa G' },
    { label: 'Empresa H - Transporte', value: 'Empresa H' }
  ]

  const showSuccess = (message: string) => {
    toast.current?.show({
      severity: 'success',
      summary: 'Éxito',
      detail: message,
      life: 3000
    })
  }

  const showError = (message: string) => {
    toast.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000
    })
  }

  type Employee = {
    id: number
    numeroIdentificacion: string
    tipoDocumento: string
    nombre: string
    email: string
    telefono: string
    fechaNacimiento: Date
    fechaInicio: Date
    fechaFin: Date
    empresas: string[]
    incapacidadesProcesadas: number
    promedioTiempo: number
    eficiencia: number
  }

  const searchEmployeeById = () => {
    const found = employeesDatabase.find(emp => emp.numeroIdentificacion === searchId)
    if (found) {
      setEmployeeFound(found)
      setNewAnalyst({
        ...newAnalyst,
        numeroIdentificacion: found.numeroIdentificacion,
        tipoDocumento: found.tipoDocumento,
        nombre: found.nombre,
        email: found.email,
        telefono: found.telefono,
        fechaNacimiento: found.fechaNacimiento
      })
      setShowCreateForm(false)
    } else {
      setEmployeeFound(null)
      setShowCreateForm(true)
      setNewAnalyst({
        ...newAnalyst,
        numeroIdentificacion: searchId,
        tipoDocumento: 'CC',
        nombre: '',
        email: '',
        telefono: '',
        fechaNacimiento: null
      })
    }
  }

  const openAssignDialog = (employee: Employee | null = null) => {
    if (employee) {
      setSelectedEmployee(employee)
      setNewAnalyst({
        numeroIdentificacion: employee.numeroIdentificacion,
        tipoDocumento: employee.tipoDocumento,
        nombre: employee.nombre,
        email: employee.email,
        telefono: employee.telefono,
        fechaNacimiento: employee.fechaNacimiento,
        fechaInicio: employee.fechaInicio,
        fechaFin: employee.fechaFin,
        empresas: employee.empresas
      })
      setSelectedCompanies(employee.empresas)
      setEmployeeFound({ 
        numeroIdentificacion: employee.numeroIdentificacion,
        tipoDocumento: employee.tipoDocumento,
        nombre: employee.nombre,
        email: employee.email,
        telefono: employee.telefono,
        fechaNacimiento: employee.fechaNacimiento
      })
      setShowCreateForm(false)
    } else {
      setSelectedEmployee(null)
      setNewAnalyst({
        numeroIdentificacion: '',
        tipoDocumento: 'CC',
        nombre: '',
        email: '',
        telefono: '',
        fechaNacimiento: null,
        fechaInicio: null,
        fechaFin: null,
        empresas: []
      })
      setSelectedCompanies([])
      setEmployeeFound(null)
      setShowCreateForm(false)
      setSearchId('')
    }
    setAssignDialog(true)
  }

  const saveEmployee = () => {
    if (!newAnalyst.numeroIdentificacion || !newAnalyst.nombre || !newAnalyst.email || 
        !newAnalyst.fechaInicio || !newAnalyst.fechaFin) {
      showError('Por favor complete todos los campos requeridos')
      return
    }

    if (newAnalyst.fechaFin <= newAnalyst.fechaInicio) {
      showError('La fecha de fin debe ser posterior a la fecha de inicio')
      return
    }

    const employeeData = {
      ...newAnalyst,
      empresas: selectedCompanies,
      incapacidadesProcesadas: selectedEmployee?.incapacidadesProcesadas || 0,
      promedioTiempo: selectedEmployee?.promedioTiempo || 0,
      eficiencia: selectedEmployee?.eficiencia || 0
    }

    if (selectedEmployee) {
      setEmployees(prev => prev.map(emp => 
        emp.id === selectedEmployee.id 
          ? { 
              ...emp, 
              ...employeeData,
              fechaNacimiento: newAnalyst.fechaNacimiento ?? emp.fechaNacimiento,
              fechaInicio: newAnalyst.fechaInicio ?? emp.fechaInicio,
              fechaFin: newAnalyst.fechaFin ?? emp.fechaFin
            }
          : emp
      ))
      showSuccess('Analista actualizado correctamente')
    } else {
      const newId = Math.max(...employees.map(e => e.id)) + 1
      if (
        !employeeData.fechaNacimiento ||
        !employeeData.fechaInicio ||
        !employeeData.fechaFin
      ) {
        showError('Por favor complete todos los campos requeridos')
        return
      }
      setEmployees(prev => [
        ...prev,
        {
          ...employeeData,
          id: newId,
          fechaNacimiento: employeeData.fechaNacimiento as Date,
          fechaInicio: employeeData.fechaInicio as Date,
          fechaFin: employeeData.fechaFin as Date
        }
      ])
      showSuccess('Analista agregado correctamente')
    }

    setAssignDialog(false)
  }

  const deleteEmployee = (employee: Employee) => {
    setEmployees(prev => prev.filter(emp => emp.id !== employee.id))
    showSuccess('Analista eliminado correctamente')
  }

  const companiesTemplate = (rowData: Employee) => {
    return (
      <div className="flex flex-wrap gap-1">
        {rowData.empresas.slice(0, 3).map((empresa, index) => (
          <Tag key={index} value={empresa} severity="info" className="text-xs" />
        ))}
        {rowData.empresas.length > 3 && (
          <Tag value={`+${rowData.empresas.length - 3} más`} severity="info" className="text-xs" />
        )}
      </div>
    )
  }

  const dateTemplate = (rowData: Employee, field: string) => {
    const date = rowData[field as keyof Employee] as Date
    return date ? date.toLocaleDateString('es-CO') : '-'
  }

  const actionsTemplate = (rowData: Employee) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-button-text"
          onClick={() => openAssignDialog(rowData)}
          tooltip="Editar"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger p-button-text"
          onClick={() => deleteEmployee(rowData)}
          tooltip="Eliminar"
        />
      </div>
    )
  }

  const efficiencyTemplate = (rowData: Employee) => {
    const getColor = (efficiency: number) => {
      if (efficiency >= 90) return '#10b981'
      if (efficiency >= 80) return '#f59e0b'
      return '#ef4444'
    }

    return (
      <div className="flex align-items-center gap-2">
        <ProgressBar 
          value={rowData.eficiencia} 
          style={{ width: '100px', height: '8px' }}
          color={getColor(rowData.eficiencia)}
        />
        <span className="text-sm font-medium">{rowData.eficiencia}%</span>
      </div>
    )
  }

  return (
    <div className='card'>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Gestión de Analistas</h2>
        <p className="text-gray-600">Administra y controla el rendimiento de los analistas</p>
      </div>

      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        <TabPanel header="Gestión de Analistas" leftIcon="pi pi-users mr-2">
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3">Gestión de Analistas</h3>
              <p className="text-gray-600 mb-4">Asigna períodos y empresas a los analistas del sistema</p>
              
              <div className="flex justify-content-between align-items-center mb-4">
                <div className="flex gap-2">
                  <InputText 
                    placeholder="Buscar analista..." 
                    className="w-20rem"
                  />
                </div>
                <Button 
                  label='Añadir Analista' 
                  icon="pi pi-plus"
                  className="p-button-success"
                  onClick={() => openAssignDialog()}
                />
              </div>

              <DataTable 
                value={employees} 
                paginator 
                rows={10} 
                className="mt-4"
                emptyMessage="No se encontraron analistas"
              >
                <Column field="numeroIdentificacion" header="N° Identificación" sortable />
                <Column field="nombre" header="Analista" sortable />
                <Column field="email" header="Email" sortable />
                <Column field="fechaInicio" header="Fecha Inicio" body={(rowData) => dateTemplate(rowData, 'fechaInicio')} sortable />
                <Column field="fechaFin" header="Fecha Fin" body={(rowData) => dateTemplate(rowData, 'fechaFin')} sortable />                
                <Column field="empresas" header="Empresas Asignadas" body={companiesTemplate} />
                <Column header="Acciones" body={actionsTemplate} style={{ width: '120px' }} />
              </DataTable>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Control de Analistas" leftIcon="pi pi-chart-line mr-2">
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3">Panel de Control de Analistas</h3>
              <p className="text-gray-600 mb-4">Monitorea el rendimiento y actividad de los analistas</p>
              <div className="grid">
                {employees.map((employee) => (
                  <div key={employee.id} className="col-12 md:col-6 lg:col-4">
                    <Card className="mb-3">
                      <div className="flex flex-column gap-3">
                        <div className="flex justify-content-between align-items-start">
                          <div>
                            <h4 className="m-0 text-900">{employee.nombre}</h4>
                            <small className="text-600">ID: {employee.numeroIdentificacion}</small>
                          </div>
                        </div>
                        
                        <Divider className="my-2" />
                        
                        <div className="flex flex-column gap-2">
                          <div className="flex justify-content-between">
                            <span className="text-600">Período:</span>
                            <span className="font-semibold text-sm">
                              {employee.fechaInicio.toLocaleDateString('es-CO')} - {employee.fechaFin.toLocaleDateString('es-CO')}
                            </span>
                          </div>
                          <div className="flex justify-content-between">
                            <span className="text-600">Incapacidades tramitadas:</span>
                            <span className="font-semibold">{employee.incapacidadesProcesadas}</span>
                          </div>
                         {/*  <div className="flex justify-content-between">
                            <span className="text-600">Tiempo promedio:</span>
                            <span className="font-semibold">{employee.promedioTiempo} días</span>
                          </div> */}
                          <div className="flex justify-content-between align-items-center">
                            
                           {/*  <span className="text-600">Eficiencia:</span>
                            <div className="flex align-items-center gap-2">
                              <ProgressBar 
                                value={employee.eficiencia} 
                                style={{ width: '60px', height: '6px' }}
                                color={employee.eficiencia >= 90 ? '#10b981' : 
                                       employee.eficiencia >= 80 ? '#f59e0b' : '#ef4444'}
                              />
                              <span className="font-semibold text-sm">{employee.eficiencia}%</span>
                            </div> */}
                          </div>
                        </div>
                        
                        <div className="mt-2">
                          <small className="text-600">Empresas asignadas: {employee.empresas.length}</small>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {employee.empresas.slice(0, 2).map((empresa, index) => (
                              <Tag key={index} value={empresa} severity="info" className="text-xs" />
                            ))}
                            {employee.empresas.length > 2 && (
                              <Tag value={`+${employee.empresas.length - 2}`} severity="info" className="text-xs" />
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
      </TabView>

      <Dialog
        visible={assignDialog}
        style={{ width: '700px' }}
        header={selectedEmployee ? 'Editar Analista' : 'Agregar Nuevo Analista'}
        modal
        onHide={() => setAssignDialog(false)}
      >
        <div className="flex flex-column gap-4 pt-4">
          {!selectedEmployee && (
            <div className="flex flex-column gap-2">
              <label htmlFor="searchId" className="font-semibold">Buscar por N° de Identificación</label>
              <div className="flex gap-2">
                <InputText
                  id="searchId"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="Ingrese número de identificación"
                  className="flex-1"
                />
                <Button 
                  label="Buscar" 
                  icon="pi pi-search"
                  onClick={searchEmployeeById}
                  disabled={!searchId}
                />
              </div>
            </div>
          )}

          {employeeFound && (
            <Message severity="success" text={`Empleado encontrado: ${employeeFound.nombre}`} />
          )}

          {showCreateForm && (
            <Message severity="warn" text="Empleado no encontrado. Complete los datos para crear uno nuevo." />
          )}

          {(employeeFound || showCreateForm || selectedEmployee) && (
            <>
              <div className="grid">
                <div className="col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="tipoDocumento" className="font-semibold">Tipo de Documento *</label>
                    <Dropdown
                      id="tipoDocumento"
                      value={newAnalyst.tipoDocumento}
                      onChange={(e) => setNewAnalyst({ ...newAnalyst, tipoDocumento: e.value })}
                      options={tiposDocumento}
                      disabled={!!employeeFound && !selectedEmployee}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="numeroIdentificacion" className="font-semibold">N° de Documento *</label>
                    <InputText
                      id="numeroIdentificacion"
                      value={newAnalyst.numeroIdentificacion}
                      onChange={(e) => setNewAnalyst({ ...newAnalyst, numeroIdentificacion: e.target.value })}
                      disabled={!!employeeFound && !selectedEmployee}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-column gap-2">
                <label htmlFor="nombre" className="font-semibold">Nombre completo *</label>
                <InputText
                  id="nombre"
                  value={newAnalyst.nombre}
                  onChange={(e) => setNewAnalyst({ ...newAnalyst, nombre: e.target.value })}
                  placeholder="Ingrese el nombre completo"
                  disabled={!!employeeFound && !selectedEmployee}
                />
              </div>

              <div className="grid">
                <div className="col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="email" className="font-semibold">Email *</label>
                    <InputText
                      id="email"
                      type="email"
                      value={newAnalyst.email}
                      onChange={(e) => setNewAnalyst({ ...newAnalyst, email: e.target.value })}
                      placeholder="correo@empresa.com"
                      disabled={!!employeeFound && !selectedEmployee}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="telefono" className="font-semibold">Teléfono</label>
                    <InputText
                      id="telefono"
                      value={newAnalyst.telefono}
                      onChange={(e) => setNewAnalyst({ ...newAnalyst, telefono: e.target.value })}
                      placeholder="+57 300 123 4567"
                      disabled={!!employeeFound && !selectedEmployee}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-column gap-2">
                <label htmlFor="fechaNacimiento" className="font-semibold">Fecha de Nacimiento</label>
                <Calendar
                  id="fechaNacimiento"
                  value={newAnalyst.fechaNacimiento}
                  onChange={(e) => setNewAnalyst({ ...newAnalyst, fechaNacimiento: e.value as Date })}
                  dateFormat="dd/mm/yy"
                  placeholder="Seleccione la fecha"
                  disabled={!!employeeFound && !selectedEmployee}
                />
              </div>

              <Divider />

              <div className="grid">
                <div className="col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="fechaInicio" className="font-semibold">Fecha de Inicio *</label>
                    <Calendar
                      id="fechaInicio"
                      value={newAnalyst.fechaInicio}
                      onChange={(e) => setNewAnalyst({ ...newAnalyst, fechaInicio: e.value as Date })}
                      dateFormat="dd/mm/yy"
                      placeholder="Fecha de inicio del período"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="fechaFin" className="font-semibold">Fecha de Fin *</label>
                    <Calendar
                      id="fechaFin"
                      value={newAnalyst.fechaFin}
                      onChange={(e) => setNewAnalyst({ ...newAnalyst, fechaFin: e.value as Date })}
                      dateFormat="dd/mm/yy"
                      placeholder="Fecha de fin del período"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-column gap-2">
                <label htmlFor="empresas" className="font-semibold">Empresas asignadas</label>
                <MultiSelect
                  id="empresas"
                  value={selectedCompanies}
                  onChange={(e) => setSelectedCompanies(e.value)}
                  options={companies}
                  placeholder="Seleccione las empresas"
                  maxSelectedLabels={3}
                  className="w-full"
                />
                <small className="text-600">
                  Seleccione las empresas que este analista gestionará durante el período
                </small>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-content-end gap-2 pt-4">
          <Button
            label="Cancelar"
            icon="pi pi-times"
            className="p-button-text"
            onClick={() => setAssignDialog(false)}
          />
          <Button
            label={selectedEmployee ? 'Actualizar' : 'Guardar'}
            icon="pi pi-check"
            onClick={saveEmployee}
            disabled={!employeeFound && !showCreateForm && !selectedEmployee}
          />
        </div>
      </Dialog>

      <Toast ref={toast} />
    </div>
  )
}

export default EmployeesInfo