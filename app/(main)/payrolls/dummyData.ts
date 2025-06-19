// dummyData.ts
export interface Historial {
  estado: 'Activo' | 'Retirado' | 'Licencia';
  fechaCargue: string;
  fechaRetiro?: string | null;
  centroCosto: string; // Modificado para ser alfanumérico
  eps: string;
  salario: number;
  tipoContrato: string;
  cargo: string;
  nit: string;
}

export interface Empleado {
  cedula: string;
  nombre: string;
  historial: Historial[];
}

export const dummyData: Empleado[] = [
  {
    cedula: '1001001001',
    nombre: 'Sofía Martínez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-03-15',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2800000,
        tipoContrato: 'Indefinido',
        cargo: 'Vendedor Senior',
        nit: '800123456-1'
      }
    ]
  },
  {
    "cedula": "1001001002",
    "nombre": "Mateo Rodríguez",
    "historial": [
      {
        "estado": "Activo",
        "fechaCargue": "2024-01-20",
        "fechaRetiro": null,
        "centroCosto": "CC002A",
        "eps": "Sanitas",
        "salario": 3500000,
        "tipoContrato": "Indefinido",
        "cargo": "Especialista SEO",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2023-07-01",
        "fechaRetiro": null,
        "centroCosto": "CC002A",
        "eps": "Sanitas",
        "salario": 3200000,
        "tipoContrato": "Indefinido",
        "cargo": "Asistente Marketing",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2022-12-15",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sanitas",
        "salario": 3000000,
        "tipoContrato": "Fijo",
        "cargo": "Asistente Marketing Jr.",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2022-06-01",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sanitas",
        "salario": 2800000,
        "tipoContrato": "Fijo",
        "cargo": "Practicante Marketing",
        "nit": "800123456-1"
      },
      {
        "estado": "Licencia",
        "fechaCargue": "2022-03-01",
        "fechaRetiro": null,
        "centroCosto": "CC004C",
        "eps": "Sura",
        "salario": 2500000,
        "tipoContrato": "Servicios",
        "cargo": "Consultor Digital Freelance",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2021-09-01",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Nueva EPS",
        "salario": 2200000,
        "tipoContrato": "Indefinido",
        "cargo": "Auxiliar Administrativo",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2021-03-10",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Nueva EPS",
        "salario": 2000000,
        "tipoContrato": "Fijo",
        "cargo": "Asistente General",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2020-07-05",
        "fechaRetiro": null,
        "centroCosto": "CC002A",
        "eps": "Coomeva",
        "salario": 1800000,
        "tipoContrato": "Practicante",
        "cargo": "Practicante de Contabilidad",
        "nit": "800123456-1"
      },
      {
        "estado": "Licencia",
        "fechaCargue": "2020-01-15",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sura",
        "salario": 1500000,
        "tipoContrato": "Temporal",
        "cargo": "Mensajero",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2019-09-01",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Sanitas",
        "salario": 3500000,
        "tipoContrato": "Indefinido",
        "cargo": "Especialista SEO",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2019-03-15",
        "fechaRetiro":null,
        "centroCosto": "CC002A",
        "eps": "Sanitas",
        "salario": 3200000,
        "tipoContrato": "Indefinido",
        "cargo": "Asistente Marketing",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2018-09-01",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sanitas",
        "salario": 3000000,
        "tipoContrato": "Fijo",
        "cargo": "Asistente Marketing Jr.",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2018-02-01",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sanitas",
        "salario": 2800000,
        "tipoContrato": "Fijo",
        "cargo": "Practicante Marketing",
        "nit": "800123456-1"
      },
      {
        "estado": "Retirado",
        "fechaCargue": "2017-08-01",
        "fechaRetiro": "2018-01-31",
        "centroCosto": "CC004C",
        "eps": "Sura",
        "salario": 2500000,
        "tipoContrato": "Servicios",
        "cargo": "Consultor Digital Freelance",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2017-02-10",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Nueva EPS",
        "salario": 2200000,
        "tipoContrato": "Indefinido",
        "cargo": "Auxiliar Administrativo",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2016-08-20",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Nueva EPS",
        "salario": 2000000,
        "tipoContrato": "Fijo",
        "cargo": "Asistente General",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2016-01-01",
        "fechaRetiro": null,
        "centroCosto": "CC002A",
        "eps": "Coomeva",
        "salario": 1800000,
        "tipoContrato": "Practicante",
        "cargo": "Practicante de Contabilidad",
        "nit": "800123456-1"
      },
      {
        "estado": "Licencia",
        "fechaCargue": "2015-06-15",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sura",
        "salario": 1500000,
        "tipoContrato": "Temporal",
        "cargo": "Mensajero",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2014-12-01",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Sanitas",
        "salario": 3500000,
        "tipoContrato": "Indefinido",
        "cargo": "Especialista SEO",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2014-06-01",
        "fechaRetiro": null,
        "centroCosto": "CC002A",
        "eps": "Sanitas",
        "salario": 3200000,
        "tipoContrato": "Indefinido",
        "cargo": "Asistente Marketing",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2013-12-01",
        "fechaRetiro":null,
        "centroCosto": "CC003B",
        "eps": "Sanitas",
        "salario": 3000000,
        "tipoContrato": "Fijo",
        "cargo": "Asistente Marketing Jr.",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2013-06-01",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sanitas",
        "salario": 2800000,
        "tipoContrato": "Fijo",
        "cargo": "Practicante Marketing",
        "nit": "800123456-1"
      },
      {
        "estado": "Retirado",
        "fechaCargue": "2012-12-01",
        "fechaRetiro": "2012-11-15",
        "centroCosto": "CC004C",
        "eps": "Sura",
        "salario": 2500000,
        "tipoContrato": "Servicios",
        "cargo": "Consultor Digital Freelance",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2012-06-01",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Nueva EPS",
        "salario": 2200000,
        "tipoContrato": "Indefinido",
        "cargo": "Auxiliar Administrativo",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2011-12-01",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Nueva EPS",
        "salario": 2000000,
        "tipoContrato": "Fijo",
        "cargo": "Asistente General",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2011-06-01",
        "fechaRetiro":null,
        "centroCosto": "CC002A",
        "eps": "Coomeva",
        "salario": 1800000,
        "tipoContrato": "Practicante",
        "cargo": "Practicante de Contabilidad",
        "nit": "800123456-1"
      },
      {
        "estado": "Retirado",
        "fechaCargue": "2010-12-01",
        "fechaRetiro": "2010-11-30",
        "centroCosto": "CC003B",
        "eps": "Sura",
        "salario": 1500000,
        "tipoContrato": "Temporal",
        "cargo": "Mensajero",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2010-06-01",
        "fechaRetiro": null,
        "centroCosto": "CC001A",
        "eps": "Sanitas",
        "salario": 3500000,
        "tipoContrato": "Indefinido",
        "cargo": "Especialista SEO",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2009-12-01",
        "fechaRetiro":null,
        "centroCosto": "CC002A",
        "eps": "Sanitas",
        "salario": 3200000,
        "tipoContrato": "Indefinido",
        "cargo": "Asistente Marketing",
        "nit": "800123456-1"
      },
      {
        "estado": "Activo",
        "fechaCargue": "2009-06-01",
        "fechaRetiro": null,
        "centroCosto": "CC003B",
        "eps": "Sanitas",
        "salario": 3000000,
        "tipoContrato": "Fijo",
        "cargo": "Asistente Marketing Jr.",
        "nit": "800123456-1"
      }
    ]
  },
  {
    cedula: '1001001003',
    nombre: 'Valeria López',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-09-01',
        fechaRetiro: '2024-02-28',
        centroCosto: 'CC003', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2900000,
        tipoContrato: 'Fijo',
        cargo: 'Coordinador Logístico',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001004',
    nombre: 'Samuel García',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-04-10',
        fechaRetiro: null,
        centroCosto: 'CC004B', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 4200000,
        tipoContrato: 'Indefinido',
        cargo: 'Desarrollador Frontend',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001005',
    nombre: 'Isabella Pérez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-11-05',
        fechaRetiro: null,
        centroCosto: 'CC005', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2600000,
        tipoContrato: 'Indefinido',
        cargo: 'Asistente Administrativa',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001006',
    nombre: 'Lucas Hernández',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-02-01',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2300000,
        tipoContrato: 'Temporal',
        cargo: 'Operario de Máquina',
        nit: '900987654-2'
      },
      {
        estado: 'Retirado',
        fechaCargue: '2023-01-01',
        fechaRetiro: '2024-01-31',
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2200000,
        tipoContrato: 'Fijo',
        cargo: 'Operario de Bodega',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001007',
    nombre: 'Camila Díaz',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-09-20',
        fechaRetiro: null,
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3800000,
        tipoContrato: 'Indefinido',
        cargo: 'Generalista RRHH',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001008',
    nombre: 'Daniel Vásquez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-01',
        fechaRetiro: null,
        centroCosto: 'CC008A', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4500000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista Financiero',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001009',
    nombre: 'Mariana Castro',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-06-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 2700000,
        tipoContrato: 'Indefinido',
        cargo: 'Key Account Manager',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001010',
    nombre: 'Sebastián Rojas',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2021-04-01',
        fechaRetiro: '2023-10-31',
        centroCosto: 'CC004A', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3900000,
        tipoContrato: 'Indefinido',
        cargo: 'Ingeniero de Soporte',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001011',
    nombre: 'Lucía Morales',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-03-01',
        fechaRetiro: null,
        centroCosto: 'CC009', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3100000,
        tipoContrato: 'Fijo',
        cargo: 'Diseñador Gráfico',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001012',
    nombre: 'Felipe Torres',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-08-15',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2500000,
        tipoContrato: 'Indefinido',
        cargo: 'Supervisor de Planta',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001013',
    nombre: 'Antonia Silva',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-01',
        fechaRetiro: null,
        centroCosto: 'CC010', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3000000,
        tipoContrato: 'Indefinido',
        cargo: 'Ejecutivo Comercial',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001014',
    nombre: 'Martín Romero',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-04-20',
        fechaRetiro: null,
        centroCosto: 'CC011', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 5000000,
        tipoContrato: 'Indefinido',
        cargo: 'Abogado Corporativo',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001015',
    nombre: 'Victoria Herrera',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-01-01',
        fechaRetiro: '2024-01-31',
        centroCosto: 'CC002A', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 3300000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Mercadeo',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001016',
    nombre: 'Alejandro Vargas',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-02-15',
        fechaRetiro: null,
        centroCosto: 'CC012', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3600000,
        tipoContrato: 'Indefinido',
        cargo: 'Contador General',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001017',
    nombre: 'Gabriela Soto',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-07-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2750000,
        tipoContrato: 'Indefinido',
        cargo: 'Ejecutivo de Ventas',
        nit: '800123456-1'
      },
      {
        estado: 'Activo',
        fechaCargue: '2022-01-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2600000,
        tipoContrato: 'Fijo',
        cargo: 'Asistente Comercial',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001018',
    nombre: 'Diego Salazar',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-04-01',
        fechaRetiro: null,
        centroCosto: 'CC004B', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4800000,
        tipoContrato: 'Indefinido',
        cargo: 'Desarrollador Backend',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001019',
    nombre: 'Paula Rivera',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-10-10',
        fechaRetiro: null,
        centroCosto: 'CC013', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 2200000,
        tipoContrato: 'Temporal',
        cargo: 'Asesor de Servicio',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001020',
    nombre: 'Andrés Gil',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-03-01',
        fechaRetiro: '2024-03-15',
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2400000,
        tipoContrato: 'Fijo',
        cargo: 'Operario de Calidad',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001021',
    nombre: 'Elena Mendoza',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-15',
        fechaRetiro: null,
        centroCosto: 'CC002B', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3400000,
        tipoContrato: 'Indefinido',
        cargo: 'Content Manager',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001022',
    nombre: 'Juan David Castro',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-02-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2900000,
        tipoContrato: 'Indefinido',
        cargo: 'Gerente de Ventas',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001023',
    nombre: 'Laura Benítez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-05',
        fechaRetiro: null,
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 3700000,
        tipoContrato: 'Indefinido',
        cargo: 'Especialista en Selección',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001024',
    nombre: 'Carlos Giraldo',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-07-01',
        fechaRetiro: '2024-04-30',
        centroCosto: 'CC004A', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 4000000,
        tipoContrato: 'Indefinido',
        cargo: 'Administrador de Redes',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001025',
    nombre: 'María Fernanda Restrepo',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-09-01',
        fechaRetiro: null,
        centroCosto: 'CC005', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2550000,
        tipoContrato: 'Indefinido',
        cargo: 'Secretaria Ejecutiva',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001026',
    nombre: 'David Vélez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-03-10',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2450000,
        tipoContrato: 'Fijo',
        cargo: 'Técnico de Mantenimiento',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001027',
    nombre: 'Sara Quintero',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-06-15',
        fechaRetiro: null,
        centroCosto: 'CC010', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3100000,
        tipoContrato: 'Indefinido',
        cargo: 'Asesor Comercial',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001028',
    nombre: 'Kevin Guzmán',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-02-20',
        fechaRetiro: null,
        centroCosto: 'CC008A', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 4300000,
        tipoContrato: 'Indefinido',
        cargo: 'Auditor Interno',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001029',
    nombre: 'Jimena Castro',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2021-11-01',
        fechaRetiro: '2024-05-31',
        centroCosto: 'CC009', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3000000,
        tipoContrato: 'Indefinido',
        cargo: 'Diseñador UX/UI',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001030',
    nombre: 'José Londoño',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-05-01',
        fechaRetiro: null,
        centroCosto: 'CC014', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 3200000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Logística',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001031',
    nombre: 'Lorena Ospina',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-15',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2650000,
        tipoContrato: 'Fijo',
        cargo: 'Asesor de Televentas',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001032',
    nombre: 'Miguel Ángel Duque',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-07-25',
        fechaRetiro: null,
        centroCosto: 'CC002B', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3350000,
        tipoContrato: 'Indefinido',
        cargo: 'Community Manager',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001033',
    nombre: 'Carolina Salazar',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-04-05',
        fechaRetiro: null,
        centroCosto: 'CC004B', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 5000000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Desarrollo',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001034',
    nombre: 'Ricardo Montoya',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-05-01',
        fechaRetiro: '2024-06-01',
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 2600000,
        tipoContrato: 'Temporal',
        cargo: 'Auxiliar de Bodega',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001035',
    nombre: 'Sofía Velásquez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-11-10',
        fechaRetiro: null,
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3900000,
        tipoContrato: 'Indefinido',
        cargo: 'Coordinador de Bienestar',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001036',
    nombre: 'Diego Guzmán',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-20',
        fechaRetiro: null,
        centroCosto: 'CC008B', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4600000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Contabilidad',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001037',
    nombre: 'Valeria Acosta',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-08-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2850000,
        tipoContrato: 'Indefinido',
        cargo: 'Ejecutivo de Cuenta',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001038',
    nombre: 'Santiago Gómez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-03-01',
        fechaRetiro: null,
        centroCosto: 'CC002A', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 3600000,
        tipoContrato: 'Indefinido',
        cargo: 'Gerente de Producto',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001039',
    nombre: 'Laura Sierra',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-09-15',
        fechaRetiro: '2024-02-29',
        centroCosto: 'CC005', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2700000,
        tipoContrato: 'Fijo',
        cargo: 'Recepcionista',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001040',
    nombre: 'Andrés Castro',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-04-10',
        fechaRetiro: null,
        centroCosto: 'CC004A', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4700000,
        tipoContrato: 'Indefinido',
        cargo: 'Especialista en Ciberseguridad',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001041',
    nombre: 'Isabella Cárdenas',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-20',
        fechaRetiro: null,
        centroCosto: 'CC010', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3050000,
        tipoContrato: 'Indefinido',
        cargo: 'Vendedor Externo',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001042',
    nombre: 'Felipe Ortiz',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-01-01',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2350000,
        tipoContrato: 'Temporal',
        cargo: 'Operario de Empaque',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001043',
    nombre: 'Camila Ríos',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-02-05',
        fechaRetiro: null,
        centroCosto: 'CC011', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 5200000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe Jurídico',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001044',
    nombre: 'Daniela Marín',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-08-01',
        fechaRetiro: '2024-03-31',
        centroCosto: 'CC002B', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 3400000,
        tipoContrato: 'Indefinido',
        cargo: 'Asistente de Marketing Digital',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001045',
    nombre: 'Sebastián Herrera',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-09-25',
        fechaRetiro: null,
        centroCosto: 'CC012', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3700000,
        tipoContrato: 'Indefinido',
        cargo: 'Auditor Externo',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001046',
    nombre: 'María Camila Rojas',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-04-15',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2950000,
        tipoContrato: 'Indefinido',
        cargo: 'Asesor Comercial B2B',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001047',
    nombre: 'Esteban Valencia',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-03-01',
        fechaRetiro: null,
        centroCosto: 'CC004A', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4900000,
        tipoContrato: 'Indefinido',
        cargo: 'Arquitecto de Software',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001048',
    nombre: 'Valentina Pardo',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-01',
        fechaRetiro: null,
        centroCosto: 'CC013', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 2300000,
        tipoContrato: 'Temporal',
        cargo: 'Agente Call Center',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001049',
    nombre: 'Nicolás Pérez',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-04-01',
        fechaRetiro: '2024-05-15',
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2500000,
        tipoContrato: 'Fijo',
        cargo: 'Operario de Ensamble',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001050',
    nombre: 'Juliana Vargas',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-10-05',
        fechaRetiro: null,
        centroCosto: 'CC002A', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3500000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Datos Marketing',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001051',
    nombre: 'Juan Pablo Morales',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-02-10',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 3000000,
        tipoContrato: 'Indefinido',
        cargo: 'Vendedor Junior',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001052',
    nombre: 'Gabriela Restrepo',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-05-15',
        fechaRetiro: null,
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 4000000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Talento Humano',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001053',
    nombre: 'Manuel Soto',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-06-01',
        fechaRetiro: '2024-04-30',
        centroCosto: 'CC004B', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 4100000,
        tipoContrato: 'Indefinido',
        cargo: 'Especialista DevOps',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001054',
    nombre: 'Catalina Suárez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-03-20',
        fechaRetiro: null,
        centroCosto: 'CC005', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2600000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Compras',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001055',
    nombre: 'Alejandro Quintero',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-07-01',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2500000,
        tipoContrato: 'Fijo',
        cargo: 'Jefe de Producción',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001056',
    nombre: 'Daniela Giraldo',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-10',
        fechaRetiro: null,
        centroCosto: 'CC010', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3200000,
        tipoContrato: 'Indefinido',
        cargo: 'Coordinador Comercial',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001057',
    nombre: 'Cristian Díaz',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-09-01',
        fechaRetiro: null,
        centroCosto: 'CC008A', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 4400000,
        tipoContrato: 'Indefinido',
        cargo: 'Tesorero',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001058',
    nombre: 'Mariana Acosta',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2021-10-01',
        fechaRetiro: '2024-06-01',
        centroCosto: 'CC014', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3300000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Procesos',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001059',
    nombre: 'Felipe Romero',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2700000,
        tipoContrato: 'Indefinido',
        cargo: 'Asesor de Negocios',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001060',
    nombre: 'Andrea Ortiz',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-02-15',
        fechaRetiro: null,
        centroCosto: 'CC002B', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3600000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Campañas',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001061',
    nombre: 'Javier Duque',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-04-20',
        fechaRetiro: null,
        centroCosto: 'CC004A', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 5100000,
        tipoContrato: 'Indefinido',
        cargo: 'Gerente de Proyectos IT',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001062',
    nombre: 'Laura Benavides',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-03-10',
        fechaRetiro: '2024-02-28',
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3800000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Capacitación',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001063',
    nombre: 'Diego López',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-11-20',
        fechaRetiro: null,
        centroCosto: 'CC012', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 3900000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Cartera',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001064',
    nombre: 'María José Patiño',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-05',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2800000,
        tipoContrato: 'Indefinido',
        cargo: 'Ejecutivo de Cuenta Junior',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001065',
    nombre: 'Sebastián Salazar',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-04-01',
        fechaRetiro: null,
        centroCosto: 'CC004B', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 5000000,
        tipoContrato: 'Indefinido',
        cargo: 'Ingeniero de Datos',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001066',
    nombre: 'Valentina Duque',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-10',
        fechaRetiro: null,
        centroCosto: 'CC013', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2400000,
        tipoContrato: 'Temporal',
        cargo: 'Coordinador de Servicio',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001067',
    nombre: 'Carlos Mejía',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-07-01',
        fechaRetiro: '2024-03-31',
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2600000,
        tipoContrato: 'Fijo',
        cargo: 'Operario de Logística',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001068',
    nombre: 'Silvana Vélez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-10-15',
        fechaRetiro: null,
        centroCosto: 'CC002A', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3700000,
        tipoContrato: 'Indefinido',
        cargo: 'Especialista en SEM',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001069',
    nombre: 'Juan Esteban Ríos',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-02-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 3100000,
        tipoContrato: 'Indefinido',
        cargo: 'Gerente Comercial',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001070',
    nombre: 'Daniela Cardona',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-06-01',
        fechaRetiro: null,
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 4100000,
        tipoContrato: 'Indefinido',
        cargo: 'Especialista en Compensación',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001071',
    nombre: 'Andrés Valencia',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-08-15',
        fechaRetiro: '2024-04-30',
        centroCosto: 'CC004A', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4200000,
        tipoContrato: 'Indefinido',
        cargo: 'Soporte Técnico',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001072',
    nombre: 'Juliana Cifuentes',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-03-05',
        fechaRetiro: null,
        centroCosto: 'CC005', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2700000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Procesos Administrativos',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001073',
    nombre: 'Felipe Guzmán',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-01-15',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 2450000,
        tipoContrato: 'Temporal',
        cargo: 'Operario de Calidad',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001074',
    nombre: 'Carolina Rojas',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-25',
        fechaRetiro: null,
        centroCosto: 'CC010', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3300000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Zona',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001075',
    nombre: 'Sebastián Patiño',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-09-10',
        fechaRetiro: null,
        centroCosto: 'CC008B', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4500000,
        tipoContrato: 'Indefinido',
        cargo: 'Contador de Costos',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001076',
    nombre: 'María Camila Gómez',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-02-01',
        fechaRetiro: '2024-01-31',
        centroCosto: 'CC009', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3100000,
        tipoContrato: 'Indefinido',
        cargo: 'Diseñador de Interiores',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001077',
    nombre: 'Diego Marín',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-20',
        fechaRetiro: null,
        centroCosto: 'CC014', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 3400000,
        tipoContrato: 'Indefinido',
        cargo: 'Coordinador de Almacén',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001078',
    nombre: 'Valentina Soto',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-07-05',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2900000,
        tipoContrato: 'Indefinido',
        cargo: 'Especialista de Producto',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001079',
    nombre: 'Miguel Ángel Quintero',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-04-01',
        fechaRetiro: null,
        centroCosto: 'CC002B', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 3800000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Marketing Digital',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001080',
    nombre: 'Carolina Londoño',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-05-15',
        fechaRetiro: '2024-05-31',
        centroCosto: 'CC004B', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3900000,
        tipoContrato: 'Indefinido',
        cargo: 'Administrador de Bases de Datos',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001081',
    nombre: 'Juan Manuel Giraldo',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-11-01',
        fechaRetiro: null,
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 4200000,
        tipoContrato: 'Indefinido',
        cargo: 'Gerente de RRHH',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001082',
    nombre: 'María Camila Restrepo',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-15',
        fechaRetiro: null,
        centroCosto: 'CC005', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2800000,
        tipoContrato: 'Indefinido',
        cargo: 'Asistente de Gerencia',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001083',
    nombre: 'Alejandra Pérez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-08-20',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2650000,
        tipoContrato: 'Fijo',
        cargo: 'Supervisor de Calidad',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001084',
    nombre: 'Diego Sierra',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-09-01',
        fechaRetiro: '2024-02-29',
        centroCosto: 'CC010', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3000000,
        tipoContrato: 'Indefinido',
        cargo: 'Coordinador de Ventas',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001085',
    nombre: 'Laura Bedoya',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-03-10',
        fechaRetiro: null,
        centroCosto: 'CC008A', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 4600000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Inversiones',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001086',
    nombre: 'Santiago Ríos',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-04-05',
        fechaRetiro: null,
        centroCosto: 'CC011', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 5300000,
        tipoContrato: 'Indefinido',
        cargo: 'Asesor Jurídico',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001087',
    nombre: 'Valentina Hernández',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-01',
        fechaRetiro: null,
        centroCosto: 'CC002A', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3900000,
        tipoContrato: 'Indefinido',
        cargo: 'Estratega Digital',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001088',
    nombre: 'Andrés García',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-01-01',
        fechaRetiro: '2024-01-31',
        centroCosto: 'CC012', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 3500000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Nómina',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001089',
    nombre: 'Sofía Quintero',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-10-20',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 3000000,
        tipoContrato: 'Indefinido',
        cargo: 'Ejecutivo de Ventas Senior',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001090',
    nombre: 'Juan Felipe Vélez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-02-15',
        fechaRetiro: null,
        centroCosto: 'CC004B', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 5200000,
        tipoContrato: 'Indefinido',
        cargo: 'Líder Técnico',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001091',
    nombre: 'María Paula López',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-06-10',
        fechaRetiro: null,
        centroCosto: 'CC013', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 2500000,
        tipoContrato: 'Temporal',
        cargo: 'Soporte al Cliente',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001092',
    nombre: 'José Miguel Ospina',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-03-01',
        fechaRetiro: '2024-04-15',
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 2700000,
        tipoContrato: 'Fijo',
        cargo: 'Coordinador de Bodega',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001093',
    nombre: 'Laura Martínez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-05-05',
        fechaRetiro: null,
        centroCosto: 'CC002B', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 3600000,
        tipoContrato: 'Indefinido',
        cargo: 'Diseñador Web',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001094',
    nombre: 'David Rodríguez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-02-01',
        fechaRetiro: null,
        centroCosto: 'CC001', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 3200000,
        tipoContrato: 'Indefinido',
        cargo: 'Director Comercial',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001095',
    nombre: 'Ana María Vargas',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-01-25',
        fechaRetiro: null,
        centroCosto: 'CC007', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 4000000,
        tipoContrato: 'Indefinido',
        cargo: 'Coordinador de Capacitación',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001096',
    nombre: 'Carlos Bedoya',
    historial: [
      {
        estado: 'Retirado',
        fechaCargue: '2022-07-15',
        fechaRetiro: '2024-04-30',
        centroCosto: 'CC004A', // Centro de costo alfanumérico
        eps: 'Sanitas',
        salario: 4500000,
        tipoContrato: 'Indefinido',
        cargo: 'Especialista en Cloud Computing',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001097',
    nombre: 'Isabella Gómez',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-09-01',
        fechaRetiro: null,
        centroCosto: 'CC005', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 2900000,
        tipoContrato: 'Indefinido',
        cargo: 'Analista de Presupuesto',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001098',
    nombre: 'Juan Pablo Estrada',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-03-15',
        fechaRetiro: null,
        centroCosto: 'CC006', // Centro de costo alfanumérico
        eps: 'Nueva EPS',
        salario: 2550000,
        tipoContrato: 'Fijo',
        cargo: 'Técnico de Procesos',
        nit: '900987654-2'
      }
    ]
  },
  {
    cedula: '1001001099',
    nombre: 'Valeria González',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2023-06-15',
        fechaRetiro: null,
        centroCosto: 'CC010', // Centro de costo alfanumérico
        eps: 'Compensar',
        salario: 3400000,
        tipoContrato: 'Indefinido',
        cargo: 'Gerente de Cuentas Clave',
        nit: '800123456-1'
      }
    ]
  },
  {
    cedula: '1001001100',
    nombre: 'Daniel Alzate',
    historial: [
      {
        estado: 'Activo',
        fechaCargue: '2024-04-01',
        fechaRetiro: null,
        centroCosto: 'CC008A', // Centro de costo alfanumérico
        eps: 'SURA',
        salario: 4700000,
        tipoContrato: 'Indefinido',
        cargo: 'Jefe de Tesorería',
        nit: '800123456-1'
      }
    ]
  }
];