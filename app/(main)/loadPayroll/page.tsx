'use client'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { FileUpload } from 'primereact/fileupload'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
const LoadPayroll = () => {
  const [displayDialog, setDisplayDialog] = useState(false);
  const [value1, setValue1] = useState("");
  const [documentType, setDocumentType] = useState(null);
  const [arlNames, setArlNames] = useState(null);
  const arlOptions = [
    { label: 'ARL Sura', value: 'ARL Sura' },
    { label: 'ARL Colpatria', value: 'ARL Colpatria' },
    { label: 'ARL Positiva', value: 'ARL Positiva' },
    { label: 'ARL AXA', value: 'ARL AXA' },
  ];
  const documentsTypes = [
    { label: 'Cédula de Ciudadanía', value: 'CC' },
    { label: 'NIT', value: 'NIT' },
  ];
  const openDialog = () => {
    setDisplayDialog(true);
  }
  return (
    <>
      <div className='card '>

        <h6>Nómina de empresa</h6>
        <div className="field col-12">
          <label>Adjuntar nómina: </label>
          <FileUpload
            name="soporte"

            url={'/api/upload'}
            accept="xlsx/csv"
            maxFileSize={1000000}
            emptyTemplate={<p className="m-0">Arrastre y suelte el archivo aquí o haga clic para seleccionar.</p>}
          />
          <Button label='Creación manual' className='mt-5 mb-0' onClick={openDialog} />
          <Dialog style={{ width: '70vw' }} visible={displayDialog} onHide={() => setDisplayDialog(false)} header="Creación manual de nómina de empresa">
            <div className="col-12 flex flex-col gap-3 align-items-center padding-10">
              <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-6">
                  <label htmlFor="firstname2">Tipo de identificación:</label>
                  <Dropdown id="tipoDocumento" value={documentType} onChange={(e) => setDocumentType(e.value)} options={documentsTypes}>
                  </Dropdown>
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="firstname2">N° documento</label>
                  <InputText id="firstname2" type="text" />
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="firstname2">Nombre de la empresa: </label>
                  <InputText id="firstname2" type="text" />
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="firstname2">Documento encargado de GH</label>
                  <InputText id="firstname2" type="text" />
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="firstname2">ARL afiliada:</label>
                  <Dropdown id="arl" value={arlNames} onChange={(e) => setArlNames(e.value)} options={arlOptions}>
                  </Dropdown>
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="firstname2">Correo de notificación:</label>
                  <InputText id="firstname2" type="text" />
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="firstname2">Teléfono de contacto:</label>
                  <InputText id="firstname2" type="text" />
                </div>
              </div>
            </div>


            <Button label='Crear' className='mt-5 mb-0' />
          </Dialog>
        </div>
      </div>
      <div className='card '>
        <h6>Nómina de empleados</h6>
        <div className="field col-12">
          <label>Adjuntar nómina: </label>
          <FileUpload
            name="soporte"

            url={'/api/upload'}
            accept="xlsx/csv"
            maxFileSize={1000000}
            emptyTemplate={<p className="m-0">Arrastre y suelte el archivo aquí o haga clic para seleccionar.</p>}
          />
        </div>
      </div>
    </>
  )
}

export default LoadPayroll