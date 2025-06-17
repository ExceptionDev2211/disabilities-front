'use client'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Dialog } from 'primereact/dialog'
import { FileUpload } from 'primereact/fileupload'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import React, { useState } from 'react'

const Filing = () => {
const [displayBasic, setDisplayBasic] = useState(false);
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
                            <label htmlFor="lastname2">Correo electrónico:  </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Fecha de inicio de la incapacidad:  </label>
                            <Calendar showIcon id="lastname2" />
                        </div>                        
                        <div className="field col-12">
                            <label>Adjuntar incapacidad: </label>
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
                            <label>Historia clinica / otros: </label>
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
                            <label htmlFor="address">Observaciones: </label>
                            <InputTextarea id="address" rows={4} autoResize />

                        </div>

                        <div className=" flex justify-content-end ">
                            <Button type='button' onClick={() => setDisplayBasic(true)} className='ml-2' label="Radicar Incapacidad" icon="pi pi-check" />
                        </div>
                        <Dialog visible={displayBasic} onHide={() => {setDisplayBasic(false)}} header="Política de tratamiento de datos" footer={
                            <>
                                <Button label="No" icon="pi pi-times" onClick={() => setDisplayBasic(false) } />
                                <Button label="Sí" icon="pi pi-check" onClick={() => {}} />
                            </>
                        }>
                            <p>¿Está seguro de que desea radicar la incapacidad?</p>
                        </Dialog>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filing