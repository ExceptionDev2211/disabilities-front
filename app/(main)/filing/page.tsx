'use client'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Checkbox } from 'primereact/checkbox'
import { Dialog } from 'primereact/dialog'
import { FileUpload } from 'primereact/fileupload'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from 'primereact/toast'
import React, { useRef, useState } from 'react'

const Filing = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [policyModalVisible, setPolicyModalVisible] = useState(false);

    const toast = useRef<Toast>(null);
    const sendFiling = () => {
        setDisplayBasic(false);
        toast.current?.show({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Incapacidad N°:  INC-20250515-000123 radicada correctamente',
            life: 3000
        });

    };
    return (
        <div className="col-12">
            <div className="card">
                <h5>Radicar incapacidad</h5>
                <form action="">
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="firstname2">Nombres y apellidos:</label>
                            <InputText id="firstname2" type="text" />
                        </div>

                        <div className="field col-12 md:col-3">
                            <label htmlFor="lastname2">Tipo de documento:  </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="lastname2">N° de documento: </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Fecha de nacimiento: </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">EPS afiliada: </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Correo electrónico (obligatorio):  </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Fecha de inicio de la incapacidad (obligatorio):  </label>
                            <Calendar showIcon id="lastname2" />
                        </div>
                        <div className="field col-12">
                            <label>Adjuntar incapacidad (obligatorio): </label>
                            <FileUpload
                                name="soporte"
                                auto
                                url={'/api/upload'}
                                accept="image/*,application/pdf"
                                maxFileSize={1000000}
                                emptyTemplate={<p className="m-0">Arrastre y suelte el archivo aquí o haga clic para seleccionar.</p>}
                            />
                        </div>


                        <div className="field col-12">
                            <label>Historia clínica (opcional):</label>
                            <FileUpload
                                name="soporte"
                                url={'/api/upload'}
                                accept="image/*,application/pdf"
                                auto
                                maxFileSize={2000000}
                                emptyTemplate={<p className="m-0">Arrastre y suelte el archivo aquí o haga clic para seleccionar.</p>}
                            />
                        </div>
                        <div className="field col-12">
                            <label>Otros (opcional): </label>
                            <FileUpload
                                name="soporte"
                                url={'/api/upload'}
                                accept="image/*,application/pdf"
                                auto
                                maxFileSize={2000000}
                                multiple
                                emptyTemplate={<p className="m-0">Arrastre y suelte el archivo aquí o haga clic para seleccionar.</p>}
                            />
                        </div>

                        <div className="field col-12">
                            <label htmlFor="address">Observaciones (opcional): </label>
                            <InputTextarea id="address" rows={4} autoResize />

                        </div>
                        <div className="field col-12">
                            <Checkbox
                                inputId="accept"
                                className='mt-2'
                                value="accept"
                                checked={acceptPolicy}
                                onChange={e => setAcceptPolicy(e.checked ?? false)}
                            />
                            <span className="ml-2">He leído y acepto la <button
                                type="button"
                                style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                                className="p-button-text p-0 ml-1 text-primary"
                                onClick={() => setPolicyModalVisible(true)}
                            >
                                política de tratamiento de datos
                            </button></span>

                        </div>
                        <div className=" flex justify-content-end ">
                            <Button type='button' disabled={!acceptPolicy}
                                onClick={sendFiling} className='ml-2 border' label="Radicar Incapacidad" icon="pi pi-check" />
                        </div>
                        <Dialog
                            header="Política de Tratamiento de Datos Personales"
                            visible={policyModalVisible}
                            style={{ width: '50vw' }}
                            onHide={() => setPolicyModalVisible(false)}
                            modal
                        >
                            Al hacer uso de este sistema, usted autoriza el tratamiento de sus datos personales con la finalidad de registrar, gestionar y notificar sobre incapacidades médicas. La información recolectada será tratada conforme a la normativa vigente sobre protección de datos personales.
                        </Dialog>

                        <Toast ref={toast} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filing