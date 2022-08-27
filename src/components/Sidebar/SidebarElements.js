import {FaTimes} from 'react-icons/fa';
import "./Sidebar.scss";
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroller} from 'react-scroll';

export const SidebarContainer = (props) => {
    return <aside onClick={props.onClick} className="container" style={{opacity:props.isOpen ? '100%' : '0', top:props.isOpen ? '0' : '-100%'}}>{props.children}</aside>
}

export const CloseIcon = () => {
    return <FaTimes/>
}


export const Icon = (props) => {
    return <div className="icon" onClick={props.onClick}>{props.children}</div>
}

export const SidebarWrapper = (props) => {
    return <div className="sidebar-wrapper">{props.children}</div>
}

export const SidebarMenu = (props) => {
    return <ul className="sidebar-menu">{props.children}</ul>
}

export const SidebarLink = (props) => {
    return <LinkScroller className="sidebar-link">{props.children}</LinkScroller>
}

// export const SideBtnWrap = styled.div`
//     display: flex;
//     justify-content: center;
// `;

// export const SidebarRoute = styled(LinkRouter)`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 16px 64px;
//     color: #10606;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606;
//     }
// `;