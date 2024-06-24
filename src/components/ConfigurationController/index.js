import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controls-container">
          <div className="responsive-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-container">
              <input
                checked={showContent}
                onChange={onChangeContent}
                type="checkbox"
                id="content"
              />
              <label htmlFor="content" className="label-text">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
                type="checkbox"
                id="leftNavbar"
              />
              <label htmlFor="leftNavbar" className="label-text">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
                type="checkbox"
                id="rightNavbar"
              />
              <label htmlFor="rightNavbar" className="label-text">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
