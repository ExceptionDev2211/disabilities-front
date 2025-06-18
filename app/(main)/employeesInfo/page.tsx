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

const EmployeesInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [roleDialog, setRoleDialog] = useState(false)
  const [assignDialog, setAssignDialog] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [newAnalyst, setNewAnalyst] = useState<{
    nombre: string
    email: string
    telefono: string
    rol: string | null
    empresas: string[]
  }>({
    nombre: '',
    email: '',
    telefono: '',
    rol: null,
    empresas: []
  })
  const toast = useRef<Toast>(null)
  const [employees, setEmployees] = useState([
    {
      id: 1,
      nombre: 'Ana García',
      email: 'ana.garcia@empresa.com',
      telefono: '+57 300 123 4567',
      rol: 'Analista Senior',
      empresas: ['Empresa A', 'Empresa B', 'Empresa C'],
      incapacidadesProcesadas: 45,
      promedioTiempo: 2.3,
      eficiencia: 92
    },
    {
      id: 2,
      nombre: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@empresa.com',
      telefono: '+57 301 234 5678',
      rol: 'Analista Junior',
      empresas: ['Empresa D', 'Empresa E'],
      incapacidadesProcesadas: 28,
      promedioTiempo: 3.1,
      eficiencia: 85
    },
    {
      id: 3,
      nombre: 'María López',
      email: 'maria.lopez@empresa.com',
      telefono: '+57 302 345 6789',
      rol: 'Supervisor',
      empresas: ['Empresa A', 'Empresa F', 'Empresa G', 'Empresa H'],
      incapacidadesProcesadas: 62,
      promedioTiempo: 1.8,
      eficiencia: 96
    }
  ])

  const roles = [
    { label: 'Analista Junior', value: 'Analista Junior' },
    { label: 'Analista Senior', value: 'Analista Senior' },
    { label: 'Supervisor', value: 'Supervisor' },
    { label: 'Administrador', value: 'Administrador' }
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

  const showError = (message: string            ) => {
    toast.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000
    })
  }

  type Employee = {
    id: number
    nombre: string
    email: string
    telefono: string
    rol: string
    empresas: string[]
    incapacidadesProcesadas: number
    promedioTiempo: number
    eficiencia: number
  }

  const openAssignDialog = (employee: Employee | null = null) => {
    if (employee) {
      setSelectedEmployee(employee)
      setNewAnalyst({
        nombre: employee.nombre,
        email: employee.email,
        telefono: employee.telefono,
        rol: employee.rol,
        empresas: employee.empresas
      })
      setSelectedCompanies(employee.empresas)
    } else {
      setSelectedEmployee(null)
      setNewAnalyst({
        nombre: '',
        email: '',
        telefono: '',
        rol: null,
        empresas: []
      })
      setSelectedCompanies([])
    }
    setAssignDialog(true)
  }

  const saveEmployee = () => {
    if (!newAnalyst.nombre || !newAnalyst.email || !newAnalyst.rol) {
      showError('Por favor complete todos los campos requeridos')
      return
    }

    const employeeData = {
      ...newAnalyst,
      rol: newAnalyst.rol ?? '', 
      empresas: selectedCompanies,
      incapacidadesProcesadas: selectedEmployee?.incapacidadesProcesadas || 0,
      promedioTiempo: selectedEmployee?.promedioTiempo || 0,
      eficiencia: selectedEmployee?.eficiencia || 0
    }

    if (selectedEmployee) {
      setEmployees(prev => prev.map(emp => 
        emp.id === selectedEmployee.id 
          ? { ...emp, ...employeeData, rol: employeeData.rol as string }
          : emp
      ))
      showSuccess('Empleado actualizado correctamente')
    } else {
      // Crear nuevo empleado
      const newId = Math.max(...employees.map(e => e.id)) + 1
      setEmployees(prev => [...prev, { ...employeeData, id: newId, rol: employeeData.rol as string }])
      showSuccess('Analista agregado correctamente')
    }

    setAssignDialog(false)
  }

  const deleteEmployee = (employee: Employee) => {
    setEmployees(prev => prev.filter(emp => emp.id !== employee.id))
    showSuccess('Empleado eliminado correctamente')
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

  const roleTemplate = (rowData: Employee) => {
    const getSeverity = (role: string) => {
      switch (role) {
        case 'Administrador': return 'danger'
        case 'Supervisor': return 'warning'
        case 'Analista Senior': return 'success'
        case 'Analista Junior': return 'info'
        default: return null
      }
    }

    return <Tag value={rowData.rol} severity={getSeverity(rowData.rol)} />
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
      if (efficiency >= 90) return 'success'
      if (efficiency >= 80) return 'warning'
      return 'danger'
    }

    return (
      <div className="flex align-items-center gap-2">
        <ProgressBar 
          value={rowData.eficiencia} 
          style={{ width: '100px', height: '8px' }}
          color={getColor(rowData.eficiencia) === 'success' ? '#10b981' : 
                 getColor(rowData.eficiencia) === 'warning' ? '#f59e0b' : '#ef4444'}
        />
        <span className="text-sm font-medium">{rowData.eficiencia}%</span>
      </div>
    )
  }

  return (
    <div className='card'>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Gestión de Empleados</h2>
        <p className="text-gray-600">Administra roles y controla el rendimiento de los analistas</p>
      </div>

      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        <TabPanel header="Asignar Roles" leftIcon="pi pi-users mr-2">
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3">Gestión de Roles de Usuario</h3>
              <p className="text-gray-600 mb-4">Asigna y modifica roles para los empleados del sistema</p>
              
              <div className="flex justify-content-between align-items-center mb-4">
                <div className="flex gap-2">
                  <InputText 
                    placeholder="Buscar empleado..." 
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
                emptyMessage="No se encontraron empleados"
              >
                <Column field="nombre" header="Empleado" sortable />
                <Column field="email" header="Email" sortable />
                <Column field="rol" header="Fecha inicio de asignación" body={[]} sortable />
                <Column field="rol" header="Fecha fin de asignación" body={[]} sortable />                
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
                            
                          </div>
                        </div>
                        
                        <Divider className="my-2" />
                        
                        <div className="flex flex-column gap-2">
                          <div className="flex justify-content-between">
                            <span className="text-600">Incapacidades:</span>
                            <span className="font-semibold">{employee.incapacidadesProcesadas}</span>
                          </div>
                          <div className="flex justify-content-between">
                            <span className="text-600">Tiempo promedio:</span>
                            <span className="font-semibold">{employee.promedioTiempo} días</span>
                          </div>
                          <div className="flex justify-content-between align-items-center">
                            <span className="text-600">Eficiencia:</span>
                            <div className="flex align-items-center gap-2">
                              <ProgressBar 
                                value={employee.eficiencia} 
                                style={{ width: '60px', height: '6px' }}
                                color={employee.eficiencia >= 90 ? '#10b981' : 
                                       employee.eficiencia >= 80 ? '#f59e0b' : '#ef4444'}
                              />
                              <span className="font-semibold text-sm">{employee.eficiencia}%</span>
                            </div>
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
        style={{ width: '600px' }}
        header={selectedEmployee ? 'Editar Analista' : 'Agregar Nuevo Analista'}
        modal
        onHide={() => setAssignDialog(false)}
      >
        <div className="flex flex-column gap-4 pt-4">
          <div className="flex flex-column gap-2">
            <label htmlFor="nombre" className="font-semibold">Nombre completo *</label>
            <InputText
              id="nombre"
              value={newAnalyst.nombre}
              onChange={(e) => setNewAnalyst({ ...newAnalyst, nombre: e.target.value })}
              placeholder="Ingrese el nombre completo"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="email" className="font-semibold">Email *</label>
            <InputText
              id="email"
              type="email"
              value={newAnalyst.email}
              onChange={(e) => setNewAnalyst({ ...newAnalyst, email: e.target.value })}
              placeholder="correo@empresa.com"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="telefono" className="font-semibold">Teléfono</label>
            <InputText
              id="telefono"
              value={newAnalyst.telefono}
              onChange={(e) => setNewAnalyst({ ...newAnalyst, telefono: e.target.value })}
              placeholder="+57 300 123 4567"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="rol" className="font-semibold">Rol *</label>
            <Dropdown
              id="rol"
              value={newAnalyst.rol}
              onChange={(e) => setNewAnalyst({ ...newAnalyst, rol: e.value })}
              options={roles}
              placeholder="Seleccione un rol"
            />
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
              Seleccione las empresas que este analista gestionará
            </small>
          </div>
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
          />
        </div>
      </Dialog>

      <Toast ref={toast} />
    </div>
  )
}

export default EmployeesInfo