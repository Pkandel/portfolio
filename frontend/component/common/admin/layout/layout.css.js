import css from 'styled-jsx/css'

export default css`
.logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
  :global(.ant-layout){
      height:100vh;
  }
  :global(.ant-layout-header){
      text-align: center;
  }
 :global( .trigger ){
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
    float: left;

  }
  :global(.trigger:hover) {
    color: #1890ff;
  }
  :global(.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected){
      border-right: 5px solid white;
      transition: 0.4s;
  }
}`;
