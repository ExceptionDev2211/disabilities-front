'use client'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { FileUpload } from 'primereact/fileupload'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import React, { useState } from 'react'

const Filing = () => {
     
    return (
        <div className="col-12">
            <div className="card">
                <h5>Radicar incapacidad</h5>
                <form action="">
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="firstname2">Primer nombre</label>
                            <InputText id="firstname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Segundo nombre</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="firstname2">Primer apellido:</label>
                            <InputText id="firstname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Segundo apellido:</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-2">
                            <label htmlFor="lastname2">Tipo de documento: </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="lastname2">Número de documento: </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Fecha de nacimiento: </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Correo electronico:  </label>
                            <InputText id="lastname2" type="text" />
                        </div>
                         <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Fecha de inicio de la incapacidad:  </label>
                            <Calendar showIcon id="lastname2"/>
                        </div>
                        <div className="field col-12">
                            <label htmlFor="address">Observaciones: </label>
                            <InputTextarea id="address" rows={4} autoResize />
                        </div>
                        <div className="field col-12">
                            <label>Adjuntar incapacidad: </label>
                            <FileUpload
                                name="soporte"
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
                                maxFileSize={2000000} 
                                multiple
                                emptyTemplate={<p className="m-0">Arrastre y suelte el archivo aquí o haga clic para seleccionar.</p>}
                            />
                        </div>
                        <div className=" justify mt-2">
                            <Button label="Radicar Incapacidad" icon="pi pi-check" />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filing