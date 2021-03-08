import React from 'react'
import {ProSidebar, SidebarContent, SidebarHeader, SidebarFooter} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'

export default function sidebar() {
    return (
        <ProSidebar>
        <SidebarHeader>
            Plannet
        </SidebarHeader>
        <SidebarContent>
            Cospi
        </SidebarContent>
        <SidebarFooter>
            Cv. Plannet Intelligent
        </SidebarFooter>
        </ProSidebar>
    );
}
