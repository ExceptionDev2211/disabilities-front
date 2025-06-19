'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { dummyData, Historial } from '../dummyData';
import { useSearchParams } from 'next/navigation';
const formatDate = (str: string) => new Date(str + 'T00:00:00');

const EmployeeHistory = () => {

    const searchParams = useSearchParams();
    const cedula = searchParams.get('id');
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [filteredHistory, setFilteredHistory] = useState<Historial[]>([]);

    const empleado = dummyData.find(emp => emp.cedula === cedula);

    useEffect(() => {
        if (!empleado) return;

        const history = empleado.historial.filter((h) => {
            if (!dateRange[0] || !dateRange[1]) return true;
            const fecha = formatDate(h.fechaCargue);
            return fecha >= dateRange[0]! && fecha <= dateRange[1]!;
        });

        setFilteredHistory(history.sort((a, b) => b.fechaCargue.localeCompare(a.fechaCargue)));
    }, [dateRange, cedula]);

    const estadoBody = (row: any) => {
        const sev = row.estado === 'Activo' ? 'success' : row.estado === 'Retirado' ? 'danger' : 'info';
        return <Tag value={row.estado} severity={sev} />;
    };

    const salarioBody = (row: any) => (
        <div className="text-right">
            {new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(row.salario)}
        </div>
    );

    const dateTemplate = (row: any, field: string) => (
        <span>{row[field] || '-'}</span>
    );

    if (!empleado) return <p>No se encontró el empleado con cédula {cedula}</p>;

    return (
        <div className="card">
            <h2 className="text-900 text-xl font-semibold mb-4">Historial de: {empleado.nombre}</h2>
            <Calendar
                value={dateRange}
                onChange={(e) => setDateRange(e.value as [Date | null, Date | null])}
                selectionMode="range"
                placeholder="Filtrar por período"
                readOnlyInput
                dateFormat="yy-mm-dd"
                className="mb-4"
            />

            <DataTable
                value={filteredHistory}
                className="p-datatable-sm p-datatable-striped"
                size="small"
                showGridlines
                emptyMessage="Sin historial"
            >
                <Column field="fechaCargue" header="Fecha Cargue" />
                <Column field="fechaRetiro" header="Fecha Retiro" body={(row) => dateTemplate(row, 'fechaRetiro')} />
                <Column field="estado" header="Estado" body={estadoBody} />
                <Column field="centroCosto" header="Centro Costo" />
                <Column field="eps" header="EPS" />
                <Column field="salario" header="Salario" body={salarioBody} />
                <Column field="tipoContrato" header="Tipo Contrato" />
                <Column field="cargo" header="Cargo" />
                <Column field="nit" header="NIT" />
            </DataTable>
        </div>
    );
};

export default EmployeeHistory;
