'use client';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { FilterMatchMode } from 'primereact/api';

interface Incapacidad {
    id: string;
    nombresApellidos: string;
    tipoDocumento: string;
    numeroDocumento: string;
    fechaNacimiento: Date;
    epsAfiliada: string;
    correoElectronico: string;
    numeroTelefono?: string;
    fechaInicioIncapacidad: Date;
    fechaRadicacion: Date;
    estado: 'Pendiente' | 'En Revisión' | 'Pagado' | 'No Pagado';
    observaciones?: string;
    salarioEmpleado: number;
    tieneHistoriaClinica: boolean;
    tieneDocumentosAdicionales: boolean;
}

const ManagementFiling = () => {
    const [incapacidades, setIncapacidades] = useState<Incapacidad[]>([]);
    const [filters, setFilters] = useState({
        global: { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
        nombresApellidos: { value: null as string | null, matchMode: FilterMatchMode.STARTS_WITH },
        numeroDocumento: { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
        estado: { value: null as string | null, matchMode: FilterMatchMode.EQUALS },
        epsAfiliada: { value: null as string | null, matchMode: FilterMatchMode.CONTAINS }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const estadosOptions = [
        { label: 'Pendiente', value: 'Pendiente' },
        { label: 'En Revisión', value: 'En Revisión' },
        { label: 'Pagado', value: 'Pagado' },
        { label: 'No Pagado', value: 'No Pagado' }
    ];

    useEffect(() => {
        const datosEjemplo: Incapacidad[] = [
            {
                id: 'INC-20250515-000123',
                nombresApellidos: 'Juan Carlos Pérez García',
                tipoDocumento: 'CC',
                numeroDocumento: '12345678',
                fechaNacimiento: new Date('1985-03-15'),
                epsAfiliada: 'SURA EPS',
                correoElectronico: 'juan.perez@email.com',
                numeroTelefono: '3001234567',
                fechaInicioIncapacidad: new Date('2025-06-10'),
                fechaRadicacion: new Date('2025-06-15'),
                estado: 'En Revisión',
                observaciones: 'Fractura de muñeca izquierda causada por caída en escaleras',
                salarioEmpleado: 2500000,
                tieneHistoriaClinica: true,
                tieneDocumentosAdicionales: false
            },
            {
                id: 'INC-20250515-000124',
                nombresApellidos: 'María Fernanda López Silva',
                tipoDocumento: 'CC',
                numeroDocumento: '87654321',
                fechaNacimiento: new Date('1990-08-22'),
                epsAfiliada: 'COMPENSAR EPS',
                correoElectronico: 'maria.lopez@email.com',
                numeroTelefono: '3109876543',
                fechaInicioIncapacidad: new Date('2025-06-12'),
                fechaRadicacion: new Date('2025-06-16'),
                estado: 'Pagado',
                observaciones: 'Cirugía de apendicitis programada, requiere reposo de 15 días',
                salarioEmpleado: 3200000,
                tieneHistoriaClinica: true,
                tieneDocumentosAdicionales: true
            },
            {
                id: 'INC-20250515-000125',
                nombresApellidos: 'Carlos Alberto Rodríguez Herrera',
                tipoDocumento: 'CC',
                numeroDocumento: '11223344',
                fechaNacimiento: new Date('1978-12-05'),
                epsAfiliada: 'NUEVA EPS',
                correoElectronico: 'carlos.rodriguez@email.com',
                numeroTelefono: '3155551234',
                fechaInicioIncapacidad: new Date('2025-06-08'),
                fechaRadicacion: new Date('2025-06-14'),
                estado: 'Pendiente',
                observaciones: 'Lesión en espalda baja, pendiente evaluación médica especializada',
                salarioEmpleado: 1800000,
                tieneHistoriaClinica: false,
                tieneDocumentosAdicionales: false
            },
            {
                id: 'INC-20250515-000126',
                nombresApellidos: 'Ana Patricia Martínez Gómez',
                tipoDocumento: 'CC',
                numeroDocumento: '55667788',
                fechaNacimiento: new Date('1992-07-18'),
                epsAfiliada: 'SANITAS EPS',
                correoElectronico: 'ana.martinez@email.com',
                numeroTelefono: '3007778899',
                fechaInicioIncapacidad: new Date('2025-06-11'),
                fechaRadicacion: new Date('2025-06-17'),
                estado: 'No Pagado',
                observaciones: 'Documentación incompleta - falta certificado médico y exámenes de laboratorio',
                salarioEmpleado: 2800000,
                tieneHistoriaClinica: false,
                tieneDocumentosAdicionales: false
            }
        ];
        setIncapacidades(datosEjemplo);
    }, []);

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const clearFilter = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            nombresApellidos: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            numeroDocumento: { value: null, matchMode: FilterMatchMode.CONTAINS },
            estado: { value: null, matchMode: FilterMatchMode.EQUALS },
            epsAfiliada: { value: null, matchMode: FilterMatchMode.CONTAINS }
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-column sm:flex-row sm:align-items-center gap-3 p-4">
                <div className="flex align-items-center gap-2 flex-1">
                    <Button type="button" icon="pi pi-filter-slash" label="Limpiar" outlined onClick={clearFilter} className="p-button-sm" />
                </div>
                <div className="flex align-items-center gap-2">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar en todos los campos..." className="p-inputtext-sm" />
                    </span>
                </div>
            </div>
        );
    };

    const estadoBodyTemplate = (rowData: Incapacidad) => {
        const getSeverity = (estado: string) => {
            switch (estado) {
                case 'Pagado':
                    return 'success';
                case 'Pendiente':
                    return 'warning';
                case 'En Revisión':
                    return 'info';
                case 'No Pagado':
                    return 'danger';
                default:
                    return 'info';
            }
        };

        return <Tag value={rowData.estado} severity={getSeverity(rowData.estado)} />;
    };

    const contactoBodyTemplate = (rowData: Incapacidad) => {
        return (
            <div className="flex flex-column gap-1">
                <div className="flex align-items-center gap-2">
                    <i className="pi pi-envelope text-500" style={{ fontSize: '0.875rem' }}></i>
                    <span className="text-sm">{rowData.correoElectronico}</span>
                </div>
                {rowData.numeroTelefono && (
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-phone text-500" style={{ fontSize: '0.875rem' }}></i>
                        <span className="text-sm">{rowData.numeroTelefono}</span>
                    </div>
                )}
            </div>
        );
    };

    const salarioBodyTemplate = (rowData: Incapacidad) => {
        return (
            <div className="text-right">
                <span className="font-semibold">
                    {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0
                    }).format(rowData.salarioEmpleado)}
                </span>
            </div>
        );
    };

    const observacionesBodyTemplate = (rowData: Incapacidad) => {
        const maxLength = 50;
        const observaciones = rowData.observaciones || '';

        if (observaciones.length <= maxLength) {
            return <span className="text-sm">{observaciones || 'Sin observaciones'}</span>;
        }

        return (
            <div className="text-sm">
                <span title={observaciones}>{observaciones.substring(0, maxLength)}...</span>
            </div>
        );
    };

    const estadoFilterTemplate = (options: any) => {
        return <Dropdown value={options.value} options={estadosOptions} onChange={(e) => options.filterCallback(e.value, options.index)} placeholder="Seleccionar estado" className="p-column-filter" showClear />;
    };

    const fechaBodyTemplate = (rowData: Incapacidad, field: string) => {
        const fecha = field === 'fechaNacimiento' ? rowData.fechaNacimiento : field === 'fechaInicioIncapacidad' ? rowData.fechaInicioIncapacidad : rowData.fechaRadicacion;
        return fecha.toLocaleDateString('es-CO');
    };

    const documentosBodyTemplate = (rowData: Incapacidad) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-file-pdf" className="p-button-rounded p-button-text p-button-sm" tooltip="Incapacidad médica" tooltipOptions={{ position: 'top' }} />
                {rowData.tieneHistoriaClinica && <Button icon="pi pi-paperclip" className="p-button-rounded p-button-text p-button-sm p-button-success" tooltip="Historia clínica" tooltipOptions={{ position: 'top' }} />}
                {rowData.tieneDocumentosAdicionales && <Button icon="pi pi-paperclip" className="p-button-rounded p-button-text p-button-sm p-button-info" tooltip="Documentos adicionales" tooltipOptions={{ position: 'top' }} />}
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="col-12">
            <div className="card">
                <div className="mb-4">
                    <h2 className="text-900 font-semibold text-xl mb-2">Gestión de Incapacidades</h2>
                    <p className="text-600 line-height-3 m-0">Administre y revise las solicitudes de incapacidad médica</p>
                </div>
                <DataTable
                    value={incapacidades}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    className="p-datatable-gridlines"
                    dataKey="id"
                    filterDisplay="menu"
                    filters={filters}
                    globalFilterFields={['nombresApellidos', 'numeroDocumento', 'epsAfiliada', 'correoElectronico', 'numeroTelefono', 'observaciones', 'id']}
                    header={header}
                    emptyMessage="No se encontraron incapacidades."
                    size="small"
                    stripedRows
                    removableSort
                    showGridlines
                >
                    <Column field="id" header="N° Incapacidad" sortable filter filterPlaceholder="Buscar por ID" style={{ minWidth: '180px' }} headerStyle={{ width: '180px' }} />
                    <Column field="nombresApellidos" header="Nombres y Apellidos" sortable filter filterPlaceholder="Buscar por nombre" style={{ minWidth: '220px' }} />
                    <Column field="tipoDocumento" header="Tipo Doc." sortable filter filterPlaceholder="Tipo" style={{ minWidth: '100px' }} headerStyle={{ width: '100px' }} />
                    <Column field="numeroDocumento" header="N° Documento" sortable filter filterPlaceholder="Buscar documento" style={{ minWidth: '140px' }} />
                    <Column field="fechaNacimiento" header="Fecha Nac." sortable body={(rowData) => fechaBodyTemplate(rowData, 'fechaNacimiento')} style={{ minWidth: '120px' }} headerStyle={{ width: '120px' }} />
                    <Column header="Contacto" body={contactoBodyTemplate} filter filterField="correoElectronico" filterPlaceholder="Buscar contacto" style={{ minWidth: '220px' }} />
                    <Column field="epsAfiliada" header="EPS" sortable filter filterPlaceholder="Buscar EPS" style={{ minWidth: '160px' }} />
                    <Column field="salarioEmpleado" header="Salario" sortable body={salarioBodyTemplate} style={{ minWidth: '140px' }} headerStyle={{ width: '140px' }} />
                    <Column field="observaciones" header="Observaciones" filter filterPlaceholder="Buscar observaciones" body={observacionesBodyTemplate} style={{ minWidth: '200px' }} />
                    <Column field="fechaInicioIncapacidad" header="Inicio Incap." sortable body={(rowData) => fechaBodyTemplate(rowData, 'fechaInicioIncapacidad')} style={{ minWidth: '130px' }} headerStyle={{ width: '130px' }} />
                    <Column field="fechaRadicacion" header="Fecha Rad." sortable body={(rowData) => fechaBodyTemplate(rowData, 'fechaRadicacion')} style={{ minWidth: '120px' }} headerStyle={{ width: '120px' }} />
                    <Column field="estado" header="Estado" sortable filter filterElement={estadoFilterTemplate} body={estadoBodyTemplate} style={{ minWidth: '140px' }} headerStyle={{ width: '140px' }} />
                    <Column header="Documentos" body={documentosBodyTemplate} style={{ minWidth: '140px' }} headerStyle={{ width: '140px' }} />
                </DataTable>
            </div>
        </div>
    );
};

export default ManagementFiling;
