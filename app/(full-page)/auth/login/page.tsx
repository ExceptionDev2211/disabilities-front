/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useRef } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [showIncapacidadForm, setShowIncapacidadForm] = useState(false);
    const [tipoDocumento, setTipoDocumento] = useState(null);
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState<Date | null>(null);
    const { layoutConfig } = useContext(LayoutContext);
    const router = useRouter();
    const toast = useRef<Toast>(null);

    const tiposDocumento = [
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
    ];

    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const handleRadicarIncapacidad = () => {
        toast.current?.show({
            severity: 'info',
            summary: 'Radicar Incapacidad',
            detail: 'Accediendo al formulario de radicación de incapacidad',
            life: 3000
        });
        setShowIncapacidadForm(true);
    };

    const handleVolver = () => {
        setShowIncapacidadForm(false);
        setTipoDocumento(null);
        setNumeroTarjeta('');
        setFechaNacimiento(null);
    };

    const handleIniciarSesion = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Inicio de Sesión',
            detail: 'Iniciando sesión exitosamente',
            life: 3000
        });
        
        setTimeout(() => {
            router.push('/');
        }, 500);
    };

    const handleContinuar = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Datos Validados',
            detail: 'Continuando con el proceso de radicación',
            life: 3000
        });
        
        setTimeout(() => {
            router.push('/filing');
        }, 500);
    };

    return (
        <div className={containerClassName}>
            <Toast ref={toast} />
            <div className="flex flex-column align-items-center justify-content-center">
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)',
                        minWidth: '480px',
                        width: '100%',
                        maxWidth: '600px'
                    }}
                >
                    <div 
                        className="w-full surface-card py-8 px-5 sm:px-8" 
                        style={{ 
                            borderRadius: '53px',
                            minHeight: '580px'
                        }}
                    >
                        <div className="text-center mb-5">
                            {!showIncapacidadForm && <div className="text-800 text-3xl font-medium mb-3">¡Bienvenido!</div>}
                            <div className="text-800 text-xl font-medium mb-3">{showIncapacidadForm ? 'Radicar Incapacidad' : 'Al sistema de gestión de incapacidades'}</div>
                            <span className="text-600 font-medium">{showIncapacidadForm ? 'Complete los siguientes datos' : 'Inicia sesión para continuar'}</span>
                        </div>
                        <div style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-flex' }}>
                            {!showIncapacidadForm ? (
                                <div>
                                    <label htmlFor="user" className="block text-900 text-xl font-medium mb-2">
                                        Email
                                    </label>
                                    <InputText id="user" type="text" placeholder="Usuario" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />
                                    <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                        Contraseña
                                    </label>
                                    <Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingrese su contraseña" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem" />
                                    <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                        <div className="flex align-items-center">
                                            <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2" />
                                            <label htmlFor="rememberme1">Recordarme</label>
                                        </div>
                                        <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <label htmlFor="tipoDocumento" className="block text-900 text-xl font-medium mb-2">
                                        Tipo de Documento
                                    </label>
                                    <Dropdown
                                        id="tipoDocumento"
                                        value={tipoDocumento}
                                        onChange={(e) => setTipoDocumento(e.value)}
                                        options={tiposDocumento}
                                        placeholder="Seleccione tipo de documento"
                                        className="w-full md:w-30rem mb-5"
                                        style={{ padding: '0.3rem' }}
                                    />
                                    
                                    <label htmlFor="numeroTarjeta" className="block text-900 text-xl font-medium mb-2">
                                        Número de Documento
                                    </label>
                                    <InputText
                                        id="numeroTarjeta"
                                        type="text"
                                        placeholder="Ingrese su número de identificación"
                                        className="w-full md:w-30rem mb-5"
                                        style={{ padding: '1rem' }}
                                        value={numeroTarjeta}
                                        onChange={(e) => setNumeroTarjeta(e.target.value)}
                                    />
                                    <label htmlFor="fechaNacimiento" className="block text-900 font-medium text-xl mb-2">
                                        Fecha de Nacimiento
                                    </label>
                                    <Calendar
                                        id="fechaNacimiento"
                                        value={fechaNacimiento}
                                        onChange={(e) => setFechaNacimiento(e.value || null)}
                                        placeholder="Seleccione su fecha de nacimiento"
                                        className="w-full md:w-30rem mb-5"
                                        inputClassName="w-full p-3"
                                        dateFormat="dd/mm/yy"
                                        showIcon
                                        maxDate={new Date()}
                                    />
                                </div>
                            )}
                            <div className="mt-auto">
                                {!showIncapacidadForm ? (
                                    <>
                                        <Button label="Iniciar Sesión" className="w-full p-3 text-xl mb-3" onClick={handleIniciarSesion} />
                                        <Button label="Radicar incapacidad" className="w-full p-3 text-xl mb-3" onClick={handleRadicarIncapacidad} severity="secondary" />
                                    </>
                                ) : (
                                    <div className="flex gap-3">
                                        <Button label="Volver" className="flex-1 p-3 text-xl" onClick={handleVolver} severity="secondary" outlined />
                                        <Button label="Continuar" className="flex-1 p-3 text-xl" onClick={handleContinuar} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;