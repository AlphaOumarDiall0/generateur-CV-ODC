
function Skills() {
  return <>
    <div className="cv-form-blk">
      <div className = "cv-form-row-title">
          <h3>skills</h3>
      </div>

      <div className = "row-separator repeater">
          <div className = "repeater" data-repeater-list = "group-e">
              <div data-repeater-item>
                  <div className = "cv-form-row cv-form-row-skills">
                      <div className = "form-elem">
                          <label htmlFor = "" className = "form-label">Skill</label>
                          <input name = "skill" type = "text" className = "form-control skill" id = ""  />
                          <span className="form-text"></span>
                      </div>
                      
                      <button data-repeater-delete type = "button" className = "repeater-remove-btn">-</button>
                  </div>
              </div>
          </div>
          <button type = "button" data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
      </div>
  </div>
  </>
}

export default Skills