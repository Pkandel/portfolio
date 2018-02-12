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
    // padding: 0 24px;
    padding-left: 20px;
    cursor: pointer;
    transition: color .3s;
    float: left;

  }
  :global(.anticon-menu-fold) {
      line-height: 0px !important;
      padding-top: 25px !important;
  }
  :global( .anticon-menu-unfold) {
    line-height: 0px !important;
    padding-top: 25px !important;
  }
  :global(.trigger:hover) {
    color: #1890ff;
  }
  :global(ant-layout-sider.ant-layout-sider-collapsed){
      minWidth: 0;
      width: 0;
      maxWidth: 0;
      flex: 0;
  }
  :global(.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected){
      border-right: 5px solid white;
      transition: 0.4s;
  }
}`;
