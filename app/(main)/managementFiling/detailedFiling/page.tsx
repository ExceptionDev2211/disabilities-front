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
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

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

    // Hook para detectar el tamaño de la ventana
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint en PrimeReact
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const tipoDocumentoOptions = [
        { label: 'Cédula de Ciudadanía', value: 'CC' },
        { label: 'Cédula de Extranjería', value: 'CE' },
        { label: 'Pasaporte', value: 'PA' },
        { label: 'Tarjeta de Identidad', value: 'TI' }
    ];

    const estadoOptions = [
        { label: 'Pendiente', value: 'Pendiente' },
        { label: 'En Revisión', value: 'En Revisión' },
        { label: 'Pagado', value: 'Pagado' },
        { label: 'No Pagado', value: 'No Pagado' }
    ];

    const epsOptions = [
        { label: 'SURA EPS', value: 'SURA EPS' },
        { label: 'COMPENSAR EPS', value: 'COMPENSAR EPS' },
        { label: 'NUEVA EPS', value: 'NUEVA EPS' },
        { label: 'SANITAS EPS', value: 'SANITAS EPS' },
        { label: 'FAMISANAR EPS', value: 'FAMISANAR EPS' },
        { label: 'MEDIMÁS EPS', value: 'MEDIMÁS EPS' }
    ];

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

                const incapacidadEncontrada = datosEjemplo.find(inc => inc.id === incapacidadId);
                if (incapacidadEncontrada) {
                    setIncapacidad(incapacidadEncontrada);
                    setFormData(incapacidadEncontrada);
                }
                setLoading(false);
            }, 500);
        }
    }, [incapacidadId]);

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => prev ? {
            ...prev,
            [field]: value
        } : null);
    };

    const handleSave = async () => {
        if (!formData) return;
        
        try {
            setIncapacidad(formData);
            setIsEditing(false);
            toast.current?.show({
                severity: 'success',
                summary: 'Éxito',
                detail: 'Los cambios se han guardado correctamente',
                life: 3000
            });
        } catch (error) {
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'No se pudieron guardar los cambios',
                life: 3000
            });
        }
    };

    const handleCancel = () => {
        setFormData(incapacidad);
        setIsEditing(false);
    };

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
                    <p>No se pudo encontrar la incapacidad solicitada.</p>
                    <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
                </Card>
            </div>
        );
    }

    return (
        <div className="col-12">
            <Toast ref={toast} />
            
            {/* Header */}
            <div className="flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="text-900 font-semibold text-xl mb-2">
                        Detalle de Incapacidad
                    </h2>
                    <p className="text-600 line-height-3 m-0">
                        {formData.id} - {formData.nombresApellidos}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button 
                        label="Volver" 
                        icon="pi pi-arrow-left" 
                        outlined 
                        onClick={() => router.back()} 
                    />
                    {!isEditing ? (
                        <Button 
                            label="Editar" 
                            icon="pi pi-pencil" 
                            onClick={() => setIsEditing(true)} 
                        />
                    ) : (
                        <>
                            <Button 
                                label="Cancelar" 
                                icon="pi pi-times" 
                                severity="secondary" 
                                outlined 
                                onClick={handleCancel} 
                            />
                            <Button 
                                label="Guardar" 
                                icon="pi pi-check" 
                                onClick={handleSave} 
                            />
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
                                <InputText 
                                    id="nombresApellidos"
                                    value={formData.nombresApellidos}
                                    onChange={(e) => handleInputChange('nombresApellidos', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                />
                            </div>
                            <div className="col-12 md:col-3">
                                <label htmlFor="tipoDocumento" className="block text-900 font-medium mb-2">
                                    {isMobile ? 'T. Documento' : 'Tipo de Documento'}
                                </label>
                                <Dropdown 
                                    id="tipoDocumento"
                                    value={formData.tipoDocumento}
                                    options={tipoDocumentoOptions}
                                    onChange={(e) => handleInputChange('tipoDocumento', e.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                    placeholder="Seleccionar tipo"
                                />
                            </div>
                            <div className="col-12 md:col-3">
                                <label htmlFor="numeroDocumento" className="block text-900 font-medium mb-2">
                                    {isMobile ? 'N° Documento' : 'Número de Documento'}
                                </label>
                                <InputText 
                                    id="numeroDocumento"
                                    value={formData.numeroDocumento}
                                    onChange={(e) => handleInputChange('numeroDocumento', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="fechaNacimiento" className="block text-900 font-medium mb-2">
                                    Fecha de Nacimiento
                                </label>
                                <Calendar 
                                    id="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={(e) => handleInputChange('fechaNacimiento', e.value)}
                                    disabled={!isEditing}
                                    dateFormat="dd/mm/yy"
                                    className="w-full"
                                    showIcon
                                />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="epsAfiliada" className="block text-900 font-medium mb-2">
                                    EPS Afiliada
                                </label>
                                <Dropdown 
                                    id="epsAfiliada"
                                    value={formData.epsAfiliada}
                                    options={epsOptions}
                                    onChange={(e) => handleInputChange('epsAfiliada', e.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                    placeholder="Seleccionar EPS"
                                    filter
                                />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="salarioEmpleado" className="block text-900 font-medium mb-2">
                                    Salario del Empleado
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
                                    inputClassName="w-full"
                                />
                            </div>
                        </div>

                        <Divider />

                        <div className="grid">
                            <div className="col-12 md:col-6">
                                <label htmlFor="correoElectronico" className="block text-900 font-medium mb-2">
                                    Correo Electrónico
                                </label>
                                <InputText 
                                    id="correoElectronico"
                                    value={formData.correoElectronico}
                                    onChange={(e) => handleInputChange('correoElectronico', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                    type="email"
                                />
                            </div>
                            <div className="col-12 md:col-6">
                                <label htmlFor="numeroTelefono" className="block text-900 font-medium mb-2">
                                    Número de Teléfono
                                </label>
                                <InputText 
                                    id="numeroTelefono"
                                    value={formData.numeroTelefono || ''}
                                    onChange={(e) => handleInputChange('numeroTelefono', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </Card>
                    <Card title="Información de la Incapacidad" className="mb-4">
                        <div className="grid">
                            <div className="col-12 md:col-4">
                                <label htmlFor="fechaInicioIncapacidad" className="block text-900 font-medium mb-2">
                                    Fecha de Inicio
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
                                    Fecha de Radicación
                                </label>
                                <Calendar 
                                    id="fechaRadicacion"
                                    value={formData.fechaRadicacion}
                                    onChange={(e) => handleInputChange('fechaRadicacion', e.value)}
                                    disabled={!isEditing}
                                    dateFormat="dd/mm/yy"
                                    className="w-full"
                                    showIcon
                                />
                            </div>
                            <div className="col-12 md:col-4">
                                <label htmlFor="estado" className="block text-900 font-medium mb-2">
                                    Estado
                                </label>
                                <Dropdown 
                                    id="estado"
                                    value={formData.estado}
                                    options={estadoOptions}
                                    onChange={(e) => handleInputChange('estado', e.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                    placeholder="Seleccionar estado"
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="observaciones" className="block text-900 font-medium mb-2">
                                    Observaciones
                                </label>
                                <InputTextarea 
                                    id="observaciones"
                                    value={formData.observaciones || ''}
                                    onChange={(e) => handleInputChange('observaciones', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full"
                                    rows={4}
                                    placeholder="Ingrese observaciones adicionales..."
                                />
                            </div>
                        </div>

                        <Divider />

                        <div className="grid">
                            <div className="col-12 md:col-6">
                                <div className="flex align-items-center">
                                    <Checkbox 
                                        id="tieneHistoriaClinica"
                                        checked={formData.tieneHistoriaClinica}
                                        onChange={(e) => handleInputChange('tieneHistoriaClinica', e.checked)}
                                        disabled={!isEditing}
                                        className="mr-2"
                                    />
                                    <label htmlFor="tieneHistoriaClinica" className="text-900 font-medium">
                                        Tiene Historia Clínica
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="flex align-items-center">
                                    <Checkbox 
                                        id="tieneDocumentosAdicionales"
                                        checked={formData.tieneDocumentosAdicionales}
                                        onChange={(e) => handleInputChange('tieneDocumentosAdicionales', e.checked)}
                                        disabled={!isEditing}
                                        className="mr-2"
                                    />
                                    <label htmlFor="tieneDocumentosAdicionales" className="text-900 font-medium">
                                        Tiene Documentos Adicionales
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-12 lg:col-4">
                    <Card title="Estado Actual" className="mb-4">
                        <div className="flex flex-column gap-3">
                            <div className="flex justify-content-between align-items-center">
                                <span className="text-900 font-medium">Estado:</span>
                                <Tag 
                                    value={formData.estado} 
                                    severity={getSeverity(formData.estado)} 
                                />
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
                            {!formData.tieneHistoriaClinica && !formData.tieneDocumentosAdicionales && (
                                <p className="text-500 text-sm">No hay documentos adicionales</p>
                            )}
                        </div>
                    </Card>
                    <Card title="Acciones Rápidas">
                        <div className="flex flex-column gap-2">
                            <Button 
                                label="Descargar PDF" 
                                icon="pi pi-download" 
                                className="w-full" 
                                outlined 
                            />
                            <Button 
                                label="Enviar Notificación" 
                                icon="pi pi-send" 
                                className="w-full" 
                                outlined 
                            />
                            <Button 
                                label="Generar Reporte" 
                                icon="pi pi-file-excel" 
                                className="w-full" 
                                outlined 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}