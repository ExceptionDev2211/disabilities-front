'use client';

import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';

interface CompanyData {
  tipoDocumento: string;
  numeroDocumento: string;
  nombreEmpresa: string;
  primerNombreEncargado: string;
  primerApellidoEncargado: string;
  segundoApellidoEncargado: string;
  tipoDocEncargado: string;
  numeroDocEncargado: string;
  arlAfiliada: string;
  correoElectronico: string;
  numeroCelular: string;
}

interface EmployeeData {
  codigoEmpleado: string;
  tipoDocumento: string;
  numeroDocumento: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  fechaNacimiento: Date | null;
  estadoEmpleado: string;
  fechaRetiro: Date | null;
  centroCostos: string;
  epsAfiliada: string;
  salarioBase: number | null;
  tipoContrato: string;
  cargo: string;
  correoElectronico: string;
  numeroCelular: string;
}

interface ManualPayrollFormProps {
  visible: boolean;
  onHide: () => void;
}

interface DropdownOption {
  label: string;
  value: string;
}

const ManualPayrollForm: React.FC<ManualPayrollFormProps> = ({ visible, onHide }) => {
  const toast = useRef<Toast>(null);
  
  
  const [companyData, setCompanyData] = useState<CompanyData>({
    tipoDocumento: 'NIT',
    numeroDocumento: '',
    nombreEmpresa: '',
    primerNombreEncargado: '',
    primerApellidoEncargado: '',
    segundoApellidoEncargado: '',
    tipoDocEncargado: '',
    numeroDocEncargado: '',
    arlAfiliada: '',
    correoElectronico: '',
    numeroCelular: ''
  });

  
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    codigoEmpleado: '',
    tipoDocumento: '',
    numeroDocumento: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: null,
    estadoEmpleado: '',
    fechaRetiro: null,
    centroCostos: '',
    epsAfiliada: '',
    salarioBase: null,
    tipoContrato: '',
    cargo: '',
    correoElectronico: '',
    numeroCelular: ''
  });

  
  const tipoDocumentoOptions: DropdownOption[] = [
    { label: 'NIT', value: 'NIT' }
  ];

  const tipoDocEncargadoOptions: DropdownOption[] = [
    { label: 'Cédula de Ciudadanía', value: 'CC' },
    { label: 'Cédula de Extranjería', value: 'CE' }
  ];

  const tipoDocEmpleadoOptions: DropdownOption[] = [
    { label: 'Ninguno', value: 'Ninguno' },
    { label: 'Carné diplomático', value: 'Carné diplomático' },
    { label: 'Cédula de ciudadanía', value: 'Cédula de ciudadanía' },
    { label: 'Cédula de extranjería', value: 'Cédula de extranjería' },
    { label: 'Certificado de nacido vivo', value: 'Certificado de nacido vivo' },
    { label: 'NIT', value: 'NIT' },
    { label: 'Pasaporte', value: 'Pasaporte' },
    { label: 'Pasaporte de la ONU', value: 'Pasaporte de la ONU' },
    { label: 'Permiso Especial de Permanencia', value: 'Permiso Especial de Permanencia' },
    { label: 'Permiso Protección Temporal', value: 'Permiso Protección Temporal' },
    { label: 'Registro civil', value: 'Registro civil' },
    { label: 'Salvo conducto de permanencia', value: 'Salvo conducto de permanencia' },
    { label: 'Tarjeta de identidad', value: 'Tarjeta de identidad' }
  ];

  const estadoEmpleadoOptions: DropdownOption[] = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Retirado', value: 'Retirado' },
    { label: 'En licencia', value: 'En licencia' }
  ];

  const tipoContratoOptions: DropdownOption[] = [
    { label: 'Indefinido', value: 'Indefinido' },
    { label: 'Fijo', value: 'Fijo' },
    { label: 'Temporal', value: 'Temporal' }
  ];

  const arlOptions: DropdownOption[] = [
    { label: 'Positiva', value: 'Positiva' },
    { label: 'Sura', value: 'Sura' },
    { label: 'Colmena', value: 'Colmena' },
    { label: 'Liberty', value: 'Liberty' }
  ];

  const epsOptions: DropdownOption[] = [
    { label: 'Compensar', value: 'Compensar' },
    { label: 'Sura', value: 'Sura' },
    { label: 'Sanitas', value: 'Sanitas' },
    { label: 'Nueva EPS', value: 'Nueva EPS' },
    { label: 'Salud Total', value: 'Salud Total' }
  ];

  const handleCompanyChange = (field: keyof CompanyData, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  };

  const handleEmployeeChange = (field: keyof EmployeeData, value: any) => {
    setEmployeeData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    const requiredCompanyFields: (keyof CompanyData)[] = [
      'numeroDocumento', 'nombreEmpresa', 'primerNombreEncargado', 
      'primerApellidoEncargado', 'segundoApellidoEncargado', 'tipoDocEncargado',
      'numeroDocEncargado', 'arlAfiliada', 'correoElectronico', 'numeroCelular'
    ];

    const requiredEmployeeFields: (keyof EmployeeData)[] = [
      'tipoDocumento', 'numeroDocumento', 'primerNombre', 'segundoNombre',
      'primerApellido', 'segundoApellido', 'fechaNacimiento', 'estadoEmpleado',
      'epsAfiliada', 'salarioBase', 'correoElectronico'
    ];

    for (let field of requiredCompanyFields) {
      if (!companyData[field]) {
        toast.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: `El campo ${field} de la empresa es obligatorio`,
          life: 3000
        });
        return false;
      }
    }

    for (let field of requiredEmployeeFields) {
      if (!employeeData[field]) {
        toast.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: `El campo ${field} del empleado es obligatorio`,
          life: 3000
        });
        return false;
      }
    }

    if (employeeData.estadoEmpleado === 'Retirado' && !employeeData.fechaRetiro) {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'La fecha de retiro es obligatoria cuando el estado es "Retirado"',
        life: 3000
      });
      return false;
    }

    
    if (!employeeData.salarioBase || employeeData.salarioBase <= 0) {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'El salario base debe ser mayor a 0',
        life: 3000
      });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Datos de la empresa:', companyData);
      console.log('Datos del empleado:', employeeData);
      
      toast.current?.show({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Empleado registrado correctamente',
        life: 3000
      });
      
      // Limpiar formulario
      setCompanyData({
        tipoDocumento: 'NIT',
        numeroDocumento: '',
        nombreEmpresa: '',
        primerNombreEncargado: '',
        primerApellidoEncargado: '',
        segundoApellidoEncargado: '',
        tipoDocEncargado: '',
        numeroDocEncargado: '',
        arlAfiliada: '',
        correoElectronico: '',
        numeroCelular: ''
      });

      setEmployeeData({
        codigoEmpleado: '',
        tipoDocumento: '',
        numeroDocumento: '',
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        fechaNacimiento: null,
        estadoEmpleado: '',
        fechaRetiro: null,
        centroCostos: '',
        epsAfiliada: '',
        salarioBase: null,
        tipoContrato: '',
        cargo: '',
        correoElectronico: '',
        numeroCelular: ''
      });
      
      onHide();
    }
  };

  const footer = (
    <div>
      <Button 
        label="Cancelar" 
        icon="pi pi-times" 
        onClick={onHide} 
        className="p-button-text" 
      />
      <Button 
        label="Guardar" 
        icon="pi pi-check" 
        onClick={handleSubmit} 
        autoFocus 
      />
    </div>
  );

  return (
    <>
      <Toast ref={toast} />
      <Dialog
        header="Cargue Manual de Nómina"
        visible={visible}
        style={{ width: '90vw', maxWidth: '1200px' }}
        onHide={onHide}
        footer={footer}
        modal
        maximizable
      >
        <div className="grid col-12">
          
          <div className="col-12 lg:col-6">
            <Card title="Datos de la Empresa" className="mb-4">
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Tipo de Documento <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={companyData.tipoDocumento}
                    options={tipoDocumentoOptions}
                    onChange={(e) => handleCompanyChange('tipoDocumento', e.value)}
                    className="w-full"
                    disabled
                  />
                </div>
                
                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Número de Documento <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.numeroDocumento}
                    onChange={(e) => handleCompanyChange('numeroDocumento', e.target.value)}
                    className="w-full"
                    keyfilter="pnum"
                  />
                </div>

                <div className="col-12">
                  <label className="block text-900 font-medium mb-2">
                    Nombre de la Empresa <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.nombreEmpresa}
                    onChange={(e) => handleCompanyChange('nombreEmpresa', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-4">
                  <label className="block text-900 font-medium mb-2">
                    1er Nombre Encargado <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.primerNombreEncargado}
                    onChange={(e) => handleCompanyChange('primerNombreEncargado', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-4">
                  <label className="block text-900 font-medium mb-2">
                    1er Apellido Encargado <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.primerApellidoEncargado}
                    onChange={(e) => handleCompanyChange('primerApellidoEncargado', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-4">
                  <label className="block text-900 font-medium mb-2">
                    2do Apellido Encargado <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.segundoApellidoEncargado}
                    onChange={(e) => handleCompanyChange('segundoApellidoEncargado', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Tipo Doc Encargado <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={companyData.tipoDocEncargado}
                    options={tipoDocEncargadoOptions}
                    onChange={(e) => handleCompanyChange('tipoDocEncargado', e.value)}
                    className="w-full"
                    placeholder="Seleccione"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Número Doc Encargado <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.numeroDocEncargado}
                    onChange={(e) => handleCompanyChange('numeroDocEncargado', e.target.value)}
                    className="w-full"
                    keyfilter="pnum"
                  />
                </div>

                <div className="col-12">
                  <label className="block text-900 font-medium mb-2">
                    ARL Afiliada <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={companyData.arlAfiliada}
                    options={arlOptions}
                    onChange={(e) => handleCompanyChange('arlAfiliada', e.value)}
                    className="w-full"
                    placeholder="Seleccione ARL"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.correoElectronico}
                    onChange={(e) => handleCompanyChange('correoElectronico', e.target.value)}
                    className="w-full"
                    keyfilter="email"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Número de Celular <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={companyData.numeroCelular}
                    onChange={(e) => handleCompanyChange('numeroCelular', e.target.value)}
                    className="w-full"
                    keyfilter="pnum"
                    maxLength={10}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Datos del Empleado */}
          <div className="col-12 lg:col-6">
            <Card title="Datos del Empleado" className="mb-4">
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Código de Empleado
                  </label>
                  <InputText
                    value={employeeData.codigoEmpleado}
                    onChange={(e) => handleEmployeeChange('codigoEmpleado', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Tipo de Documento <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={employeeData.tipoDocumento}
                    options={tipoDocEmpleadoOptions}
                    onChange={(e) => handleEmployeeChange('tipoDocumento', e.value)}
                    className="w-full"
                    placeholder="Seleccione"
                  />
                </div>

                <div className="col-12">
                  <label className="block text-900 font-medium mb-2">
                    Número de Documento <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={employeeData.numeroDocumento}
                    onChange={(e) => handleEmployeeChange('numeroDocumento', e.target.value)}
                    className="w-full"
                    keyfilter="pnum"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    1er Nombre <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={employeeData.primerNombre}
                    onChange={(e) => handleEmployeeChange('primerNombre', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    2do Nombre <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={employeeData.segundoNombre}
                    onChange={(e) => handleEmployeeChange('segundoNombre', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    1er Apellido <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={employeeData.primerApellido}
                    onChange={(e) => handleEmployeeChange('primerApellido', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    2do Apellido <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={employeeData.segundoApellido}
                    onChange={(e) => handleEmployeeChange('segundoApellido', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Fecha de Nacimiento <span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={employeeData.fechaNacimiento}
                    onChange={(e) => handleEmployeeChange('fechaNacimiento', e.value)}
                    className="w-full"
                    dateFormat="yy-mm-dd"
                    maxDate={new Date()}
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Estado del Empleado <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={employeeData.estadoEmpleado}
                    options={estadoEmpleadoOptions}
                    onChange={(e) => handleEmployeeChange('estadoEmpleado', e.value)}
                    className="w-full"
                    placeholder="Seleccione"
                  />
                </div>

                {employeeData.estadoEmpleado === 'Retirado' && (
                  <div className="col-12">
                    <label className="block text-900 font-medium mb-2">
                      Fecha de Retiro <span className="text-red-500">*</span>
                    </label>
                    <Calendar
                      value={employeeData.fechaRetiro}
                      onChange={(e) => handleEmployeeChange('fechaRetiro', e.value)}
                      className="w-full"
                      dateFormat="yy-mm-dd"
                      maxDate={new Date()}
                    />
                  </div>
                )}

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Centro de Costos
                  </label>
                  <InputText
                    value={employeeData.centroCostos}
                    onChange={(e) => handleEmployeeChange('centroCostos', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    EPS Afiliada <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={employeeData.epsAfiliada}
                    options={epsOptions}
                    onChange={(e) => handleEmployeeChange('epsAfiliada', e.value)}
                    className="w-full"
                    placeholder="Seleccione EPS"
                  />
                </div>

                <div className="col-12">
                  <label className="block text-900 font-medium mb-2">
                    Salario Base Mensual <span className="text-red-500">*</span>
                  </label>
                  <InputNumber
                    value={employeeData.salarioBase}
                    onValueChange={(e) => handleEmployeeChange('salarioBase', e.value)}
                    mode="currency"
                    currency="COP"
                    locale="es-CO"
                    className="w-full"
                    min={0}
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Tipo de Contrato
                  </label>
                  <Dropdown
                    value={employeeData.tipoContrato}
                    options={tipoContratoOptions}
                    onChange={(e) => handleEmployeeChange('tipoContrato', e.value)}
                    className="w-full"
                    placeholder="Seleccione"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Cargo
                  </label>
                  <InputText
                    value={employeeData.cargo}
                    onChange={(e) => handleEmployeeChange('cargo', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={employeeData.correoElectronico}
                    onChange={(e) => handleEmployeeChange('correoElectronico', e.target.value)}
                    className="w-full"
                    keyfilter="email"
                  />
                </div>

                <div className="col-12 md:col-6">
                  <label className="block text-900 font-medium mb-2">
                    Número de Celular
                  </label>
                  <InputText
                    value={employeeData.numeroCelular}
                    onChange={(e) => handleEmployeeChange('numeroCelular', e.target.value)}
                    className="w-full"
                    keyfilter="pnum"
                    maxLength={10}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ManualPayrollForm;