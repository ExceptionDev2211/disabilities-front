/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Gestión de incapacidades',
            items: [
            { label: 'Radicar incapacidad', icon: 'pi pi-file-edit', to: '/filing' },
            { label: 'Gestión de incapacidades', icon: 'pi pi-id-card', to: '/managementFiling' }
            ]
        },
        {
            label: 'Gestión de nómina',
            items: [{ label: 'Cargar nómina', icon: 'pi pi-file-import', to: '/loadPayroll' },
            { label: 'Consulta de nómina', icon: 'pi pi-search', to: '/payrolls' },
            ]
        },
        {
            label: 'Control operativo',
            items: [{ label: 'Crear reporte', icon: 'pi pi-chart-bar', to: '/reports' },
                { label: 'Gestión de personal', icon: 'pi pi-users', to: '/employeesInfo' }
                
            ]
        },

    ];


    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
