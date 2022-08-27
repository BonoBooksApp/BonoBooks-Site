import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = (props) => {
    return(
        <SidebarContainer onClick={props.toggle} isOpen={props.isOpen}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="products">
                        Product
                    </SidebarLink>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="help">
                        Help
                    </SidebarLink>
                </SidebarMenu>

                {/* <SideBtnWrap>
                    <SidebarRoute to="/">Download</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar