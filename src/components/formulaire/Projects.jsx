
function Projects() {
  return <>
    <div className="cv-form-blk">
        <div className = "cv-form-row-title">
            <h3>projects</h3>
        </div>

        <div className = "row-separator repeater">
            <div className = "repeater" data-repeater-list = "group-d">
                <div data-repeater-item>
                    <div className = "cv-form-row cv-form-row-experience">
                        <div className = "cols-3">
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Project Name</label>
                                <input name = "proj_title" type = "text" className = "form-control proj_title" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Project link</label>
                                <input name = "proj_link" type = "text" className = "form-control proj_link" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Description</label>
                                <input name = "proj_description" type = "text" className = "form-control proj_description" id = "" />
                                <span className="form-text"></span>
                            </div>
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

export default Projects