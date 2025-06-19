'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Tag } from 'primereact/tag';
import { InputNumber } from 'primereact/inputnumber';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { SelectButton } from 'primereact/selectbutton';

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
    estado: 'En proceso de pago' | 'Revisión AlfaPlus' | 'Pagada' | 'Devolución' | 'En trámite' | 'No cobrable 1/2' | 'Pendiente' | 'No Pagado' | 'Gestionada' | 'Negada en gestión' | 'Negada no recuperable';
    observaciones?: string;
    salarioEmpleado: number;
    tieneHistoriaClinica: boolean;
    tieneDocumentosAdicionales: boolean;
    tipoIncapacidad?: 'licencia-paternidad' | 'enfermedad-general' | 'accidente-trabajo';
    diasIncapacidad?: number;
    fechaFinIncapacidad: Date;
    numeroRadicadoERP: string;
    codigoDiagnostico?: string;
    nombreDiagnostico?: string;
    diasAcumulados?: number;
    entidadPrestadora?: 'EPS' | 'ARL' | 'AFP';
    valorPagadoPorEmpresa: number;
    valorEsperadoRecaudo?: number;
    fechaPagoIncapacidadTrabajador?: Date;
    valorPagadoPorEPS?: number;
    fechaPagoIncapacidadEPS?: Date;
    tipoGestion?: '1' | '2' | '3';
    fechaGestion?: Date;
    causalRechazo?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
    semanaTermino?: 37 | 38 | 39 | 40;
    edadGestacional?: 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36;
    diasCotizados?: number;
    diasGestacion?: number;
    factor?: number;
    totalDiasAOtorgarCalendario?: number;
    totalDiasAOtorgarHabiles?: number;
    diasProporcionales?: number;
    valorLicencia?: number;
    fechaAccidente?: Date;
    calificacionARL?: 'No calificado' | 'Calificado';
    codigoARL?: string;
}

const getSeverity = (estado: string): 'success' | 'info' | 'warning' | 'danger' | null | undefined => {
    switch (estado) {
        case 'Pagada':
            return 'success';
        case 'En proceso de pago':
            return 'info';
        case 'Revisión AlfaPlus':
            return 'info';
        case 'En trámite':
            return 'info';
        case 'Devolución':
            return 'warning';
        case 'Negada en gestión':
            return 'warning';
        case 'Negada no recuperable':
            return 'danger';
        case 'Gestionada':
            return 'info';
        case 'No cobrable 1/2':
            return 'warning';
        default:
            return null;
    }
};

interface CommonIncapacityFieldsProps {
    formData: Incapacidad;
    isEditing: boolean;
    handleInputChange: (field: string, value: any) => void;
}

const CommonIncapacityFields = ({ formData, isEditing, handleInputChange }: CommonIncapacityFieldsProps) => (
    <>
        <div className="col-12 md:col-6">
            <label htmlFor="diasIncapacidad" className="block text-900 font-medium mb-2">
                Días de Incapacidad
            </label>
            <InputNumber id="diasIncapacidad" value={formData.diasIncapacidad || 0} onValueChange={(e) => handleInputChange('diasIncapacidad', e.value)} disabled={!isEditing} className="w-full" placeholder="Cantidad de días" min={0} />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="fechaFinIncapacidad" className="block text-900 font-medium mb-2">
                Fecha de finalización
            </label>
            <Calendar id="fechaFinIncapacidad" value={formData.fechaFinIncapacidad} onChange={(e) => handleInputChange('fechaFinIncapacidad', e.value)} disabled={!isEditing} dateFormat="dd/mm/yy" className="w-full" showIcon />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="numeroRadicadoERP" className="block text-900 font-medium mb-2">
                N° Radicado ERP
            </label>
            <InputText id="numeroRadicadoERP" value={formData.numeroRadicadoERP} onChange={(e) => handleInputChange('numeroRadicadoERP', e.target.value)} disabled={!isEditing} className="w-full" />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="valorPagadoPorEmpresa" className="block text-900 font-medium mb-2">
                Valor Pagado por la Empresa
            </label>
            <InputNumber
                id="valorPagadoPorEmpresa"
                value={formData.valorPagadoPorEmpresa}
                onValueChange={(e) => handleInputChange('valorPagadoPorEmpresa', e.value)}
                disabled={!isEditing}
                mode="currency"
                currency="COP"
                locale="es-CO"
                className="w-full"
                minFractionDigits={0}
                maxFractionDigits={0}
            />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="valorPagadoPorEPS" className="block text-900 font-medium mb-2">
                Valor Pagado por la EPS
            </label>
            <InputNumber
                id="valorPagadoPorEPS"
                value={formData.valorPagadoPorEPS}
                onValueChange={(e) => handleInputChange('valorPagadoPorEPS', e.value)}
                disabled={!isEditing}
                mode="currency"
                currency="COP"
                locale="es-CO"
                className="w-full"
                minFractionDigits={0}
                maxFractionDigits={0}
            />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="fechaPagoIncapacidadEPS" className="block text-900 font-medium mb-2">
                Fecha de pago de la EPS
            </label>
            <Calendar id="fechaPagoIncapacidadEPS" value={formData.fechaPagoIncapacidadEPS} onChange={(e) => handleInputChange('fechaPagoIncapacidadEPS', e.value)} disabled={!isEditing} dateFormat="dd/mm/yy" className="w-full" showIcon />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="tipoGestion" className="block text-900 font-medium mb-2">
                Tipo de Gestión
            </label>
            <Dropdown
                id="tipoGestion"
                value={formData.tipoGestion}
                options={[
                    { label: '1 - Radicación inicial', value: '1' },
                    { label: '2 - Revisión y seguimiento', value: '2' },
                    { label: '3 - Reconsideración o recurso', value: '3' }
                ]}
                onChange={(e) => handleInputChange('tipoGestion', e.value)}
                disabled={!isEditing}
                className="w-full"
            />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="fechaGestion" className="block text-900 font-medium mb-2">
                Fecha de gestión
            </label>
            <Calendar id="fechaGestion" value={formData.fechaGestion} onChange={(e) => handleInputChange('fechaGestion', e.value)} disabled={!isEditing} dateFormat="dd/mm/yy" className="w-full" showIcon />
        </div>
        <div className="col-12 md:col-12">
            <label htmlFor="causalRechazo" className="block text-900 font-medium mb-2">
                Causal de Rechazo
            </label>
            <Dropdown
                id="causalRechazo"
                value={formData.causalRechazo}
                options={[
                    { label: '1 - Documentación incompleta o ilegible', value: '1' },
                    { label: '2 - Incapacidad no expedida por médico autorizado', value: '2' },
                    { label: '3 - Fecha de expedición posterior al periodo de incapacidad', value: '3' },
                    { label: '4 - Diagnóstico no corresponde con el tipo de incapacidad', value: '4' },
                    { label: '5 - Incapacidad no reportada en los tiempos establecidos', value: '5' },
                    { label: '6 - Beneficiario no afiliado o con afiliación suspendida', value: '6' },
                    { label: '7 - Periodo de incapacidad ya cubierto o duplicado', value: '7' },
                    { label: '8 - Incapacidad por enfermedad laboral sin calificación', value: '8' },
                    { label: '9 - Formato de incapacidad no válido o alterado', value: '9' }
                ]}
                onChange={(e) => handleInputChange('causalRechazo', e.value)}
                disabled={!isEditing}
                className="w-full"
            />
        </div>
        <div className="col-12 md:col-12">
            <label htmlFor="observaciones" className="block text-900 font-medium mb-2">
                Observaciones
            </label>
            <InputTextarea id="observaciones" value={formData.observaciones || ''} onChange={(e) => handleInputChange('observaciones', e.target.value)} disabled={!isEditing} className="w-full" rows={4} />
        </div>
    </>
);

interface MedicalFieldsProps {
    formData: Incapacidad;
    isEditing: boolean;
    handleInputChange: (field: string, value: any) => void;
}

const MedicalFields = ({ formData, isEditing, handleInputChange }: MedicalFieldsProps) => (
    <>
        <div className="col-12 md:col-6">
            <label htmlFor="codigoDiagnostico" className="block text-900 font-medium mb-2">
                Código Diagnóstico
            </label>
            <InputText id="codigoDiagnostico" value={formData.codigoDiagnostico || ''} onChange={(e) => handleInputChange('codigoDiagnostico', e.target.value)} disabled={!isEditing} className="w-full" />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="nombreDiagnostico" className="block text-900 font-medium mb-2">
                Nombre Diagnóstico
            </label>
            <InputText id="nombreDiagnostico" value={formData.nombreDiagnostico || ''} onChange={(e) => handleInputChange('nombreDiagnostico', e.target.value)} disabled={!isEditing} className="w-full" />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="diasAcumulados" className="block text-900 font-medium mb-2">
                Días Acumulados
            </label>
            <InputNumber id="diasAcumulados" value={formData.diasAcumulados || 0} onValueChange={(e) => handleInputChange('diasAcumulados', e.value)} disabled={!isEditing} className="w-full" min={0} />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="entidadPrestadora" className="block text-900 font-medium mb-2">
                Entidad Prestadora
            </label>
            <Dropdown
                id="entidadPrestadora"
                value={formData.entidadPrestadora}
                options={[
                    { label: 'EPS', value: 'EPS' },
                    { label: 'ARL', value: 'ARL' },
                    { label: 'AFP', value: 'AFP' }
                ]}
                onChange={(e) => handleInputChange('entidadPrestadora', e.value)}
                disabled={!isEditing}
                className="w-full"
            />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="fechaPagoIncapacidadTrabajador" className="block text-900 font-medium mb-2">
                Fecha de pago de incapacidad al trabajador
            </label>
            <Calendar
                id="fechaPagoIncapacidadTrabajador"
                value={formData.fechaPagoIncapacidadTrabajador}
                onChange={(e) => handleInputChange('fechaPagoIncapacidadTrabajador', e.value)}
                disabled={!isEditing}
                dateFormat="dd/mm/yy"
                className="w-full"
                showIcon
            />
        </div>
        <div className="col-12 md:col-6">
            <label htmlFor="valorEsperadoRecaudo" className="block text-900 font-medium mb-2">
                Valor Esperado de Recaudo
            </label>
            <InputNumber
                id="valorEsperadoRecaudo"
                value={formData.valorEsperadoRecaudo}
                onValueChange={(e) => handleInputChange('valorEsperadoRecaudo', e.value)}
                disabled={!isEditing}
                mode="currency"
                currency="COP"
                locale="es-CO"
                className="w-full"
                minFractionDigits={0}
                maxFractionDigits={0}
            />
        </div>
    </>
);

export default function IncapacidadDetallePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const toast = useRef<Toast>(null);
    const incapacidadId = searchParams.get('id');

    const [incapacidad, setIncapacidad] = useState<Incapacidad | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Incapacidad | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        if (incapacidadId) {
            setTimeout(() => {
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
                        estado: 'Pagada',
                        observaciones: 'Fractura de muñeca izquierda',
                        salarioEmpleado: 2500000,
                        tieneHistoriaClinica: true,
                        tieneDocumentosAdicionales: false,
                        tipoIncapacidad: 'licencia-paternidad',
                        fechaFinIncapacidad: new Date('2025-06-24'),
                        numeroRadicadoERP: 'ERP-20250615-001',
                        diasIncapacidad: 14,
                        valorPagadoPorEmpresa: 1500000,
                        codigoDiagnostico: 'S52.5'
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
                        estado: 'Revisión AlfaPlus',
                        observaciones: 'Cirugía de apendicitis programada, requiere reposo de 15 días',
                        salarioEmpleado: 3200000,
                        tieneHistoriaClinica: true,
                        tieneDocumentosAdicionales: true,
                        tipoIncapacidad: 'licencia-paternidad',
                        fechaFinIncapacidad: new Date('2025-06-27'),
                        numeroRadicadoERP: 'ERP-20250616-002',
                        diasIncapacidad: 15,
                        valorPagadoPorEmpresa: 200000,
                        codigoDiagnostico: 'K35.2'
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
                        estado: 'En proceso de pago',
                        observaciones: 'Lesión en espalda baja, pendiente evaluación médica especializada',
                        salarioEmpleado: 1800000,
                        tieneHistoriaClinica: false,
                        tieneDocumentosAdicionales: false,
                        tipoIncapacidad: 'accidente-trabajo',
                        fechaFinIncapacidad: new Date('2025-06-22'),
                        numeroRadicadoERP: 'ERP-20250614-003',
                        diasIncapacidad: 14,
                        valorPagadoPorEmpresa: 120000,
                        codigoDiagnostico: 'M54.5',
                        nombreDiagnostico: 'Lumbalgia',
                        diasAcumulados: 5,
                        entidadPrestadora: 'EPS'
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
                        estado: 'Devolución',
                        observaciones: 'Documentación incompleta - falta certificado médico y exámenes de laboratorio',
                        salarioEmpleado: 2800000,
                        tieneHistoriaClinica: false,
                        tieneDocumentosAdicionales: false,
                        tipoIncapacidad: 'enfermedad-general',
                        fechaFinIncapacidad: new Date('2025-06-25'),
                        numeroRadicadoERP: 'ERP-20250617-004',
                        diasIncapacidad: 14,
                        valorPagadoPorEmpresa: 0,
                        codigoDiagnostico: 'J20.9',
                        nombreDiagnostico: 'Bronquitis aguda'
                    }
                ];

                const incapacidadEncontrada = datosEjemplo.find((inc) => inc.id === incapacidadId);
                if (incapacidadEncontrada) {
                    setIncapacidad(incapacidadEncontrada);
                    setFormData(incapacidadEncontrada);
                }
                setLoading(false);
            }, 500);
        }
    }, [incapacidadId]);

    const handleInputChange = (field: string, value: any) => {
        setFormData((prev) => (prev ? { ...prev, [field]: value } : null));
    };

    const handleSave = async () => {
        if (!formData) return;
        try {
            setIncapacidad(formData);
            setIsEditing(false);
            toast.current?.show({
                severity: 'success',
                summary: 'Éxito',
                detail: 'Cambios guardados',
                life: 3000
            });
        } catch (error) {
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Error al guardar',
                life: 3000
            });
        }
    };

    const handleCancel = () => {
        setFormData(incapacidad);
        setIsEditing(false);
    };

    if (loading) {
        return (
            <div className="col-12">
                <div className="flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
                </div>
            </div>
        );
    }

    if (!incapacidad || !formData) {
        return (
            <div className="col-12">
                <Card title="Error" className="mb-4">
                    <p>No se encontró la incapacidad</p>
                    <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
                </Card>
            </div>
        );
    }

    return (
        <div className="col-12">
            <Toast ref={toast} />
            <div className="flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="text-900 font-semibold text-xl mb-2">Detalle de Incapacidad</h2>
                    <p className="text-600 line-height-3 m-0">
                        {formData.id} - {formData.nombresApellidos}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button label="Volver" icon="pi pi-arrow-left" outlined onClick={() => router.back()} />
                    {!isEditing ? (
                        <Button label="Editar" icon="pi pi-pencil" onClick={() => setIsEditing(true)} />
                    ) : (
                        <>
                            <Button label="Cancelar" icon="pi pi-times" severity="secondary" outlined onClick={handleCancel} />
                            <Button label="Guardar" icon="pi pi-check" onClick={handleSave} />
                        </>
                    )}
                </div>
            </div>

            <div className="grid">
                <div className="col-12 lg:col-8">
                    <Card title="Información del Empleado" className="mb-4">
                        <div className="grid">
                            <div className="col-12 md:col-6">
                                <label htmlFor="nombresApellidos" className="block text-900 font-medium mb-2">
                                    Nombres y Apellidos
                                </label>
                                <InputText id="nombresApellidos" value={formData.nombresApellidos} onChange={(e) => handleInputChange('nombresApellidos', e.target.value)} disabled={!isEditing} className="w-full" />
                            </div>
                            <div className="col-12 md:col-3">
                                <label htmlFor="tipoDocumento" className="block text-900 font-medium mb-2">
                                    {isMobile ? 'T. Documento' : 'Tipo de Documento'}
                                </label>
                                <Dropdown
                                    id="tipoDocumento"
                                    value={formData.tipoDocumento}
                                    options={[
                                        { label: 'Cédula de Ciudadanía', value: 'CC' },
                                        { label: 'Cédula de Extranjería', value: 'CE' },
                                        { label: 'Certificado de Nacido Vivo', value: 'CNV' },
                                        { label: 'NIT', value: 'NIT' },
                                        { label: 'Pasaporte', value: 'PP' },
                                        { label: 'Pasaporte de la ONU', value: 'PNU' },
                                        { label: 'Permiso Especial de Permanencia', value: 'PEP' },
                                        { label: 'Permiso Protección Temporal', value: 'PPT' },
                                        { label: 'Registro Civil', value: 'RC' },
                                        { label: 'Salvoconducto de Permanencia', value: 'SP' },
                                        { label: 'Tarjeta de Identidad', value: 'TI' }
                                    ]}
                                    onChange={(e) => handleInputChange('tipoDocumento', e.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                />
                            </div>
                            <div className="col-12 md:col-3">
                                <label htmlFor="numeroDocumento" className="block text-900 font-medium mb-2">
                                    {isMobile ? 'N° Documento' : 'Número de Documento'}
                                </label>
                                <InputText id="numeroDocumento" value={formData.numeroDocumento} onChange={(e) => handleInputChange('numeroDocumento', e.target.value)} disabled={!isEditing} className="w-full" />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="fechaNacimiento" className="block text-900 font-medium mb-2">
                                    Fecha Nacimiento
                                </label>
                                <Calendar id="fechaNacimiento" value={formData.fechaNacimiento} onChange={(e) => handleInputChange('fechaNacimiento', e.value)} disabled={!isEditing} dateFormat="dd/mm/yy" className="w-full" showIcon />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="epsAfiliada" className="block text-900 font-medium mb-2">
                                    EPS Afiliada
                                </label>
                                <Dropdown
                                    id="epsAfiliada"
                                    value={formData.epsAfiliada}
                                    options={[
                                        { label: 'SURA EPS', value: 'SURA EPS' },
                                        { label: 'COMPENSAR EPS', value: 'COMPENSAR EPS' },
                                        { label: 'NUEVA EPS', value: 'NUEVA EPS' },
                                        { label: 'SANITAS EPS', value: 'SANITAS EPS' },
                                        { label: 'FAMISANAR EPS', value: 'FAMISANAR EPS' },
                                        { label: 'MEDIMÁS EPS', value: 'MEDIMÁS EPS' }
                                    ]}
                                    onChange={(e) => handleInputChange('epsAfiliada', e.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="salarioEmpleado" className="block text-900 font-medium mb-2">
                                    Salario
                                </label>
                                <InputNumber
                                    id="salarioEmpleado"
                                    value={formData.salarioEmpleado}
                                    onValueChange={(e) => handleInputChange('salarioEmpleado', e.value)}
                                    disabled={!isEditing}
                                    mode="currency"
                                    currency="COP"
                                    locale="es-CO"
                                    className="w-full"
                                    minFractionDigits={0}
                                    maxFractionDigits={0}
                                />
                            </div>
                            <div className="col-12 md:col-6">
                                <label htmlFor="correoElectronico" className="block text-900 font-medium mb-2">
                                    Correo Electrónico
                                </label>
                                <InputText id="correoElectronico" value={formData.correoElectronico} onChange={(e) => handleInputChange('correoElectronico', e.target.value)} disabled={!isEditing} className="w-full" type="email" />
                            </div>
                            <div className="col-12 md:col-6">
                                <label htmlFor="numeroTelefono" className="block text-900 font-medium mb-2">
                                    Teléfono
                                </label>
                                <InputText id="numeroTelefono" value={formData.numeroTelefono || ''} onChange={(e) => handleInputChange('numeroTelefono', e.target.value)} disabled={!isEditing} className="w-full" />
                            </div>
                        </div>
                    </Card>

                    <Card title="Información de la Incapacidad" className="mb-4">
                        <div className="grid">
                            <div className="col-12 md:col-4">
                                <label htmlFor="fechaInicioIncapacidad" className="block text-900 font-medium mb-2">
                                    Fecha Inicio
                                </label>
                                <Calendar
                                    id="fechaInicioIncapacidad"
                                    value={formData.fechaInicioIncapacidad}
                                    onChange={(e) => handleInputChange('fechaInicioIncapacidad', e.value)}
                                    disabled={!isEditing}
                                    dateFormat="dd/mm/yy"
                                    className="w-full"
                                    showIcon
                                />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="fechaRadicacion" className="block text-900 font-medium mb-2">
                                    Fecha Radicación
                                </label>
                                <Calendar id="fechaRadicacion" value={formData.fechaRadicacion} onChange={(e) => handleInputChange('fechaRadicacion', e.value)} disabled={!isEditing} dateFormat="dd/mm/yy" className="w-full" showIcon />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="estado" className="block text-900 font-medium mb-2">
                                    Estado
                                </label>
                                <Dropdown
                                    id="estado"
                                    value={formData.estado}
                                    options={[
                                        { label: 'En trámite', value: 'En trámite' },
                                        { label: 'Pagada', value: 'Pagada' },
                                        { label: 'En proceso de pago', value: 'En proceso de pago' },
                                        { label: 'Negada en gestión', value: 'Negada en gestión' },
                                        { label: 'Negada no recuperable', value: 'Negada no recuperable' },
                                        { label: 'Devolución', value: 'Devolución' },
                                        { label: 'No cobrable 1/2', value: 'No cobrable 1/2' },
                                        { label: 'Gestionada', value: 'Gestionada' },
                                        { label: 'Revisión AlfaPlus', value: 'Revisión AlfaPlus' }
                                    ]}
                                    onChange={(e) => handleInputChange('estado', e.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="observaciones" className="block text-900 font-medium mb-2">
                                    Observaciones
                                </label>
                                <InputTextarea id="observaciones" value={formData.observaciones || ''} onChange={(e) => handleInputChange('observaciones', e.target.value)} disabled={!isEditing} className="w-full" rows={4} />
                            </div>
                            <div className="col-12 md:col-6">
                                <Checkbox id="tieneHistoriaClinica" checked={formData.tieneHistoriaClinica} onChange={(e) => handleInputChange('tieneHistoriaClinica', e.checked)} disabled={!isEditing} className="mr-2" />
                                <label htmlFor="tieneHistoriaClinica" className="text-900 font-medium">
                                    Tiene Historia Clínica
                                </label>
                            </div>
                            <div className="col-12 md:col-6">
                                <Checkbox id="tieneDocumentosAdicionales" checked={formData.tieneDocumentosAdicionales} onChange={(e) => handleInputChange('tieneDocumentosAdicionales', e.checked)} disabled={!isEditing} className="mr-2" />
                                <label htmlFor="tieneDocumentosAdicionales" className="text-900 font-medium">
                                    Tiene Documentos Adicionales
                                </label>
                            </div>
                        </div>
                    </Card>

                    <Card title="Información Adicional" className="mb-4">
                        <div className="grid">
                            <div className="col-12">
                                <label className="block text-900 font-medium mb-3">Tipo de Incapacidad</label>
                                <div className="flex flex-column gap-3">
                                    <div className="flex align-items-center">
                                        <RadioButton
                                            inputId="licencia-paternidad"
                                            name="tipoIncapacidad"
                                            value="licencia-paternidad"
                                            onChange={(e) => handleInputChange('tipoIncapacidad', e.value)}
                                            checked={formData.tipoIncapacidad === 'licencia-paternidad'}
                                            disabled={!isEditing}
                                        />
                                        <label htmlFor="licencia-paternidad" className="ml-2 text-900">
                                            Licencia de Paternidad / Maternidad
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton
                                            inputId="enfermedad-general"
                                            name="tipoIncapacidad"
                                            value="enfermedad-general"
                                            onChange={(e) => handleInputChange('tipoIncapacidad', e.value)}
                                            checked={formData.tipoIncapacidad === 'enfermedad-general'}
                                            disabled={!isEditing}
                                        />
                                        <label htmlFor="enfermedad-general" className="ml-2 text-900">
                                            Enfermedad General / Accidente de Tránsito
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton
                                            inputId="accidente-trabajo"
                                            name="tipoIncapacidad"
                                            value="accidente-trabajo"
                                            onChange={(e) => handleInputChange('tipoIncapacidad', e.value)}
                                            checked={formData.tipoIncapacidad === 'accidente-trabajo'}
                                            disabled={!isEditing}
                                        />
                                        <label htmlFor="accidente-trabajo" className="ml-2 text-900">
                                            Accidente de Trabajo
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid mt-3">
                            <CommonIncapacityFields formData={formData} isEditing={isEditing} handleInputChange={handleInputChange} />
                        </div>

                        {formData.tipoIncapacidad === 'licencia-paternidad' && (
                            <>
                                <Divider />
                                <h6 className="text-900 font-semibold mb-3">Licencia de Paternidad / Maternidad</h6>
                                <div className="grid">
                                    <div className="col-12 md:col-6">
                                        <label className="block text-900 font-medium mb-2">Prematuro</label>
                                        <SelectButton
                                            value={null}
                                            options={[
                                                { label: 'Sí', value: true },
                                                { label: 'No', value: false }
                                            ]}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label className="block text-900 font-medium mb-2">Embarazo Múltiple</label>
                                        <SelectButton
                                            value={null}
                                            options={[
                                                { label: 'Sí', value: true },
                                                { label: 'No', value: false }
                                            ]}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="semanaTermino" className="block text-900 font-medium mb-2">
                                            Semana a término
                                        </label>
                                        <Dropdown
                                            id="semanaTermino"
                                            value={formData.semanaTermino}
                                            options={[
                                                { label: '37', value: '37' },
                                                { label: '38', value: '38' },
                                                { label: '39', value: '39' },
                                                { label: '40', value: '40' }
                                            ]}
                                            onChange={(e) => handleInputChange('semanaTermino', e.value)}
                                            disabled={!isEditing}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="edadGestacional" className="block text-900 font-medium mb-2">
                                            Edad Gestacional
                                        </label>
                                        <Dropdown
                                            id="edadGestacional"
                                            value={formData.edadGestacional}
                                            options={[
                                                { label: '26', value: '26' },
                                                { label: '27', value: '27' },
                                                { label: '28', value: '28' },
                                                { label: '29', value: '29' },
                                                { label: '30', value: '30' },
                                                { label: '31', value: '31' },
                                                { label: '32', value: '32' },
                                                { label: '33', value: '33' },
                                                { label: '34', value: '34' },
                                                { label: '35', value: '35' },
                                                { label: '36', value: '36' }
                                            ]}
                                            onChange={(e) => handleInputChange('edadGestacional', e.value)}
                                            disabled={!isEditing}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="diasCotizados" className="block text-900 font-medium mb-2">
                                            Días Cotizados
                                        </label>
                                        <InputNumber id="diasCotizados" value={formData.diasCotizados || 0} onValueChange={(e) => handleInputChange('diasCotizados', e.value)} disabled={!isEditing} className="w-full" min={0} />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="diasGestacion" className="block text-900 font-medium mb-2">
                                            Días Gestación
                                        </label>
                                        <InputNumber
                                            id="diasGestacion"
                                            value={formData.edadGestacional ? formData.edadGestacional * 7 : 0}
                                            onValueChange={(e) => handleInputChange('diasGestacion', e.value)}
                                            disabled={true}
                                            className="w-full"
                                            min={0}
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="factor" className="block text-900 font-medium mb-2">
                                            Factor
                                        </label>
                                        <InputNumber
                                            id="diasGestacion"
                                            value={formData.diasCotizados && formData.diasGestacion ? formData.diasCotizados / formData.diasGestacion : 0}
                                            onValueChange={(e) => handleInputChange('diasGestacion', e.value)}
                                            disabled={true}
                                            className="w-full"
                                            min={0}
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="totalDiasAOtorgarCalendario" className="block text-900 font-medium mb-2">
                                            Total Días a Otorgar (Calendario)
                                        </label>
                                        <InputNumber
                                            id="totalDiasAOtorgarCalendario"
                                            value={formData.totalDiasAOtorgarCalendario || 0}
                                            onValueChange={(e) => handleInputChange('totalDiasAOtorgarCalendario', e.value)}
                                            disabled={!isEditing}
                                            className="w-full"
                                            min={0}
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="totalDiasAOtorgarHabiles" className="block text-900 font-medium mb-2">
                                            Total Días a Otorgar (Hábiles)
                                        </label>
                                        <InputNumber
                                            id="totalDiasAOtorgarHabiles"
                                            value={formData.totalDiasAOtorgarHabiles || 0}
                                            onValueChange={(e) => handleInputChange('totalDiasAOtorgarHabiles', e.value)}
                                            disabled={!isEditing}
                                            className="w-full"
                                            min={0}
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="diasProporcionales" className="block text-900 font-medium mb-2">
                                            Días Proporcionales
                                        </label>
                                        <InputNumber id="diasProporcionales" value={formData.diasProporcionales || 0} onValueChange={(e) => handleInputChange('diasProporcionales', e.value)} disabled={!isEditing} className="w-full" min={0} />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="valorLicencia" className="block text-900 font-medium mb-2">
                                            Valor de Licencia
                                        </label>
                                        <InputNumber
                                            id="valorLicencia"
                                            value={formData.valorLicencia}
                                            onValueChange={(e) => handleInputChange('valorLicencia', e.value)}
                                            disabled={!isEditing}
                                            mode="currency"
                                            currency="COP"
                                            locale="es-CO"
                                            className="w-full"
                                            minFractionDigits={0}
                                            maxFractionDigits={0}
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {formData.tipoIncapacidad === 'enfermedad-general' && (
                            <>
                                <Divider />
                                <h6 className="text-900 font-semibold mb-3">Información Médica</h6>
                                <div className="grid">
                                    <MedicalFields formData={formData} isEditing={isEditing} handleInputChange={handleInputChange} />
                                </div>
                            </>
                        )}

                        {formData.tipoIncapacidad === 'accidente-trabajo' && (
                            <>
                                <Divider />
                                <h6 className="text-900 font-semibold mb-3">Información Médica</h6>
                                <div className="grid">
                                    <div className="grid">
                                        <MedicalFields formData={formData} isEditing={isEditing} handleInputChange={handleInputChange} />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label htmlFor="fechaAccidente" className="block text-900 font-medium mb-2">
                                            Fecha de accidente
                                        </label>
                                        <Calendar
                                            id="fechaAccidente"
                                            value={formData.fechaAccidente}
                                            onChange={(e) => handleInputChange('fechaAccidente', e.value)}
                                            disabled={!isEditing}
                                            dateFormat="dd/mm/yy"
                                            className="w-full"
                                            showIcon
                                        />
                                    </div>
                                    <div className="col-12 md:col-6">
                                            <label className="block text-900 font-medium mb-2">Calificacion ARL</label>
                                            <SelectButton
                                                value={formData.calificacionARL}
                                                options={[
                                                    { label: 'Sí Calificado', value: 'Calificado' },
                                                    { label: 'No Calificado', value: 'No calificado' }
                                                ]}
                                                className="w-full"
                                            />
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label className="block text-900 font-medium mb-2">Calificación ARL</label>
                                        <InputText
                                            id="calificacionARL"
                                            value={formData.calificacionARL}
                                            onChange={(e) => handleInputChange('calificacionARL', e.target.value)}
                                            disabled={!isEditing}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </Card>
                </div>

                <div className="col-12 lg:col-4">
                    <Card title="Estado Actual" className="mb-4">
                        <div className="flex flex-column gap-3">
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-900 font-medium">Estado:</span>
                                <Tag value={formData.estado} severity={getSeverity(formData.estado)} />
                            </div>
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-900 font-medium">N° Incapacidad:</span>
                                <span className="text-600 text-sm">{formData.id}</span>
                            </div>
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-900 font-medium">Salario:</span>
                                <span className="text-900 text-sm">
                                    {new Intl.NumberFormat('es-CO', {
                                        style: 'currency',
                                        currency: 'COP',
                                        minimumFractionDigits: 0
                                    }).format(formData.salarioEmpleado)}
                                </span>
                            </div>
                        </div>
                    </Card>

                    <Card title="Documentos" className="mb-4">
                        <div className="flex flex-column gap-3">
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-900">Incapacidad médica</span>
                                <Button icon="pi pi-file-pdf" className="p-button-rounded p-button-text" />
                            </div>
                            {formData.tieneHistoriaClinica && (
                                <div className="flex justify-content-between align-items-center">
                                    <span className="text-900">Historia clínica</span>
                                    <Button icon="pi pi-paperclip" className="p-button-rounded p-button-text p-button-success" />
                                </div>
                            )}
                            {formData.tieneDocumentosAdicionales && (
                                <div className="flex justify-content-between align-items-center">
                                    <span className="text-900">Documentos adicionales</span>
                                    <Button icon="pi pi-paperclip" className="p-button-rounded p-button-text p-button-info" />
                                </div>
                            )}
                        </div>
                    </Card>

                    <Card title="Acciones Rápidas">
                        <div className="flex flex-column gap-2">
                            <Button label="Descargar PDF" icon="pi pi-download" className="w-full" outlined />
                            <Button label="Generar Reporte" icon="pi pi-file-excel" className="w-full" outlined />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
