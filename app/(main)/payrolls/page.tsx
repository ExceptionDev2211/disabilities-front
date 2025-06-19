'use client';
import React, { useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Calendar } from 'primereact/calendar';
import { FilterMatchMode } from 'primereact/api';
import { dummyData, Historial, Empleado } from './dummyData';
import { useRouter } from 'next/navigation';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import ManualPayrollForm from './components/ManualPayrollForm';
const estadoOptions = [
  { label: 'Todos', value: null },
  { label: 'Activo', value: 'Activo' },
  { label: 'Retirado', value: 'Retirado' },
  { label: 'Licencia', value: 'Licencia' }
];

const Payrolls = () => {
  const [filtroNIT, setFiltroNIT] = useState('');
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [selectedEmpleado, setSelectedEmployee] = useState<Empleado | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [manualUploadModal, setManualUploadModal] = useState(false);
  const toast = useRef<Toast>(null);
  const router = useRouter();
  const [filters, setFilters] = useState({
    global: { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
    estado: { value: null as string | null, matchMode: FilterMatchMode.EQUALS }
  });

  const formatDate = (str: string) => new Date(str + 'T00:00:00');

  const filtrarPorPeriodo = (h: Historial) => {
    if (!dateRange[0] || !dateRange[1]) return true;
    const fecha = formatDate(h.fechaCargue);
    return fecha >= dateRange[0]! && fecha <= dateRange[1]!;
  };

  const obtenerUltimoHistorial = (historial: Historial[]): Historial =>
    [...historial].sort((a, b) => b.fechaCargue.localeCompare(a.fechaCargue))[0];

  const data = dummyData
    .map((emp) => {
      const historialFiltrado = emp.historial.filter(filtrarPorPeriodo);
      if (historialFiltrado.length === 0) return null;
      const ultimo = obtenerUltimoHistorial(historialFiltrado);
      return { ...ultimo, nombre: emp.nombre, cedula: emp.cedula };
    })
    .filter((item) => item !== null)
    .filter((h) => !filtroNIT || h!.nit.includes(filtroNIT));

  const renderHeader = () => (
    <div className="flex flex-column sm:flex-row sm:align-items-center gap-3 p-4 flex-wrap">
      <Button
        type="button"
        icon="pi pi-filter-slash"
        label="Limpiar"
        outlined
        className="p-button-sm"
        onClick={() => {
          setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            estado: { value: null, matchMode: FilterMatchMode.EQUALS }
          });
          setGlobalFilterValue('');
          setFiltroNIT('');
          setDateRange([null, null]);
          setSelectedEmployee(null); // NUEVO
        }}
      />
      <InputText
        value={globalFilterValue}
        onChange={(e) => {
          const v = e.target.value;
          setGlobalFilterValue(v);
          setFilters((f) => ({ ...f, global: { ...f.global, value: v } }));
        }}
        placeholder="Buscar..."
        className="p-inputtext-sm"
      />
      <InputText
        placeholder="NIT..."
        value={filtroNIT}
        onChange={(e) => setFiltroNIT(e.target.value)}
        className="p-inputtext-sm"
      />
      <Dropdown
        value={filters.estado.value}
        options={estadoOptions}
        onChange={(e) => setFilters((f) => ({ ...f, estado: { ...f.estado, value: e.value } }))}
        placeholder="Estado"
        className="p-inputtext-sm"
        showClear
      />
      <Calendar
        value={dateRange}
        onChange={(e) => setDateRange(e.value as [Date | null, Date | null])}
        selectionMode="range"
        placeholder="Filtrar por período"
        readOnlyInput
        dateFormat="yy-mm-dd"
        className="p-inputtext-sm"
      />
      <Button label="Exportar Excel" icon="pi pi-file-excel" className="p-button-success p-button-sm" />
      <Button
        label="Cargar Nómina"
        icon="pi pi-upload"
        className="p-button-primary p-button-sm"
        onClick={() => setModalVisible(true)}
      />
      <Button
        label="Cargue manual"
        icon="pi pi-upload"
        className="p-button-primary p-button-sm"
        onClick={() => setManualUploadModal(true)}
      />
    </div>
  );

  const estadoBody = (row: any) => {
    const sev = row.estado === 'Activo' ? 'success' : row.estado === 'Retirado' ? 'danger' : 'info';
    return <Tag value={row.estado} severity={sev} />;
  };

  const dateTemplate = (row: any, field: 'fechaCargue' | 'fechaRetiro') => (
    <span>{row[field] || '-'}</span>
  );

  const salarioBody = (row: any) => (
    <div className="text-right">
      {new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(row.salario)}
    </div>
  );

  return (
    <div className="col-12">
      <div className="card">
        <h2 className="text-900 font-semibold text-xl mb-2">Consulta y cargue de Nómina</h2>

        <DataTable
          value={data}
          paginator rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          className="p-datatable-gridlines"
          dataKey="cedula"
          filterDisplay="menu"
          filters={filters}
          globalFilterFields={['nombre', 'cedula', 'centroCosto', 'eps', 'tipoContrato', 'cargo', 'nit']}
          header={renderHeader()}
          emptyMessage="No se encontraron registros"
          size="small"
          stripedRows
          removableSort
          showGridlines
          selectionMode="single"
          onRowSelect={(e) => {
            router.push(`/payrolls/employeeHistory?id=${e.data.cedula}`);

          }}
        >
          <Column field="nombre" header="Empleado" sortable />
          <Column field="cedula" header="N° documento" sortable />
          <Column field="estado" header="Estado" sortable body={estadoBody} />
          <Column field="fechaCargue" header="Fecha Cargue" sortable body={(row) => dateTemplate(row, 'fechaCargue')} />
          <Column field="fechaRetiro" header="Fecha Retiro" sortable body={(row) => dateTemplate(row, 'fechaRetiro')} />
          <Column field="centroCosto" header="Centro Costo" sortable />
          <Column field="eps" header="EPS" sortable />
          <Column field="salario" header="Salario" sortable body={salarioBody} />
          <Column field="tipoContrato" header="Tipo Contrato" sortable />
          <Column field="cargo" header="Cargo" sortable />
          <Column field="nit" header="NIT" sortable />
        </DataTable>
        <Toast ref={toast} />

        <Dialog
          header="Cargar Nómina"
          visible={modalVisible}
          style={{ width: '50vw' }}
          onHide={() => setModalVisible(false)}
          modal
        >
          <FileUpload
            name="nomina[]"
            customUpload
            multiple
            chooseLabel="Seleccionar"
            uploadLabel="Subir"
            cancelLabel="Cancelar"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            maxFileSize={5000000}
            uploadHandler={(e) => {
              toast.current?.show({
                severity: 'success',
                summary: 'Carga Exitosa',
                detail: `${e.files.length} archivo(s) cargado(s)`,
                life: 3000
              });
              setModalVisible(false);
            }}
            emptyTemplate={<p className="m-0">Arrastre y suelte los archivos aquí o haga clic para seleccionar.</p>}
          />
        </Dialog>
         <ManualPayrollForm 
        visible={manualUploadModal}
        onHide={() => setManualUploadModal(false)}
      />
      </div>
    </div>
  );
};

export default Payrolls;
